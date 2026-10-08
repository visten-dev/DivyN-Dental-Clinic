import { Treatment, Doctor, Testimonial, GalleryItem, BeforeAfterCase, BlogPost, FAQItem } from '../types';
import doctorProfileImg from '../assets/images/divyn_doctor_profile_1784734684149.jpg';
import heroBgImg from '../assets/images/divyn_hero_bg_1784734669979.jpg';
import patientSmileImg from '../assets/images/divyn_patient_smile_1784734697051.jpg';

export const ASSET_IMAGES = {
  doctorProfile: doctorProfileImg,
  heroBg: heroBgImg,
  patientSmile: patientSmileImg,
};

export const CLINIC_INFO = {
  name: "DivyN – The DENTIST",
  tagline: "Creating Healthy Smiles with Advanced Dental Care",
  location: {
    address: "674, Venous Colony, Sithalapakkam",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600131",
    fullAddress: "674, Venous Colony, Sithalapakkam, Chennai, Tamil Nadu – 600131",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.895475351314!2d80.1834!3d12.8903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c38661706a1%3A0x6b4038a8e3230d50!2sSithalapakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600131!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  contact: {
    phone: "+91 79047 19986",
    rawPhone: "+917904719986",
    whatsapp: "+917904719986",
    email: "contact@divyndentist.com",
    appointmentEmail: "appointments@divyndentist.com"
  },
  stats: {
    rating: 5.0,
    reviewCount: 122,
    happyPatients: "5000+",
    experienceYears: "10+",
    sterilizedRate: "100%",
    successRate: "99.8%"
  },
  timing: [
    { days: "Monday – Saturday", morning: "10:00 AM – 1:30 PM", evening: "5:00 PM – 10:00 PM" },
    { days: "Sunday", morning: "10:00 AM – 1:30 PM", evening: "Closed (Emergency On Call)" }
  ]
};

export const TREATMENTS: Treatment[] = [
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    category: "Restorative",
    iconName: "Activity",
    shortDesc: "Single-sitting pain-free root canal treatment using microscopic rotary endodontics.",
    fullDesc: "Preserve your natural tooth with our painless rotary root canal treatment. Using precision digital apex locators and microscopic rotary tools, we eliminate infected pulp, sterilize the root canals, and seal them securely with custom crowns.",
    benefits: ["100% Painless procedure", "Preserves natural tooth structure", "Completed in single or two short sittings", "Prevents infection spread"],
    duration: "45 - 60 minutes",
    painLevel: "Painless (Local Anesthesia)",
    priceRange: "₹2,500 - ₹5,000",
    recommendedFor: ["Severe toothache", "Sensitivity to hot/cold", "Deep dental cavities", "Tooth swelling"]
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    category: "Restorative",
    iconName: "ShieldCheck",
    shortDesc: "Permanent, natural-looking titanium tooth replacement with lifetime durability.",
    fullDesc: "Restore missing teeth permanently with German & Swiss grade titanium dental implants. DivyN provides computer-guided implant placement that looks, feels, and functions exactly like natural teeth.",
    benefits: ["Lifetime durability guarantee", "Natural biting force restored", "Prevents jaw bone degradation", "Seamless cosmetic appearance"],
    duration: "30 - 45 mins per implant",
    painLevel: "Painless (Local Anesthesia)",
    priceRange: "₹18,000 - ₹35,000",
    recommendedFor: ["Single or multiple missing teeth", "Loose dentures", "Traumatic tooth loss"]
  },
  {
    id: "invisible-aligners",
    title: "Clear Aligners",
    category: "Orthodontics",
    iconName: "Sparkles",
    shortDesc: "Nearly invisible, removable clear aligners to straighten teeth discreetly.",
    fullDesc: "Straighten your smile without unsightly metal wires. Our custom US-FDA approved clear aligners gently shift your teeth into ideal alignment with maximum comfort and 3D digital progress tracking.",
    benefits: ["100% Removable for eating & brushing", "Nearly invisible design", "No metal wire cuts or mouth sores", "Fewer clinic visits"],
    duration: "6 - 14 months",
    painLevel: "Zero Pain",
    priceRange: "₹35,000 - ₹85,000",
    recommendedFor: ["Crooked teeth", "Gaps between teeth", "Crowded teeth", "Overbite / Underbite"]
  },
  {
    id: "braces",
    title: "Orthodontic Braces",
    category: "Orthodontics",
    iconName: "Grid",
    shortDesc: "High-precision metal, ceramic, and self-ligating braces for perfect bite alignment.",
    fullDesc: "Comprehensive alignment solutions for children and adults using modern low-friction ceramic or metal bracket systems to correct bite issues, misalignment, and facial symmetry.",
    benefits: ["Effective for complex alignment cases", "Ceramic aesthetic options available", "Permanent bite correction", "Suitable for all age groups"],
    duration: "12 - 18 months",
    painLevel: "Minimal Discomfort",
    priceRange: "₹20,000 - ₹45,000",
    recommendedFor: ["Severe crowding", "Protruding teeth", "Teeth misalignment in teens and adults"]
  },
  {
    id: "teeth-whitening",
    title: "Laser Teeth Whitening",
    category: "Cosmetic",
    iconName: "Sun",
    shortDesc: "Get up to 8 shades brighter teeth in just 45 minutes with safe laser whitening.",
    fullDesc: "Transform dull or stained teeth with our clinical LED laser whitening treatment. Safe on tooth enamel with instantly visible sparkling results for weddings, events, and everyday confidence.",
    benefits: ["Up to 8 shades brighter in 1 session", "Safe on enamel & dentin", "Includes anti-sensitivity gel application", "Long-lasting radiant shine"],
    duration: "45 minutes",
    painLevel: "Zero Pain",
    priceRange: "₹4,500 - ₹8,000",
    recommendedFor: ["Coffee/tea stains", "Yellowing due to age", "Smoking stains", "Wedding smile prep"]
  },
  {
    id: "smile-designing",
    title: "Digital Smile Designing",
    category: "Cosmetic",
    iconName: "Smile",
    shortDesc: "Customized cosmetic smile makeover using porcelain veneers & 3D digital planning.",
    fullDesc: "Design your dream smile with precision. Using digital smile analysis, custom ultrathin porcelain veneers, and gum sculpting, we craft a Hollywood-standard smile tailored to your facial aesthetics.",
    benefits: ["Preview your smile before treatment", "Ultrathin porcelain veneers", "Fixes chipped, discolored, or uneven teeth", "Harmonizes facial aesthetics"],
    duration: "2 - 3 visits",
    painLevel: "Zero Pain",
    priceRange: "Custom Evaluation",
    recommendedFor: ["Gummy smiles", "Chipped or broken front teeth", "Uneven tooth sizes", "Total smile transformation"]
  },
  {
    id: "crowns-bridges",
    title: "Dental Crowns & Bridges",
    category: "Restorative",
    iconName: "Crown",
    shortDesc: "Monolithic Zirconia and E-max ceramic crowns with lifetime warranty against breakage.",
    fullDesc: "Protect damaged teeth or replace missing teeth with metal-free Zirconia crowns designed via CAD/CAM technology for exceptional strength and natural translucency.",
    benefits: ["High strength Zirconia & Ceramic", "15-year to lifetime warranty", "Stain resistant", "Perfect color matching"],
    duration: "2 visits (3 days gap)",
    painLevel: "Painless (Local Anesthesia)",
    priceRange: "₹3,000 - ₹12,000",
    recommendedFor: ["Post-root canal protection", "Broken or worn teeth", "Bridging missing teeth"]
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Removal",
    category: "Surgical",
    iconName: "AlertTriangle",
    shortDesc: "Gentle, surgical extraction of impacted wisdom teeth with quick healing.",
    fullDesc: "Surgical removal of painful, impacted, or decayed wisdom teeth using micro-surgical techniques and soothing local anesthesia to ensure minimal post-op swelling and rapid recovery.",
    benefits: ["Relieves jaw pressure & pain", "Prevents damage to adjacent molars", "Advanced suturing for fast healing", "Guided post-care kit"],
    duration: "30 - 45 minutes",
    painLevel: "Painless (Local Anesthesia)",
    priceRange: "₹2,500 - ₹6,500",
    recommendedFor: ["Impacted wisdom teeth", "Jaw swelling and pain", "Recurrent gum infection around 3rd molar"]
  },
  {
    id: "scaling-polishing",
    title: "Scaling & Ultrasonic Polishing",
    category: "Preventative",
    iconName: "RefreshCw",
    shortDesc: "Deep cleaning to eliminate plaque, tartar, bad breath, and gum bleeding.",
    fullDesc: "Maintain healthy gums and fresh breath with painless ultrasonic scaling. Removes stubborn calculus, plaque deposits, and stain buildup to protect teeth roots and prevent gum disease.",
    benefits: ["Eliminates bad breath (halitosis)", "Stops bleeding gums", "Prevents pyorrhea & bone loss", "Smooth polished enamel feel"],
    duration: "30 minutes",
    painLevel: "Zero Pain",
    priceRange: "₹800 - ₹1,800",
    recommendedFor: ["Bleeding gums", "Plaque/tartar buildup", "Routine 6-month checkups"]
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric (Kids) Dentistry",
    category: "Preventative",
    iconName: "Heart",
    shortDesc: "Child-friendly, fear-free dental care, cavity prevention, and preventive sealants.",
    fullDesc: "Creating happy dental visits for children! Our pediatric specialists provide gentle cavity fillings, pit & fissure sealants, fluoride treatments, and habit-breaking appliances in a cheerful environment.",
    benefits: ["Fear-free child-friendly doctors", "Preventive fluoride protection", "Habit breaking appliances (thumb sucking)", "Pain-free pulpectomy"],
    duration: "30 - 45 minutes",
    painLevel: "Zero Pain",
    priceRange: "₹500 - ₹2,500",
    recommendedFor: ["Milk tooth decay", "Early tooth alignment check", "Kid's routine preventive checkup"]
  },
  {
    id: "dentures",
    title: "Complete & Partial Dentures",
    category: "Restorative",
    iconName: "Layers",
    shortDesc: "Lightweight, flexible, and unbreakable custom dentures for comfortable chewing.",
    fullDesc: "Restore chewing capability and confidence for senior citizens with high-comfort BPS dentures or flexible Lucitone dentures that fit snugly without slipping.",
    benefits: ["Natural chewing comfort", "Flexible unbreakable options", "Custom color matched gums", "Easy maintenance"],
    duration: "3 - 4 sittings",
    painLevel: "Zero Pain",
    priceRange: "₹8,000 - ₹25,000",
    recommendedFor: ["Full arch tooth loss", "Multiple missing teeth in elderly"]
  },
  {
    id: "dental-fillings",
    title: "Tooth-Colored Fillings",
    category: "Restorative",
    iconName: "CheckCircle",
    shortDesc: "Invisible light-cured composite resin fillings to restore decayed or chipped teeth.",
    fullDesc: "Seamlessly repair cavities and enamel wear with tooth-colored nanohybrid resin. Bonds directly to natural tooth enamel with zero mercury for invisible, durable repairs.",
    benefits: ["Matches exact tooth shade", "100% Mercury-free bio-compatible material", "Done in 20 minutes", "Prevents cavity expansion"],
    duration: "20 - 30 minutes",
    painLevel: "Zero Pain",
    priceRange: "₹600 - ₹1,500",
    recommendedFor: ["Minor decay", "Chipped enamel", "Replacing dark silver amalgam fillings"]
  },
  {
    id: "general-dentistry",
    title: "General Dentistry & Checkups",
    category: "Preventative",
    iconName: "Search",
    shortDesc: "Comprehensive oral health evaluation, intraoral camera scan, and personalized care.",
    fullDesc: "Regular oral health diagnostics featuring HD intraoral digital camera screening, early decay detection, oral cancer screening, and custom preventive dental hygiene plans.",
    benefits: ["Early detection saves money & pain", "HD Intraoral camera photo preview", "Custom oral hygiene plan", "Friendly expert consultation"],
    duration: "20 - 30 minutes",
    painLevel: "Zero Pain",
    priceRange: "₹200 Consultation",
    recommendedFor: ["Routine bi-annual dental checkup", "Oral health assessment"]
  },
  {
    id: "emergency-care",
    title: "Emergency Dental Care",
    category: "Surgical",
    iconName: "Zap",
    shortDesc: "Immediate priority appointment for tooth injury, severe pain, or broken teeth.",
    fullDesc: "Prompt relief when you need it most. We prioritize same-day emergency appointments for severe toothache, knocked-out teeth, facial trauma, or broken crowns.",
    benefits: ["Same-day priority walk-in", "Immediate pain relief therapy", "24/7 Phone helpline guidance", "Emergency stabilization"],
    duration: "Immediate Priority",
    painLevel: "Painless (Local Anesthesia)",
    priceRange: "Priority Assessment",
    recommendedFor: ["Sudden intense tooth pain", "Trauma / Knocked out tooth", "Swollen jaw or abscess"]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-divyan-chief",
    name: "Dr. Divyan M.D.S.",
    title: "Chief Dental Surgeon & Implantologist",
    qualifications: "B.D.S., M.D.S. (Endodontics & Micro-Surgery), F.A.C.D. (USA)",
    experience: "12+ Years Clinical Excellence",
    specialization: ["Microscopic Root Canal Therapy", "Advanced Dental Implants", "Smile Makeovers", "Laser Dentistry"],
    bio: "Dr. Divyan is a highly acclaimed Chief Dental Surgeon renowned for pioneering microscopic rotary root canal techniques and painless single-visit treatments in Chennai. With over 12 years of experience and thousands of successful implant cases, Dr. Divyan combines technical precision with a gentle, patient-first demeanor.",
    imageUrl: doctorProfileImg,
    registrationNo: "TN-DENT-28491",
    availableDays: "Mon - Sat: 10 AM - 1:30 PM & 5 PM - 10 PM"
  },
  {
    id: "dr-ananya-ortho",
    name: "Dr. Ananya R. M.D.S.",
    title: "Senior Orthodontist & Invisalign Specialist",
    qualifications: "B.D.S., M.D.S. (Orthodontics & Dentofacial Orthopedics)",
    experience: "9+ Years Experience",
    specialization: ["Clear Aligners (Invisalign Certified)", "Ceramic Braces", "Child Growth Modification", "Surgical Orthodontics"],
    bio: "Dr. Ananya specializes in transformational smile alignment for teenagers and adults. Certified in US Clear Aligner therapy, she utilizes 3D digital facial simulation to achieve ideal facial harmony and confident smiles.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    registrationNo: "TN-DENT-31045",
    availableDays: "Tue, Thu, Sat: 5 PM - 9 PM"
  },
  {
    id: "dr-karthik-pedio",
    name: "Dr. Karthik S. M.D.S.",
    title: "Pediatric & Preventive Dental Specialist",
    qualifications: "B.D.S., M.D.S. (Pedodontics)",
    experience: "8+ Years Experience",
    specialization: ["Pediatric Care", "Child Psychology Dentistry", "Habit Correction", "Fluoride Therapy"],
    bio: "Dr. Karthik makes dental visits a fun, fearless experience for kids. Skilled in gentle behavior management, he ensures children build a lifelong foundation for healthy teeth.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    registrationNo: "TN-DENT-34812",
    availableDays: "Mon, Wed, Fri: 5 PM - 9 PM"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Suresh Kumar",
    location: "Sithalapakkam, Chennai",
    rating: 5,
    treatment: "Root Canal & Zirconia Crown",
    review: "I was terrified of getting a root canal due to past bad experiences elsewhere. Dr. Divyan at DivyN clinic changed my perception completely! The procedure was 100% painless. The clinic in Venous Colony is ultra-clean and modern. Highly recommended!",
    date: "2 weeks ago",
    verified: true
  },
  {
    id: "t2",
    name: "Priya Rajan",
    location: "Medavakkam, Chennai",
    rating: 5,
    treatment: "Clear Aligners",
    review: "Got my clear aligners at DivyN. In just 8 months my crooked front teeth were aligned perfectly! The team is so soft-spoken, accommodating, and transparent with pricing. Best dental clinic in Sithalapakkam!",
    date: "1 month ago",
    verified: true
  },
  {
    id: "t3",
    name: "Venkatesh Murthy",
    location: "Perumbakkam, Chennai",
    rating: 5,
    treatment: "Full Mouth Dental Implants",
    review: "My mother had difficulty chewing for years due to loose dentures. Dr. Divyan placed 4 dental implants with zero pain and fast recovery. Now she eats everything happily! Top notch sterilization and care.",
    date: "3 weeks ago",
    verified: true
  },
  {
    id: "t4",
    name: "Kavitha N.",
    location: "Sithalapakkam, Chennai",
    rating: 5,
    treatment: "Laser Teeth Whitening",
    review: "I had a wedding to attend in 3 days and booked laser whitening at DivyN. The results were instantaneous! My teeth look super bright and naturally shiny. 5 stars for the amazing hospitality!",
    date: "1 month ago",
    verified: true
  },
  {
    id: "t5",
    name: "Rajesh Kannan",
    location: "Sholinganallur, Chennai",
    rating: 5,
    treatment: "Wisdom Tooth Extraction",
    review: "Had severe night pain due to an impacted wisdom tooth. Called DivyN emergency number and Dr. Divyan saw me immediately. The surgical extraction took barely 20 minutes with zero pain. Very grateful!",
    date: "2 months ago",
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Luxury Clinic Reception",
    category: "Clinic Interiors",
    imageUrl: heroBgImg,
    description: "Spacious, soothing reception area designed with air purification and relaxing ambience."
  },
  {
    id: "g2",
    title: "Advanced Dental Operatory Room",
    category: "Treatment Rooms",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    description: "State-of-the-art dental chair equipped with digital intraoral camera and rotary endodontic motor."
  },
  {
    id: "g3",
    title: "100% Autoclave Sterilization Station",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    description: "Class B vacuum autoclave sterilizers ensuring strict infection control protocols for every patient."
  },
  {
    id: "g4",
    title: "Radiant Smile Transformation",
    category: "Happy Smiles",
    imageUrl: patientSmileImg,
    description: "Confident smile achieved through porcelain veneers and digital smile designing."
  },
  {
    id: "g5",
    title: "Digital Dental Imaging Suite",
    category: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
    description: "Low-radiation digital RVG X-ray system providing instant high-resolution diagnostic images."
  },
  {
    id: "g6",
    title: "Kid-Friendly Pediatric Dental Suite",
    category: "Treatment Rooms",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    description: "Warm and inviting pediatric room with soothing screens and comfortable ergonomics."
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "ba1",
    title: "Gap Closure & Veneers",
    treatment: "Digital Smile Design",
    beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    afterImg: patientSmileImg,
    duration: "2 Weeks",
    description: "Closed mid-line spacing and enhanced tooth contour using 4 ultrathin E-Max porcelain veneers."
  },
  {
    id: "ba2",
    title: "Clear Aligner Straightening",
    treatment: "Orthodontic Aligners",
    beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800",
    duration: "9 Months",
    description: "Corrected upper anterior crowding and deep bite with invisible removable aligners."
  },
  {
    id: "ba3",
    title: "Laser Teeth Whitening",
    treatment: "Laser Whitening",
    beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    afterImg: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
    duration: "45 Minutes",
    description: "Removed deep coffee stain discoloration, restoring 7 shades brighter natural tooth luster."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Why Painless Root Canal Treatments are No Longer a Myth",
    excerpt: "Discover how microscopic endodontics, rotary instruments, and digital apex locators make root canals completely comfortable.",
    content: "Root canal therapy has undergone a massive technological revolution. At DivyN – The DENTIST, we utilize microscopic rotary instruments and localized digital numbing. Patients often fall asleep during the procedure!",
    author: "Dr. Divyan M.D.S.",
    date: "July 15, 2026",
    readTime: "4 min read",
    category: "Root Canal",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-2",
    title: "Clear Aligners vs Traditional Braces: Which is Right for You?",
    excerpt: "Comparing aesthetics, comfort, treatment duration, and cost between clear aligners and ceramic braces in Chennai.",
    content: "While traditional braces are powerhouses for severe skeletal issues, clear aligners offer unmatched convenience for adult lifestyle needs...",
    author: "Dr. Ananya R. M.D.S.",
    date: "June 28, 2026",
    readTime: "5 min read",
    category: "Orthodontics",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog-3",
    title: "5 Simple Daily Habits to Prevent Cavities and Gum Disease",
    excerpt: "Essential preventive tips from dental specialists to keep your natural teeth healthy for a lifetime.",
    content: "Flossing daily, using fluoride toothpaste, avoiding frequent sugary snacking, and visiting your dentist every 6 months can prevent 95% of dental cavities.",
    author: "Dr. Divyan M.D.S.",
    date: "May 10, 2026",
    readTime: "3 min read",
    category: "Oral Care Tips",
    imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is root canal treatment painful at DivyN?",
    answer: "Not at all. At DivyN – The DENTIST, we use advanced localized numbing agents, microscopic rotary endodontics, and gentle techniques to ensure the entire procedure is 100% painless and stress-free.",
    category: "Treatments"
  },
  {
    id: "faq-2",
    question: "Where is DivyN clinic located in Sithalapakkam?",
    answer: "We are located at 674, Venous Colony, Sithalapakkam, Chennai, Tamil Nadu – 600131. Landmarked near Venous Colony main road, easily accessible with dedicated patient parking.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "What are the clinic working hours?",
    answer: "Monday through Saturday: 10:00 AM – 1:30 PM (Morning) and 5:00 PM – 10:00 PM (Evening). Sunday: 10:00 AM – 1:30 PM. Emergency on-call support is available 24/7 at +91 79047 19986.",
    category: "General"
  },
  {
    id: "faq-4",
    question: "How much do dental implants cost in Chennai?",
    answer: "Dental implant pricing at DivyN starts from ₹18,000 to ₹35,000 depending on the implant brand (German/Swiss titanium) and crown customization. We offer transparent pricing with flexible EMI options.",
    category: "Pricing & Insurance"
  },
  {
    id: "faq-5",
    question: "How do I book an appointment?",
    answer: "You can instantly book through our website form, WhatsApp us directly at +91 79047 19986, or call us. Walk-ins are also welcome, but prior booking ensures zero wait time.",
    category: "Appointments"
  },
  {
    id: "faq-6",
    question: "What safety and sterilization protocols do you follow?",
    answer: "We strictly adhere to 100% Class B Vacuum Autoclave sterilization for all instruments, disposable patient drape kits, UV surface disinfection between sittings, and air purification.",
    category: "General"
  }
];
