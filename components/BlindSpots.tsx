import React from 'react';
import { Eye, Clock, BarChart3, ArrowRight } from 'lucide-react';

export const BlindSpots: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-digica-dark text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 grid-bg-dark pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">

          {/* Left Column: The Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-digica-red font-mono font-bold mb-4">
              <Eye className="w-5 h-5" />
              <span>THE BLIND SPOTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              The Losses You Can't See: <br/>
              Where your margins quietly disappear.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Your dashboards show green. Your shift reports look fine.
              But somewhere between the PLC and the boardroom, the truth gets lost.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-digica-red pl-4">
              Hidden operational losses erode performance every day — even when KPIs look healthy.
              The question isn't whether you're losing margin. It's how much, and where.
            </p>
          </div>

          {/* Right Column: The Blind Spots */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-8">Where Your Margins Disappear</h3>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-red-500/20 flex items-center justify-center flex-shrink-0 text-digica-red">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Shift-to-Shift Variability</h4>
                  <p className="text-gray-400 text-sm">Same machine, same product, different output. Morning shift hits 94% OEE, night shift drops to 87%. No one knows why — and your reports can't tell you.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-red-500/20 flex items-center justify-center flex-shrink-0 text-digica-red">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">The 3% You Never Notice</h4>
                  <p className="text-gray-400 text-sm">Micro-stoppages under 2 minutes don't trigger alerts. But 40 of them per shift? That's 80 minutes of lost production hiding in plain sight.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-red-500/20 flex items-center justify-center flex-shrink-0 text-digica-red">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Dashboard Delusion</h4>
                  <p className="text-gray-400 text-sm">KPIs show green while operators report jams, quality issues, and slowdowns. The gap between the boardroom view and the floor reality is where your margin bleeds out.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Button: Centered and OUTSIDE the Grid */}
        <div className="flex justify-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 bg-digica-red text-white px-8 py-4 font-semibold hover:bg-red-600 transition-all rounded-sm shadow-lg shadow-red-900/20 group w-full sm:w-auto"
          >
            Find Your Hidden Losses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
