import React from 'react';
import logoImg from '../assets/images/logo_definitivo_1790153734764.jpg';

interface LogoProps {
  className?: string;
  variant?: 'nav' | 'hero' | 'footer' | 'badge';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'nav' }) => {
  const logoSrc = logoImg || '/logo-definitivo.png';

  if (variant === 'hero') {
    return (
      <div className={`relative inline-block ${className}`}>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-red-300/80 bg-red-900/10 backdrop-blur-xs p-1.5 transform hover:scale-[1.02] transition-transform duration-300">
          <img
            src={logoSrc}
            alt="Marocco Energy - Luce e Gas in Italia"
            className="w-48 sm:w-60 md:w-72 h-auto object-contain rounded-xl drop-shadow-xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center gap-2 p-2 rounded-2xl bg-white/95 shadow-md border border-red-200 ${className}`}>
        <img
          src={logoSrc}
          alt="Marocco Energy"
          className="h-10 sm:h-12 w-auto object-contain rounded-lg"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Default nav variant
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoSrc}
        alt="Marocco Energy"
        className="h-12 sm:h-14 md:h-16 w-auto object-contain rounded-lg shadow-xs hover:opacity-95 transition-opacity"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
