import React, { useState } from 'react';
import { TREATMENTS } from '../data/clinicData';
import { Treatment } from '../types';
import { 
  Activity, ShieldCheck, Sparkles, Grid, Sun, Smile, Crown, AlertTriangle, 
  RefreshCw, Heart, Layers, CheckCircle, Search, Zap, ArrowRight, X, Calendar, 
  Clock, DollarSign, Check
} from 'lucide-react';

interface TreatmentsSectionProps {
  onSelectTreatmentForBooking: (treatmentTitle: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onSelectTreatmentForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalTreatment, setActiveModalTreatment] = useState<Treatment | null>(null);

  const categories = ['All', 'Restorative', 'Cosmetic', 'Orthodontics', 'Preventative', 'Surgical'];

  // Color mapping for each category for a rich, vibrant aesthetic in light mode
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'Restorative':
        return {
          badge: 'bg-blue-50 text-blue-800 dark:bg-blue-950/80 dark:text-cyan-300 border-blue-200 dark:border-blue-800 font-bold',
          iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/25',
          cardBorder: 'hover:border-blue-500',
          accentLine: 'from-blue-500 to-cyan-400'
        };
      case 'Cosmetic':
        return {
          badge: 'bg-purple-50 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800 font-bold',
          iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md shadow-purple-500/25',
          cardBorder: 'hover:border-purple-500',
          accentLine: 'from-violet-500 to-purple-500'
        };
      case 'Orthodontics':
        return {
          badge: 'bg-cyan-50 text-cyan-900 dark:bg-cyan-950/80 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800 font-bold',
          iconBg: 'bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-md shadow-cyan-500/25',
          cardBorder: 'hover:border-cyan-500',
          accentLine: 'from-cyan-400 to-teal-400'
        };
      case 'Preventative':
        return {
          badge: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 font-bold',
          iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25',
          cardBorder: 'hover:border-emerald-500',
          accentLine: 'from-emerald-400 to-teal-400'
        };
      case 'Surgical':
        return {
          badge: 'bg-rose-50 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border-rose-200 dark:border-rose-800 font-bold',
          iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md shadow-rose-500/25',
          cardBorder: 'hover:border-rose-500',
          accentLine: 'from-rose-500 to-pink-500'
        };
      default:
        return {
          badge: 'bg-blue-50 text-blue-800 dark:bg-blue-950/80 dark:text-cyan-300 border-blue-200 dark:border-blue-800 font-bold',
          iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/25',
          cardBorder: 'hover:border-blue-500',
          accentLine: 'from-blue-500 to-cyan-400'
        };
    }
  };

  // Map icon names to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Grid': return <Grid className="w-6 h-6" />;
      case 'Sun': return <Sun className="w-6 h-6" />;
      case 'Smile': return <Smile className="w-6 h-6" />;
      case 'Crown': return <Crown className="w-6 h-6" />;
      case 'AlertTriangle': return <AlertTriangle className="w-6 h-6" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6" />;
      case 'Heart': return <Heart className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'CheckCircle': return <CheckCircle className="w-6 h-6" />;
      case 'Search': return <Search className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const filteredTreatments = selectedCategory === 'All'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  return (
    <section id="treatments" className="py-20 bg-[#0a133c] border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#000000]">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 bg-[#000000]">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800 shadow-sm section-badge">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-300" />
            <span>Advanced Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Poppins'] drop-shadow-sm">
            Comprehensive Dental Care Under <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">One Roof</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            From single-sitting painless root canals to invisible clear aligners and dental implants, explore our specialized services at Sithalapakkam, Chennai.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 border border-slate-200 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((t) => {
            const style = getCategoryStyle(t.category);
            return (
              <div
                key={t.id}
                className={`glass-card glass-card-hover p-6 flex flex-col justify-between group relative overflow-hidden border border-slate-200 dark:border-slate-800 ${style.cardBorder}`}
              >
                {/* Vibrant Top Accent Stripe */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${style.accentLine}`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${style.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      {getIcon(t.iconName)}
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${style.badge}`}>
                      {t.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-['Poppins'] group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                    {t.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {t.shortDesc}
                  </p>

                  <div className="space-y-1.5 mb-6 text-xs text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80 pt-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0" />
                      <span>Duration: <strong className="text-slate-900 dark:text-slate-100 font-bold">{t.duration}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Comfort: <strong className="text-slate-900 dark:text-slate-100 font-bold">{t.painLevel}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => setActiveModalTreatment(t)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-blue-700 dark:text-cyan-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-900/60 transition-all shadow-sm group-hover:border-blue-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => onSelectTreatmentForBooking(t.title)}
                    className="px-3.5 py-2.5 btn-primary-glass text-xs font-bold flex items-center justify-center shadow-md shadow-blue-500/25 hover:scale-105 transition-transform"
                    title="Book this treatment"
                  >
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal for Selected Treatment */}
      {activeModalTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalTreatment(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/90 dark:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 pr-8">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25 shrink-0">
                {getIcon(activeModalTreatment.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">
                  {activeModalTreatment.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-['Poppins']">
                  {activeModalTreatment.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {activeModalTreatment.fullDesc}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs">
              <div>
                <span className="text-slate-500 dark:text-slate-400 block font-medium">Avg Duration</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{activeModalTreatment.duration}</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block font-medium">Comfort Level</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">{activeModalTreatment.painLevel}</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block font-medium">Est. Investment</span>
                <span className="font-bold text-purple-600 dark:text-purple-300">{activeModalTreatment.priceRange}</span>
              </div>
            </div>

            {/* Benefits List */}
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2.5">Key Benefits:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                {activeModalTreatment.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = activeModalTreatment.title;
                  setActiveModalTreatment(null);
                  onSelectTreatmentForBooking(title);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/25 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment for {activeModalTreatment.title}</span>
              </button>
              <button
                onClick={() => setActiveModalTreatment(null)}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
