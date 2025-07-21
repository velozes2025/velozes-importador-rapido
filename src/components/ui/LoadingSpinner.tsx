import React from 'react';
import { cn } from '../../utils/cn';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner = ({ size = 'md', className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex justify-center items-center w-full h-full min-h-[100px]">
      <div 
        className={cn(
          'border-4 border-neutral-200 border-t-primary-500 rounded-full animate-spin',
          sizeClasses[size],
          className
        )} 
      />
    </div>
  );
};

export default LoadingSpinner;