
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
import { Separator } from "@/components/ui/separator";
import { Mail, Lock, Github, ArrowRight } from 'lucide-react';

const SignIn = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to an auth system
    toast.info('Sign in functionality would be implemented here');
  };

  const handleGoogleSignIn = () => {
    toast.info('Google Sign In would be implemented here');
  };

  const handleGithubSignIn = () => {
    toast.info('Github Sign In would be implemented here');
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background particles */}
      <Particles quantity={40} className="pointer-events-none" />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_50%)]"></div>
      
      <Navbar />
      
      <main className="flex flex-1 items-center justify-center py-24 px-4">
        <Card className="w-full max-w-md border-slate-800 bg-space-light/50 backdrop-blur-sm animate-fade-in">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Social Sign-in Options */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                onClick={handleGoogleSignIn} 
                variant="outline" 
                className="w-full bg-space/60 border-slate-700 hover:bg-space/80 hover:border-neon/50 transition-all"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </Button>
              <Button 
                onClick={handleGithubSignIn} 
                variant="outline" 
                className="w-full bg-space/60 border-slate-700 hover:bg-space/80 hover:border-neon/50 transition-all"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-slate-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-space-light/50 px-2 text-slate-400">Or continue with</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="hello@example.com" 
                    required 
                    className="bg-space/50 border-slate-700 text-slate-200 pl-10 placeholder:text-slate-500 focus:border-neon focus:ring-0 input-glow"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-300">Password</Label>
                  <Link to="/" className="text-xs text-neon hover:underline transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    className="bg-space/50 border-slate-700 text-slate-200 pl-10 placeholder:text-slate-500 focus:border-neon focus:ring-0 input-glow"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full flex items-center justify-center gap-2 group" glow>
                Sign in
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              <span className="text-slate-400">Don't have an account?</span>{' '}
              <Link to="/" className="text-neon hover:underline transition-colors">
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
