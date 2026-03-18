import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import athleteRoutes from './routes/athleteRoutes';
import trainingRoutes from './routes/trainingRoutes';
import performanceRoutes from './routes/performanceRoutes';
import injuryRoutes from './routes/injuryRoutes';
import teamRoutes from './routes/teamRoutes';
import scheduleRoutes from './routes/scheduleRoutes';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/athletes', athleteRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/injuries', injuryRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/schedules', scheduleRoutes);

app.use(errorHandler);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AthleteOps API is running' });
});

app.listen(port, () => {
  console.log(`AthleteOps server running on port ${port}`);
});
