
import React from 'react';
import { Link } from 'react-router-dom';

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
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-slate-300 font-medium mb-3">Navigate</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-neon transition-colors text-sm">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-400 hover:text-neon transition-colors text-sm">About</Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-slate-400 hover:text-neon transition-colors text-sm">Pricing</Link>
                </li>
                <li>
                  <Link to="/integrations" className="text-slate-400 hover:text-neon transition-colors text-sm">Integrations</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-300 font-medium mb-3">Account</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-neon transition-colors text-sm">Sign In</Link>
                </li>
                <li>
                  <Link to="/" className="text-slate-400 hover:text-neon transition-colors text-sm">Sign Up</Link>
                </li>
                <li>
                  <Link to="/" className="text-slate-400 hover:text-neon transition-colors text-sm">Help Center</Link>
                </li>
                <li>
                  <Link to="/" className="text-slate-400 hover:text-neon transition-colors text-sm">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-slate-300 font-medium mb-3">Subscribe to our newsletter</h3>
            <p className="text-slate-400 text-sm mb-3">Get the latest updates and news directly to your inbox.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-space/50 border border-slate-700 rounded-l-md px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-neon w-full"
              />
              <button className="bg-neon text-space px-4 py-2 rounded-r-md hover:bg-neon/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center mt-8 pt-8 border-t border-slate-800/50">
          <Link to="/" className="text-slate-400 hover:text-neon transition-colors text-xs mx-3">Terms</Link>
          <Link to="/" className="text-slate-400 hover:text-neon transition-colors text-xs mx-3">Privacy</Link>
          <Link to="/" className="text-slate-400 hover:text-neon transition-colors text-xs mx-3">Cookies</Link>
          <Link to="/" className="text-slate-400 hover:text-neon transition-colors text-xs mx-3">Security</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
