
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-neon font-semibold mb-2">Vibelaunch.io</p>
            <p className="text-slate-500 text-sm">Launch your product with confidence.</p>
            <p className="text-slate-500 text-xs mt-4">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          
          <div>
            <h3 className="text-slate-300 font-medium mb-3">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-neon transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-neon transition-colors text-sm">About</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-300 font-medium mb-3">Contact</h3>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-neon" />
              <a href="mailto:vibelaunchio@gmail.com" className="text-slate-400 hover:text-neon transition-colors text-sm">
                vibelaunchio@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center mt-8 pt-8 border-t border-slate-800/50">
          <Link to="/Terms" className="text-slate-400 hover:text-neon transition-colors text-xs mx-3">Terms</Link>
          <Link to="/Privacy" className="text-slate-400 hover:text-neon transition-colors text-xs mx-3">Privacy</Link>
          <Link to="/Cookies" className="text-slate-400 hover:text-neon transition-colors text-xs mx-3">Cookies</Link>
          <Link to="/Disclaimer" className="text-slate-400 hover:text-neon transition-colors text-xs mx-3">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
