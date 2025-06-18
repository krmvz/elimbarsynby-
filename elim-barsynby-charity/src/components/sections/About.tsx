import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="content">
        <h2>Биз жөнүндө</h2>
        <div className="about-content">
          <div className="mission">
            <h3>Биздин миссия</h3>
            <p>Элим барсыңбы кайрымдуулук фонду - бул кыргыз элине жардам берүү максатында түзүлгөн уюм. Биз муктаж болгон үй-бүлөлөргө, жетим балдарга жана карыларга жардам беребиз.</p>
          </div>
          <div className="values">
            <h3>Биздин баалуулуктар</h3>
            <ul>
              <li>Ачык-айкындык</li>
              <li>Жоопкерчилик</li>
              <li>Боорукердик</li>
              <li>Биримдик</li>
            </ul>
          </div>
          <div className="impact">
            <h3>Биздин таасир</h3>
            <p>Биз ар бир кайрымдуулукту максаттуу колдонуп, коомго оң таасир тийгизүүгө аракет кылабыз. Сиздин колдооңуз менен биз көптөгөн үй-бүлөлөргө жардам бере алабыз.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;