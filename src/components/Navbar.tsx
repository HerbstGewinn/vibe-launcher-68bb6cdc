
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScroll } from '@/hooks/use-scroll';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScroll(50);
  
  const location = useLocation();
  
  const mainMenuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/integrations' }
  ];

  return (
    <motion.nav
      className={cn(
        'fixed top-0 w-full z-50 backdrop-blur-sm border-b border-b-space-light/50',
        scrolled
          ? 'bg-space/70'
          : 'bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container relative flex items-center justify-between h-16">
        <Link to="/" className="font-bold text-xl text-white">
          VIBELAUNCH.IO
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5">
          {mainMenuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                'text-sm font-medium hover:text-neon transition-colors',
                location.pathname === item.href ? 'text-neon' : 'text-white'
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" asChild>
            <Link to="/">Sign In</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-space/90 backdrop-blur-sm py-4 flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {mainMenuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  'text-sm font-medium hover:text-neon transition-colors',
                  location.pathname === item.href ? 'text-neon' : 'text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" asChild>
              <Link to="/">Sign In</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
