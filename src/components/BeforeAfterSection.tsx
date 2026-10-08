import React, { useState } from 'react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { Sparkles, MoveHorizontal, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const currentCase = BEFORE_AFTER_CASES[selectedCaseIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800 shadow-sm section-badge">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-300" />
            <span>Smile Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Poppins'] drop-shadow-sm">
            Real Results, <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Radiant Confidence</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Drag the interactive slider below to witness actual patient before & after smile enhancements crafted at DivyN.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedCaseIndex(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCaseIndex === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 shadow-sm'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Drag Image Comparison Box */}
          <div className="lg:col-span-8 relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-slate-300 dark:border-slate-700 shadow-xl select-none group">
            
            {/* AFTER Image (Background) */}
            <img
              src={currentCase.afterImg}
              alt="After treatment smile"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800';
              }}
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-400/40 text-xs font-bold px-3 py-1 rounded-full z-10">
              AFTER ({currentCase.duration})
            </span>

            {/* BEFORE Image (Clipped Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={currentCase.beforeImg}
                alt="Before treatment smile"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800';
                }}
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md text-purple-200 border border-purple-400/40 text-xs font-bold px-3 py-1 rounded-full z-10">
                BEFORE
              </span>
            </div>

            {/* Vertical Slider Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(2,132,199,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>

            {/* Range Input for Drag Control */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Drag before and after image comparison slider"
            />
          </div>

          {/* Case Details Box */}
          <div className="lg:col-span-4 space-y-4 p-6 glass-card border border-slate-200 dark:border-slate-800 shadow-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-cyan-400">
                {currentCase.treatment}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-['Poppins'] mt-0.5">
                {currentCase.title}
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              {currentCase.description}
            </p>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-700/80 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Total Duration: {currentCase.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-900 dark:text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Painless Precision Protocol</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 dark:text-slate-400 font-medium italic">
              * Note: Drag slider left or right to inspect detailed alignment and shade changes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
