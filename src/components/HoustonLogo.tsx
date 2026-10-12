import React from 'react';
import { houstonLogoImg } from '../assets/images';

interface HoustonLogoProps {
  className?: string;
  variant?: 'full-badge' | 'transparent' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const HoustonLogo: React.FC<HoustonLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-9',
    md: 'h-12 sm:h-13',
    lg: 'h-16',
    xl: 'h-20',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={houstonLogoImg}
        alt="Houston Plumbing Services LLC"
        className={`${heightClasses[size]} w-auto object-contain rounded-md drop-shadow-sm`}
      />
    </div>
  );
};
