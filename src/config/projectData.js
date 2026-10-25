// ============================================================
// AURELIA RESIDENCES — Project Configuration
// Update all values here before going to production.
// ============================================================

export const PROJECT = {
  name: "AURELIA",
  fullName: "AURELIA RESIDENCES",
  tagline: "WHERE ARCHITECTURE MEETS THE EXTRAORDINARY.",
  subTagline: "A new perspective on contemporary luxury living.",
  location: "PRIVATE RESIDENCES · MUMBAI, INDIA",
  address: "[Developer Address — TBC]",
  city: "Mumbai",
  country: "India",
  year: "2026",
  status: "NOW PRESENTING",
  developer: "Aurelia Group",
};

export const CONTACT = {
  phone: "+91 98765 43210",
  email: "enquiries@aureliaresidences.com",
  salesOffice: "Sales Gallery by appointment only",
  salesHours: "Mon–Sat: 10:00 AM – 7:00 PM",
  mapLink: "https://maps.google.com/?q=Mumbai,India",
};

export const NAV_LINKS = [
  { label: "The Residence", href: "#residence" },
  { label: "Architecture", href: "#architecture" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

// Premium Unsplash architectural images — replace with actual project photos
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85&auto=format&fit=crop",
  heroAlt: "Aurelia Residences — Luxury tower exterior",

  sectionA: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80&auto=format&fit=crop",
  sectionAlt: "Contemporary high-rise architecture with glass facade",

  sectionB: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80&auto=format&fit=crop",
  sectionBAlt: "Luxury residential exterior with landscaping",

  sectionC: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80&auto=format&fit=crop",
  sectionCAlt: "Premium architectural facade detail",

  sectionD: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80&auto=format&fit=crop",
  sectionDAlt: "Wide-angle luxury residential building",

  interior1: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1400&q=80&auto=format&fit=crop",
  interior1Alt: "Luxury living room with floor-to-ceiling windows",

  interior2: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&auto=format&fit=crop",
  interior2Alt: "Premium kitchen with marble countertops",

  interior3: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80&auto=format&fit=crop",
  interior3Alt: "Master bedroom with panoramic city views",

  amenity1: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&q=80&auto=format&fit=crop",
  amenity1Alt: "Infinity pool with skyline view",

  amenity2: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80&auto=format&fit=crop",
  amenity2Alt: "State-of-the-art fitness centre",

  amenity3: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80&auto=format&fit=crop",
  amenity3Alt: "Private dining and lounge",

  amenity4: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&auto=format&fit=crop",
  amenity4Alt: "Landscaped gardens and outdoor terrace",

  gallery: [
    { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80&auto=format&fit=crop", alt: "Aurelia tower — exterior" },
    { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80&auto=format&fit=crop", alt: "Glass facade — architectural detail" },
    { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop", alt: "Landscaped approach" },
    { src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80&auto=format&fit=crop", alt: "Living room — Penthouse" },
    { src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80&auto=format&fit=crop", alt: "Infinity pool — rooftop" },
    { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80&auto=format&fit=crop", alt: "Master bedroom — sky suite" },
    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80&auto=format&fit=crop", alt: "Gourmet kitchen" },
    { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop", alt: "Dusk facade" },
  ],
};

export const RESIDENCES = [
  {
    type: "GRAND RESIDENCES",
    bedrooms: "3 Bedroom",
    bathrooms: "3 Bathrooms",
    area: "From [TBC] sq.ft.",
    features: ["Private entrance foyer", "Panoramic city views", "Chef's kitchen"],
    availability: "Limited availability",
  },
  {
    type: "SKY SUITES",
    bedrooms: "4 Bedroom",
    bathrooms: "4 Bathrooms",
    area: "From [TBC] sq.ft.",
    features: ["Double-height living room", "Private terrace", "Butler service"],
    availability: "Select residences available",
  },
  {
    type: "THE PENTHOUSE",
    bedrooms: "5 Bedroom",
    bathrooms: "5.5 Bathrooms",
    area: "From [TBC] sq.ft.",
    features: ["Rooftop terrace", "Private pool", "360° city panorama"],
    availability: "One of a kind",
  },
];

export const AMENITIES = [
  { title: "Infinity Pool", description: "A sky-high pool offering uninterrupted panoramic views.", icon: "Waves" },
  { title: "Fitness & Wellness", description: "State-of-the-art training facility with spa and recovery suite.", icon: "Dumbbell" },
  { title: "Private Dining", description: "Curated dining experiences in a residents-only setting.", icon: "UtensilsCrossed" },
  { title: "Sky Lounge", description: "An exclusive rooftop lounge reserved for residents and guests.", icon: "Wind" },
  { title: "Landscaped Gardens", description: "Manicured grounds designed for quiet contemplation.", icon: "Flower2" },
  { title: "Concierge Service", description: "24-hour white-glove concierge for every need.", icon: "BellConcierge" },
];

export const SPECS = [
  { label: "Building Height", value: "[TBC] Floors" },
  { label: "Total Residences", value: "[TBC] Exclusive Units" },
  { label: "Ceiling Height", value: "From 3.6m" },
  { label: "Completion", value: "[TBC — Placeholder]" },
  { label: "Structure", value: "Reinforced Concrete Core" },
  { label: "Façade", value: "Double-Glazed Glass Curtain Wall" },
  { label: "Parking", value: "3 Levels — Secure Basement" },
  { label: "Security", value: "24/7 Biometric Access Control" },
];

export const PALETTE = {
  charcoal: "#1a1a1a",
  ivory: "#f5f0ea",
  stone: "#c8beb4",
  concrete: "#8a8278",
  accent: "#b8935a",
  dark: "#0d0d0d",
  light: "#faf7f4",
};
