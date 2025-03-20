
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';
import { LogIn, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 backdrop-blur-lg bg-space/90 border-b border-slate-800/50 shadow-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-neon font-semibold text-xl">
            <span className="flex items-center gap-2">Vibelaunch.io</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-slate-300 hover:text-neon bg-transparent hover:bg-space/50",
                        isActive('/') && "text-neon"
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-slate-300 hover:text-neon bg-transparent hover:bg-space/50",
                        isActive('/about') && "text-neon"
                      )}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-slate-300 hover:text-neon bg-transparent hover:bg-space/50",
                      (isActive('/pricing') || isActive('/integrations')) && "text-neon"
                    )}
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] bg-space-light/90 backdrop-blur-md border border-slate-800 rounded-md shadow-lg">
                      <li>
                        <Link to="/pricing">
                          <div className="block select-none space-y-1 rounded-md p-3 hover:bg-space/50 transition-colors">
                            <div className="font-medium text-neon">Pricing</div>
                            <p className="text-sm text-slate-400">
                              Explore our different pricing plans designed for all needs.
                            </p>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/integrations">
                          <div className="block select-none space-y-1 rounded-md p-3 hover:bg-space/50 transition-colors">
                            <div className="font-medium text-neon">Integrations</div>
                            <p className="text-sm text-slate-400">
                              Connect with your favorite tools and platforms.
                            </p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="outline" size="sm" className="flex items-center gap-2 border-slate-700 bg-space/30 hover:bg-space/50 hover:border-neon/50 transition-all">
                <LogIn className="w-4 h-4" />
                Sign in
              </Button>
            </Link>
            <Button size="sm" className="bg-neon text-space hover:bg-neon/90 transition-colors">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-neon focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-800/50 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-md ${isActive('/') ? 'text-neon bg-space/30' : 'text-slate-300 hover:text-neon hover:bg-space/20'} transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 rounded-md ${isActive('/about') ? 'text-neon bg-space/30' : 'text-slate-300 hover:text-neon hover:bg-space/20'} transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/pricing" 
                className={`px-4 py-2 rounded-md ${isActive('/pricing') ? 'text-neon bg-space/30' : 'text-slate-300 hover:text-neon hover:bg-space/20'} transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/integrations" 
                className={`px-4 py-2 rounded-md ${isActive('/integrations') ? 'text-neon bg-space/30' : 'text-slate-300 hover:text-neon hover:bg-space/20'} transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Integrations
              </Link>
              <div className="pt-4 border-t border-slate-800/50 flex flex-col space-y-3">
                <Link 
                  to="/signin" 
                  className="px-4 py-2 text-slate-300 hover:text-neon flex items-center gap-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LogIn className="w-4 h-4" /> Sign in
                </Link>
                <Link 
                  to="/" 
                  className="px-4 py-2 bg-neon text-space rounded-md hover:bg-neon/90 transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
