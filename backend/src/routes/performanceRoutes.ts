import { Router } from 'express';
import pool from '../config/db';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.get('/:athleteId', protect, async (req, res) => {
  try {
    const [rows]: any = await pool.query('SELECT * FROM performance_metrics WHERE athlete_id = ? ORDER BY metric_date DESC', [req.params.athleteId]);
    res.json({ success: true, data: rows });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

router.post('/', protect, async (req, res) => {
  try {
    const { athlete_id, metric_date, speed_score, strength_score, endurance_score, recovery_score, training_load, notes } = req.body;
    const [result]: any = await pool.query(
      'INSERT INTO performance_metrics (athlete_id, metric_date, speed_score, strength_score, endurance_score, recovery_score, training_load, notes) VALUES (?,?,?,?,?,?,?,?)',
      [athlete_id, metric_date, speed_score, strength_score, endurance_score, recovery_score, training_load, notes]
    );
    res.status(201).json({ success: true, data: { id: result.insertId } });
  } catch (e) { console.error(e); res.status(500).json({ success: false, message: 'Server error' }); }
});

export default router;
