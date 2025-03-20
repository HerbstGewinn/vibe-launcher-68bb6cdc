
import React from 'react';
import { cn } from '@/lib/utils';

interface LampProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Lamp = ({ className, size = "md" }: LampProps) => {
  const sizesMap = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  return (
    <div className={cn("relative", className)}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 opacity-85">
        {/* Lamp fixture */}
        <div className="w-10 h-8 bg-slate-800 rounded-t-md border-t border-x border-slate-700 mx-auto"></div>
        <div className="w-20 h-2 bg-slate-700 rounded-sm mx-auto"></div>
        
        {/* Lamp body */}
        <div className="w-32 h-1 bg-slate-600 rounded-md mx-auto"></div>
        <div className="w-40 h-3 bg-slate-800 rounded-b-3xl mx-auto border-b border-x border-slate-700"></div>
      </div>
      
      {/* Light effect */}
      <div 
        className={cn(
          "relative z-10 mx-auto rounded-full bg-neon/5 animate-lamp-light",
          sizesMap[size]
        )}
      >
        <div 
          className={cn(
            "absolute inset-0 rounded-full bg-neon/10 blur-3xl",
            sizesMap[size]
          )}
        ></div>
      </div>
    </div>
  );
};

export default Lamp;
