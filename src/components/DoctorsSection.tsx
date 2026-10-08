import React from 'react';
import { DOCTORS } from '../data/clinicData';
import { Award, Calendar, CheckCircle, Clock, ShieldCheck, Sparkles, Mail, Phone } from 'lucide-react';

interface DoctorsSectionProps {
  onOpenAppointmentModalWithDoctor: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenAppointmentModalWithDoctor }) => {
  return (
    <section id="doctors" className="py-20 bg-white dark:bg-slate-950/80 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800 shadow-sm section-badge">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-300" />
            <span>Expert Medical Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Poppins'] drop-shadow-sm">
            Meet Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Accomplished Specialists</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Dedicated dental surgeons with advanced postgraduate degrees, compassionate chairside care, and years of clinical mastery.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div>
                {/* Doctor Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={doc.imageUrl}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800';
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-cyan-400/40 text-cyan-200 text-xs font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-cyan-300" />
                    <span>{doc.experience}</span>
                  </div>

                  {/* Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold font-['Poppins']">{doc.name}</h3>
                    <p className="text-xs text-cyan-200 font-medium">{doc.title}</p>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 space-y-4">
                  {/* Qualifications */}
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-slate-200 block mb-0.5">Qualifications:</strong>
                    <span>{doc.qualifications}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Specialization Tags */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 mb-2">Key Focus Areas:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specialization.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-cyan-300 border border-blue-200 dark:border-blue-900 text-[11px] font-semibold"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{doc.availableDays}</span>
                  </div>
                </div>
              </div>

              {/* Action CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenAppointmentModalWithDoctor(doc.name)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md shadow-blue-500/20 text-xs sm:text-sm font-bold transition-all duration-200"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with {doc.name.split(' ')[1]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
