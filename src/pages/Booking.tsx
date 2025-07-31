import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Loader } from 'lucide-react';
import { BookingService, AVAILABLE_SLOTS } from '../services/bookingService';
import { BookingFormData } from '../types/booking';

const BookingPage: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
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

  const handleServiceSelection = (serviceValue: string) => {
    setSelectedServices(prev => {
      const serviceIndex = prev.indexOf(serviceValue);
      
      if (serviceIndex > -1) {
        // Remove service if already selected
        return prev.filter(service => service !== serviceValue);
      } else {
        // Add service if not selected
        return [...prev, serviceValue];
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Validate that at least one service is selected
    if (selectedServices.length === 0) {
      setMessage({
        type: 'error',
        text: 'Please select at least one service.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Concatenate selected services with newlines
      const servicesString = selectedServices.join('\n');
      
      // Create booking data with concatenated services
      const bookingData = {
        ...formData,
        service: servicesString
      };

      // Save booking to database
      const saveResult = await BookingService.saveBooking(bookingData);
      
      if (!saveResult.success) {
        throw new Error(saveResult.error || 'Failed to save booking');
      }

      // Send email notification
      const emailResult = await BookingService.sendEmailNotification(bookingData);
      
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
      setSelectedServices([]);

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
    <div className="min-h-screen main-container" style={{
      backgroundImage: 'url("/feathers-1.png")',
      backgroundSize: 'contain',
      backgroundPosition: 'left top',
      backgroundRepeat: 'repeat-y',
      backgroundAttachment: 'scroll',
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
                <label className="form-label">Select Services *</label>
                <div className="text-sm text-gray-600 mb-3">
                  Click on services to select/deselect. You can choose multiple services for your appointment.
                </div>
                
                {/* Selected Services Display */}
                {selectedServices.length > 0 && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Selected Services ({selectedServices.length}):</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {selectedServices.map((service, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-2 rounded-lg bg-green-100 text-green-800 border border-green-300 hover:bg-green-200 transition-colors"
                        >
                          <span className="text-sm flex-1 pr-2 break-words">
                            {service}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleServiceSelection(service)}
                            className="text-green-600 hover:text-green-800 font-bold text-lg leading-none flex-shrink-0"
                            style={{ minWidth: '20px' }}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Service Categories */}
                <div className="space-y-4 max-h-96 overflow-y-auto border border-gray-200 rounded-lg p-4">
                  {/* Hair Services */}
                  <div>
                    <h4 className="font-semibold text-champagnegold mb-2">💇‍♀️ Hair Services</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Hair Cut (Basic) - ₹250",
                        "Hair Cut (Advanced / Fashion) - ₹400",
                        "Kids Hair Cut - ₹150",
                        "Front Layer Cutting - ₹100",
                        "Full Layer Cutting - ₹250",
                        "Blow Dry (Short) - ₹250",
                        "Blow Dry (Medium) - ₹350",
                        "Blow Dry (Long) - ₹450",
                        "Ironing (Short) - ₹400",
                        "Ironing (Medium) - ₹500",
                        "Ironing (Long) - ₹600",
                        "Curls (Temporary) - ₹500",
                        "Hair Wash + Conditioning - ₹200"
                      ].map((service) => (
                        <label key={service} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceSelection(service)}
                            className="rounded border-gray-300 text-champagnegold focus:ring-champagnegold"
                            disabled={isSubmitting}
                          />
                          <span className="text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Hair Spa & Treatments */}
                  <div>
                    <h4 className="font-semibold text-champagnegold mb-2">💆‍♀️ Hair Spa & Treatments</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Hair Spa (Basic - Short) - ₹700",
                        "Hair Spa (Basic - Medium) - ₹900",
                        "Hair Spa (Basic - Long) - ₹1100",
                        "Hair Spa (L'Oreal / Deep Repair - Short) - ₹1200",
                        "Hair Spa (L'Oreal / Deep Repair - Medium) - ₹1400",
                        "Hair Spa (L'Oreal / Deep Repair - Long) - ₹1600",
                        "Dandruff / Scalp Treatment - ₹800",
                        "Keratin Treatment (Short) - ₹2500",
                        "Keratin Treatment (Medium) - ₹3500",
                        "Keratin Treatment (Long) - ₹4500",
                        "Botox Hair Treatment (Short) - ₹3500",
                        "Botox Hair Treatment (Medium) - ₹5000",
                        "Botox Hair Treatment (Long) - ₹6000",
                        "Hair Smoothening / Rebonding (Short) - ₹3000",
                        "Hair Smoothening / Rebonding (Medium) - ₹4500",
                        "Hair Smoothening / Rebonding (Long) - ₹6000",
                        "Cysteine (Short) - ₹4000",
                        "Cysteine (Medium) - ₹5500",
                        "Cysteine (Long) - ₹7000"
                      ].map((service) => (
                        <label key={service} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceSelection(service)}
                            className="rounded border-gray-300 text-champagnegold focus:ring-champagnegold"
                            disabled={isSubmitting}
                          />
                          <span className="text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Face Services */}
                  <div>
                    <h4 className="font-semibold text-champagnegold mb-2">🧖‍♀️ Face Services</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Basic Cleanup - ₹400",
                        "Fruit Cleanup - ₹500",
                        "Detan Cleanup - ₹600",
                        "Fruit Facial - ₹700",
                        "Gold Facial - ₹1000",
                        "Pearl Facial - ₹1200",
                        "Diamond Facial - ₹1500",
                        "Anti-Aging / Skin Brightening Facial - ₹1800 - ₹2500",
                        "O3+ / VLCC / Cheryl's Facial - ₹1200 - ₹2000",
                        "Hydra Facial - ₹2500 - ₹4500",
                        "Face Bleach - ₹250",
                        "Face Detan - ₹300",
                        "Face Serum Therapy - ₹400"
                      ].map((service) => (
                        <label key={service} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceSelection(service)}
                            className="rounded border-gray-300 text-champagnegold focus:ring-champagnegold"
                            disabled={isSubmitting}
                          />
                          <span className="text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Manicure & Pedicure Services */}
                  <div>
                    <h4 className="font-semibold text-champagnegold mb-2">💅 Manicure & Pedicure Services</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Basic Manicure - ₹400",
                        "Detan Manicure - ₹600",
                        "Brightening Manicure - ₹700",
                        "Luxury Manicure - ₹900",
                        "Basic Pedicure - ₹500",
                        "Detan Pedicure - ₹700",
                        "Brightening Pedicure - ₹800",
                        "Luxury Spa Pedicure - ₹1,000",
                        "Gel Polish (Add-on) - ₹300",
                        "Nail Cut, File & Polish - ₹200",
                        "Nail Art (Per Nail) - ₹50+",
                        "Cracked Heel Repair Add-on - ₹200"
                      ].map((service) => (
                        <label key={service} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceSelection(service)}
                            className="rounded border-gray-300 text-champagnegold focus:ring-champagnegold"
                            disabled={isSubmitting}
                          />
                          <span className="text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Bridal Services */}
                  <div>
                    <h4 className="font-semibold text-champagnegold mb-2">👰‍♀️ Bridal Services</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "ZORA BRIDAL PRE-GLAM PACKAGE (Without Makeup) - ₹10,999",
                        "Bridal Makeup (HD) - ₹9,000",
                        "Reception Makeup - ₹5,000",
                        "Engagement Makeup - ₹5,500",
                        "Haldi / Mehndi Makeup - ₹2,000",
                        "Bridal Hair Styling - ₹1,500",
                        "Bridal Nail Art - ₹800",
                        "Bridal Facial - ₹1,200",
                        "Bridal Waxing Package - ₹800",
                        "Saree or Dupatta Draping - ₹300"
                      ].map((service) => (
                        <label key={service} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceSelection(service)}
                            className="rounded border-gray-300 text-champagnegold focus:ring-champagnegold"
                            disabled={isSubmitting}
                          />
                          <span className="text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Validation Message */}
                {selectedServices.length === 0 && (
                  <div className="text-red-600 text-sm mt-2">
                    Please select at least one service
                  </div>
                )}
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