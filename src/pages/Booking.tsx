import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Loader } from 'lucide-react';
import { BookingService, AVAILABLE_SLOTS } from '../services/bookingService';
import { BookingFormData } from '../types/booking';

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    stylist: '',
    notes: ''
  });

  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Update available slots when date changes
  useEffect(() => {
    if (formData.date) {
      fetchAvailableSlots(formData.date);
    } else {
      setAvailableSlots(AVAILABLE_SLOTS);
    }
  }, [formData.date]);

  const fetchAvailableSlots = async (selectedDate: string) => {
    setIsLoading(true);
    try {
      const slots = await BookingService.getAvailableSlots(selectedDate);
      setAvailableSlots(slots);
    } catch (error) {
      console.error('Error fetching available slots:', error);
      setAvailableSlots(AVAILABLE_SLOTS);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear time selection if date changes
    if (name === 'date') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        time: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      // Save booking to database
      const saveResult = await BookingService.saveBooking(formData);
      
      if (!saveResult.success) {
        throw new Error(saveResult.error || 'Failed to save booking');
      }

      // Send email notification
      const emailResult = await BookingService.sendEmailNotification(formData);
      
      if (!emailResult.success) {
        console.warn('Email notification failed:', emailResult.error);
        // Don't throw error here as booking was saved successfully
      }

      // Show success message
      setMessage({
        type: 'success',
        text: 'Thank you for your booking request! We will contact you shortly to confirm your appointment.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        stylist: '',
        notes: ''
      });

    } catch (error) {
      console.error('Booking submission error:', error);
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to submit booking. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <h1 className="text-6xl md:text-5xl mb-6">Book Your Appointment</h1>
            <p className="text-xl mb-8 text-bottlegreen">
              Schedule your visit and experience luxury beauty services at Zora Salon
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <h2 className="text-3xl mb-8 text-center">Appointment Request</h2>
            
            {/* Success/Error Message */}
            {message && (
              <div className={`mb-6 p-4 rounded-lg ${
                message.type === 'success' 
                  ? 'bg-green-100 border border-green-400 text-green-700' 
                  : 'bg-red-100 border border-red-400 text-red-700'
              }`}>
                {message.text}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
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
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label flex items-center">
                    <Phone size={16} style={{ marginRight: '8px' }} />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="(555) 123-4567"
                    disabled={isSubmitting}
                  />
                </div>
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
                  disabled={isSubmitting}
                />
              </div>

              {/* Service Selection */}
              <div className="form-group">
                <label className="form-label">Service Type *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select a service</option>
                  <optgroup label="Hair Services">
                    <option value="Haircut & Styling - $75">Haircut & Styling - $75</option>
                    <option value="Color & Highlights - $150">Color & Highlights - $150</option>
                    <option value="Blowout & Styling - $65">Blowout & Styling - $65</option>
                  </optgroup>
                  <optgroup label="Skincare Services">
                    <option value="Hydrafacial - $120">Hydrafacial - $120</option>
                    <option value="Anti-Aging Facial - $95">Anti-Aging Facial - $95</option>
                    <option value="Deep Cleansing Facial - $75">Deep Cleansing Facial - $75</option>
                  </optgroup>
                  <optgroup label="Nail Services">
                    <option value="Classic Manicure - $45">Classic Manicure - $45</option>
                    <option value="Gel Manicure - $65">Gel Manicure - $65</option>
                    <option value="Pedicure - $75">Pedicure - $75</option>
                  </optgroup>
                  <optgroup label="Special Packages">
                    <option value="Bridal Package - $350">Bridal Package - $350</option>
                    <option value="Spa Day Package - $280">Spa Day Package - $280</option>
                  </optgroup>
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label className="form-label flex items-center">
                    <Calendar size={16} style={{ marginRight: '8px' }} />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label flex items-center">
                    <Clock size={16} style={{ marginRight: '8px' }} />
                    Preferred Time *
                    {isLoading && <Loader size={16} className="ml-2 animate-spin" />}
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                    disabled={isSubmitting || isLoading || availableSlots.length === 0}
                  >
                    <option value="">
                      {isLoading ? 'Loading available times...' : 
                       availableSlots.length === 0 ? 'No available times' : 
                       'Select time'}
                    </option>
                    {availableSlots.map(slot => (
                      <option key={slot} value={slot}>
                        {BookingService.formatTimeSlot(slot)}
                      </option>
                    ))}
                  </select>
                  {availableSlots.length === 0 && formData.date && !isLoading && (
                    <p className="text-sm text-red-600 mt-1">
                      No available times for this date. Please select another date.
                    </p>
                  )}
                </div>
              </div>

              {/* Stylist Preference */}
              <div className="form-group">
                <label className="form-label">Stylist Preference</label>
                <select
                  name="stylist"
                  value={formData.stylist}
                  onChange={handleInputChange}
                  className="form-select"
                  disabled={isSubmitting}
                >
                  <option value="">No preference</option>
                  <option value="Navjot Dhaliwal (Founder & Master Stylist)">Navjot Dhaliwal (Founder & Master Stylist)</option>
                  <option value="Simran Dhillon (Senior Stylist)">Simran Dhillon (Senior Stylist)</option>
                  <option value="Gursahib Dhillon (Skincare Specialist)">Gursahib Dhillon (Skincare Specialist)</option>
                </select>
              </div>

              {/* Additional Notes */}
              <div className="form-group">
                <label className="form-label flex items-center">
                  <MessageSquare size={16} style={{ marginRight: '8px' }} />
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows={4}
                  placeholder="Any special requests, allergies, or preferences you'd like us to know about..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    'Request Appointment'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl mb-12">Booking Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl mb-4">Cancellation Policy</h3>
              <p className="mb-4">We require 24 hours notice for appointment cancellations or rescheduling.</p>
              <p>Late cancellations may incur a fee of 50% of the service cost.</p>
            </div>
            <div className="card">
              <h3 className="text-2xl mb-4">What to Expect</h3>
              <p className="mb-4">Please arrive 10 minutes before your appointment time.</p>
              <p>We'll confirm your appointment via phone or email within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto">
          <div className="card text-center immediate-assistance">
            <h2 className="text-3xl mb-6">Need Immediate Assistance?</h2>
            <p className="text-lg mb-8">
              Call us directly or visit our salon for walk-in appointments (subject to availability).
            </p>
            <div className="contact-info-grid">
              <div>
                <h3 className="text-xl mb-2">📞 Call Us</h3>
                <p className="mb-2">Main: 95013-14939</p>
                <p className="mb-2">Booking: 84277-50344</p>
                <p className="text-champagnegold font-semibold">Available during salon hours</p>
              </div>
              <div>
                <h3 className="text-xl mb-2">📍 Visit Us</h3>
                <p className="mb-2">Dhaliwal Complex, Surjit Singh Chowk</p>
                <p className="mb-2">Batala</p>
                <p className="text-champagnegold font-semibold">Free parking available</p>
              </div>
              <div>
                <h3 className="text-xl mb-2">✉️ Email Us</h3>
                <p className="mb-2">zorasalon07@gmail.com</p>
                <p className="mb-2">zorasalon07@gmail.com</p>
                <p className="text-champagnegold font-semibold">We respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage; 