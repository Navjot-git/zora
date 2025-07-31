import { supabase, BOOKINGS_TABLE } from '../config/supabase';
import { emailjs, EMAILJS_CONFIG } from '../config/emailjs';
import { BookingFormData, BookingRecord, EmailTemplateData } from '../types/booking';

// Available time slots
export const AVAILABLE_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', 
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];

// Salon owner email (customizable)
const SALON_OWNER_EMAIL = 'zorasalon07@gmail.com';

export class BookingService {
  // Save booking to database
  static async saveBooking(bookingData: BookingFormData): Promise<{ success: boolean; error?: string }> {
    try {
      // Check if Supabase is configured
      if (!supabase) {
        console.warn('Supabase not configured. Booking will not be saved to database.');
        return { success: true }; // Return success to allow form submission
      }

      const { data, error } = await supabase
        .from(BOOKINGS_TABLE)
        .insert([bookingData]);

      if (error) {
        console.error('Error saving booking:', error);
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Error saving booking:', error);
      return { success: false, error: 'Failed to save booking' };
    }
  }

  // Send email notification
  static async sendEmailNotification(bookingData: BookingFormData): Promise<{ success: boolean; error?: string }> {
    try {
      // Check if EmailJS is configured
      if (!EMAILJS_CONFIG.SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID === 'your-service-id') {
        console.warn('EmailJS not configured. Email notification will not be sent.');
        return { success: true }; // Return success to allow form submission
      }

      const emailData: EmailTemplateData = {
        full_name: bookingData.name,
        email_address: bookingData.email,
        phone_number: bookingData.phone,
        selected_service: bookingData.service,
        date_time: `${bookingData.date} at ${bookingData.time}`,
        stylist_preference: '', // Hidden from email
        additional_notes: bookingData.notes || 'No additional notes',
        salon_email: SALON_OWNER_EMAIL
      };

      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        emailData
      );

      if (result.status === 200) {
        return { success: true };
      } else {
        return { success: false, error: 'Failed to send email' };
      }
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, error: 'Failed to send email notification' };
    }
  }

  // Get available time slots for a specific date
  static async getAvailableSlots(selectedDate: string): Promise<string[]> {
    try {
      // Check if Supabase is configured
      if (!supabase) {
        console.warn('Supabase not configured. Returning all available slots.');
        return AVAILABLE_SLOTS;
      }

      const { data: bookings, error } = await supabase
        .from(BOOKINGS_TABLE)
        .select('time')
        .eq('date', selectedDate);

      if (error) {
        console.error('Error fetching bookings:', error);
        return AVAILABLE_SLOTS; // Return all slots if error
      }

      // Get booked times for the selected date
      const bookedTimes = bookings?.map(booking => booking.time) || [];

      // Filter out booked slots
      const availableSlots = AVAILABLE_SLOTS.filter(slot => !bookedTimes.includes(slot));

      return availableSlots;
    } catch (error) {
      console.error('Error getting available slots:', error);
      return AVAILABLE_SLOTS; // Return all slots if error
    }
  }

  // Format time slot for display
  static formatTimeSlot(timeSlot: string): string {
    const [hour, minute] = timeSlot.split(':');
    const hourNum = parseInt(hour);
    const ampm = hourNum >= 12 ? 'PM' : 'AM';
    const displayHour = hourNum > 12 ? hourNum - 12 : hourNum === 0 ? 12 : hourNum;
    return `${displayHour}:${minute} ${ampm}`;
  }

  // Get all bookings (for admin purposes)
  static async getAllBookings(): Promise<BookingRecord[]> {
    try {
      // Check if Supabase is configured
      if (!supabase) {
        console.warn('Supabase not configured. Cannot fetch bookings.');
        return [];
      }

      const { data, error } = await supabase
        .from(BOOKINGS_TABLE)
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching bookings:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching all bookings:', error);
      return [];
    }
  }
} 