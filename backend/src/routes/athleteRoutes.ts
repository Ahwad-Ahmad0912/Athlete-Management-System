import { Router } from 'express';
import pool from '../config/db';
import { protect, requireRole, AuthRequest } from '../middlewares/authMiddleware';
import { Response } from 'express';

const router = Router();

router.get('/', protect, async (req, res) => {
  try {
    const [rows]: any = await pool.query('SELECT a.*, u.first_name, u.last_name, u.email FROM athletes a JOIN users u ON a.user_id = u.id');
    res.json({ success: true, data: rows });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

router.get('/:id', protect, async (req, res) => {
  try {
    const [rows]: any = await pool.query('SELECT a.*, u.first_name, u.last_name, u.email FROM athletes a JOIN users u ON a.user_id = u.id WHERE a.id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: rows[0] });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

router.post('/', protect, requireRole('admin', 'coach'), async (req, res) => {
  try {
    const { user_id, age, gender, sport, team_id, height_cm, weight_kg, position, coach_id } = req.body;
    const [result]: any = await pool.query(
      'INSERT INTO athletes (user_id, age, gender, sport, team_id, height_cm, weight_kg, position, coach_id) VALUES (?,?,?,?,?,?,?,?,?)',
      [user_id, age, gender, sport, team_id, height_cm, weight_kg, position, coach_id]
    );
    res.status(201).json({ success: true, data: { id: result.insertId } });
  } catch (e) { console.error(e); res.status(500).json({ success: false, message: 'Server error' }); }
});

router.delete('/:id', protect, requireRole('admin'), async (req, res) => {
  try {
    const [result]: any = await pool.query('DELETE FROM athletes WHERE id = ?', [req.params.id]);
    if (!result.affectedRows) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, message: 'Deleted' });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

export default router;
