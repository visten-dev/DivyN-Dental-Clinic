import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, TREATMENTS, DOCTORS } from '../data/clinicData';
import { AppointmentFormData } from '../types';
import { Calendar, Clock, User, Phone, Mail, Sparkles, CheckCircle2, MessageSquare, ShieldCheck, X } from 'lucide-react';

interface AppointmentSectionProps {
  preselectedTreatment?: string;
  preselectedDoctor?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedTreatment = '',
  preselectedDoctor = '',
  isModal = false,
  onCloseModal
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    treatment: preselectedTreatment || 'Root Canal Treatment',
    preferredDoctor: preselectedDoctor || 'Dr. Divyan M.D.S. (Chief Surgeon)',
    preferredDate: '',
    preferredTime: '10:30 AM',
    notes: ''
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    if (preselectedTreatment) {
      setFormData(prev => ({ ...prev, treatment: preselectedTreatment }));
    }
    if (preselectedDoctor) {
      setFormData(prev => ({ ...prev, preferredDoctor: preselectedDoctor }));
    }
  }, [preselectedTreatment, preselectedDoctor]);

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.preferredDate) return;
    setBookingSuccess(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello DivyN Dental Clinic,\nI would like to confirm my appointment:\n\n👤 Name: ${formData.fullName}\n📞 Phone: ${formData.phone}\n🦷 Treatment: ${formData.treatment}\n👨‍⚕️ Doctor: ${formData.preferredDoctor}\n📅 Date: ${formData.preferredDate}\n⏰ Time: ${formData.preferredTime}\n📝 Notes: ${formData.notes || 'None'}\n\nPlease confirm!`
  );

  const formContent = (
    <div className="space-y-6">
      {bookingSuccess ? (
        <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-500">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-['Poppins']">
            Appointment Request Submitted!
          </h3>

          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
            Thank you <strong className="text-purple-600 dark:text-purple-400">{formData.fullName}</strong>. Our front desk at Sithalapakkam will contact you at <strong className="text-slate-900 dark:text-white">{formData.phone}</strong> shortly to confirm your slot for <strong className="text-slate-900 dark:text-white">{formData.preferredDate} at {formData.preferredTime}</strong>.
          </p>

          <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 text-xs text-purple-900 dark:text-purple-200 space-y-2">
            <p className="font-semibold">Instant Speed Confirmation via WhatsApp:</p>
            <a
              href={`https://wa.me/${CLINIC_INFO.contact.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Confirm Instantly via WhatsApp</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setBookingSuccess(false);
                if (onCloseModal) onCloseModal();
              }}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Done / Close
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Ramesh V."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">
                Select Treatment
              </label>
              <select
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {TREATMENTS.map((t) => (
                  <option key={t.id} value={t.title}>{t.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">
                Preferred Doctor
              </label>
              <select
                value={formData.preferredDoctor}
                onChange={(e) => setFormData({ ...formData, preferredDoctor: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                {DOCTORS.map((doc) => (
                  <option key={doc.id} value={doc.name}>{doc.name} - {doc.title.split(' ')[0]}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">
                Preferred Date <span className="text-rose-500">*</span>
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">
              Select Preferred Time Slot
            </label>
            <div className="flex flex-wrap gap-2 max-h-28 overflow-y-auto p-2 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              {timeSlots.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setFormData({ ...formData, preferredTime: slot })}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    formData.preferredTime === slot
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600 hover:bg-blue-50 shadow-sm'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">
              Additional Symptoms or Notes
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Toothache on lower left side, request evening slot..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Confirm & Book Appointment</span>
          </button>

          <p className="text-[11px] text-slate-600 dark:text-slate-400 text-center flex items-center justify-center gap-1 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>100% Privacy Guaranteed. Zero Waiting Time Policy.</span>
          </p>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
        <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
          {onCloseModal && (
            <button
              onClick={onCloseModal}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-cyan-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-300" />
              <span>Easy Online Booking</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-['Poppins'] mt-1">
              Book Your Dental Visit
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              DivyN Clinic – Sithalapakkam, Chennai (+91 79047 19986)
            </p>
          </div>

          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="appointment" className="py-20 bg-white dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto glass-card p-6 sm:p-10 shadow-lg border border-slate-200 dark:border-slate-800">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800 shadow-sm section-badge">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-300" />
              <span>Book Appointment</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-['Poppins'] mt-2 drop-shadow-sm">
              Schedule Your Consultation Today
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
              Select your preferred date, time, and specialist for a priority appointment.
            </p>
          </div>

          {formContent}
        </div>
      </div>
    </section>
  );
};
