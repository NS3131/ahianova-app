import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Leaf/Plant Icon */}
        <path
          d="M16 2C16 2 8 6 8 14C8 18 10 20 12 20C14 20 16 18 16 16C16 18 18 20 20 20C22 20 24 18 24 14C24 6 16 2 16 2Z"
          fill="#065f46"
          stroke="#065f46"
          strokeWidth="1"
        />
        {/* Stem */}
        <path
          d="M16 20L16 30"
          stroke="#065f46"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Small leaves */}
        <path
          d="M12 24L8 22L10 26L12 24Z"
          fill="#065f46"
        />
        <path
          d="M20 24L24 22L22 26L20 24Z"
          fill="#065f46"
        />
        {/* Growth lines */}
        <path
          d="M14 8L18 8"
          stroke="#065f46"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M13 12L19 12"
          stroke="#065f46"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Logo;
