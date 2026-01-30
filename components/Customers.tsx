import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';

// Data structure with optimized URLs (320px width for better loading/rendering stability)
const logos = [
  { name: "AMD", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/320px-AMD_Logo.svg.png" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/320px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "Roche", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hoffmann-La_Roche_logo.svg/320px-Hoffmann-La_Roche_logo.svg.png" },
  { name: "Teledyne FLIR", url: "https://iili.io/fKCHadN.webp" },
  { name: "T-Mobile", url: "https://iili.io/fKCxd8u.webp" },
  { name: "NHS", url: "https://iili.io/fKCFtqu.webp" },
  { name: "B. Braun", url: "https://iili.io/fKCCiPt.webp" },
  // ORtelligence is niche; trying clearbit first, will fallback to text automatically if fails
  { name: "ORtelligence", url: "https://iili.io/fKCn0WN.webp" },
  { name: "Dyson", url: "https://iili.io/fKCd7RI.webpg" },
];

// Smart Logo Component that handles its own error state
const CustomerLogo = ({ name, url }: { name: string, url: string }) => {
  const [hasError, setHasError] = useState(false);

  // If image fails, return a styled text fallback that maintains the layout
  if (hasError) {
    return (
      <span className="text-lg font-bold text-gray-400 font-sans tracking-tight whitespace-nowrap group-hover:text-digica-dark transition-colors duration-500 select-none">
        {name}
      </span>
    );
  }

  return (
    <img
      src={url}
      alt={`${name} logo`}
      className="max-w-full max-h-12 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
      onError={() => setHasError(true)}
    />
  );
};

export const Customers: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading>Who are Digica</SectionHeading>
        <p className="text-gray-600 mb-12 max-w-none text-lg leading-relaxed">
          Digica is the partner that brings AI from demo to production. Based in Europe, our team of 80+ data scientists and software engineers specialises in AI and machine learning for industry leaders. Our clients—including Meta, AMD, Roche, and Dyson—prove our commitment to real operational impact. The logos you see are companies that trust Digica to deliver production‑grade AI.
        </p>

        <div className="relative w-full mask-linear-fade mt-8">
          {/* Gradient Masks for smooth fade effect on edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Infinite Scrolling Container */}
          <div className="flex w-max hover:pause-animation">
            <div className="flex items-center gap-16 animate-scroll">

              {/* Render Logos Twice for seamless loop */}
              {[...logos, ...logos].map((logo, i) => (
                <div key={`${logo.name}-${i}`} className="flex items-center justify-center w-40 h-24 flex-shrink-0 group transition-all duration-300">
                  <CustomerLogo name={logo.name} url={logo.url} />
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover\\:pause-animation:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};