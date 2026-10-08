import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MapPin, Clock, Star, Menu, X, Calendar, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenAppointmentModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAppointmentModal,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Clinic', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Why DivyN', href: '#why-us' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Banner Bar - Hidden on very small screens */}
      <div className="hidden sm:block bg-slate-950 text-slate-100 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-blue-200">
              <MapPin className="w-3.5 h-3.5 text-cyan-300" />
              <span>Sithalapakkam, Chennai - 600131</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-300" />
              <span>Mon-Sat: 10AM-1:30PM | 5PM-10PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-blue-900/50 border border-blue-500/30 px-2.5 py-0.5 rounded-full text-blue-100 text-[11px] font-medium">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>5.0 (122+ Google Reviews)</span>
            </div>
            <a
              href={`tel:${CLINIC_INFO.contact.rawPhone}`}
              className="flex items-center gap-1 text-cyan-300 hover:text-white font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{CLINIC_INFO.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg py-3 border-b border-slate-800'
            : 'bg-slate-900/90 backdrop-blur-md py-4 border-b border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group">
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 ${
                  activeSection === link.href.substring(1)
                    ? 'text-cyan-300 bg-blue-950/60 border border-blue-900'
                    : 'text-slate-200 hover:text-cyan-300 hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Call */}
            <a
              href={`tel:${CLINIC_INFO.contact.rawPhone}`}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Clinic</span>
            </a>

            {/* Book Appointment CTA Button */}
            <button
              onClick={onOpenAppointmentModal}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-md shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:bg-slate-800"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-slate-900/98 backdrop-blur-lg px-4 pt-4 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-300">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-cyan-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/30"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>

              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={`tel:${CLINIC_INFO.contact.rawPhone}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-100"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${CLINIC_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello DivyN Dental Clinic, I would like to inquire about dental treatment.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
