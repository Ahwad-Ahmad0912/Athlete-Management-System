import { Router } from 'express';
import pool from '../config/db';
import { protect, requireRole } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', protect, async (req, res) => {
  try {
    const [rows]: any = await pool.query('SELECT t.*, u.first_name as coach_first, u.last_name as coach_last FROM teams t LEFT JOIN users u ON t.coach_id = u.id');
    res.json({ success: true, data: rows });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

router.post('/', protect, requireRole('admin'), async (req, res) => {
  try {
    const { team_name, sport_type, coach_id } = req.body;
    const [result]: any = await pool.query('INSERT INTO teams (team_name, sport_type, coach_id) VALUES (?,?,?)', [team_name, sport_type, coach_id]);
    res.status(201).json({ success: true, data: { id: result.insertId } });
  } catch (e) { console.error(e); res.status(500).json({ success: false, message: 'Server error' }); }
});

router.delete('/:id', protect, requireRole('admin'), async (req, res) => {
  try {
    await pool.query('DELETE FROM teams WHERE id = ?', [req.params.id]);
    res.json({ success: true, message: 'Deleted' });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

export default router;
