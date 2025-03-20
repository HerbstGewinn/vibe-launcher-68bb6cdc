
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  glow?: boolean;
  as?: React.ElementType;
  href?: string;
  children: React.ReactNode;
}

const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  glow = false,
  as: Component = 'button',
  href,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: 'bg-neon text-space font-medium hover:bg-neon/90 transition-all',
    secondary: 'bg-secondary text-primary-foreground hover:bg-secondary/80 transition-all',
    outline: 'border border-neon/50 bg-transparent hover:bg-neon/10 text-neon transition-all',
    ghost: 'bg-transparent hover:bg-secondary/80 text-primary-foreground transition-all',
    link: 'bg-transparent text-neon underline-offset-4 hover:underline transition-all p-0',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm rounded-md',
    md: 'h-11 px-8 rounded-md',
    lg: 'h-12 px-10 rounded-lg',
  };

  const glowEffect = glow ? 'shadow-neon hover:shadow-neon-lg transition-shadow duration-300' : '';
  const widthClass = fullWidth ? 'w-full' : '';

  const commonProps = {
    className: cn(
      'inline-flex items-center justify-center font-medium relative overflow-hidden',
      variants[variant],
      sizes[size],
      widthClass,
      glowEffect,
      isLoading && 'opacity-70 cursor-not-allowed',
      className
    ),
    disabled: isLoading || props.disabled,
    ...props,
  };

  // If Component is an anchor tag, add the href prop
  if (Component === 'a' && href) {
    return (
      <Component href={href} {...commonProps}>
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24">
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        <span className={cn(isLoading && 'opacity-0')}>
          {children}
        </span>
      </Component>
    );
  }

  return (
    <Component {...commonProps}>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
      <span className={cn(isLoading && 'opacity-0')}>
        {children}
      </span>
    </Component>
  );
};

export default Button;
