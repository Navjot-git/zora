import React from 'react';
import { Star, Sparkles, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate('/booking');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen main-container" style={{
      backgroundImage: 'url("/feathers-1.png")',
      backgroundSize: 'contain',
      backgroundPosition: 'left center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
      border: '3px solid var(--champagnegold)',
      borderRadius: '20px',
      overflow: 'hidden'
    }}>
      {/* Hero Section */}
      <section className="py-12" style={{ padding: '2rem' }}>
        <div className="max-w-6xl mx-auto">
          <div className="hero-grid">
            {/* Left Column - Image */}
            <div className="hero-image-container text-center">
              <img 
                src="/zora-salon-4.png" 
                alt="Zora Salon - Luxury Beauty Experience" 
                style={{ 
                  width: '100%', 
                  maxWidth: '100%',
                  height: '100%',
                  maxHeight: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(212, 175, 55, 0.2)',
                  objectFit: 'cover'
                }} 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.log('Image failed to load:', target.src);
                  target.style.display = 'none';
                }}
              />
            </div>
            
            {/* Right Column - Text Content */}
            <div className="hero-text-container text-center lg:text-left">
              <div style={{
                background: 'rgba(255, 248, 220, 0.7)',
                padding: '1.5rem',
                borderRadius: '16px',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
                color: 'var(--bottlegreen)',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
                  Welcome to Zora Salon
                </h1>
                <p className="text-lg md:text-xl mb-6 md:mb-8 text-bottlegreen">
                  Where beauty meets luxury in an elegant, relaxing space designed just for you
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/booking" className="btn btn-primary">
                    Book Your Appointment
                  </Link>
                  <Link to="/services" className="btn btn-secondary">
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12" style={{ padding: '2rem' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{
            background: 'rgba(255, 248, 220, 0.7)',
            padding: '0.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
            display: 'inline-block',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            color: 'var(--bottlegreen)'
          }}>
            <h3 className="text-center text-4xl mb-0">Why Choose Zora Salon?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center feminine-accent">
              <div className="icon-container">
                <Star size={40} color="white" />
              </div>
              <h3 className="text-2xl mb-4">Premium Experience</h3>
              <p>Luxurious treatments with the finest products and expert stylists who understand your unique beauty needs.</p>
            </div>
            <div className="card text-center feminine-accent">
              <div className="icon-container">
                <Sparkles size={40} color="white" />
              </div>
              <h3 className="text-2xl mb-4">Modern Techniques</h3>
              <p>Stay ahead with the latest trends and cutting-edge beauty treatments that enhance your natural beauty.</p>
            </div>
            <div className="card text-center feminine-accent">
              <div className="icon-container">
                <Heart size={40} color="white" />
              </div>
              <h3 className="text-2xl mb-4">Personalized Care</h3>
              <p>Every service is tailored to your individual preferences, ensuring you leave feeling confident and beautiful.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12" style={{ padding: '2rem' }}>
        <div className="max-w-6xl mx-auto">
          <div style={{
            background: 'rgba(255, 248, 220, 0.7)',
            padding: '0.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
            display: 'inline-block',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            color: 'var(--bottlegreen)'
          }}>
            <h3 className="text-center text-4xl mb-0">Our Signature Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-2xl mb-4">Hairstyling</h3>
              <p className="mb-4">Elegant cuts, styling, and blowouts that transform your look and boost your confidence.</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl mb-4">Hydrafacial</h3>
              <p className="mb-4">Deep cleansing and rejuvenation treatment that leaves your skin glowing and refreshed.</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl mb-4">Nail Services</h3>
              <p className="mb-4">Beautiful nail paint and creative nail art designs with premium products and attention to detail.</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl mb-4">Makeup</h3>
              <p className="mb-4">Professional makeup services for special occasions, bridal looks, and everyday glamour with premium products.</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl mb-4">Manicure</h3>
              <p className="mb-4">Expert nail care and grooming services including cuticle care, shaping, and beautiful polish application.</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl mb-4">Pedicure</h3>
              <p className="mb-4">Luxurious foot care treatments including exfoliation, massage, and nail care for healthy, beautiful feet.</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl mb-4">Eye Lashes/Extensions</h3>
              <p className="mb-4">Professional lash extensions and treatments to enhance your natural beauty and create stunning, long-lasting results.</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl mb-4">Waxing</h3>
              <p className="mb-4">Professional waxing services for smooth, hair-free skin using high-quality products and expert techniques.</p>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl mb-4">Body Massage</h3>
              <p className="mb-4">Relaxing and therapeutic body massage treatments to rejuvenate your body and mind with skilled therapists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-12" style={{ padding: '2rem' }}>
        <div className="max-w-4xl mx-auto">
          <div style={{
            background: 'rgba(255, 248, 220, 0.7)',
            padding: '0.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
            display: 'inline-block',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            color: 'var(--bottlegreen)'
          }}>
            <h3 className="text-center text-4xl mb-0">What Our Clients Say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div style={{ fontSize: '2rem', marginRight: '1rem' }}>⭐</div>
                <div>
                  <h4 className="font-semibold">Manpreet Kaur</h4>
                  <p className="text-sm text-bottlegreen">Regular Client</p>
                </div>
              </div>
              <p>"Zora Salon has transformed my beauty routine. The attention to detail and luxurious experience is unmatched!"</p>
            </div>
            <div className="card">
              <div className="flex items-center mb-4">
                <div style={{ fontSize: '2rem', marginRight: '1rem' }}>⭐</div>
                <div>
                  <h4 className="font-semibold">Seerat Kaur</h4>
                  <p className="text-sm text-bottlegreen">New Client</p>
                </div>
              </div>
              <p>"From the moment I walked in, I felt pampered and cared for. The results exceeded my expectations!"</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12" style={{ padding: '2rem' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="card">
            <h2 className="text-3xl mb-6">Ready to Experience Luxury?</h2>
            <p className="text-lg mb-8">
              Book your appointment today and discover the Zora Salon difference. 
              Your journey to beauty and confidence starts here.
            </p>
            <button 
              className="btn btn-primary" 
              onClick={handleBookingClick}
              style={{ textDecoration: 'none' }}
            >
              Schedule Your Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 