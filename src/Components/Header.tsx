
'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
       
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Soft</span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Sell</span>
            </a>
          </div>
          
      
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">How It Works</a>
            <a href="#why-choose-us" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Why Choose Us</a>
            <a href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Testimonials</a>
            <ThemeToggle />
            <a href="#contact" className="btn-primary">Get Started</a>
          </nav>
          
      
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
      
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pb-4">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#why-choose-us" className="text-gray-600 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="btn-primary w-full text-center" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}