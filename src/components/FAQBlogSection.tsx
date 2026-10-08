import React, { useState } from 'react';
import { FAQS, BLOG_POSTS } from '../data/clinicData';
import { FAQItem, BlogPost } from '../types';
import { Sparkles, ChevronDown, BookOpen, Clock, ArrowRight, HelpCircle, X } from 'lucide-react';

export const FAQBlogSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  return (
    <section id="faq-blog" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* FAQ Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800 shadow-sm section-badge">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-300" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Poppins'] drop-shadow-sm">
              Got Questions? We Have Answers.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Clear answers regarding treatment comfort, clinic location in Sithalapakkam, costs, and appointments.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-card rounded-2xl overflow-hidden transition-all duration-200 border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base font-['Poppins']">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-600 dark:text-cyan-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-200 dark:border-slate-800">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Dental Care Blog Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 text-blue-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800 shadow-sm section-badge">
              <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-300" />
              <span>Oral Health & Dental Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Poppins'] drop-shadow-sm">
              Expert Advice for a Lifetime Smile
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800';
                      }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <div className="flex items-center gap-3 text-[11px] font-bold text-blue-700 dark:text-cyan-400">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400 font-semibold">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug font-['Poppins'] group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedBlog(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:gap-2 transition-all"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Blog Article Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto space-y-4">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-cyan-400">
              {selectedBlog.category} • {selectedBlog.readTime}
            </span>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-['Poppins']">
              {selectedBlog.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 pb-2 border-b border-slate-200 dark:border-slate-800">
              <span>By {selectedBlog.author}</span>
              <span>•</span>
              <span>{selectedBlog.date}</span>
            </div>

            <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
              {selectedBlog.content}
            </p>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
