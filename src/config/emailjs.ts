import emailjs from '@emailjs/browser';

// Get EmailJS credentials from environment variables
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const contactTemplateId = process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

// Check if credentials are provided
if (!serviceId || !templateId || !publicKey) {
  console.warn('EmailJS credentials not found. Please set REACT_APP_EMAILJS_SERVICE_ID, REACT_APP_EMAILJS_TEMPLATE_ID, and REACT_APP_EMAILJS_PUBLIC_KEY in your .env file');
}

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: serviceId || 'your-service-id',
  TEMPLATE_ID: templateId || 'your-template-id',
  CONTACT_TEMPLATE_ID: contactTemplateId || 'your-contact-template-id',
  PUBLIC_KEY: publicKey || 'your-public-key',
};

// Initialize EmailJS only if credentials are available
if (publicKey && publicKey !== 'your-public-key') {
  emailjs.init(publicKey);
} else {
  console.warn('EmailJS not initialized due to missing credentials');
}

export { emailjs }; 