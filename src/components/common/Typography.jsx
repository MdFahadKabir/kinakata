import React from 'react';

export function Typography({
  variant = 'p',
  children,
  className = '',
  ...props
}) {
  const Component = variant;

  const baseStyles = {
    h1: 'text-4xl md:text-5xl font-extrabold tracking-tight',
    h2: 'text-3xl md:text-4xl font-bold tracking-tight',
    h3: 'text-2xl md:text-3xl font-semibold',
    h4: 'text-xl md:text-2xl font-semibold',
    p: 'text-base md:text-lg leading-relaxed',
    span: 'text-sm md:text-base',
  };

  return (
    <Component
      className={`${baseStyles[variant] || baseStyles.p} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
