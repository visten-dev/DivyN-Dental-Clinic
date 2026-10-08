import React, { useState } from 'react';
import { CLINIC_INFO, ASSET_IMAGES } from '../data/clinicData';
import { ShieldCheck, Award, HeartHandshake, Zap, Sparkles, Check, Microchip, Users, DollarSign, Clock } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const highlights = [
    {
      icon: Microchip,
      title: "Advanced Dental Tech",
      desc: "Microscopic endodontics, intraoral digital 3D scanners, and low-radiation digital X-rays.",
      gradient: "from-blue-600 to-cyan-500",
      accentBorder: "border-blue-200/80 hover:border-blue-400 dark:border-blue-900/60",
      tag: "Precision Tech",
      tagColor: "bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-cyan-300",
    },
    {
      icon: Users,
      title: "Experienced Specialists",
      desc: "12+ years expertise in painless root canal treatments, implants, and orthodontics.",
      gradient: "from-violet-600 to-purple-600",
      accentBorder: "border-purple-200/80 hover:border-purple-400 dark:border-purple-900/60",
      tag: "12+ Years Exp",
      tagColor: "bg-purple-100 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300",
    },
    {
      icon: DollarSign,
      title: "Affordable & Transparent",
      desc: "Fair pricing with zero hidden costs and flexible payment plans for major procedures.",
      gradient: "from-emerald-500 to-teal-600",
      accentBorder: "border-emerald-200/80 hover:border-emerald-400 dark:border-emerald-900/60",
      tag: "Zero Hidden Cost",
      tagColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300",
    },
    {
      icon: HeartHandshake,
      title: "Patient-First Environment",
      desc: "Gentle chairside manner, soothing ambience, and fear-free dental treatment.",
      gradient: "from-rose-500 to-amber-500",
      accentBorder: "border-rose-200/80 hover:border-rose-400 dark:border-rose-900/60",
      tag: "Gentle Care",
      tagColor: "bg-rose-100 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300",
    },
    {
      icon: Zap,
      title: "24/7 Emergency Response",
      desc: "Immediate priority walk-ins for severe dental pain or tooth trauma.",
      gradient: "from-amber-500 to-orange-500",
      accentBorder: "border-amber-200/80 hover:border-amber-400 dark:border-amber-900/60",
      tag: "Fast Priority",
      tagColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300",
    }
  ];

  const timelineEvents = [
    { year: "2014", title: "Foundation", desc: "Started with a vision for ethical, high-quality dental care." },
    { year: "2018", title: "Microscopic Upgrade", desc: "Introduced advanced rotary endodontic microscopes for painless root canals." },
    { year: "2021", title: "Digital Center", desc: "Expanded with CAD/CAM Zirconia crown suite and clear aligners." },
    { year: "2026", title: "5.0 Rated Leader", desc: "Celebrated 122+ 5-Star Google Reviews & 5000+ happy smiles in Sithalapakkam." }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800 shadow-sm section-badge">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-300" />
            <span>About DivyN – The DENTIST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Poppins'] drop-shadow-sm">
            Excellence in <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Painless & Precision</span> Dental Care
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Conveniently located at Venous Colony, Sithalapakkam, DivyN – The DENTIST is Chennai's trusted destination for modern, gentle, and comprehensive dental solutions.
          </p>
        </div>

        {/* Main Grid: Visual Image + Clinic Description */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual: Clinic Room Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-300 dark:border-slate-800">
              <img
                src={ASSET_IMAGES.heroBg}
                alt="DivyN Clinic Interior - Sithalapakkam"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200';
                }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white dark:bg-slate-900/95 border border-slate-200 dark:border-slate-700 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-600 text-white font-bold text-lg shadow-md shadow-blue-500/30">
                    100%
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Class-B Vacuum Autoclave</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Hospital-grade sterilization protocol</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Description & Mission/Vision/Values Tabs */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Creating Healthy, Radiant Smiles with Ethics & Technology
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              At DivyN – The DENTIST, we believe that visiting the dentist should be a comfortable, reassuring experience. Led by senior specialists, our clinic combines warm patient empathy with German & Swiss clinical technology to deliver long-lasting, natural-looking results.
            </p>

            {/* Interactive Tabs */}
            <div className="pt-2">
              <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`pb-3 text-sm font-semibold transition-colors relative ${
                    activeTab === 'mission'
                      ? 'text-blue-700 dark:text-cyan-400 border-b-2 border-blue-600 dark:border-cyan-400 font-bold'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`pb-3 text-sm font-semibold transition-colors relative ${
                    activeTab === 'vision'
                      ? 'text-blue-700 dark:text-cyan-400 border-b-2 border-blue-600 dark:border-cyan-400 font-bold'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  Our Vision
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`pb-3 text-sm font-semibold transition-colors relative ${
                    activeTab === 'values'
                      ? 'text-blue-700 dark:text-cyan-400 border-b-2 border-blue-600 dark:border-cyan-400 font-bold'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  Core Values
                </button>
              </div>

              <div className="py-4 text-sm text-slate-900 dark:text-slate-200 min-h-[100px]">
                {activeTab === 'mission' && (
                  <p className="leading-relaxed bg-blue-50/70 dark:bg-slate-800/60 p-4 rounded-xl border border-blue-100 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                    To deliver painless, high-precision dental treatments that preserve natural tooth structure, eliminate dental anxiety, and remain accessible to families across Sithalapakkam, Medavakkam, and Perumbakkam.
                  </p>
                )}
                {activeTab === 'vision' && (
                  <p className="leading-relaxed bg-blue-50/70 dark:bg-slate-800/60 p-4 rounded-xl border border-blue-100 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                    To be Chennai's premier multi-specialty dental clinic recognized for ethical healthcare, microscopic technology integration, zero-infection sterilization standards, and lifetime smile satisfaction.
                  </p>
                )}
                {activeTab === 'values' && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-blue-50/70 dark:bg-slate-800/60 p-4 rounded-xl border border-blue-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Patient Comfort & Empathy</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> 100% Transparent Pricing</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Microscopic Precision</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-600" /> Strict Hygiene & Autoclaving</li>
                  </ul>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Clinic Highlights Grid */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white text-center mb-8 font-['Poppins']">
            Why Patients Trust DivyN Clinic
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-5 glass-card glass-card-hover group shadow-sm flex flex-col justify-between relative overflow-hidden transition-all duration-300 border border-slate-200/80 dark:border-slate-800`}
                >
                  {/* Colorful Top Accent Stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />
                  
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center shadow-md shadow-blue-500/15 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-slate-200/60 dark:border-transparent ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                    
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5 font-['Poppins']">
                      {item.title}
                    </h4>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Clinic Timeline */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-slate-900 dark:via-purple-950 dark:to-slate-950 text-white shadow-xl shadow-blue-500/20">
          <h3 className="text-xl font-bold text-center text-white dark:text-purple-200 mb-8">
            Our Journey of Growth & Patient Trust
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-white/40 dark:border-purple-500/40 space-y-1">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-cyan-400 border-4 border-blue-600 dark:border-slate-900 shadow-sm"></div>
                <span className="text-xs font-bold text-cyan-200 dark:text-cyan-300 tracking-wider">{evt.year}</span>
                <h4 className="font-bold text-white text-base">{evt.title}</h4>
                <p className="text-xs text-white/90 dark:text-slate-300 leading-relaxed">{evt.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
