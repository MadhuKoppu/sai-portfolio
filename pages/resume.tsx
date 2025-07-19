// pages/resume.tsx
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import React from 'react';

const Resume: NextPage = () => {
  return (
    <motion.div
      className="text-center py-10 md:py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Head>
        <title>Saikumar Pakkir - Resume</title>
        <meta name="description" content="View or download Saikumar Pakkir's Full Stack Developer Resume" />
      </Head>

      <h1 className="text-5xl font-heading text-text-dark mb-8 animate-fade-in-slide-up">
        My Professional Journey 📄
      </h1>
      <p className="text-lg text-text-medium mb-10 max-w-3xl mx-auto animate-fade-in-slide-up delay-200">
        You can view my full professional resume below or download it for your convenience. It details my **~20 years of experience** as a Full Stack Developer, showcasing my expertise in **React, Next.js, Redux, Sagas, AWS, and more**.
      </p>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        <Link href="/Saikumar_Pakkir_FullStack_Resume.pdf" passHref legacyBehavior>
          <a
            className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-soft-lg focus:outline-none focus:ring-4 focus:ring-brand-primary/30"
            download="Saikumar_Pakkir_FullStack_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume (PDF) ⬇️
          </a>
        </Link>
      </motion.div>

      {/* Main container for the PDF viewer */}
      {/* We are simplifying the container to let the browser's default iframe behavior take over for content fit,
          but ensuring the *container* itself handles scroll if needed. */}
      <motion.div
        className="w-full max-w-6xl mx-auto h-[90vh] bg-bg-card rounded-xl shadow-soft-lg overflow-y-auto animate-fade-in-scale delay-500 backdrop-blur-lg border border-border-light transition-all duration-300 p-4" /* Added p-4 for internal padding */
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        <iframe
          // Reverting to minimal URL parameters for the iframe src.
          // We rely on the browser's default PDF viewer to scale to iframe size,
          // and the parent div's overflow-y-auto for overall scrolling.
          src="/Saikumar_Pakkir_FullStack_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full h-full" // iframe must fill its parent, so parent controls dimensions
          title="Saikumar Pakkir Resume"
          style={{ border: 'none' }}
        >
          Your browser does not support PDFs.
        </iframe>

        {/* Fallback text is outside the iframe now */}
        <p className="mt-4 text-text-medium">
          If the resume does not load above, please <a href="/Saikumar_Pakkir_FullStack_Resume.pdf" download="Saikumar_Pakkir_FullStack_Resume.pdf" className="text-brand-primary hover:underline">download the resume</a> to view it.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Resume;