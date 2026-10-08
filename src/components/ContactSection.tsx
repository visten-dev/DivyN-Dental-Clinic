import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Sparkles, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setName('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800 shadow-sm section-badge">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-300" />
            <span>Contact & Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Poppins'] drop-shadow-sm">
            Visit Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Sithalapakkam Clinic</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Easily accessible with ample parking. Walk in or call us at +91 79047 19986 for consultations & dental emergencies.
          </p>
        </div>

        {/* Main 2-Column Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address Card & Working Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location & Address Card */}
            <div className="p-6 glass-card space-y-4 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-600 text-white shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Poppins']">
                    DivyN – The DENTIST
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed font-medium">
                    674, Venous Colony,<br />
                    Sithalapakkam,<br />
                    Chennai, Tamil Nadu – 600131
                  </p>
                  <a
                    href="https://maps.google.com/?q=Sithalapakkam+Chennai+600131"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-blue-700 dark:text-cyan-400 hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Google Maps Directions</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                  <Phone className="w-4 h-4 text-blue-600 animate-pulse" />
                  <a href={`tel:${CLINIC_INFO.contact.rawPhone}`} className="hover:text-blue-600">
                    +91 79047 19986
                  </a>
                </div>
                <a
                  href={`https://wa.me/${CLINIC_INFO.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800 shadow-sm"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-6 rounded-3xl bg-slate-950 text-white space-y-4 shadow-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-cyan-400" />
                <h3 className="text-lg font-bold font-['Poppins']">Clinic Timings</h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm border-t border-slate-800 pt-3">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                  <span className="font-medium text-slate-300">Monday – Saturday</span>
                  <div className="text-right font-bold text-cyan-300 text-xs">
                    <div>10:00 AM – 1:30 PM</div>
                    <div>5:00 PM – 10:00 PM</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-300">Sunday</span>
                  <span className="font-bold text-cyan-300 text-xs">10:00 AM – 1:30 PM</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                * Emergency Dental Services available on-call 24/7. Call +91 79047 19986.
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Quick Message Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Google Maps Placeholder Frame */}
            <div className="rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-md aspect-[16/9] w-full">
              <iframe
                title="DivyN The DENTIST Sithalapakkam Google Map"
                src={CLINIC_INFO.location.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Quick Contact Message Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Poppins'] mb-1">
                Send a Quick Message
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                Have a question about treatments, costs, or insurance? Fill out the form below.
              </p>

              {inquirySubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-sm font-semibold flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent! Our reception team will call you back shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">How can we help you?</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Inquire about root canal cost, aligners consultation, or clinic timings..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/25"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Clinic</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
