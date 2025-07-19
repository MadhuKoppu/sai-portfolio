// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-bg-card bg-opacity-90 backdrop-blur-lg p-4 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-text-dark text-2xl font-bold hover:text-brand-primary transition duration-300 transform hover:scale-105">
          Sai Pakkir <span className="text-xl">👨‍💻</span>
        </Link>
        <div className="space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/resume">Resume</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="text-text-medium hover:text-brand-primary px-4 py-2 rounded-lg text-lg font-medium transition duration-300 hover:bg-hover-light hover:shadow-sm">
      {children}
    </Link>
  );
};

export default Navbar;