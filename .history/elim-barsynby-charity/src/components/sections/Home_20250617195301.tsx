import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="home-section">
      <div className="content">
        <h1>Элим барсыңбы кайрымдуулук фонду</h1>
        <p>Биз менен бирге жакшылык жасайлы</p>
        <div className="cta-buttons">
          <a href="#donate" className="primary-button">Кайрымдуулук кылуу</a>
          <a href="#about" className="secondary-button">Көбүрөөк билүү</a>
        </div>
      </div>
    </section>
  );
};

export default Home;