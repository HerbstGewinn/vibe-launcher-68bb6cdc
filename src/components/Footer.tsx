
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-neon font-semibold">Vibelaunch.io</p>
            <p className="text-slate-500 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/" className="text-slate-300 hover:text-neon transition-colors">Home</Link>
            <Link to="/about" className="text-slate-300 hover:text-neon transition-colors">About</Link>
            <Link to="/pricing" className="text-slate-300 hover:text-neon transition-colors">Pricing</Link>
            <Link to="/integrations" className="text-slate-300 hover:text-neon transition-colors">Integrations</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
