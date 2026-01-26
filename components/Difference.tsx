import React from 'react';
import { Eye, Search, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Difference: React.FC = () => {
  const differences = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "End-to-End Visibility",
      text: "From PLC to ERP, everything connected in real-time. See what's actually happening on your line — not what happened last shift."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Root Cause in Minutes",
      text: "Stop spending hours investigating downtime events. Trace any issue back to its source instantly — machine, operator, material, or process."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Shift Consistency",
      text: "Standardise performance across all shifts. Identify what top performers do differently and replicate it across teams."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive, Not Reactive",
      text: "Intervene before the breakdown, not after. Spot the patterns that precede failures and quality issues while there's still time to act."
    }
  ];

  return (
    <section id="solution" className="pt-8 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <SectionHeading>See Everything. Fix What Matters.</SectionHeading>
          <p className="text-gray-600 text-lg max-w-3xl mt-2">
            Complete operational visibility that closes the gap between what your reports show and what's really happening on the floor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {differences.map((item, idx) => (
            <div key={idx} className="group p-8 border border-gray-200 hover:border-digica-red/30 rounded-sm transition-all hover:shadow-lg bg-gray-50 hover:bg-white">
              <div className="text-digica-dark mb-6 group-hover:text-digica-red transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-digica-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
             className="inline-flex items-center justify-center gap-2 bg-digica-red text-white px-8 py-4 font-semibold hover:bg-red-600 transition-all rounded-sm shadow-lg shadow-red-900/20 group"
          >
            Get Full Visibility
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};