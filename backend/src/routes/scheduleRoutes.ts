import { Router } from 'express';
import pool from '../config/db';
import { protect, requireRole } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', protect, async (req, res) => {
  try {
    const [rows]: any = await pool.query('SELECT * FROM schedules ORDER BY event_date ASC');
    res.json({ success: true, data: rows });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

router.post('/', protect, requireRole('admin', 'coach'), async (req, res) => {
  try {
    const { event_type, athlete_id, team_id, event_date, location, coach_id, description } = req.body;
    const [result]: any = await pool.query(
      'INSERT INTO schedules (event_type, athlete_id, team_id, event_date, location, coach_id, description) VALUES (?,?,?,?,?,?,?)',
      [event_type, athlete_id, team_id, event_date, location, coach_id, description]
    );
    res.status(201).json({ success: true, data: { id: result.insertId } });
  } catch (e) { console.error(e); res.status(500).json({ success: false, message: 'Server error' }); }
});

router.delete('/:id', protect, requireRole('admin', 'coach'), async (req, res) => {
  try {
    await pool.query('DELETE FROM schedules WHERE id = ?', [req.params.id]);
    res.json({ success: true, message: 'Deleted' });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

export default router;
