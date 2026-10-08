import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'full';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'full', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 md:h-10',
    md: 'h-10 md:h-14',
    lg: 'h-14 md:h-20'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Vector reproducing the DivyN Violet Tooth & Sparkles Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 160 160"
          className="w-auto h-full drop-shadow-md transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="divynPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#5B21B6" />
            </linearGradient>
            <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#DDD6FE" />
            </linearGradient>
            <filter id="violetGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Sparkles Above Tooth */}
          <g filter="url(#violetGlow)">
            {/* Sparkle 1 Top Big */}
            <path d="M 80 10 L 83 25 L 98 28 L 83 31 L 80 46 L 77 31 L 62 28 L 77 25 Z" fill="url(#sparkleGrad)" />
            {/* Sparkle 2 Right */}
            <path d="M 115 25 L 117 35 L 127 37 L 117 39 L 115 49 L 113 39 L 103 37 L 113 35 Z" fill="url(#sparkleGrad)" />
            {/* Sparkle 3 Left Small */}
            <path d="M 52 32 L 53 39 L 60 40 L 53 41 L 52 48 L 51 41 L 44 40 L 51 39 Z" fill="url(#sparkleGrad)" />
            {/* Sparkle 4 Mid Sparkle */}
            <path d="M 96 46 L 97 51 L 102 52 L 97 53 L 96 58 L 95 53 L 90 52 L 95 51 Z" fill="url(#sparkleGrad)" />
          </g>

          {/* Stylized Violet Tooth Body */}
          <path
            d="M 45 45 
               C 25 50, 15 75, 18 100 
               C 20 120, 30 145, 45 152 
               C 55 156, 62 135, 70 125 
               C 78 115, 82 115, 90 125 
               C 98 135, 105 156, 115 152 
               C 130 145, 140 120, 142 100 
               C 145 75, 135 50, 115 45 
               C 100 42, 88 52, 80 50 
               C 72 52, 60 42, 45 45 Z"
            fill="url(#divynPurpleGrad)"
          />

          {/* Inner Swirl / Dental Care Cutout Silhouette */}
          <path
            d="M 75 62 
               C 62 65, 55 80, 58 98 
               C 60 112, 70 120, 78 110 
               C 85 102, 88 88, 82 78 
               C 78 72, 72 75, 74 82 
               C 76 88, 73 95, 68 92 
               C 64 90, 64 78, 70 70 
               C 74 65, 80 65, 84 68 Z"
            fill="#FFFFFF"
            opacity="0.92"
          />

          {/* Inner Sparkle dot */}
          <circle cx="80" cy="80" r="4" fill="#8B5CF6" />
        </svg>
      </div>

      {/* Typography Section */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className="font-extrabold text-2xl md:text-3xl tracking-wider text-slate-900 dark:text-white font-['Poppins']">
            DIV<span className="text-purple-600 dark:text-purple-400">Y</span>N
          </span>
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] text-purple-700 dark:text-purple-300 font-['Poppins']">
            THE DENTIST
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};
