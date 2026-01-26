import React from 'react';
import { Gauge, Factory, TrendingUp } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Personas: React.FC = () => {
  return (
    <section className="py-24 bg-digica-dark text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 grid-bg-dark pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <SectionHeading dark>
            Built for Leaders Who Know Something's Off
          </SectionHeading>
          <p className="text-xl text-gray-400 font-light max-w-3xl mt-2">
            Operations leaders who suspect their reports aren't telling the whole story
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* VP Operations Card */}
          <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-sm hover:border-digica-red/50 transition-colors group">
            <div className="w-12 h-12 rounded border border-white/20 flex items-center justify-center mb-8 text-gray-300 group-hover:text-digica-red group-hover:border-digica-red transition-colors">
               <Gauge className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">VP Operations</h3>
            <p className="text-xs font-bold text-digica-red tracking-widest uppercase mb-6">
              ACCOUNTABLE FOR THROUGHPUT
            </p>

            <p className="text-gray-400 leading-relaxed">
              You're accountable for throughput. But your data shows you last shift, not this one. Get real-time visibility into what's actually happening — before the end-of-month surprise.
            </p>
          </div>

          {/* Plant Director Card */}
          <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-sm hover:border-digica-red/50 transition-colors group">
            <div className="w-12 h-12 rounded border border-white/20 flex items-center justify-center mb-8 text-gray-300 group-hover:text-digica-red group-hover:border-digica-red transition-colors">
               <Factory className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Plant Director</h3>
            <p className="text-xs font-bold text-digica-red tracking-widest uppercase mb-6">
              EYES ON THE FLOOR
            </p>

            <p className="text-gray-400 leading-relaxed">
              You know something's off. The numbers don't match what you see on the floor. Finally get the data that confirms what your instincts are telling you — and the evidence to fix it.
            </p>
          </div>

          {/* COO Card */}
          <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-sm hover:border-digica-red/50 transition-colors group">
             <div className="w-12 h-12 rounded border border-white/20 flex items-center justify-center mb-8 text-gray-300 group-hover:text-digica-red group-hover:border-digica-red transition-colors">
               <TrendingUp className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">COO</h3>
            <p className="text-xs font-bold text-digica-red tracking-widest uppercase mb-6">
              MARGIN RESPONSIBILITY
            </p>

            <p className="text-gray-400 leading-relaxed">
              Every point of OEE is millions. How much are you leaving on the table? See the hidden losses across all your facilities — and know exactly where to focus for maximum impact.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};