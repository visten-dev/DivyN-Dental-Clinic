export interface Treatment {
  id: string;
  title: string;
  category: 'Restorative' | 'Cosmetic' | 'Orthodontics' | 'Preventative' | 'Surgical';
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  painLevel: 'Painless (Local Anesthesia)' | 'Minimal Discomfort' | 'Zero Pain';
  priceRange: string;
  recommendedFor: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  experience: string;
  specialization: string[];
  bio: string;
  imageUrl: string;
  registrationNo: string;
  availableDays: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  treatment: string;
  review: string;
  date: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic Interiors' | 'Treatment Rooms' | 'Equipment' | 'Happy Smiles' | 'Before After';
  imageUrl: string;
  description: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  treatment: string;
  beforeImg: string;
  afterImg: string;
  duration: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Appointments' | 'Treatments' | 'Pricing & Insurance';
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDoctor: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}
