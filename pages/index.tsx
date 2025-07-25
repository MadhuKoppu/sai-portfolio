// pages/index.tsx
import Head from 'next/head';
import { motion, Variants } from 'framer-motion'; // Import Variants type
import type { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const containerVariants: Variants = { // Explicitly type containerVariants
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// FIX: Explicitly type itemVariants and ensure ease is a tuple for cubic-bezier
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } } // Corrected ease and type assertion
};

const Home: NextPage = () => {
  return (
    <motion.div
      className="py-10 md:py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Head>
        <title>Saikumar Pakkir - Full Stack Developer</title>
        <meta name="description" content="Saikumar Pakkir's Innovative Full Stack Developer Portfolio showcasing expertise in Java, React, AWS and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <motion.section // Ensure this is motion.section
        className="hero-section mb-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div // Ensure this is motion.div
          className="text-center md:text-left order-2 md:order-1"
          variants={itemVariants}
        >
          <motion.p // Ensure this is motion.p
            className="text-xl md:text-2xl text-text-medium mb-2 animate-fade-in-slide-up"
            variants={itemVariants}
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1 // Ensure this is motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading text-text-dark mb-6 leading-tight animate-fade-in-slide-up"
            variants={itemVariants}
          >
            <span className="text-brand-primary inline-block transform hover:scale-105 transition-transform duration-300">Saikumar Pakkir</span>
            <br />
            Full Stack Developer 👋
          </motion.h1>
          <motion.div // Ensure this is motion.div
            className="mt-8 space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center md:justify-start"
            variants={itemVariants}
          >
            <Link href="/contact" className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-soft-lg focus:outline-none focus:ring-4 focus:ring-brand-primary/30">
              Contact Me 📞
            </Link>
            <Link href="/resume" className="bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-hover-light hover:text-brand-secondary font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-card-hover focus:outline-none focus:ring-4 focus:ring-brand-primary/30">
              View Resume 📄
            </Link>
          </motion.div>
        </motion.div>

        <motion.div // Ensure this is motion.div
          className="flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0 animate-fade-in-scale"
          variants={itemVariants}
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden bg-bg-card bg-opacity-90 backdrop-blur-lg border border-border-light shadow-soft-lg flex items-center justify-center p-2 sm:p-4 transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-0.5">
            <Image
              src="/saiProfile.jpeg"
              alt="Saikumar Pakkir Profile"
              width={320}
              height={320}
              className="rounded-2xl object-cover w-full h-full"
              priority={true}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section // Ensure this is motion.section
        className="about-section mb-16 px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 // Ensure this is motion.h2
          className="text-4xl font-heading text-text-dark mb-6 border-b-2 border-brand-primary/50 pb-3 inline-block animate-fade-in-slide-up delay-400"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <motion.p // Ensure this is motion.p
          className="text-lg md:text-xl text-text-medium leading-relaxed text-justify animate-fade-in-slide-up delay-500"
          variants={itemVariants}
        >
          An Innovative Full Stack Developer with deep expertise in Java, Spring Boot, microservices, and cloud platforms, delivering robust, scalable applications and RESTful services. Proficient in modern UI technologies, crafting intuitive and responsive user interfaces. Proven success in enhancing user experience and operational efficiency through creative, high-quality software solutions. Adept in Agile methodologies, driving project success through collaboration, clear communication, and iterative delivery. Expert in algorithm design, system architecture, and code optimization, with a passion for solving complex challenges and delivering exceptional results.
        </motion.p>
      </motion.section>

      {/* Technical Skills Section */}
      <motion.section // Ensure this is motion.section
        className="skills-summary mb-16 px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 // Ensure this is motion.h2
          className="text-4xl font-heading text-text-dark mb-10 border-b-2 border-brand-primary/50 pb-3 inline-block animate-fade-in-slide-up delay-600"
          variants={itemVariants}
        >
          Technical Expertise
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <SkillCategory title="Programming Languages" icon="💻" skills={['Java', 'Python', 'JavaScript', 'TypeScript']} />
          <SkillCategory title="Frameworks & Libraries" icon="🛠️" skills={['Spring Framework', 'Hibernate', 'Angular', 'ReactJS', 'NodeJS', 'GraphQL', 'Express.js', 'J2EE design patterns']} />
          <SkillCategory title="Cloud & DevOps" icon="☁️" skills={['Azure', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD (GitHub Actions, Jenkins, Azure DevOps)']} />
          <SkillCategory title="Databases & Messaging" icon="🗄️" skills={['MongoDB', 'MySQL', 'Oracle', 'PostgreSQL', 'JMS', 'Kafka']} />
          <SkillCategory title="Tools & Methodologies" icon="⚙️" skills={['Git', 'GitHub', 'Maven', 'Gradle', 'RESTful/SOAP', 'Selenium', 'JUnit', 'Agile/Scrum', 'JIRA', 'Confluence', 'SonarQube', 'Dynatrace']} />
        </div>
      </motion.section>
    </motion.div>
  );
};

interface SkillCategoryProps {
  title: string;
  icon: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <motion.div className="p-6 text-left h-full bg-bg-card bg-opacity-90 backdrop-blur-lg border border-border-light shadow-soft-lg transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-0.5">
      <h3 className="text-xl font-semibold text-text-dark mb-4 flex items-center">
        <span className="text-3xl mr-3">{icon}</span> {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="inline-block bg-brand-accent/10 text-brand-accent text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2 transition-colors duration-200 hover:bg-brand-accent/20 transform hover:scale-105">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;