import { Router } from 'express';
import pool from '../config/db';
import { protect, requireRole } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', protect, async (req, res) => {
  try {
    const [rows]: any = await pool.query('SELECT i.*, u.first_name, u.last_name FROM injuries i JOIN athletes a ON i.athlete_id = a.id JOIN users u ON a.user_id = u.id ORDER BY i.date_reported DESC');
    res.json({ success: true, data: rows });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

router.post('/', protect, async (req, res) => {
  try {
    const { athlete_id, injury_type, severity, date_reported, recovery_plan, doctor_notes, expected_return } = req.body;
    const [result]: any = await pool.query(
      'INSERT INTO injuries (athlete_id, injury_type, severity, date_reported, recovery_plan, doctor_notes, expected_return) VALUES (?,?,?,?,?,?,?)',
      [athlete_id, injury_type, severity, date_reported, recovery_plan, doctor_notes, expected_return]
    );
    res.status(201).json({ success: true, data: { id: result.insertId } });
  } catch (e) { console.error(e); res.status(500).json({ success: false, message: 'Server error' }); }
});

router.put('/:id', protect, requireRole('admin', 'coach'), async (req, res) => {
  try {
    const { status, recovery_plan, doctor_notes } = req.body;
    await pool.query('UPDATE injuries SET status = COALESCE(?, status), recovery_plan = COALESCE(?, recovery_plan), doctor_notes = COALESCE(?, doctor_notes) WHERE id = ?',
      [status, recovery_plan, doctor_notes, req.params.id]);
    res.json({ success: true, message: 'Updated' });
  } catch { res.status(500).json({ success: false, message: 'Server error' }); }
});

export default router;
