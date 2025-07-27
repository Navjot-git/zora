export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  stylist: string;
  notes: string;
}

export interface BookingRecord extends BookingFormData {
  id?: string;
  created_at?: string;
}

export interface EmailTemplateData extends Record<string, unknown> {
  full_name: string;
  email_address: string;
  phone_number: string;
  selected_service: string;
  date_time: string;
  stylist_preference: string;
  additional_notes: string;
  salon_email: string;
} 