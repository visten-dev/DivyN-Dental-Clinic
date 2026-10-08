import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Testimonial } from '../types';
import { Star, Quote, CheckCircle, Sparkles, MessageSquarePlus, X, Send } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  
  // Review form state
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newTreatment, setNewTreatment] = useState('Root Canal Treatment');
  const [newRating, setNewRating] = useState(5);
  const [newReview, setNewReview] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newReview) return;

    const createdReview: Testimonial = {
      id: `user-${Date.now()}`,
      name: newName,
      location: newLocation || 'Chennai',
      rating: newRating,
      treatment: newTreatment,
      review: newReview,
      date: 'Just now',
      verified: true
    };

    setReviewsList([createdReview, ...reviewsList]);
    setSubmittedMessage('Thank you! Your Google review feedback has been posted.');
    setTimeout(() => {
      setSubmittedMessage('');
      setShowAddReviewModal(false);
      setNewName('');
      setNewReview('');
    }, 2000);
  };

  return (
    <section id="testimonials" className="py-20 bg-[#050919] border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0e0b2a]">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800 shadow-sm section-badge">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-300" />
            <span>Patient Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Poppins'] drop-shadow-sm">
            Trusted by <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Thousands of Happy Patients</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Read real stories from families in Sithalapakkam, Medavakkam & Perumbakkam who restored their smiles at DivyN.
          </p>
        </div>

        {/* Google 5-Star Highlight Badge Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 flex items-center justify-center font-extrabold text-2xl shadow-sm">
              5.0
            </div>
            <div>
              <div className="flex items-center text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1">
                Google Business Rating — 122+ Authentic Reviews
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAddReviewModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/25"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((t) => (
            <div
              key={t.id}
              className="p-6 glass-card glass-card-hover flex flex-col justify-between group border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full flex items-center gap-1 border border-emerald-300 dark:border-emerald-800">
                    <CheckCircle className="w-3 h-3 text-emerald-600" /> Verified Patient
                  </span>
                </div>

                <Quote className="w-8 h-8 text-blue-400/60 dark:text-blue-900/50 mb-2" />

                <p className="text-slate-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed mb-4 italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{t.name}</h4>
                  <p className="text-[11px] text-blue-700 dark:text-cyan-400 font-semibold">{t.treatment}</p>
                </div>
                <span className="text-slate-600 dark:text-slate-400 text-[11px] font-semibold">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add Review Modal */}
      {showAddReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setShowAddReviewModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 font-['Poppins']">
              Share Your Experience at DivyN
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
              Your honest feedback helps other families in Sithalapakkam find quality dental care.
            </p>

            {submittedMessage ? (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-medium text-sm text-center">
                {submittedMessage}
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Anand Kumar"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">Area / Location</label>
                    <input
                      type="text"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      placeholder="e.g. Sithalapakkam"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">Treatment Taken</label>
                    <select
                      value={newTreatment}
                      onChange={(e) => setNewTreatment(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
                    >
                      <option>Root Canal Treatment</option>
                      <option>Dental Implants</option>
                      <option>Clear Aligners / Braces</option>
                      <option>Teeth Whitening</option>
                      <option>Scaling & Cleaning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">Rating</label>
                  <div className="flex gap-2 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1"
                      >
                        <Star className={`w-6 h-6 ${star <= newRating ? 'fill-amber-400' : 'text-slate-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-300 mb-1">Review Comments</label>
                  <textarea
                    required
                    rows={3}
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Describe your treatment experience, doctor behavior, and painlessness..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Review</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
