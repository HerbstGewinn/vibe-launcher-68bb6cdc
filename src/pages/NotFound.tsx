
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-space">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-neon/10 border border-neon mb-6 mx-auto">
          <span className="text-neon text-4xl font-bold">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-slate-300 mb-8">
          The page you're looking for doesn't exist or has been moved. Please check the URL or return to the home page.
        </p>
        <Button as="a" href="/" glow>
          Return Home
        </Button>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-neon/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-1/3 bg-neon/3 blur-3xl rounded-full"></div>
      </div>
    </div>
  );
};

export default NotFound;
