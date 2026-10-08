import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Cpu, Award, DollarSign, ShieldCheck, Heart, Clock, Star, Zap, UserCheck, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "Modern Technology",
      description: "Digital intraoral cameras, 3D CAD/CAM smile design software, and microscopic endodontic tools for supreme accuracy."
    },
    {
      icon: Award,
      title: "Experienced Dentists",
      description: "Chief Dental Surgeon Dr. Divyan M.D.S. brings 12+ years of specialized clinical mastery and thousands of successful cases."
    },
    {
      icon: DollarSign,
      title: "Affordable Treatment",
      description: "High-end healthcare delivered at fair, transparent pricing with flexible payment plans and zero surprise charges."
    },
    {
      icon: Zap,
      title: "Latest Equipment",
      description: "Equipped with imported German and Swiss precision dental tools for quiet, comfortable, and rapid sittings."
    },
    {
      icon: ShieldCheck,
      title: "Sterilization Standards",
      description: "Strict 6-step hospital-grade sterilization protocol using Class-B vacuum autoclaves and individual disposable kits."
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every treatment plan is custom designed to match your facial aesthetics, budget, and unique oral health goals."
    },
    {
      icon: Clock,
      title: "Quick Appointments",
      description: "Respecting your valuable time with streamlined scheduling, zero wait times, and prompt evening clinic hours."
    },
    {
      icon: Star,
      title: "Patient Satisfaction",
      description: "Proudly rated 5.0 ★ on Google with 122+ glowing reviews from happy families in Sithalapakkam and Chennai."
    },
    {
      icon: UserCheck,
      title: "Pain-Free Procedures",
      description: "Gentle local numbing gels, soft-touch techniques, and relaxing music ensure every visit is 100% stress-free."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800 shadow-sm section-badge">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-300" />
            <span>Why Choose DivyN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Poppins'] drop-shadow-sm">
            The <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">DivyN Advantage</span> in Dental Care
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            We combine world-class medical standards with warm, compassionate care to ensure you leave with a confident smile.
          </p>
        </div>

        {/* 9 Pillars Bento Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-300 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 font-['Poppins']">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400"></span>
                  <span>Guaranteed Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Trust Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-blue-950 dark:via-slate-900 dark:to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-blue-500/20 border border-blue-400/30 dark:border-slate-800">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-white/20 border border-white/30 text-amber-300 shrink-0 shadow-sm">
              <Star className="w-6 h-6 fill-amber-300" />
            </div>
            <div>
              <h4 className="font-bold text-base">Over 122+ Verified 5-Star Reviews on Google</h4>
              <p className="text-xs text-blue-100 dark:text-slate-300">See why Sithalapakkam residents rate DivyN as their #1 choice.</p>
            </div>
          </div>
          <a
            href="#testimonials"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 transition-colors shadow-md shrink-0"
          >
            Read Patient Stories
          </a>
        </div>

      </div>
    </section>
  );
};
