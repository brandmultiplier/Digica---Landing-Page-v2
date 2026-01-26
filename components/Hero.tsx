import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, Cpu, Database } from 'lucide-react';

// COMPONENT: Live Fluctuating Number
const LiveStat = ({ value, suffix, prefix = "" }: { value: number, suffix: string, prefix?: string }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = (Math.random() - 0.5) * 0.4;
      setDisplayValue(prev => Number((value + fluctuation).toFixed(1)));
    }, 1500);
    return () => clearInterval(interval);
  }, [value]);

  return <span>{prefix}{Math.abs(displayValue).toFixed(1)}{suffix}</span>;
};

// COMPONENT: CSS 3D Wireframe Cube
const WireframeCube = () => (
  <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none perspective-container hidden lg:block" style={{ zIndex: 0 }}>
    <div className="relative w-64 h-64 cube-spinner">
      {/* Faces */}
      <div className="cube-face front"></div>
      <div className="cube-face back"></div>
      <div className="cube-face left"></div>
      <div className="cube-face right"></div>
      <div className="cube-face top"></div>
      <div className="cube-face bottom"></div>
    </div>
  </div>
);

// COMPONENT: Falling Data Stream (Matrix Style)
const DataStream = ({ left, delay, duration, opacity }: { left: string, delay: string, duration: string, opacity: number }) => (
  <div 
    className="absolute top-[-150px] text-[10px] font-mono text-digica-red leading-tight select-none pointer-events-none data-stream"
    style={{
      left,
      animationDelay: delay,
      animationDuration: duration,
      opacity: opacity,
      writingMode: 'vertical-rl',
      textOrientation: 'upright',
      height: '120%', 
    }}
  >
    {/* UK Spelling Fix: OPTIMISE */}
    {'01AF B3C4 99FF 0010 SYSTEM_CHK MEM_OK OPTIMISE 45.23.11 0000 1111'.split(' ').join('\u00A0\u00A0')}
  </div>
);

export const Hero: React.FC = () => {
  return (
    // FIX: Added 'isolate' to force a new stacking context.
    <section 
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-digica-dark min-h-[90vh] flex items-center isolate"
      style={{ clipPath: 'inset(0)' }}
    >
      
      {/* === INJECTED CSS STYLES === */}
      <style>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .data-stream {
          animation: matrix-fall linear infinite;
        }
        
        @keyframes spin-3d-custom {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        .perspective-container {
          perspective: 1000px;
        }
        .cube-spinner {
          transform-style: preserve-3d;
          animation: spin-3d-custom 20s linear infinite;
        }
        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid rgba(217, 60, 44, 0.3);
          background: rgba(217, 60, 44, 0.05);
        }
        .cube-face.front  { transform: translateZ(64px); }
        .cube-face.back   { transform: translateZ(-64px); }
        .cube-face.left   { transform: rotateY(-90deg) translateZ(64px); }
        .cube-face.right  { transform: rotateY(90deg) translateZ(64px); }
        .cube-face.top    { transform: rotateX(90deg) translateZ(64px); }
        .cube-face.bottom { transform: rotateX(-90deg) translateZ(64px); }

        @keyframes pan-grid {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        .animate-pan-grid {
          animation: pan-grid 20s linear infinite;
        }
      `}</style>

      {/* === BACKGROUND LAYER === */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
        
        {/* 1. Moving Grid Floor */}
        <div 
          className="absolute inset-[-50%] opacity-30 transform -skew-x-12 scale-125 pointer-events-none"
          style={{ 
            maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)'
          }}
        >
           <div className="absolute inset-0 bg-[linear-gradient(rgba(217,60,44,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(217,60,44,0.15)_1px,transparent_1px)] bg-[size:40px_40px] animate-pan-grid"></div>
        </div>

        {/* 2. Data Streams */}
        <DataStream left="10%" delay="0s" duration="8s" opacity={0.3} />
        <DataStream left="25%" delay="2s" duration="12s" opacity={0.2} />
        <DataStream left="45%" delay="4s" duration="10s" opacity={0.25} />
        <DataStream left="60%" delay="1s" duration="15s" opacity={0.15} />
        <DataStream left="80%" delay="3s" duration="9s" opacity={0.3} />
        <DataStream left="95%" delay="5s" duration="11s" opacity={0.2} />

        {/* 3. 3D Wireframe Blueprint */}
        <WireframeCube />

        {/* 4. Vignette & Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-digica-dark via-transparent to-digica-dark"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-digica-dark via-transparent to-digica-dark/50"></div>

        {/* 5. HUD Overlay Elements */}
        <div className="absolute top-24 left-10 hidden lg:block z-10">
           <div className="font-mono text-[10px] text-digica-red animate-pulse">
             SYSTEM_DIAGNOSTICS<br/>
             ------------------<br/>
             CPU_LOAD: 34%<br/>
             MEM_ALLOC: 12GB<br/>
             NEURAL_NET: ACTIVE
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* TEXT CONTENT */}
        <div className="max-w-2xl relative lg:ml-20">
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-digica-red to-transparent opacity-50 hidden md:block"></div>
          
          <div className="inline-flex items-center gap-2 mb-6 border border-digica-red/30 bg-digica-red/10 px-3 py-1 rounded-sm backdrop-blur-sm">
             <div className="w-1.5 h-1.5 rounded-full bg-digica-red animate-pulse"></div>
             <span className="text-digica-red font-mono text-xs tracking-widest uppercase">Operational Intelligence</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Your KPIs say green. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-digica-red to-red-400">Your margins say otherwise.</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-lg">
            Hidden losses are bleeding your production line — and your reports can't see them. The gap between what your dashboards show and what's happening on the floor is costing you millions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
               className="inline-flex items-center justify-center gap-2 bg-digica-red text-white px-8 py-4 font-semibold hover:bg-red-600 transition-all rounded-sm shadow-[0_0_20px_rgba(217,60,44,0.3)] hover:shadow-[0_0_30px_rgba(217,60,44,0.5)] border border-digica-red/50"
            >
              See What You're Missing
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-4 sm:gap-6 text-sm text-gray-400 font-mono flex-wrap">
             <span className="text-digica-red">PROVEN IMPACT IN:</span>
             <span className="text-white">DEFENCE</span>
             <span className="text-digica-red">•</span>
             <span className="text-white">MEDICAL</span>
             <span className="text-digica-red">•</span>
             <span className="text-white">IOT</span>
             <span className="text-digica-red">•</span>
             <span className="text-white">MANUFACTURING</span>
          </div>
        </div>

        {/* HUD CARD VISUAL */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-md">
             <div className="absolute inset-0 bg-digica-red/5 blur-3xl rounded-full"></div>
             <div className="relative z-10 bg-[#121212] border border-white/10 p-1 rounded-xl shadow-2xl backdrop-blur-md">
                <div className="bg-[#0f0f0f] rounded-lg p-6 border border-white/5">
                    <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                      <div className="font-mono text-sm tracking-wider text-gray-400">SYSTEM_STATUS</div>
                      <div className="flex gap-2 items-center bg-green-900/20 px-2 py-1 rounded">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="text-green-500 text-[10px] font-bold tracking-wider">LIVE PRODUCTION</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="group bg-white/5 p-4 rounded border border-white/5 hover:border-digica-red/50 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-20 transition-opacity">
                            <Activity className="w-12 h-12 text-digica-red" />
                        </div>
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs text-gray-400 font-mono">HIDDEN DOWNTIME RECOVERED</span>
                          <span className="text-[10px] text-gray-600 font-mono">ID: #DT-09</span>
                        </div>
                        <div className="text-3xl font-bold text-white font-mono tracking-tight">
                          <LiveStat value={22} suffix="%" prefix="+" />
                          <span className="text-sm font-sans font-normal text-gray-500 ml-2">/ Month</span>
                        </div>
                      </div>

                      <div className="group bg-white/5 p-4 rounded border border-white/5 hover:border-digica-red/50 transition-colors relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-20 transition-opacity">
                            <Database className="w-12 h-12 text-digica-red" />
                        </div>
                        <div className="flex justify-between items-start mb-1">
                           <span className="text-xs text-gray-400 font-mono">SHIFT VARIANCE ELIMINATED</span>
                           <span className="text-[10px] text-gray-600 font-mono">ID: #SV-A1</span>
                        </div>
                        <div className="text-3xl font-bold text-white font-mono tracking-tight">
                          <LiveStat value={14} suffix="%" prefix="-" />
                          <span className="text-sm font-sans font-normal text-gray-500 ml-2">Variance</span>
                        </div>
                      </div>

                      <div className="group bg-white/5 p-4 rounded border border-white/5 hover:border-digica-red/50 transition-colors relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-20 transition-opacity">
                            <Cpu className="w-12 h-12 text-digica-red" />
                        </div>
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs text-gray-400 font-mono">MARGIN LEAKAGE FOUND</span>
                          <span className="text-[10px] text-gray-600 font-mono">ID: #ML-X2</span>
                        </div>
                        <div className="text-3xl font-bold text-white font-mono tracking-tight">
                          <LiveStat value={3.2} suffix="%" prefix="" />
                          <span className="text-sm font-sans font-normal text-gray-500 ml-2">of Revenue</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between text-[10px] text-gray-600 font-mono pt-4 border-t border-white/5">
                        <span>LATENCY: 12ms</span>
                        <span>DATA_STREAM: ACTIVE</span>
                    </div>
                </div>
                
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-digica-red/50"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-digica-red/50"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};