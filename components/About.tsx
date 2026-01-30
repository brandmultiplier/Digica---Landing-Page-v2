import React from 'react';
import { SectionHeading } from './SectionHeading';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-digica-dark text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 grid-bg-dark pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <SectionHeading dark>Who are Digica?</SectionHeading>
          <ul className="space-y-6 text-lg text-gray-300 font-light">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-digica-red mt-2.5 flex-shrink-0"></span>
              <span>Software Services company specialising in real world AI / Machine Learning projects.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-digica-red mt-2.5 flex-shrink-0"></span>
              <span>Privately owned, established 2016.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-digica-red mt-2.5 flex-shrink-0"></span>
              <span>Team of 80 data scientists and software engineers.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-digica-red mt-2.5 flex-shrink-0"></span>
              <span>Core engineering team based in Poland, UK HQ, business development in the US and new location in Berlin.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-digica-red mt-2.5 flex-shrink-0"></span>
              <span>Full life-cycle experience: research, prototyping, MVP, full deployment, testing, support.</span>
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-gray-800 to-black rounded-sm border border-gray-700 p-8 relative overflow-hidden">
            {/* Abstract graphic mimicking the cube/wire visual in PDF */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="absolute bg-digica-red/20 h-[1px]"
                  style={{
                    width: '100%',
                    top: `${i * 10 + 10}%`,
                    transform: `rotate(${i % 2 === 0 ? 5 : -5}deg)`
                  }}
                />
              ))}
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="text-5xl font-bold text-white mb-2">80+</div>
              <div className="text-xl text-digica-red font-mono mb-8">Expert Engineers</div>

              <div className="text-5xl font-bold text-white mb-2">2016</div>
              <div className="text-xl text-digica-red font-mono">Established</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};