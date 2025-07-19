// components/ContactForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'success' | 'error' | 'submitting' | ''>(''); // 'success', 'error', 'submitting'

  // IMPORTANT: Replace with your actual Formspree Endpoint
  // You get this URL after creating a form on Formspree.io
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeozeobd'; // <<< REMEMBER TO REPLACE THIS!

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default browser form submission
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Important for Formspree to return JSON
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        // Formspree requires email confirmation for the first submission from a new domain/location
        // You'll receive an email from Formspree to confirm and activate the form.
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message via Formspree.');
      }
    } catch (error: any) { // Use 'any' type for error for broad error handling
      console.error('Contact form submission error:', error.message);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-medium mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border-light rounded-lg shadow-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200 bg-bg-card/70"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border-light rounded-lg shadow-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200 bg-bg-card/70"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-medium mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full px-4 py-3 border border-border-light rounded-lg shadow-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all duration-200 bg-bg-card/70 resize-y"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary/30 transition duration-300 ${status === 'submitting' ? 'opacity-60 cursor-not-allowed' : ''}`}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-center mt-4 font-medium animate-fade-in-scale">Message sent successfully! 🎉 Check your email to confirm the form submission.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center mt-4 font-medium animate-fade-in-scale">Failed to send message. Please try again. 😔</p>
      )}
    </form>
  );
};

export default ContactForm;