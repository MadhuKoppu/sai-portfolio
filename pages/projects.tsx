// pages/projects.tsx
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import { motion, Variants } from 'framer-motion'; // Import Variants
import type { NextPage } from 'next';
import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const containerVariants: Variants = { // Explicitly type containerVariants
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// FIX: Explicitly type itemVariants and ensure ease is a tuple for cubic-bezier
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } } // Corrected ease and type assertion
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Airline Operations Optimization System (American Airlines)',
    description: 'Developed and deployed scalable applications using Java, Spring Boot, and microservices architecture for high performance and maintainability. Implemented Mixed Integer Linear Programming models with FICO Xpress to enhance decision-making and operational efficiency. Designed cloud-based solutions on Azure Kubernetes Service (AKS) for seamless application deployment and management of containerized workloads. Utilized Azure services including App Service, Functions, Service Bus Queue, and Key Vault to build secure and scalable cloud applications. Built responsive and interactive front-end interfaces using React, HTML, CSS, and JavaScript, improving accessibility and UX in dynamic web applications.',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'FICO Xpress', 'Azure AKS', 'React', 'Terraform', 'CI/CD (GitHub Actions, Azure DevOps)', 'Log4j', 'SLF4J', 'Dynatrace'],
    link: '#',
  },
  {
    id: 2,
    title: 'E-commerce Microservices Platform (Delta Airlines)',
    description: 'Built high-performance, scalable microservices using core Java concepts such as multi-threading, concurrency, and the Collections Framework. Optimized Java application performance through JVM tuning and profiling with VisualVM, reducing memory usage and improving response times by 15%. Built and secured RESTful web services with Spring Security and OAuth2, ensuring safe data exchange between microservices and external systems. Enhanced microservices scalability with Apache Kafka event streaming, optimizing message throughput by 10% for real-time data pipelines.',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'Spring Security', 'OAuth2', 'Kafka', 'JVM Tuning', 'VisualVM', 'Oracle', 'PostgreSQL', 'SonarQube'],
    link: '#',
  },
  {
    id: 3,
    title: 'Customer Service Portal & APIs (Gap Inc.))',
    description: 'Designed and developed UI for Customer Service Modules and Reports using Angular 7, TypeScript, HTML, and CSS. Developed lightweight backend APIs using Node.js and Express.js to complement ReactJS frontends, enhancing full-stack application performance. Built modular and scalable front-end interfaces using ReactJS, TypeScript, and Next.js, delivering fast-loading, SEO-friendly web applications. Developed GraphQL APIs optimizing data retrieval by 10% through efficient query resolution for MongoDB.',
    technologies: ['Angular 7', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'ReactJS', 'Next.js', 'GraphQL', 'MongoDB', 'Python Scripting', 'AWS (EC2, S3, Lambda, RDS)'],
    link: '#',
  },
  {
    id: 4,
    title: 'Enterprise Java Development (Unilever)',
    description: 'Architected and implemented microservices-based applications using Java and Spring Boot, leveraging J2EE design patterns like Value Object, Business Delegate, and DAO for modular and scalable systems. Leveraged Java 11 features, including enhanced String APIs and Local-Variable Syntax for Lambda Parameters, to improve code efficiency and readability. Designed modular and maintainable backend systems with Spring MVC, applying Inversion of Control (IoC) and Dependency Injection (DI) principles. Developed batch processing solutions using Spring Batch to handle high-volume data operations.',
    technologies: ['Java 8/11', 'Spring Boot', 'Spring MVC', 'Spring Batch', 'J2EE Design Patterns', 'Streams', 'Optional', 'Lambda expressions', 'JUnit', 'Mockito'],
    link: '#',
  }
];

const Projects: NextPage = () => {
  return (
    <div className="py-10 md:py-16">
      <Head>
        <title>My Projects - Saikumar Pakkir</title>
        <meta name="description" content="Showcase of Saikumar Pakkir's Full Stack Development Projects with Java, React, and AWS expertise." />
      </Head>

      <motion.h1
        className="text-5xl font-heading text-center text-text-dark mb-8 animate-fade-in-slide-up"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Portfolio of Work 🛠️
      </motion.h1>
      <motion.p
        className="text-lg text-text-medium text-center mb-12 max-w-4xl mx-auto animate-fade-in-slide-up delay-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        Here are some of my significant projects from my **~20 years of experience**, showcasing my expertise in **Full Stack Development, Microservices, Cloud Architecture, and UI/UX**. Each project highlights my commitment to building robust, scalable, and efficient software solutions across various industries.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;