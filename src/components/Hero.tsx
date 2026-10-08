import React from 'react';
import { CLINIC_INFO, ASSET_IMAGES } from '../data/clinicData';
import { Calendar, Phone, Star, ShieldCheck, Award, Smile, CheckCircle, Sparkles, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 lg:py-20">
      {/* Background Decorative Particle & Gradient Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 via-blue-50/30 to-white dark:from-slate-950 dark:via-purple-950/80 dark:to-slate-950 -z-10 transition-colors"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-400/20 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Background Image Overlay with Softening */}
      <div className="absolute inset-0 opacity-5 dark:opacity-20 bg-cover bg-center mix-blend-overlay pointer-events-none -z-10"
           style={{ backgroundImage: `url(${ASSET_IMAGES.heroBg})` }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headlines & Call To Actions */}
          <div className="lg:col-span-7 space-y-6 text-slate-900 dark:text-white text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-purple-500/20 border border-blue-200 dark:border-purple-400/30 text-blue-700 dark:text-purple-200 text-xs sm:text-sm font-semibold shadow-sm section-badge">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-cyan-300 animate-spin" />
              <span>Premier Dental Care in Sithalapakkam, Chennai</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-['Poppins'] text-slate-900 dark:text-white">
              Your Smile, <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-purple-300 dark:via-purple-200 dark:to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
                Our Passion
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 dark:text-slate-200 text-base sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Providing advanced dental treatments with experienced dentists, modern technology, painless procedures, and personalized care at Sithalapakkam, Chennai.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-white/10 text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-white/10 shadow-sm font-semibold">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-cyan-400" /> Painless Root Canals
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-white/10 text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-white/10 shadow-sm font-semibold">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-cyan-400" /> German Dental Implants
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white dark:bg-white/10 text-slate-900 dark:text-slate-200 border border-slate-200 dark:border-white/10 shadow-sm font-semibold">
                <CheckCircle className="w-4 h-4 text-blue-600 dark:text-cyan-400" /> Invisible Clear Aligners
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenAppointmentModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 text-blue-100" />
                <span>Book Appointment</span>
                <ChevronRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.contact.rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-800/80 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-800 border border-slate-200 dark:border-purple-400/30 shadow-md transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-blue-600 dark:text-cyan-400 animate-pulse" />
                <span>Call Now (+91 79047 19986)</span>
              </a>
            </div>

            {/* Location & Google Rating Trust Line */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200/80 dark:border-purple-900/50">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white dark:border-purple-900 object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Patient avatar" referrerPolicy="no-referrer" />
                  <img className="w-8 h-8 rounded-full border-2 border-white dark:border-purple-900 object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Patient avatar" referrerPolicy="no-referrer" />
                  <img className="w-8 h-8 rounded-full border-2 border-white dark:border-purple-900 object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Patient avatar" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                    <span className="ml-1.5 font-bold text-slate-900 dark:text-white text-xs">5.0 / 5.0</span>
                  </div>
                  <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400">Trusted by 122+ Google Reviewers</p>
                </div>
              </div>

              <div className="hidden sm:block text-slate-300 dark:text-slate-600">|</div>

              <div className="text-left">
                <p className="text-slate-900 dark:text-white font-bold">📍 Sithalapakkam, Chennai</p>
                <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400">674, Venous Colony, Pin: 600131</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Patient Smile & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Backdrop Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-cyan-400 dark:from-purple-600 dark:to-cyan-400 rounded-3xl blur-2xl opacity-25 dark:opacity-40 transform rotate-2 scale-95"></div>

            {/* Main Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-purple-400/30 bg-white/95 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl shadow-blue-500/10 dark:shadow-2xl p-3 max-w-md w-full">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1]">
                <img
                  src={ASSET_IMAGES.patientSmile}
                  alt="Happy Patient Smile - DivyN Dental Clinic"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800';
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 dark:opacity-80"></div>
                
                {/* Floating Badge 1: Microscopic Technology */}
                <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-950/85 backdrop-blur-md border border-slate-200 dark:border-purple-500/40 px-3 py-2 rounded-2xl flex items-center gap-2 shadow-xl animate-bounce duration-1000">
                  <div className="p-1.5 rounded-xl bg-blue-600 dark:bg-purple-600 text-white shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-600 dark:text-purple-200 font-bold uppercase">Microscope Tech</p>
                    <p className="text-xs text-slate-900 dark:text-white font-bold">100% Pain-Free</p>
                  </div>
                </div>

                {/* Floating Badge 2: Google 5 Star */}
                <div className="absolute bottom-4 right-4 bg-white/95 dark:bg-slate-950/85 backdrop-blur-md border border-amber-200 dark:border-amber-500/40 px-3.5 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl">
                  <div className="p-1.5 rounded-xl bg-amber-500 text-white dark:text-slate-950 font-bold shadow-sm">
                    <Star className="w-4 h-4 fill-white dark:fill-slate-950" />
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-600 dark:text-amber-200 font-bold uppercase">Google Rating</p>
                    <p className="text-xs text-slate-900 dark:text-white font-bold">5.0 ★ (122+ Reviews)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Animated Statistics Banner Grid */}
        <div className="mt-12 lg:mt-16 glass-card p-4 sm:p-6 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-white/10 border border-slate-200 dark:border-slate-800 shadow-md">
          <div className="stat-badge">
            <Smile className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-1" />
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-['Poppins']">5000+</span>
            <span className="text-[10px] sm:text-xs text-slate-800 dark:text-slate-300 uppercase font-bold tracking-tight">Happy Patients</span>
          </div>

          <div className="stat-badge">
            <Award className="w-6 h-6 text-indigo-600 dark:text-violet-400 mb-1" />
            <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-violet-400 font-['Poppins']">10+</span>
            <span className="text-[10px] sm:text-xs text-slate-800 dark:text-slate-300 uppercase font-bold tracking-tight">Years Exp.</span>
          </div>

          <div className="stat-badge">
            <ShieldCheck className="w-6 h-6 text-cyan-600 dark:text-cyan-400 mb-1" />
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 font-['Poppins']">100%</span>
            <span className="text-[10px] sm:text-xs text-slate-800 dark:text-slate-300 uppercase font-bold tracking-tight">Sterilized</span>
          </div>

          <div className="stat-badge">
            <Star className="w-6 h-6 text-amber-500 fill-amber-400 mb-1" />
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-500 dark:text-amber-400 font-['Poppins']">5.0 ★</span>
            <span className="text-[10px] sm:text-xs text-slate-800 dark:text-slate-300 uppercase font-bold tracking-tight">122+ Google Reviews</span>
          </div>
        </div>

      </div>
    </section>
  );
};
