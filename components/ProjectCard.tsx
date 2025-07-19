// components/ProjectCard.tsx
import Link from 'next/link';
import React from 'react';
import { Project } from '../pages/projects'; // Ensure this path is correct

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    // Card styling applied directly with Tailwind v4 utilities
    <div className="p-6 md:p-8 flex flex-col h-full bg-bg-card bg-opacity-90 backdrop-blur-lg border border-border-light shadow-soft-lg transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-0.5">
      <h3 className="text-2xl font-bold text-text-dark mb-3">{project.title}</h3>
      <p className="text-text-medium mb-5 flex-grow text-justify leading-relaxed">{project.description}</p>
      <div className="mt-auto mb-4">
        {project.technologies.map((tech, index) => (
          // Skill highlight styling - vibrant background and subtle hover scale
          <span key={index} className="inline-block bg-brand-accent/10 text-brand-accent text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2 hover:bg-brand-accent/20 transition-colors duration-200 transform hover:scale-105">
            {tech}
          </span>
        ))}
      </div>
      <Link href={project.link} className="text-brand-primary hover:text-brand-secondary font-semibold transition duration-300 flex items-center group">
        Explore Project
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
};

export default ProjectCard;