import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import donationRoutes from './routes/donations';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/elim-charity';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/donations', donationRoutes);

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Elim Barsynby Charity Fund API' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});