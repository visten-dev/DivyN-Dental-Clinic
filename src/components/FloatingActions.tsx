import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MessageSquare, ArrowUp, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onOpenAppointmentModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenAppointmentModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const defaultWhatsappText = encodeURIComponent(
    'Hello DivyN Dental Clinic, I would like to inquire about dental treatment at Sithalapakkam.'
  );

  return (
    <>
      {/* Left Bottom Action Buttons: WhatsApp & Emergency Phone */}
      <div className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 flex flex-col gap-3">
        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${CLINIC_INFO.contact.whatsapp}?text=${defaultWhatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
          title="Chat on WhatsApp"
          aria-label="Contact DivyN Dental on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="hidden sm:inline-block absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp Direct (+91 79047 19986)
          </span>
        </a>

        {/* Floating Emergency Call Button */}
        <a
          href={`tel:${CLINIC_INFO.contact.rawPhone}`}
          className="p-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-xl shadow-rose-600/40 hover:scale-110 transition-all duration-300 flex items-center justify-center group relative animate-bounce duration-1000"
          title="24/7 Emergency Call"
          aria-label="Call Emergency Dental Helpline"
        >
          <Phone className="w-6 h-6" />
          <span className="hidden sm:inline-block absolute left-14 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Emergency Helpline (+91 79047 19986)
          </span>
        </a>
      </div>

      {/* Scroll To Top Button (Right Side) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-20 sm:bottom-6 sm:right-24 z-40 p-3 rounded-full bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-md text-white shadow-lg border border-slate-700 hover:bg-purple-600 transition-all duration-300"
          title="Scroll To Top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Sticky Mobile Bottom Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-purple-900/50 p-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${CLINIC_INFO.contact.rawPhone}`}
          className="flex-1 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-slate-700"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400" />
          <span>Call Clinic</span>
        </a>

        <button
          onClick={onOpenAppointmentModal}
          className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Slot</span>
        </button>
      </div>
    </>
  );
};
