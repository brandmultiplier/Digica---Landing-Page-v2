import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  // Using the hosted URL as per the current file state to ensure visibility
  const logoSrc = 'https://iili.io/f31WQ5b.png';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset to account for fixed header (approx 80px) + some breathing room
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
        ? 'bg-white border-gray-200 py-3 shadow-sm'
        : 'bg-white border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex-shrink-0 flex flex-col items-center gap-0.5 group w-[140px]">
          {!imgError ? (
            <img
              src={logoSrc}
              alt="Digica Logo"
              width="140"
              height="40"
              className="w-full h-auto object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex items-center gap-1">
              <span className="font-slab font-bold text-lg tracking-tight text-digica-dark">
                digica<span className="text-digica-red text-xl leading-[0]">.</span>
              </span>
            </div>
          )}

          <div className="hidden md:block w-full h-px bg-gray-200"></div>

          <span className="hidden md:block text-[9px] font-mono text-gray-500 leading-none uppercase tracking-[0.25em] text-center w-full whitespace-nowrap pt-0.5">
            Intelligent Software
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="text-sm font-medium text-gray-600 hover:text-digica-red transition-colors"
          >
            Who is Digica
          </a>
          <a
            href="#problem"
            onClick={(e) => handleScrollTo(e, 'problem')}
            className="text-sm font-medium text-gray-600 hover:text-digica-red transition-colors"
          >
            Hidden Losses
          </a>
          <a
            href="#process"
            onClick={(e) => handleScrollTo(e, 'process')}
            className="text-sm font-medium text-gray-600 hover:text-digica-red transition-colors"
          >
            How We Work
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="text-sm font-medium text-gray-600 hover:text-digica-red transition-colors"
          >
            Case Studies
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-digica-red text-white px-5 py-2 text-sm font-medium hover:bg-red-700 transition-colors rounded-sm"
          >
            Free Assessment
          </button>
        </nav>

        <button
          className="md:hidden text-digica-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-lg">
          <a
            href="#about"
            className="text-sm font-medium text-gray-600"
            onClick={(e) => handleScrollTo(e, 'about')}
          >
            Who is Digica
          </a>
          <a
            href="#problem"
            className="text-sm font-medium text-gray-600"
            onClick={(e) => handleScrollTo(e, 'problem')}
          >
            Hidden Losses
          </a>
          <a
            href="#process"
            className="text-sm font-medium text-gray-600"
            onClick={(e) => handleScrollTo(e, 'process')}
          >
            How We Work
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-gray-600"
            onClick={(e) => handleScrollTo(e, 'projects')}
          >
            Case Studies
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-digica-red text-white px-5 py-2 text-sm font-medium text-center rounded-sm w-full"
          >
            Free Assessment
          </button>
        </div>
      )}
    </header>
  );
};