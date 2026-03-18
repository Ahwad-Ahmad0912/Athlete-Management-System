import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/db';

const generateToken = (id: number, role: string) =>
  jwt.sign({ id, role }, process.env.JWT_SECRET || 'secret', { expiresIn: '30d' });

export const register = async (req: Request, res: Response) => {
  const { first_name, last_name, email, password, role } = req.body;
  try {
    const [existing]: any = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length) return res.status(400).json({ success: false, message: 'User exists' });

    const hash = await bcrypt.hash(password, 10);
    const userRole = ['admin', 'coach', 'athlete'].includes(role) ? role : 'athlete';
    const [result]: any = await pool.query(
      'INSERT INTO users (first_name, last_name, email, password_hash, role) VALUES (?,?,?,?,?)',
      [first_name, last_name, email, hash, userRole]
    );

    res.status(201).json({ success: true, data: { id: result.insertId, first_name, last_name, email, role: userRole, token: generateToken(result.insertId, userRole) } });
  } catch (e) { console.error(e); res.status(500).json({ success: false, message: 'Server error' }); }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const [users]: any = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (!users.length) return res.status(401).json({ success: false, message: 'Invalid credentials' });

    const user = users[0];
    if (!(await bcrypt.compare(password, user.password_hash)))
      return res.status(401).json({ success: false, message: 'Invalid credentials' });

    res.json({ success: true, data: { id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email, role: user.role, token: generateToken(user.id, user.role) } });
  } catch (e) { console.error(e); res.status(500).json({ success: false, message: 'Server error' }); }
};

export const getProfile = async (req: any, res: Response) => {
  try {
    const [users]: any = await pool.query('SELECT id, first_name, last_name, email, role, created_at FROM users WHERE id = ?', [req.user.id]);
    if (!users.length) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: users[0] });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
};
