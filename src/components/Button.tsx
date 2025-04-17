
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  glow?: boolean;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButtonProps = ButtonBaseProps & {
  as?: 'button';
  href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchorProps = ButtonBaseProps & {
  as: 'a';
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const Button = (props: ButtonProps) => {
  const {
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    fullWidth = false,
    glow = false,
    children,
    ...rest
  } = props;

  const variants = {
    primary: 'bg-neon text-space font-medium hover:bg-neon/90 transition-all',
    secondary: 'bg-secondary text-primary-foreground hover:bg-secondary/80 transition-all',
    outline: 'border border-neon/50 bg-transparent hover:bg-neon/10 text-neon transition-all',
    ghost: 'bg-transparent hover:bg-secondary/80 text-primary-foreground transition-all',
    link: 'bg-transparent text-neon underline-offset-4 hover:underline transition-all p-0',
    neon: 'relative bg-transparent text-neon border border-neon/30 overflow-hidden group',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm rounded-md',
    md: 'h-11 px-8 rounded-md',
    lg: 'h-12 px-10 rounded-lg',
  };

  const glowEffect = glow ? 'shadow-neon hover:shadow-neon-lg transition-shadow duration-300' : '';
  const widthClass = fullWidth ? 'w-full' : '';

  const neonVariantClasses = variant === 'neon' 
    ? 'before:absolute before:inset-0 before:bg-neon/10 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity' 
    : '';

  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium relative overflow-hidden',
    variants[variant],
    sizes[size],
    widthClass,
    glowEffect,
    neonVariantClasses,
    isLoading && 'opacity-70 cursor-not-allowed',
    className
  );

  const LoadingSpinner = () => (
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
  );

  const buttonContent = (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(isLoading && 'opacity-0')}
    >
      {children}
    </motion.span>
  );

  if ('as' in props && props.as === 'a') {
    const { as, ...anchorProps } = props;
    return (
      <a
        className={baseClasses}
        {...anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {isLoading && <LoadingSpinner />}
        {buttonContent}
      </a>
    );
  }

  const { as, ...buttonProps } = props;
  return (
    <button
      className={baseClasses}
      disabled={isLoading || ('disabled' in buttonProps && buttonProps.disabled)}
      {...buttonProps as React.ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {isLoading && <LoadingSpinner />}
      {buttonContent}
    </button>
  );
};

export default Button;
