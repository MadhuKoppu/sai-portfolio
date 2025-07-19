// pages/resume.tsx
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import React from 'react';

const Resume: NextPage = () => {
  // Define the public URL of your resume PDF.
  // IMPORTANT: For Google Docs Viewer to work, this PDF MUST be publicly accessible online.
  // During local development, you might still use the local path '/Saikumar_Pakkir_FullStack_Resume.pdf'.
  // However, for deployment, you'll upload your PDF to an S3 bucket or similar
  // and use its public URL here (e.g., 'https://your-s3-bucket.s3.amazonaws.com/Saikumar_Pakkir_FullStack_Resume.pdf').
  const resumePublicUrl = '/Saikumar_Pakkir_FullStack_Resume.pdf'; // Use local path for dev. Update for deployment!

  // URL for embedding with Google Docs Viewer
  // Google Docs Viewer attempts to handle responsive scaling better.
  const googleViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(
    window.location.origin + resumePublicUrl
  )}&embedded=true`;

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
        <Link href={resumePublicUrl} passHref legacyBehavior>
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
      <motion.div
        className="w-full max-w-6xl mx-auto h-[70vh] sm:h-[80vh] bg-bg-card rounded-xl shadow-soft-lg overflow-hidden animate-fade-in-scale delay-500 backdrop-blur-lg border border-border-light transition-all duration-300 p-2 sm:p-4"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        {/* Using Google Docs Viewer for embedding */}
        <iframe
          // Use the googleViewerUrl. This requires the PDF to be publicly accessible.
          // For local testing, window.location.origin will be 'http://localhost:3000'
          // On deployment, it needs to be the actual public URL of your resume.pdf.
          src={googleViewerUrl}
          className="w-full h-full"
          title="Saikumar Pakkir Resume"
          style={{ border: 'none' }}
          allowFullScreen // Allows viewer to go full screen
          loading="lazy" // Lazy load the iframe
        >
          Your browser does not support PDFs. Please
          <a href={resumePublicUrl} download="Saikumar_Pakkir_FullStack_Resume.pdf">download the resume</a>.
        </iframe>

        <p className="mt-4 text-text-medium">
          If the resume does not load above, please <a href={resumePublicUrl} download="Saikumar_Pakkir_FullStack_Resume.pdf" className="text-brand-primary hover:underline">download the resume</a> to view it.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Resume;