import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, User } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
            <h1 className="text-6xl md:text-5xl mb-6">Contact Us</h1>
            <p className="text-xl mb-8 text-bottlegreen">
              Get in touch with us for appointments, inquiries, or just to say hello
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <div className="contact-info-grid">
            <div className="card text-center">
              <div className="icon-container">
                <MapPin size={40} color="white" />
              </div>
              <h3 className="text-2xl mb-4">Visit Us</h3>
              <p className="mb-4">Dhaliwal Complex, Surjit Singh Chowk</p>
              <p className="mb-4">Batala</p>
              <p className="text-champagnegold font-semibold">Free parking available</p>
            </div>
            
            <div className="card text-center">
              <div className="icon-container">
                <Phone size={40} color="white" />
              </div>
              <h3 className="text-2xl mb-4">Call Us</h3>
              <p className="mb-4">Main: 95013-14939</p>
              <p className="mb-4">Booking: 84277-50344</p>
              <p className="text-champagnegold font-semibold">Available during salon hours</p>
            </div>
            
            <div className="card text-center">
              <div className="icon-container">
                <Mail size={40} color="white" />
              </div>
              <h3 className="text-2xl mb-4">Email Us</h3>
              <p className="mb-4">zorasalon07@gmail.com</p>
              <p className="mb-4">zorasalon07@gmail.com</p>
              <p className="text-champagnegold font-semibold">We respond within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <h2 className="text-3xl mb-8 text-center">Hours & Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl mb-4 flex items-center">
                  <Clock size={24} style={{ marginRight: '12px' }} />
                  Salon Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-softpink rounded-lg">
                  <p className="text-sm text-bottlegreen">
                    <strong>Note:</strong> We are closed on major holidays. 
                    Please call ahead for holiday hours.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl mb-4 flex items-center">
                  <MapPin size={24} style={{ marginRight: '12px' }} />
                  Getting Here
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">By Car:</h4>
                    <p className="text-sm">Free parking available in our private lot behind the salon.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">By Public Transit:</h4>
                    <p className="text-sm">Bus routes 15, 23, and 45 stop within 2 blocks of our location.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Accessibility:</h4>
                    <p className="text-sm">Our salon is fully accessible with ramps and wide doorways.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <h2 className="text-3xl mb-8 text-center">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label flex items-center">
                    <User size={16} style={{ marginRight: '8px' }} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label flex items-center">
                    <Mail size={16} style={{ marginRight: '8px' }} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                  placeholder="What is your message about?"
                />
              </div>

              <div className="form-group">
                <label className="form-label flex items-center">
                  <MessageSquare size={16} style={{ marginRight: '8px' }} />
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows={6}
                  required
                  placeholder="Please share your questions, feedback, or appointment requests..."
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="mb-4">zorasalon07@gmail.com</p>
                <p className="mb-4">zorasalon07@gmail.com</p>
                <p className="mb-4">+1 (555) 123-4567</p>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl mb-3">How far in advance should I book my appointment?</h3>
              <p>We recommend booking at least 1-2 weeks in advance for popular services, and 2-3 months in advance for bridal appointments.</p>
            </div>
            
            <div className="card">
              <h3 className="text-xl mb-3">What is your cancellation policy?</h3>
              <p>We require 24 hours notice for cancellations or rescheduling. Late cancellations may incur a fee of 50% of the service cost.</p>
            </div>
            
            <div className="card">
              <h3 className="text-xl mb-3">Do you accept walk-ins?</h3>
              <p>We do accept walk-ins based on availability, but we highly recommend booking in advance to ensure you get your preferred time and stylist.</p>
            </div>
            
            <div className="card">
              <h3 className="text-xl mb-3">What forms of payment do you accept?</h3>
              <p>We accept cash, credit cards, debit cards, and digital payments. We also offer gift certificates and package deals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <div className="card text-center">
            <h2 className="text-3xl mb-6">Follow Us</h2>
            <p className="text-lg mb-8">
              Stay updated with our latest styles, special offers, and beauty tips.
            </p>
            <div className="social-buttons">
              <a href="https://www.instagram.com/zora_salon_batala/" target="_blank" rel="noopener noreferrer" className="btn" style={{
                background: 'linear-gradient(135deg, #E4405F, #C13584)',
                color: 'white',
                textDecoration: 'none'
              }}>
                Instagram
              </a>
              <a href="https://www.instagram.com/zora_salon_batala/" target="_blank" rel="noopener noreferrer" className="btn" style={{
                background: 'linear-gradient(135deg, #1877F2, #0D6EFD)',
                color: 'white',
                textDecoration: 'none'
              }}>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 