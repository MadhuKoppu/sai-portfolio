// pages/resume.tsx
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import React from 'react';

const Resume: NextPage = () => {
  const resumeFilePath = '/Saikumar_Pakkir_FullStack_Resume.pdf';

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
        You can view my full professional resume below or download it for your convenience. It details my <strong> 6 years of experience</strong> as a Full Stack Developer, showcasing my expertise in <strong>Java, Speing, React, Next.js, Redux, Sagas, AWS, and more</strong>.
      </p>

      <motion.div
        className="mb-8 flex justify-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        <Link href={resumeFilePath} passHref legacyBehavior>
          <a
            className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-bold py-3 px-6 sm:px-8 rounded-full text-lg whitespace-nowrap transition duration-300 ease-in-out transform hover:scale-105 shadow-soft-lg focus:outline-none focus:ring-4 focus:ring-brand-primary/30"
            download="Saikumar_Pakkir_FullStack_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume (PDF) ⬇️
          </a>
        </Link>
      </motion.div>

      {/* Main container for the PDF viewer, adjusted for width fit */}
      <motion.div
        className="w-full max-w-6xl mx-auto h-[70vh] sm:h-[80vh] bg-bg-card rounded-xl shadow-soft-lg overflow-hidden animate-fade-in-scale delay-500 backdrop-blur-lg border border-border-light transition-all duration-300 p-2 sm:p-4"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        <iframe
          // Using #zoom=page-width is often the most effective for width fit
          src={resumeFilePath + '#toolbar=0&navpanes=0&zoom=page-width'}
          className="w-full h-full" // iframe fills its parent container
          title="Saikumar Pakkir Resume"
          style={{ border: 'none' }}
        >
          Your browser does not support PDFs. Please
          <a href={resumeFilePath} download="Saikumar_Pakkir_FullStack_Resume.pdf">download the resume</a>.
        </iframe>

        <p className="mt-4 text-text-medium">
          If the resume does not load above, please <a href={resumeFilePath} download="Saikumar_Pakkir_FullStack_Resume.pdf" className="text-brand-primary hover:underline">download the resume</a> to view it.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Resume;