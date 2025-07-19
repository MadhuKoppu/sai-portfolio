// components/Navbar.tsx
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-bg-card bg-opacity-90 backdrop-blur-lg p-4 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo/Brand Name */}
        <Link href="/" className="text-text-dark text-2xl font-bold hover:text-brand-primary transition duration-300 transform hover:scale-105">
          Sai Pakkir <span className="text-xl">👨‍💻</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/resume">Resume</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="sm:hidden text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-primary rounded"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Conditionally Rendered with Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="sm:hidden flex flex-col items-center mt-4 space-y-3 pb-2"
          >
            <NavLink href="/" onClick={toggleMenu}>Home</NavLink>
            <NavLink href="/projects" onClick={toggleMenu}>Projects</NavLink>
            <NavLink href="/resume" onClick={toggleMenu}>Resume</NavLink>
            <NavLink href="/contact" onClick={toggleMenu}>Contact</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <Link href={href} className="text-text-medium hover:text-brand-primary px-4 py-2 rounded-lg text-lg font-medium transition duration-300 hover:bg-hover-light hover:shadow-sm w-full text-center" onClick={onClick}>
      {children}
    </Link>
  );
};

export default Navbar;