import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DoctorsSection } from './components/DoctorsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { FAQBlogSection } from './components/FAQBlogSection';
import { AIChatWidget } from './components/AIChatWidget';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  // Enforce permanent dark theme
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Scroll spy to update active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'treatments', 'why-us', 'doctors', 'gallery', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAppointmentModal = () => {
    setSelectedTreatment('');
    setSelectedDoctor('');
    setIsAppointmentModalOpen(true);
  };

  const handleSelectTreatmentForBooking = (treatmentTitle: string) => {
    setSelectedTreatment(treatmentTitle);
    setSelectedDoctor('');
    setIsAppointmentModalOpen(true);
  };

  const handleOpenAppointmentModalWithDoctor = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    setSelectedTreatment('');
    setIsAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen text-slate-100 font-['Poppins',sans-serif] relative bg-[#020617] w-full max-w-full overflow-x-clip">
      {/* Frosted Glass Background Mesh */}
      <div className="bg-mesh"></div>
      
      {/* Sticky Header Navbar */}
      <Navbar
        onOpenAppointmentModal={handleOpenAppointmentModal}
        activeSection={activeSection}
      />

      {/* Main Multi-Page Content Sections */}
      <main className="w-full max-w-full overflow-x-clip">
        {/* Full-Screen Hero */}
        <Hero onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* About Clinic */}
        <AboutSection />

        {/* 14+ Treatments Section */}
        <TreatmentsSection onSelectTreatmentForBooking={handleSelectTreatmentForBooking} />

        {/* Why Choose DivyN (9 Pillars) */}
        <WhyChooseUs />

        {/* Doctors Section */}
        <DoctorsSection onOpenAppointmentModalWithDoctor={handleOpenAppointmentModalWithDoctor} />

        {/* Before & After Transformations Slider */}
        <BeforeAfterSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Clinic Gallery */}
        <GallerySection />

        {/* Main Embedded Appointment Section */}
        <AppointmentSection />

        {/* Contact & Google Maps */}
        <ContactSection />

        {/* FAQ & Dental Care Blog */}
        <FAQBlogSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Dental Assistant Widget */}
      <AIChatWidget />

      {/* Floating Action Controls (WhatsApp, Emergency Call, Scroll-To-Top) */}
      <FloatingActions onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Global Appointment Booking Modal */}
      {isAppointmentModalOpen && (
        <AppointmentSection
          isModal={true}
          preselectedTreatment={selectedTreatment}
          preselectedDoctor={selectedDoctor}
          onCloseModal={() => setIsAppointmentModalOpen(false)}
        />
      )}

    </div>
  );
}
