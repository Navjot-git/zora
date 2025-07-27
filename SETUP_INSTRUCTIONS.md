# Zora Salon Website Setup Instructions

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Supabase account
- EmailJS account

## Installation

1. **Clone and install dependencies:**
```bash
cd zora-salon-new
npm install
```

2. **Set up environment variables:**
Create a `.env` file in the root directory with your credentials:

```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## Supabase Setup

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key

### 2. Create Database Table
Run this SQL in your Supabase SQL editor:

```sql
-- Create bookings table
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  service VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  time VARCHAR(10) NOT NULL,
  stylist VARCHAR(255),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policies for INSERT and SELECT
CREATE POLICY "Enable insert for all users" ON bookings
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable select for all users" ON bookings
  FOR SELECT USING (true);
```

### 3. Get Supabase Credentials
1. Go to Settings → API in your Supabase dashboard
2. Copy the Project URL and anon public key
3. Add them to your `.env` file

## EmailJS Setup

### 1. Create EmailJS Account
1. Go to [emailjs.com](https://emailjs.com)
2. Create an account and verify your email

### 2. Create Email Service
1. Go to Email Services
2. Add a new service (Gmail, Outlook, etc.)
3. Note your Service ID

### 3. Create Email Template
1. Go to Email Templates
2. Create a new template with this structure:

**Template Variables:**
- `{{full_name}}` - Customer's full name
- `{{email_address}}` - Customer's email
- `{{phone_number}}` - Customer's phone
- `{{selected_service}}` - Selected service
- `{{date_time}}` - Appointment date and time
- `{{stylist_preference}}` - Preferred stylist
- `{{additional_notes}}` - Additional notes
- `{{salon_email}}` - Salon email (zorasalon07@gmail.com)

**Template Example:**
```
New Booking Request

Name: {{full_name}}
Email: {{email_address}}
Phone: {{phone_number}}
Service: {{selected_service}}
Date & Time: {{date_time}}
Stylist: {{stylist_preference}}
Notes: {{additional_notes}}

Please contact the customer to confirm this appointment.
```

### 4. Get EmailJS Credentials
1. Note your Service ID, Template ID, and Public Key
2. Add them to your `.env` file

## Troubleshooting Booking Issues

### If booking fails with "Failed to fetch" error:

1. **Check Supabase RLS Policies:**
   Run this SQL in your Supabase SQL editor to ensure proper policies:
   ```sql
   -- Drop existing policies if any
   DROP POLICY IF EXISTS "Enable insert for all users" ON bookings;
   DROP POLICY IF EXISTS "Enable select for all users" ON bookings;
   
   -- Create new policies
   CREATE POLICY "Enable insert for all users" ON bookings
     FOR INSERT WITH CHECK (true);
   
   CREATE POLICY "Enable select for all users" ON bookings
     FOR SELECT USING (true);
   ```

2. **Verify Table Structure:**
   Make sure your bookings table has these exact column names:
   - `name` (VARCHAR)
   - `email` (VARCHAR)
   - `phone` (VARCHAR)
   - `service` (VARCHAR)
   - `date` (DATE)
   - `time` (VARCHAR)
   - `stylist` (VARCHAR)
   - `notes` (TEXT)
   - `created_at` (TIMESTAMP)

3. **Check Environment Variables:**
   Ensure your `.env` file has all required variables and the app is restarted after changes.

4. **Test Supabase Connection:**
   Go to your Supabase dashboard → Table Editor → bookings and try to manually insert a row to verify the table works.

5. **Check Browser Console:**
   Open browser developer tools (F12) and check the Console tab for specific error messages.

## Running the Application

1. **Start the development server:**
```bash
npm start
```

2. **Open your browser:**
Navigate to `http://localhost:3000`

## Features

- **Responsive Design:** Works on all devices
- **Booking System:** Real-time availability and email notifications
- **Service Catalog:** Complete price list with descriptions
- **Contact Information:** Address, phone, and social media links
- **Team Profiles:** Staff information and photos
- **Modern UI:** Elegant design with custom styling

## File Structure

```
src/
├── components/          # Reusable components
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Booking.tsx     # Booking page
│   └── Contact.tsx     # Contact page
├── services/           # Business logic
│   └── bookingService.ts
├── config/             # Configuration files
│   ├── supabase.ts     # Supabase client
│   └── emailjs.ts      # EmailJS client
├── types/              # TypeScript types
│   └── booking.ts      # Booking interfaces
└── index.css           # Global styles
```

## Deployment

The application can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

Make sure to set the environment variables in your hosting platform's settings. 