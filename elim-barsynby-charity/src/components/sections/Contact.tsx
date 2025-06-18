import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="content">
        <h2>Байланыш</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Биздин даректер</h3>
            <div className="info-item">
              <i className="icon-location"></i>
              <p>123 Charity Lane, City, State 12345</p>
            </div>
            <div className="info-item">
              <i className="icon-phone"></i>
              <p>(555) 123-4567</p>
            </div>
            <div className="info-item">
              <i className="icon-email"></i>
              <p>info@elimbarsynby.org</p>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Бизге кат жазыңыз</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
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
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Билдирүүңүз"
                  required
                />
              </div>
              <button type="submit" className="submit-button">Жөнөтүү</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;