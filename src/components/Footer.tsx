import React, { useState } from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Star, Heart, X, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" />
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              DivyN – The DENTIST is Sithalapakkam's premier dental clinic committed to painless root canal treatments, precision dental implants, invisible aligners, and family oral care.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">5.0 ★ Google Rated (122+ Reviews)</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Poppins']">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About Clinic</a></li>
              <li><a href="#treatments" className="hover:text-purple-400 transition-colors">Treatments</a></li>
              <li><a href="#why-us" className="hover:text-purple-400 transition-colors">Why Choose DivyN</a></li>
              <li><a href="#doctors" className="hover:text-purple-400 transition-colors">Doctors</a></li>
              <li><a href="#gallery" className="hover:text-purple-400 transition-colors">Clinic Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Treatments List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Poppins']">Popular Services</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#treatments" className="hover:text-purple-400 transition-colors">Painless Root Canal Treatment</a></li>
              <li><a href="#treatments" className="hover:text-purple-400 transition-colors">German Titanium Dental Implants</a></li>
              <li><a href="#treatments" className="hover:text-purple-400 transition-colors">Clear Aligners & Ceramic Braces</a></li>
              <li><a href="#treatments" className="hover:text-purple-400 transition-colors">Laser Teeth Whitening</a></li>
              <li><a href="#treatments" className="hover:text-purple-400 transition-colors">Digital Smile Designing & Veneers</a></li>
              <li><a href="#treatments" className="hover:text-purple-400 transition-colors">Wisdom Tooth Removal</a></li>
              <li><a href="#treatments" className="hover:text-purple-400 transition-colors">Pediatric Dentistry</a></li>
            </ul>
          </div>

          {/* Column 4: Address & Timings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Poppins']">Clinic Address</h4>
            
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>674, Venous Colony, Sithalapakkam, Chennai, Tamil Nadu – 600131</span>
              </p>
              
              <p className="flex items-center gap-2 text-cyan-300 font-semibold">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${CLINIC_INFO.contact.rawPhone}`}>{CLINIC_INFO.contact.phone}</a>
              </p>

              <div className="pt-2 border-t border-slate-800 space-y-1">
                <p className="font-semibold text-slate-200">Clinic Working Hours:</p>
                <p className="text-[11px]">Mon - Sat: 10:00 AM – 1:30 PM & 5:00 PM – 10:00 PM</p>
                <p className="text-[11px]">Sun: 10:00 AM – 1:30 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} DivyN – The DENTIST. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Privacy Policy & Terms Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 text-slate-200 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[80vh] overflow-y-auto space-y-4">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-white font-['Poppins']">
              {modalType === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              <p>
                At DivyN – The DENTIST (Sithalapakkam, Chennai), we prioritize patient data confidentiality. Any personal identification details collected via appointment booking forms are kept strictly confidential and used solely for medical recordkeeping and scheduling.
              </p>
              <p>
                We do not sell or lease patient information to third parties. All treatment plans and clinical diagnostics are explained transparently prior to procedure initiation.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
