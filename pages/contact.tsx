// pages/contact.tsx
import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import React from 'react';

const Contact: NextPage = () => {
  return (
    <motion.div
      className="py-10 md:py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Head>
        <title>Contact Saikumar Pakkir</title>
        <meta name="description" content="Get in touch with Saikumar Pakkir for full stack development inquiries" />
      </Head>

      <h1 className="text-5xl font-heading text-center text-text-dark mb-8 animate-fade-in-slide-up">
        Let's Connect! ✉️
      </h1>
      <p className="text-lg text-text-medium text-center mb-12 max-w-2xl mx-auto animate-fade-in-slide-up delay-200">
        Have a project in mind, a question about my work, or just want to chat about technology? I'm always open to discussing new opportunities and collaborations.
      </p>

      <motion.div
        className="max-w-md mx-auto p-8 md:p-10 shadow-soft-lg bg-bg-card bg-opacity-90 backdrop-blur-lg border border-border-light transition-all duration-300" /* max-w-md for mobile/tablet */
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <ContactForm />
      </motion.div>
    </motion.div>
  );
};

export default Contact;