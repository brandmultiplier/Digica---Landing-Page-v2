import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
      {/* Added 'relative' to container to support absolute positioning of centered text on desktop */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative">

        {/* Logo Section */}
        <a href="#" className="flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity">
          {!imgError ? (
            <img
              src="https://iili.io/f31WZej.png"
              alt="Digica Industrial AI"
              width="150"
              height="50"
              className="h-9 w-auto object-contain brightness-0 invert"
              onError={() => setImgError(true)}
            />
          ) : (
            // Fallback Text Logo (White for Footer)
            <div className="flex items-center gap-1">
              <span className="font-slab font-bold text-2xl tracking-tight text-white">
                digica<span className="text-digica-red text-3xl leading-[0]">.</span>
              </span>
            </div>
          )}
        </a>

        {/* Copyright - Absolutely centered on Desktop for precision, flowing naturally on Mobile */}
        <div className="text-sm text-center w-full md:w-auto md:absolute md:left-1/2 md:-translate-x-1/2 flex flex-col gap-1 text-gray-400/80">
          <span>&copy; {new Date().getFullYear()} Digica Industrial AI. All rights reserved.</span>
          <span className="text-xs text-gray-500 font-mono tracking-tight">Forged in production. Proven under pressure.</span>
        </div>

        {/* Links Section - Updated URLs & Removed LinkedIn */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://www.digica.com/privacy-and-cookie-policy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.digica.com/terms-and-conditions.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};