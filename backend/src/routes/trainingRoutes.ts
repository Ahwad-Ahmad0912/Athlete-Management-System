import { Router } from 'express';
import pool from '../config/db';
import { protect, requireRole } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', protect, async (req, res) => {
  try {
    const [rows]: any = await pool.query('SELECT * FROM training_programs ORDER BY date_assigned DESC');
    res.json({ success: true, data: rows });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

router.post('/', protect, requireRole('admin', 'coach'), async (req, res) => {
  try {
    const { athlete_id, workout_name, workout_type, duration_min, intensity, coach_notes, date_assigned } = req.body;
    const [result]: any = await pool.query(
      'INSERT INTO training_programs (athlete_id, workout_name, workout_type, duration_min, intensity, coach_notes, date_assigned) VALUES (?,?,?,?,?,?,?)',
      [athlete_id, workout_name, workout_type, duration_min, intensity, coach_notes, date_assigned]
    );
    res.status(201).json({ success: true, data: { id: result.insertId } });
  } catch (e) { console.error(e); res.status(500).json({ success: false, message: 'Server error' }); }
});

router.put('/:id', protect, requireRole('admin', 'coach'), async (req, res) => {
  try {
    const { status } = req.body;
    await pool.query('UPDATE training_programs SET status = ? WHERE id = ?', [status, req.params.id]);
    res.json({ success: true, message: 'Updated' });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

router.delete('/:id', protect, requireRole('admin', 'coach'), async (req, res) => {
  try {
    await pool.query('DELETE FROM training_programs WHERE id = ?', [req.params.id]);
    res.json({ success: true, message: 'Deleted' });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

export default router;
