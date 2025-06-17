import express, { Request, Response } from 'express';
import Donation, { IDonation } from '../models/Donation';

const router = express.Router();

// Get all donations
router.get('/', async (req: Request, res: Response) => {
  try {
    const donations = await Donation.find().sort({ date: -1 });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching donations' });
  }
});

// Create new donation
router.post('/', async (req: Request, res: Response) => {
  try {
    const newDonation = new Donation(req.body);
    const savedDonation = await newDonation.save();
    res.status(201).json(savedDonation);
  } catch (error) {
    res.status(400).json({ message: 'Error creating donation' });
  }
});

// Get total donations
router.get('/total', async (req: Request, res: Response) => {
  try {
    const total = await Donation.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: '$amount' }
        }
      }
    ]);
    res.json({ total: total[0]?.total || 0 });
  } catch (error) {
    res.status(500).json({ message: 'Error calculating total donations' });
  }
});

export default router;