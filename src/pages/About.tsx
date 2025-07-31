import React from 'react';
import { Award, MapPin, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen main-container" style={{
      backgroundImage: 'url("/feathers-1.png")',
      backgroundSize: 'contain',
      backgroundPosition: 'left top',
      backgroundRepeat: 'repeat-y',
      backgroundAttachment: 'scroll',
      border: '3px solid var(--champagnegold)',
      borderRadius: '20px',
      overflow: 'hidden'
    }}>
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <div style={{
            background: 'rgba(255, 255, 255, 0.7)',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)'
          }}>
            <h1 className="text-6xl md:text-5xl mb-6">About Zora Salon</h1>
            <p className="text-xl mb-8 text-bottlegreen">
              Your one-stop destination for beauty, elegance, and personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="card" style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 248, 220, 0.7) 100%)',
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h2 className="text-3xl mb-6 text-center">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Zora Salon was co-founded by <strong>Navjot Dhaliwal</strong>, the creative force and visionary behind the brand, and <strong>Simran Dhillon</strong>, a skilled beauty expert with over five years of experience. What began as a shared dream has grown into a warm, elegant space where beauty meets intention — and every client feels seen, heard, and celebrated.
                </p>
                <p className="mb-4">
                  Backed by the leadership of Chairman <strong>Rajinder Dhaliwal</strong>, Chief Operating Officer <strong>Gursahib Dhillon</strong>, Director of Finance <strong>Harpal Dhaliwal</strong>, and Fashion Director <strong>Asim Sultan</strong>, Zora Salon is proudly family-led — a blend of artistry, excellence, and care.
                </p>
                <p>
                  We're not just about services — we're about experiences. From soft glam to self-care rituals, Zora Salon is where modern beauty meets timeless trust.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="/team.png" 
                  alt="Zora Salon Team" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '400px',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)'
                  }} 
                />
                {/* <h3 className="text-2xl mb-4 mt-4">5+ Years of Expertise</h3> */}
                <p className="text-bottlegreen">Rooted in family. Guided by vision. Trusted by women who know the difference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <div style={{
            background: 'rgba(255, 255, 255, 0.7)',
            padding: '0.5rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
            display: 'inline-block',
            marginLeft: '50%',
            transform: 'translateX(-50%)'
          }}>
            <h2 className="text-center text-3xl mb-0">Our Values</h2>
          </div>
          <div className="values-container">
            <div className="card text-center">
              <h3 className="text-2xl mb-4">Excellence</h3>
              <p>We maintain the highest standards in every service, using premium products and staying current with the latest beauty trends and techniques.</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl mb-4">Personalization</h3>
              <p>Every client is unique, and we believe in tailoring our services to meet individual needs, preferences, and beauty goals.</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl mb-4">Luxury</h3>
              <p>From our elegant decor to our premium products, we create an atmosphere of sophistication and relaxation for every visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <div style={{
            background: 'rgba(255, 255, 255, 0.7)',
            padding: '0.5rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
            display: 'inline-block',
            marginLeft: '50%',
            transform: 'translateX(-50%)'
          }}>
            <h2 className="text-center text-3xl mb-0">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                margin: '0 auto 1rem',
                border: '3px solid var(--champagnegold)',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
              }}>
                <img 
                  src="/Navjot.png" 
                  alt="Navjot Dhaliwal" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
              <h3 className="text-2xl mb-2">Navjot Dhaliwal - Toronto</h3>
              <p className="text-champagnegold mb-4">Co-Founder, CEO & Creative Director</p>
              <p>The creative force and visionary behind the brand, bringing innovative ideas and artistic direction to Zora Salon.</p>
            </div>
            <div className="card text-center">
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                margin: '0 auto 1rem',
                border: '3px solid var(--champagnegold)',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
              }}>
                <img 
                  src="/Simran.png" 
                  alt="Simran Dhillon" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
              <h3 className="text-2xl mb-2">Simran Dhillon - Amritsar</h3>
              <p className="text-champagnegold mb-4">Co-Founder & Beauty Director</p>
              <p>A skilled beauty expert with over five years of experience, leading our beauty services and client experience.</p>
            </div>
            <div className="card text-center">
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                margin: '0 auto 1rem',
                border: '3px solid var(--champagnegold)',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
              }}>
                <img 
                  src="/Gursahib.png" 
                  alt="Gursahib Dhillon" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
              <h3 className="text-2xl mb-2">Gursahib Dhillon - Amritsar</h3>
              <p className="text-champagnegold mb-4">Chief Operating Officer</p>
              <p>Overseeing the day-to-day administrative and operational functions of Zora Salon.</p>
            </div>
            <div className="card text-center">
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                margin: '0 auto 1rem',
                border: '3px solid var(--champagnegold)',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
              }}>
                <img 
                  src="/Rajinder.png" 
                  alt="Rajinder Dhaliwal" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
              <h3 className="text-2xl mb-2">Rajinder Dhaliwal - Batala</h3>
              <p className="text-champagnegold mb-4">Chairman</p>
              <p>Providing strategic leadership and guidance to ensure Zora Salon maintains its commitment to excellence and family values.</p>
            </div>
            <div className="card text-center">
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                margin: '0 auto 1rem',
                border: '3px solid var(--champagnegold)',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
              }}>
                <img 
                  src="/Harpal.png" 
                  alt="Harpal Dhaliwal" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
              <h3 className="text-2xl mb-2">Harpal Dhaliwal - Batala</h3>
              <p className="text-champagnegold mb-4">Director of Finance</p>
              <p>Overseeing the financial health and growth of Zora Salon while ensuring sustainable business practices.</p>
            </div>
            <div className="card text-center">
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                margin: '0 auto 1rem',
                border: '3px solid var(--champagnegold)',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
              }}>
                <img 
                  src="/Asim.png" 
                  alt="Asim Sultan" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              </div>
              <h3 className="text-2xl mb-2">Asim Sultan - Toronto</h3>
              <p className="text-champagnegold mb-4">Fashion Director</p>
              <p>Guiding the salon's fashion-forward vision and styling services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Salon Info */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <h2 className="text-3xl mb-8 text-center">Salon Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl mb-4 flex items-center">
                  <MapPin size={24} style={{ marginRight: '12px' }} />
                  Location
                </h3>
                <p className="mb-4">Dhaliwal Complex, Surjit Singh Chowk</p>
                <p className="mb-4">Batala</p>
                <p>Free parking available</p>
              </div>
              <div>
                <h3 className="text-2xl mb-4 flex items-center">
                  <Clock size={24} style={{ marginRight: '12px' }} />
                  Hours
                </h3>
                <div className="space-y-2">
                  <p><strong>Monday:</strong> 9:00 AM - 7:00 PM</p>
                  <p><strong>Tuesday:</strong> Closed</p>
                  <p><strong>Wednesday:</strong> 9:00 AM - 7:00 PM</p>
                  <p><strong>Thursday:</strong> 9:00 AM - 7:00 PM</p>
                  <p><strong>Friday:</strong> 9:00 AM - 7:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 7:00 PM</p>
                  <p><strong>Sunday:</strong> 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      {/* <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="card text-center">
            <h2 className="text-3xl mb-6">Awards & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-4">🏆 Best Salon 2023</h3>
                <p>Luxury City Beauty Awards</p>
              </div>
              <div>
                <h3 className="text-xl mb-4">⭐ 5-Star Rating</h3>
                <p>Consistently rated by our clients</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage; 