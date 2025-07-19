// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-bg-card text-text-medium p-6 mt-12 border-t border-border-light">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {currentYear} Saikumar Pakkir. All rights reserved.</p>
        <p className="mt-2">
        </p>
        <div className="mt-4 space-x-4">
          <a href="https://www.linkedin.com/in/saikumar-pakkir/" target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:text-brand-secondary transition duration-300">
            LinkedIn
          </a>
          {/* Add other social links with icons if desired */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;