'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {

  const [isMounted, setIsMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

 
  useEffect(() => {
    setIsMounted(true);
   
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }, []);


  useEffect(() => {
    if (!isMounted) return;
    
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode, isMounted]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.9
    }
  };

  const iconVariants = {
    initial: { rotate: -30, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 30, opacity: 0 }
  };


  if (!isMounted) {
    return (
      <button 
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Theme toggle"
      >
        <div className="w-5 h-5"></div>
      </button>
    );
  }

  return (
  <motion.button
    onClick={toggleTheme}
    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    variants={buttonVariants}
    whileHover="hover"
    whileTap="tap"
  >
    <AnimatePresence mode="wait" initial={false}>
      {darkMode ? (
        <motion.div
          key="sun"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Sun size={20} className="text-yellow-300" />
        </motion.div>
      ) : (
        <motion.div
          key="moon"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Moon size={20} className="text-blue-700" />
        </motion.div>
      )}
    </AnimatePresence>
  </motion.button>
  );
}