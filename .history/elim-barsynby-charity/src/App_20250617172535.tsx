import React, { useState, useEffect } from 'react';
import './App.css';

interface Donation {
  _id: string;
  donor: string;
  amount: number;
  message?: string;
  date: string;
}

function App() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [totalDonations, setTotalDonations] = useState<number>(0);
  const [formData, setFormData] = useState({
    donor: '',
    amount: '',
    message: '',
    email: ''
  });

  useEffect(() => {
    fetchDonations();
    fetchTotalDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/donations');
      const data = await response.json();
      setDonations(data);
    } catch (error) {
      console.error('Error fetching donations:', error);
    }
  };

  const fetchTotalDonations = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/donations/total');
      const data = await response.json();
      setTotalDonations(data.total);
    } catch (error) {
      console.error('Error fetching total donations:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ donor: '', amount: '', message: '', email: '' });
        fetchDonations();
        fetchTotalDonations();
      }
    } catch (error) {
      console.error('Error submitting donation:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <header className="hero">
        <h1>Elim Barsynby Charity Fund</h1>
        <p>Making a difference in our community</p>
      </header>

      <section className="donation-stats">
        <div className="stat-card">
          <h2>Total Donations</h2>
          <p className="amount">${totalDonations.toLocaleString()}</p>
        </div>
      </section>

      <section className="donation-form">
        <h2>Make a Donation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="donor"
              value={formData.donor}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Donation Amount ($)"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a message (optional)"
            />
          </div>
          <button type="submit" className="donate-button">Donate Now</button>
        </form>
      </section>

      <section className="recent-donations">
        <h2>Recent Donations</h2>
        <div className="donations-list">
          {donations.map((donation) => (
            <div key={donation._id} className="donation-card">
              <h3>{donation.donor}</h3>
              <p className="amount">${donation.amount}</p>
              {donation.message && <p className="message">"{donation.message}"</p>}
              <p className="date">{new Date(donation.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
