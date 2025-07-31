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
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hair Cut (Basic)</span>
                  <span className="font-semibold">₹250</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hair Cut (Advanced / Fashion)</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Front Layer Cutting</span>
                  <span className="font-semibold">₹100</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Layer Cutting</span>
                  <span className="font-semibold">₹250</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Three Step Cutting</span>
                  <span className="font-semibold">₹200</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>U+V Shape Cutting</span>
                  <span className="font-semibold">₹200</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Kids Hair Cut</span>
                  <span className="font-semibold">₹150</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Blow Dry - Short</span>
                  <span className="font-semibold">₹250</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Blow Dry - Medium</span>
                  <span className="font-semibold">₹350</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Blow Dry - Long</span>
                  <span className="font-semibold">₹450</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Ironing - Short</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Ironing - Medium</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Ironing - Long</span>
                  <span className="font-semibold">₹600</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Curls (Temporary)</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hair Wash + Conditioning</span>
                  <span className="font-semibold">₹200</span>
                </div>
              </div>
            </div>

            {/* Hair Spa & Treatments */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">💆‍♀️ Hair Spa & Treatments</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hair Spa (Basic) - Short</span>
                  <span className="font-semibold">₹700</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hair Spa (Basic) - Medium</span>
                  <span className="font-semibold">₹900</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hair Spa (Basic) - Long</span>
                  <span className="font-semibold">₹1100</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hair Spa (L'Oreal) - Short</span>
                  <span className="font-semibold">₹1200</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hair Spa (L'Oreal) - Medium</span>
                  <span className="font-semibold">₹1400</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hair Spa (L'Oreal) - Long</span>
                  <span className="font-semibold">₹1600</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Dandruff / Scalp Treatment</span>
                  <span className="font-semibold">₹800</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Keratin Treatment - Short</span>
                  <span className="font-semibold">₹2500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Keratin Treatment - Medium</span>
                  <span className="font-semibold">₹3500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Keratin Treatment - Long</span>
                  <span className="font-semibold">₹4500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Botox Hair Treatment - Short</span>
                  <span className="font-semibold">₹3500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Botox Hair Treatment - Medium</span>
                  <span className="font-semibold">₹5000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Botox Hair Treatment - Long</span>
                  <span className="font-semibold">₹6000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hair Smoothening - Short</span>
                  <span className="font-semibold">₹3000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hair Smoothening - Medium</span>
                  <span className="font-semibold">₹4500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hair Smoothening - Long</span>
                  <span className="font-semibold">₹6000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Cysteine - Short</span>
                  <span className="font-semibold">₹4000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Cysteine - Medium</span>
                  <span className="font-semibold">₹5500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Cysteine - Long</span>
                  <span className="font-semibold">₹7000</span>
                </div>
              </div>
            </div>

            {/* Hair Colouring */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🎨 Hair Colouring</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Root Touch Up</span>
                  <span className="font-semibold">₹600</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Global Hair Colour (Basic) - Short</span>
                  <span className="font-semibold">₹1500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Global Hair Colour (Basic) - Medium</span>
                  <span className="font-semibold">₹2000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Global Hair Colour (Basic) - Long</span>
                  <span className="font-semibold">₹2500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Global Colour (L'Oreal) - Short</span>
                  <span className="font-semibold">₹2500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Global Colour (L'Oreal) - Medium</span>
                  <span className="font-semibold">₹3500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Global Colour (L'Oreal) - Long</span>
                  <span className="font-semibold">₹4500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Fashion Streaks (Per Streak)</span>
                  <span className="font-semibold">₹100</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Highlights (Full Head) - Short</span>
                  <span className="font-semibold">₹2500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Highlights (Full Head) - Medium</span>
                  <span className="font-semibold">₹3000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Highlights (Full Head) - Long</span>
                  <span className="font-semibold">₹3500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Ombre / Balayage</span>
                  <span className="font-semibold" style={{ whiteSpace: 'nowrap' }}>₹3500 - ₹6000</span>
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
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Basic Cleanup</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Fruit Cleanup</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Detan Cleanup</span>
                  <span className="font-semibold">₹500</span>
                </div>
              </div>
            </div>

            {/* Facials */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">💆 Facials</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Basic Facial</span>
                  <span className="font-semibold">₹800</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Clean Up</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Detan Facial</span>
                  <span className="font-semibold">₹1,000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hydra Facial</span>
                  <span className="font-semibold">₹2,500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Korean Glass Skin Facial</span>
                  <span className="font-semibold">₹3,000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Bridal Facial</span>
                  <span className="font-semibold">₹3,500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Brightening Facial</span>
                  <span className="font-semibold">₹1,800</span>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🧴 Add-ons</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Face Bleach</span>
                  <span className="font-semibold">₹250</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Face Detan</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
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
            {/* Waxing - Honey Wax */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🍯 Honey Wax</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Arms</span>
                  <span className="font-semibold">₹200</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Half Arms</span>
                  <span className="font-semibold">₹150</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Legs</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Half Legs</span>
                  <span className="font-semibold">₹200</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Underarms</span>
                  <span className="font-semibold">₹100</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Back</span>
                  <span className="font-semibold">₹350</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Front</span>
                  <span className="font-semibold">₹350</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Stomach</span>
                  <span className="font-semibold">₹250</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Body (Excl. bikini)</span>
                  <span className="font-semibold">₹900</span>
                </div>
              </div>
            </div>

            {/* Waxing - Chocolate Wax */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🍫 Chocolate Wax</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Arms</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Half Arms</span>
                  <span className="font-semibold">₹200</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Legs</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Half Legs</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Underarms</span>
                  <span className="font-semibold">₹150</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Back</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Front</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Stomach</span>
                  <span className="font-semibold">₹350</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Bikini Line</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Body (Excl. bikini)</span>
                  <span className="font-semibold">₹1,400</span>
                </div>
              </div>
            </div>

            {/* Waxing - Rica Wax */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">💎 Rica Wax</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Arms</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Half Arms</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Legs</span>
                  <span className="font-semibold">₹550</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Half Legs</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Underarms</span>
                  <span className="font-semibold">₹250</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Back</span>
                  <span className="font-semibold">₹650</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Front</span>
                  <span className="font-semibold">₹650</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Stomach</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Bikini Line</span>
                  <span className="font-semibold">₹600</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Body (Excl. bikini)</span>
                  <span className="font-semibold">₹1,800</span>
                </div>
              </div>
            </div>

            {/* Threading & Face Wax Services */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">✨ Threading & Face Wax Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Eyebrow Threading</span>
                  <span className="font-semibold">₹50</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Upper Lip Threading</span>
                  <span className="font-semibold">₹30</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Chin Threading</span>
                  <span className="font-semibold">₹30</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Forehead Threading</span>
                  <span className="font-semibold">₹30</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Face Threading</span>
                  <span className="font-semibold">₹150</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Face Wax</span>
                  <span className="font-semibold">₹250</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Neck Wax (Front/Back)</span>
                  <span className="font-semibold">₹100</span>
                </div>
              </div>
            </div>

            {/* Body Spa & Massage */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">💆 Body Spa & Massage</h3>
              <div className="space-y-3">
                
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Body Relaxing Massage (60 mins)</span>
                  <span className="font-semibold">₹1200</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Full Body Aroma Massage (60 mins)</span>
                  <span className="font-semibold">₹1500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Head Massage (15 mins)</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Back Massage (20 mins)</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Shoulder & Neck Massage (20 mins)</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Body Polishing</span>
                  <span className="font-semibold">₹2000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Body Detan</span>
                  <span className="font-semibold">₹1500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Scrub & Glow (Back/Feet)</span>
                  <span className="font-semibold" style={{ whiteSpace: 'nowrap' }}>₹500 - ₹800</span>
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
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Nail Cutting & Shaping</span>
                  <span className="font-semibold">₹100</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Cuticle Care</span>
                  <span className="font-semibold">₹150</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Manicure (Basic)</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Manicure (With Gel or Premium)</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Pedicure (Basic)</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Pedicure (Spa / Detan / Gel)</span>
                  <span className="font-semibold" style={{ whiteSpace: 'nowrap' }}>₹600 - ₹900</span>
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
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Basic Nail Paint</span>
                  <span className="font-semibold">₹100</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Gel Polish</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Gel Polish with Removal</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Nail Art (Simple)</span>
                  <span className="font-semibold">₹100/nail</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Nail Art (Advanced)</span>
                  <span className="font-semibold">₹150/nail</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Nail Extensions (French/Glitter/Basic)</span>
                  <span className="font-semibold" style={{ whiteSpace: 'nowrap' }}>₹1200 - ₹1800</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Nail Extension Refills</span>
                  <span className="font-semibold">₹700</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manicure & Pedicure Services */}
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
              <h3 className="text-4xl mb-0">💅 Manicure & Pedicure Services</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Manicure Services */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🤲 Manicure Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Basic Manicure</span>
                  <span className="font-semibold">₹400</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Detan Manicure</span>
                  <span className="font-semibold">₹600</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Brightening Manicure</span>
                  <span className="font-semibold">₹700</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Luxury Manicure</span>
                  <span className="font-semibold">₹900</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Gel Polish (Add-on)</span>
                  <span className="font-semibold">₹300</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Nail Cut, File & Polish</span>
                  <span className="font-semibold">₹200</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Nail Art (Per Nail)</span>
                  <span className="font-semibold">₹50+</span>
                </div>
              </div>
            </div>

            {/* Pedicure Services */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🦶 Pedicure Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Basic Pedicure</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Detan Pedicure</span>
                  <span className="font-semibold">₹700</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Brightening Pedicure</span>
                  <span className="font-semibold">₹800</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Luxury Spa Pedicure</span>
                  <span className="font-semibold">₹1,000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Cracked Heel Repair Add-on</span>
                  <span className="font-semibold">₹200</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Gel Polish (Add-on)</span>
                  <span className="font-semibold">₹300</span>
                </div>
              </div>
            </div>

            {/* Premium Chair Options */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🪑 Premium Chair Options</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Back Massager Chair (During Mani/Pedi)</span>
                  <span className="font-semibold">+₹150</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Recliner Chair Comfort Upgrade</span>
                  <span className="font-semibold">+₹100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Makeup Services */}
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
              <h3 className="text-4xl mb-0">💄 Makeup Services</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bridal & Special Occasion Makeup */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">👰 Bridal & Special Occasion</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Bridal Makeup (HD)</span>
                  <span className="font-semibold">₹9,000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Reception Makeup</span>
                  <span className="font-semibold">₹5,000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Engagement Makeup</span>
                  <span className="font-semibold">₹5,500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Haldi / Mehndi Makeup</span>
                  <span className="font-semibold">₹2,000</span>
                </div>
              </div>
            </div>

            {/* Party & Event Makeup */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🎉 Party & Event</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>HD Party Makeup</span>
                  <span className="font-semibold">₹3,500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Party Makeup</span>
                  <span className="font-semibold">₹2,500</span>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">✨ Additional Services</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Saree or Dupatta Draping</span>
                  <span className="font-semibold">₹300</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Services */}
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
              <h3 className="text-4xl mb-0">👰‍♀️ Bridal Services</h3>
            </div>
          </div>

          <div className="space-y-8">
            {/* First Row - Image, Title, and Pricing */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, rgba(255, 248, 220, 0.9), rgba(255, 240, 245, 0.9))',
              border: '2px solid var(--champagnegold)',
              boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '60px',
                height: '60px',
                background: 'var(--champagnegold)',
                borderRadius: '0 12px 0 60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px'
              }}>
                👑
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Image Column */}
                <div className="text-center">
                  <img 
                    src="/indian-bride.png" 
                    alt="Indian Bride - Zora Salon Bridal Services" 
                    style={{ 
                      width: '100%', 
                      maxWidth: '300px',
                      height: 'auto',
                      borderRadius: '12px',
                      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                    }} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.log('Image failed to load:', target.src);
                      target.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Title and Pricing Column */}
                <div className="text-center md:text-left">
                  <h3 className="text-3xl mb-2 text-champagnegold" style={{ fontWeight: 'bold' }}>
                    ZORA BRIDAL PRE-GLAM PACKAGE
                  </h3>
                  <p className="text-lg text-bottlegreen mb-4">(Without Makeup)</p>
                  
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-champagnegold mb-2">
                      ₹10,999/-
                    </div>
                    <div className="text-lg text-green-600 font-semibold">
                      💰 Save over ₹3,000!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Package Includes */}
              <div className="card">
                <h3 className="text-2xl mb-4 text-champagnegold">✨ Package Includes:</h3>
                <div className="space-y-3">
                  <div className="flex items-center" style={{ fontSize: '14px' }}>
                    <span className="text-champagnegold mr-2">•</span>
                    <span>Bridal Facial + Detan/Brightening Facial</span>
                  </div>
                  <div className="flex items-center" style={{ fontSize: '14px' }}>
                    <span className="text-champagnegold mr-2">•</span>
                    <span>Full Face Cleanup</span>
                  </div>
                  <div className="flex items-center" style={{ fontSize: '14px' }}>
                    <span className="text-champagnegold mr-2">•</span>
                    <span>Full Face Wax + Threading</span>
                  </div>
                  <div className="flex items-center" style={{ fontSize: '14px' }}>
                    <span className="text-champagnegold mr-2">•</span>
                    <span>Full Body Rica Wax + Bikini Line Wax</span>
                  </div>
                  <div className="flex items-center" style={{ fontSize: '14px' }}>
                    <span className="text-champagnegold mr-2">•</span>
                    <span>Luxury Spa Pedicure</span>
                  </div>
                  <div className="flex items-center" style={{ fontSize: '14px' }}>
                    <span className="text-champagnegold mr-2">•</span>
                    <span>Brightening or Detan Manicure</span>
                  </div>
                  <div className="flex items-center" style={{ fontSize: '14px' }}>
                    <span className="text-champagnegold mr-2">•</span>
                    <span>Nail Care (File, Polish)</span>
                  </div>
                </div>
                
                <div className="border-t-2 border-champagnegold pt-4 mt-6">
                  <h4 className="text-lg font-semibold text-bottlegreen mb-3">💄 Does NOT include makeup</h4>
                  <div className="space-y-2" style={{ fontSize: '14px' }}>
                    <div className="flex justify-between">
                      <span>Bridal Makeup (HD)</span>
                      <span className="font-semibold text-champagnegold">₹9,000 extra</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Party Makeup</span>
                      <span className="font-semibold text-champagnegold">₹2,500 extra</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Bridal Services */}
              <div className="card">
                <h3 className="text-2xl mb-4 text-champagnegold">💍 Additional Bridal Services</h3>
                <div className="space-y-3">
                  <div className="flex justify-between" style={{ fontSize: '14px' }}>
                    <span>Bridal Makeup (HD)</span>
                    <span className="font-semibold">₹9,000</span>
                  </div>
                  <div className="flex justify-between" style={{ fontSize: '14px' }}>
                    <span>Party Makeup</span>
                    <span className="font-semibold">₹2,500</span>
                  </div>
                  <div className="flex justify-between" style={{ fontSize: '14px' }}>
                    <span>Bridal Hair Styling</span>
                    <span className="font-semibold">₹1,500</span>
                  </div>
                  <div className="flex justify-between" style={{ fontSize: '14px' }}>
                    <span>Bridal Nail Art</span>
                    <span className="font-semibold">₹800</span>
                  </div>
                  <div className="flex justify-between" style={{ fontSize: '14px' }}>
                    <span>Bridal Facial</span>
                    <span className="font-semibold">₹1,200</span>
                  </div>
                  <div className="flex justify-between" style={{ fontSize: '14px' }}>
                    <span>Bridal Waxing Package</span>
                    <span className="font-semibold">₹800</span>
                  </div>
                  <div className="flex justify-between" style={{ fontSize: '14px' }}>
                    <span>Saree or Dupatta Draping</span>
                    <span className="font-semibold">₹300</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eyelashes Services */}
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
              <h3 className="text-4xl mb-0">👁️ Eyelashes Services</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Lash Extensions */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">✨ Lash Extensions</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Classic Eyelash Set</span>
                  <span className="font-semibold">₹2,000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Hybrid Eyelash Set</span>
                  <span className="font-semibold">₹2,500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Volume Eyelash Set</span>
                  <span className="font-semibold">₹3,000</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Mega Volume Set</span>
                  <span className="font-semibold">₹3,500</span>
                </div>
              </div>
            </div>

            {/* Lash Maintenance */}
            <div className="card">
              <h3 className="text-2xl mb-4 text-champagnegold">🔄 Lash Maintenance</h3>
              <div className="space-y-3">
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Lash Refill (within 2 weeks)</span>
                  <span className="font-semibold">₹1,500</span>
                </div>
                <div className="flex justify-between" style={{ fontSize: '14px' }}>
                  <span>Lash Removal</span>
                  <span className="font-semibold">₹500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12" style={{ padding: '2rem' }}>
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="text-center">
              <h2 className="text-4xl mb-6">Ready to Experience Zora Salon?</h2>
              <p className="text-xl mb-8 text-bottlegreen">
                Book your appointment today and discover the perfect blend of luxury and expertise
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  onClick={() => handleNavigation('/booking')}
                  className="btn btn-primary"
                  style={{ width: '280px' }}
                >
                  Book Your Appointment
                </button>
                <button 
                  onClick={() => handleNavigation('/contact')}
                  className="btn btn-secondary"
                  style={{ width: '280px' }}
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