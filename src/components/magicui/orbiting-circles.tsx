
"use client";

import React from "react";

interface OrbitingCirclesProps {
  children: React.ReactNode[];
  radius?: number;
  speed?: number;
  iconSize?: number;
  reverse?: boolean;
}

export function OrbitingCircles({
  children,
  radius = 150,
  speed = 10,
  iconSize = 30,
  reverse = false,
}: OrbitingCirclesProps) {
  return (
    <div className="relative animate-spin" style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}>
      {children.map((icon, index) => {
        const angle = (index / children.length) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        
        return (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-spin-reverse"
            style={{ 
              top: `calc(50% + ${y}px)`, 
              left: `calc(50% + ${x}px)`,
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              animationDuration: `${speed}s`, 
              animationDirection: reverse ? "normal" : "reverse" 
            }}
          >
            {icon}
          </div>
        );
      })}
    </div>
  );
}
