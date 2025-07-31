import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, User } from 'lucide-react';
import { emailjs, EMAILJS_CONFIG } from '../config/emailjs';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted - using EmailJS');
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Check if EmailJS is configured
      console.log('EmailJS Config:', {
        SERVICE_ID: EMAILJS_CONFIG.SERVICE_ID,
        CONTACT_TEMPLATE_ID: EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        PUBLIC_KEY: EMAILJS_CONFIG.PUBLIC_KEY ? 'Set' : 'Not Set'
      });

      if (!EMAILJS_CONFIG.SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID === 'your-service-id') {
        console.warn('EmailJS not configured. Contact form will not send email.');
        setSubmitMessage({ type: 'error', text: 'Email service not configured. Please contact us directly.' });
        return;
      }

      if (!EMAILJS_CONFIG.CONTACT_TEMPLATE_ID || EMAILJS_CONFIG.CONTACT_TEMPLATE_ID === 'your-contact-template-id') {
        console.warn('Contact template not configured.');
        setSubmitMessage({ type: 'error', text: 'Contact template not configured. Please contact us directly.' });
        return;
      }

      // Prepare email data
      const emailData = {
        full_name: formData.name,
        email_address: formData.email,
        subject: formData.subject || 'Contact Form Message',
        message: formData.message,
        salon_email: 'zorasalon07@gmail.com'
      };

      console.log('Sending email with data:', emailData);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        emailData
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setSubmitMessage({ type: 'success', text: 'Thank you for your message! We will get back to you within 24 hours.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage({ type: 'error', text: 'Failed to send message. Please try again or contact us directly.' });
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      setSubmitMessage({ type: 'error', text: 'Failed to send message. Please try again or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen main-container" style={{
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
                    <span>Monday:</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday:</span>
                    <span className="font-semibold text-red-600">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday:</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday:</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday:</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
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
                    <p className="text-sm">Free parking available in front ofthe salon.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">By Public Transit:</h4>
                    <p className="text-sm">Bus routes within walking distance from the location.</p>
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

              {/* Success/Error Message */}
              {submitMessage && (
                <div className={`p-4 rounded-lg ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-100 border border-green-400 text-green-700' 
                    : 'bg-red-100 border border-red-400 text-red-700'
                }`}>
                  {submitMessage.text}
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="mb-4">zorasalon07@gmail.com</p>
                <p className="mb-4">95013-14939 | 84277-50344</p>
                <button 
                  type="submit" 
                  className={`btn btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
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