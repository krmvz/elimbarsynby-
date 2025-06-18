import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './components/styles.css';

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
      if (!response.ok) {
        throw new Error('Failed to fetch donations');
      }
      const data = await response.json();
      setDonations(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching donations:', error);
      setDonations([]);
    }
  };

  const fetchTotalDonations = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/donations/total');
      if (!response.ok) {
        throw new Error('Failed to fetch total donations');
      }
      const data = await response.json();
      setTotalDonations(data.total || 0);
    } catch (error) {
      console.error('Error fetching total donations:', error);
      setTotalDonations(0);
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
      if (!response.ok) {
        throw new Error('Failed to submit donation');
      }
      setFormData({ donor: '', amount: '', message: '', email: '' });
      fetchDonations();
      fetchTotalDonations();
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
      <Header />
      
      <main>
        <Home />
        <About />
        
        <section className="donation-section" id="donate">
          <div className="content">
            <div className="donation-stats">
              <div className="stat-card">
                <h2>Жалпы кайрымдуулук</h2>
                <p className="amount">${totalDonations.toLocaleString()}</p>
              </div>
            </div>

            <div className="donation-form">
              <h2>Кайрымдуулук кылуу</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="donor"
                value={formData.donor}
                onChange={handleChange}
                placeholder="Сиздин атыңыз"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Электрондук почтаңыз"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Кайрымдуулук суммасы ($)"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Кааласаңыз билдирүү калтырыңыз"
              />
            </div>
            <button type="submit" className="donate-button">Кайрымдуулук кылуу</button>
          </form>
        </section>

        <section className="recent-donations">
          <h2>Акыркы кайрымдуулуктар</h2>
          <div className="donations-list">
            {donations && donations.length > 0 ? (
              donations.map((donation) => (
                <div key={donation._id} className="donation-card">
                  <h3>{donation.donor}</h3>
                  <p className="amount">${donation.amount}</p>
                  {donation.message && <p className="message">"{donation.message}"</p>}
                  <p className="date">{new Date(donation.date).toLocaleDateString()}</p>
                </div>
              ))
            ) : (
              <p>Азырынча кайрымдуулук жок. Биринчи болуп кайрымдуулук кылыңыз!</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
