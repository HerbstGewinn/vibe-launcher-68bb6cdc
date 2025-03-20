
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button'; // Changed import to use our custom Button
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

const SignIn = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to an auth system
    toast.info('Sign in functionality would be implemented here');
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background particles */}
      <Particles quantity={40} className="pointer-events-none" />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_50%)]"></div>
      
      <Navbar />
      
      <main className="flex flex-1 items-center justify-center py-24 px-4">
        <Card className="w-full max-w-md border-slate-800 bg-space-light/50 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="hello@example.com" 
                  required 
                  className="bg-space/50 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:border-neon focus:ring-0 input-glow"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/" className="text-xs text-neon hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className="bg-space/50 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:border-neon focus:ring-0 input-glow"
                />
              </div>
              <Button type="submit" className="w-full" glow>
                Sign in
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              <span className="text-slate-400">Don't have an account?</span>{' '}
              <Link to="/" className="text-neon hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignIn;
