
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-space/80 border-b border-slate-800/50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-neon font-semibold text-xl">Vibelaunch.io</Link>
        
        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm ${isActive('/') ? 'text-neon' : 'text-slate-300 hover:text-neon'} transition-colors`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-sm ${isActive('/about') ? 'text-neon' : 'text-slate-300 hover:text-neon'} transition-colors`}
          >
            About
          </Link>
          <Link 
            to="/pricing" 
            className={`text-sm ${isActive('/pricing') ? 'text-neon' : 'text-slate-300 hover:text-neon'} transition-colors`}
          >
            Pricing
          </Link>
          <Link 
            to="/integrations" 
            className={`text-sm ${isActive('/integrations') ? 'text-neon' : 'text-slate-300 hover:text-neon'} transition-colors`}
          >
            Integrations
          </Link>
          
          <Link to="/signin">
            <Button variant="outline" size="sm" className="ml-4 flex items-center gap-2">
              <LogIn className="w-4 h-4" />
              Sign in
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
