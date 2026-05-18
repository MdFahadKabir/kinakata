import { createElement, type HTMLAttributes, type ReactNode } from 'react';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  children: ReactNode;
}

const baseStyles: Record<TypographyVariant, string> = {
  h1: 'text-4xl md:text-5xl font-extrabold tracking-tight',
  h2: 'text-3xl md:text-4xl font-bold tracking-tight',
  h3: 'text-2xl md:text-3xl font-semibold',
  h4: 'text-xl md:text-2xl font-semibold',
  p: 'text-base md:text-lg leading-relaxed',
  span: 'text-sm md:text-base',
};

export function Typography({
  variant = 'p',
  children,
  className = '',
  ...props
}: TypographyProps) {
  return createElement(
    variant,
    {
      className: `${baseStyles[variant]} ${className}`,
      ...props,
    },
    children,
  );
}
