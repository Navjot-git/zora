import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Scissors, Sparkles, Heart, Palette } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="min-h-screen" style={{
      backgroundImage: 'url("/feathers-1.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'left center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      border: '3px solid var(--champagnegold)',
      borderRadius: '20px',
      margin: '1rem',
      overflow: 'hidden'
    }}>
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <div style={{
            background: 'rgba(255, 248, 220, 0.7)',
            padding: '1.5rem',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
            color: 'var(--bottlegreen)'
          }}>
            <h1 className="text-6xl md:text-5xl mb-6">Our Services</h1>
            <p className="text-xl mb-8 text-bottlegreen">
              Comprehensive beauty services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Cover Image */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <img 
              src="/image.png" 
              alt="Zora Salon Services - Hair, Face, Body, Nail" 
              style={{ 
                width: '100%', 
                maxWidth: '800px',
                height: 'auto',
                borderRadius: '16px',
                boxShadow: '0 8px 25px rgba(212, 175, 55, 0.2)'
              }} 
            />
          </div>
        </div>
      </section>

      {/* Hair Services */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="icon-container mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
              <Scissors size={40} color="white" />
            </div>
            <div style={{
              background: 'rgba(255, 248, 220, 0.7)',
              padding: '0.5rem',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
              display: 'inline-block',
              color: 'var(--bottlegreen)'
            }}>
              <h3 className="text-4xl mb-0">💇‍♀️ Hair Services</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Haircuts & Styling */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">✂️ Haircuts & Styling</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Hair Cut (Basic)</span>
                  <span className="font-semibold">₹250</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair Cut (Advanced / Fashion)</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between">
                  <span>Kids Hair Cut</span>
                  <span className="font-semibold">₹150</span>
                </div>
                <div className="flex justify-between">
                  <span>Blow Dry - Short</span>
                  <span className="font-semibold">₹250</span>
                </div>
                <div className="flex justify-between">
                  <span>Blow Dry - Medium</span>
                  <span className="font-semibold">₹350</span>
                </div>
                <div className="flex justify-between">
                  <span>Blow Dry - Long</span>
                  <span className="font-semibold">₹450</span>
                </div>
                <div className="flex justify-between">
                  <span>Ironing - Short</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between">
                  <span>Ironing - Medium</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between">
                  <span>Ironing - Long</span>
                  <span className="font-semibold">₹600</span>
                </div>
                <div className="flex justify-between">
                  <span>Curls (Temporary)</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair Wash + Conditioning</span>
                  <span className="font-semibold">₹200</span>
                </div>
              </div>
            </div>

            {/* Hair Spa & Treatments */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">💆‍♀️ Hair Spa & Treatments</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Hair Spa (Basic) - Short</span>
                  <span className="font-semibold">₹700</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair Spa (Basic) - Medium</span>
                  <span className="font-semibold">₹900</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair Spa (Basic) - Long</span>
                  <span className="font-semibold">₹1100</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair Spa (L'Oreal) - Short</span>
                  <span className="font-semibold">₹1200</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair Spa (L'Oreal) - Medium</span>
                  <span className="font-semibold">₹1400</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair Spa (L'Oreal) - Long</span>
                  <span className="font-semibold">₹1600</span>
                </div>
                <div className="flex justify-between">
                  <span>Dandruff / Scalp Treatment</span>
                  <span className="font-semibold">₹800</span>
                </div>
                <div className="flex justify-between">
                  <span>Keratin Treatment - Short</span>
                  <span className="font-semibold">₹2500</span>
                </div>
                <div className="flex justify-between">
                  <span>Keratin Treatment - Medium</span>
                  <span className="font-semibold">₹3500</span>
                </div>
                <div className="flex justify-between">
                  <span>Keratin Treatment - Long</span>
                  <span className="font-semibold">₹4500</span>
                </div>
                <div className="flex justify-between">
                  <span>Botox Hair Treatment - Short</span>
                  <span className="font-semibold">₹3500</span>
                </div>
                <div className="flex justify-between">
                  <span>Botox Hair Treatment - Medium</span>
                  <span className="font-semibold">₹5000</span>
                </div>
                <div className="flex justify-between">
                  <span>Botox Hair Treatment - Long</span>
                  <span className="font-semibold">₹6000</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair Smoothening - Short</span>
                  <span className="font-semibold">₹3000</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair Smoothening - Medium</span>
                  <span className="font-semibold">₹4500</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair Smoothening - Long</span>
                  <span className="font-semibold">₹6000</span>
                </div>
                <div className="flex justify-between">
                  <span>Cysteine - Short</span>
                  <span className="font-semibold">₹4000</span>
                </div>
                <div className="flex justify-between">
                  <span>Cysteine - Medium</span>
                  <span className="font-semibold">₹5500</span>
                </div>
                <div className="flex justify-between">
                  <span>Cysteine - Long</span>
                  <span className="font-semibold">₹7000</span>
                </div>
              </div>
            </div>

            {/* Hair Colouring */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🎨 Hair Colouring</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Root Touch Up</span>
                  <span className="font-semibold">₹600</span>
                </div>
                <div className="flex justify-between">
                  <span>Global Hair Colour (Basic) - Short</span>
                  <span className="font-semibold">₹1500</span>
                </div>
                <div className="flex justify-between">
                  <span>Global Hair Colour (Basic) - Medium</span>
                  <span className="font-semibold">₹2000</span>
                </div>
                <div className="flex justify-between">
                  <span>Global Hair Colour (Basic) - Long</span>
                  <span className="font-semibold">₹2500</span>
                </div>
                <div className="flex justify-between">
                  <span>Global Colour (L'Oreal) - Short</span>
                  <span className="font-semibold">₹2500</span>
                </div>
                <div className="flex justify-between">
                  <span>Global Colour (L'Oreal) - Medium</span>
                  <span className="font-semibold">₹3500</span>
                </div>
                <div className="flex justify-between">
                  <span>Global Colour (L'Oreal) - Long</span>
                  <span className="font-semibold">₹4500</span>
                </div>
                <div className="flex justify-between">
                  <span>Fashion Streaks (Per Streak)</span>
                  <span className="font-semibold">₹100</span>
                </div>
                <div className="flex justify-between">
                  <span>Highlights (Full Head) - Short</span>
                  <span className="font-semibold">₹2500</span>
                </div>
                <div className="flex justify-between">
                  <span>Highlights (Full Head) - Medium</span>
                  <span className="font-semibold">₹3000</span>
                </div>
                <div className="flex justify-between">
                  <span>Highlights (Full Head) - Long</span>
                  <span className="font-semibold">₹3500</span>
                </div>
                <div className="flex justify-between">
                  <span>Ombre / Balayage</span>
                  <span className="font-semibold">₹3500 - ₹6000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Face Services */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="icon-container mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
              <Sparkles size={40} color="white" />
            </div>
            <div style={{
              background: 'rgba(255, 248, 220, 0.7)',
              padding: '0.5rem',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
              display: 'inline-block',
              color: 'var(--bottlegreen)'
            }}>
              <h3 className="text-4xl mb-0">🧖‍♀️ Face Services</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cleanups */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🌿 Cleanups</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Basic Cleanup</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between">
                  <span>Fruit Cleanup</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between">
                  <span>Detan Cleanup</span>
                  <span className="font-semibold">₹600</span>
                </div>
              </div>
            </div>

            {/* Facials */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">💆 Facials</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Fruit Facial</span>
                  <span className="font-semibold">₹700</span>
                </div>
                <div className="flex justify-between">
                  <span>Gold Facial</span>
                  <span className="font-semibold">₹1000</span>
                </div>
                <div className="flex justify-between">
                  <span>Pearl Facial</span>
                  <span className="font-semibold">₹1200</span>
                </div>
                <div className="flex justify-between">
                  <span>Diamond Facial</span>
                  <span className="font-semibold">₹1500</span>
                </div>
                <div className="flex justify-between">
                  <span>Anti-Aging / Skin Brightening</span>
                  <span className="font-semibold">₹1800 - ₹2500</span>
                </div>
                <div className="flex justify-between">
                  <span>O3+ / VLCC / Cheryl's Facial</span>
                  <span className="font-semibold">₹1200 - ₹2000</span>
                </div>
                <div className="flex justify-between">
                  <span>Hydra Facial</span>
                  <span className="font-semibold">₹2500 - ₹4500</span>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🧴 Add-ons</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Face Bleach</span>
                  <span className="font-semibold">₹250</span>
                </div>
                <div className="flex justify-between">
                  <span>Face Detan</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between">
                  <span>Face Serum Therapy</span>
                  <span className="font-semibold">₹400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Services */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="icon-container mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
              <Heart size={40} color="white" />
            </div>
            <div style={{
              background: 'rgba(255, 248, 220, 0.7)',
              padding: '0.5rem',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
              display: 'inline-block',
              color: 'var(--bottlegreen)'
            }}>
              <h3 className="text-4xl mb-0">💆‍♀️ Body Services</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Waxing */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🧼 Waxing</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Full Arms</span>
                  <span className="font-semibold">₹250</span>
                </div>
                <div className="flex justify-between">
                  <span>Full Legs</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between">
                  <span>Underarms</span>
                  <span className="font-semibold">₹100</span>
                </div>
                <div className="flex justify-between">
                  <span>Full Body Wax</span>
                  <span className="font-semibold">₹900</span>
                </div>
                <div className="flex justify-between">
                  <span>Bikini Wax</span>
                  <span className="font-semibold">₹600</span>
                </div>
                <div className="flex justify-between">
                  <span>Face Wax</span>
                  <span className="font-semibold">₹200</span>
                </div>
                <div className="flex justify-between">
                  <span>Chocolate Wax (Add ₹200 for full body)</span>
                  <span className="font-semibold">+₹200</span>
                </div>
              </div>
            </div>

            {/* Threading */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🪒 Threading</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Eyebrows</span>
                  <span className="font-semibold">₹40</span>
                </div>
                <div className="flex justify-between">
                  <span>Upper Lips</span>
                  <span className="font-semibold">₹30</span>
                </div>
                <div className="flex justify-between">
                  <span>Forehead</span>
                  <span className="font-semibold">₹30</span>
                </div>
                <div className="flex justify-between">
                  <span>Full Face Threading</span>
                  <span className="font-semibold">₹100</span>
                </div>
              </div>
            </div>

            {/* Body Spa & Massage */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">💆 Body Spa & Massage</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Back Massage (30 mins)</span>
                  <span className="font-semibold">₹600</span>
                </div>
                <div className="flex justify-between">
                  <span>Full Body Massage (60 mins)</span>
                  <span className="font-semibold">₹1200</span>
                </div>
                <div className="flex justify-between">
                  <span>Body Polishing</span>
                  <span className="font-semibold">₹2000</span>
                </div>
                <div className="flex justify-between">
                  <span>Body Detan</span>
                  <span className="font-semibold">₹1500</span>
                </div>
                <div className="flex justify-between">
                  <span>Scrub & Glow (Back/Feet)</span>
                  <span className="font-semibold">₹500 - ₹800</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nail Services */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="icon-container mx-auto mb-4" style={{ width: '80px', height: '80px' }}>
              <Palette size={40} color="white" />
            </div>
            <div style={{
              background: 'rgba(255, 248, 220, 0.7)',
              padding: '0.5rem',
              borderRadius: '8px',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
              display: 'inline-block',
              color: 'var(--bottlegreen)'
            }}>
              <h3 className="text-4xl mb-0">💅 Nail Services</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Nail Services */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">💅 Basic</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Nail Cutting & Shaping</span>
                  <span className="font-semibold">₹100</span>
                </div>
                <div className="flex justify-between">
                  <span>Cuticle Care</span>
                  <span className="font-semibold">₹150</span>
                </div>
                <div className="flex justify-between">
                  <span>Manicure (Basic)</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between">
                  <span>Manicure (With Gel or Premium)</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between">
                  <span>Pedicure (Basic)</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between">
                  <span>Pedicure (Spa / Detan / Gel)</span>
                  <span className="font-semibold">₹600 - ₹900</span>
                </div>
              </div>
            </div>

            {/* Nail Art Image */}
            <div className="text-center">
              <div className="flex justify-center">
                <img 
                  src="/nail-art.png" 
                  alt="Nail Art Designs" 
                  style={{ 
                    width: '100%', 
                    maxWidth: '300px',
                    height: 'auto',
                    borderRadius: '12px',
                    border: '3px solid var(--champagnegold)',
                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                  }} 
                />
              </div>
            </div>

            {/* Nail Art & Extensions */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🎨 Nail Art & Extensions</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Basic Nail Paint</span>
                  <span className="font-semibold">₹100</span>
                </div>
                <div className="flex justify-between">
                  <span>Gel Polish</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between">
                  <span>Gel Polish with Removal</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between">
                  <span>Nail Art (Simple)</span>
                  <span className="font-semibold">₹100/nail</span>
                </div>
                <div className="flex justify-between">
                  <span>Nail Art (Advanced)</span>
                  <span className="font-semibold">₹150/nail</span>
                </div>
                <div className="flex justify-between">
                  <span>Nail Extensions (French/Glitter/Basic)</span>
                  <span className="font-semibold">₹1200 - ₹1800</span>
                </div>
                <div className="flex justify-between">
                  <span>Nail Extension Refills</span>
                  <span className="font-semibold">₹700</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="text-center">
              <h2 className="text-4xl mb-6">Ready to Experience Zora Salon?</h2>
              <p className="text-xl mb-8 text-bottlegreen">
                Book your appointment today and discover the perfect blend of luxury and expertise
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => handleNavigation('/booking')}
                  className="btn-primary"
                >
                  Book Your Appointment
                </button>
                <button 
                  onClick={() => handleNavigation('/contact')}
                  className="btn-secondary"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 