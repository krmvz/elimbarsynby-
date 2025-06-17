import mongoose, { Schema, Document } from 'mongoose';

export interface IDonation extends Document {
  donor: string;
  amount: number;
  message?: string;
  email: string;
  date: Date;
}

const DonationSchema: Schema = new Schema({
  donor: { type: String, required: true },
  amount: { type: Number, required: true },
  message: { type: String },
  email: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model<IDonation>('Donation', DonationSchema);