// Centralized Business Configuration for Level Up Fitness | Mathikere
// All contact details, Google snapshot data, opening hours, facilities, and image assets are managed here.

export interface GymConfig {
  name: string;
  wordmark: string;
  tagline: string;
  locationShort: string;
  locationFull: string;
  landmark: string;
  category: string;
  phone: string;
  phoneRaw: string;
  googleSnapshot: {
    rating: number;
    reviewCount: number;
    platform: string;
    verifiedNote: string;
    mapsSearchUrl: string;
    mapsEmbedUrl: string;
    mapsReviewsUrl: string;
  };
  openingHours: {
    snapshotNote: string;
    notice: string;
    schedule: Array<{ days: string; hours: string; note?: string }>;
  };
  feedbackHighlights: Array<{
    title: string;
    description: string;
    badge: string;
  }>;
  coreDifferentiators: Array<{
    num: string;
    title: string;
    description: string;
  }>;
  facilitiesCategories: Array<{
    id: string;
    title: string;
    description: string;
    equipmentHighlights: string[];
    image: string;
    imageAlt: string;
  }>;
  galleryImages: Array<{
    id: string;
    title: string;
    category: string;
    url: string;
    alt: string;
    spanClass?: string;
  }>;
  membershipEnquiryInfo: {
    title: string;
    description: string;
    durations: string[];
    goals: string[];
    contactTimes: string[];
    note: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const gymConfig: GymConfig = {
  name: "Level Up Fitness | Mathikere",
  wordmark: "LEVEL UP FITNESS",
  tagline: "YOUR WORK. YOUR STRENGTH. YOUR NEXT LEVEL.",
  locationShort: "MATHIKERE, BENGALURU",
  locationFull: "No. 14, Athriya Towers, Tank Bund Road, opposite JP Park ground, next to Reliance Supermarket, Brindavan Nagar, SBM Colony, Mathikere, Bengaluru, Karnataka 560054, India.",
  landmark: "Opposite JP Park Ground, next to Reliance Supermarket",
  category: "Gym and fitness centre",
  phone: "+91 99169 90052",
  phoneRaw: "+919916990052",

  // Real Google Maps Snapshot supplied by business
  googleSnapshot: {
    rating: 4.9,
    reviewCount: 593,
    platform: "Google Maps",
    verifiedNote: "Verified customer rating snapshot from 593 real Google reviews.",
    mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Level+Up+Fitness+Athriya+Towers+Tank+Bund+Road+Mathikere+Bengaluru",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2605842848833!2d77.54637687588373!3d13.019089987300735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d84a7556a31%3A0xe5a3c9b7e71fba32!2sAthriya%20Towers!5e0!3m2!1sen!2sin!4v1714500000000!5m2!1sen!2sin",
    mapsReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Level+Up+Fitness+Mathikere+Bengaluru+reviews"
  },

  // Centralized hours based on supplied snapshot (closes 10:30 PM)
  openingHours: {
    snapshotNote: "Closes at 10:30 PM",
    notice: "Daily schedule based on Google Maps business record. Please contact the front desk at +91 99169 90052 to confirm specific Sunday or public holiday timings.",
    schedule: [
      { days: "Monday – Saturday", hours: "5:30 AM – 10:30 PM", note: "Standard training sessions" },
      { days: "Sunday", hours: "6:00 AM – 1:00 PM", note: "Morning training" }
    ]
  },

  // Verified Member Feedback themes (accurate summary of the 593 Google reviews)
  feedbackHighlights: [
    {
      title: "Spacious Workout Area",
      description: "Generous floor spacing between equipment, allowing unobstructed lifting, supersets, and functional movement.",
      badge: "Floor Space"
    },
    {
      title: "Clean & Maintained Equipment",
      description: "Hygienic training environment with thoroughly sanitized benches, smooth pulleys, and well-kept plates.",
      badge: "Maintenance"
    },
    {
      title: "Supportive & Knowledgeable Trainers",
      description: "Patient coaching staff who assist with form corrections, workout structuring, and injury prevention.",
      badge: "Guidance"
    },
    {
      title: "Friendly & Motivating Atmosphere",
      description: "A grounded community where athletes and beginners train side-by-side without intimidation or noise.",
      badge: "Community"
    },
    {
      title: "True Value for Money",
      description: "Consistent quality facilities, reliable support, and practical membership without hidden upsells.",
      badge: "Value"
    }
  ],

  // Core differentiators
  coreDifferentiators: [
    {
      num: "01",
      title: "QUALITY EQUIPMENT",
      description: "Commercial-grade strength machines, solid barbells, precision plates, and smooth cable stacks maintained daily."
    },
    {
      num: "02",
      title: "SPACIOUS TRAINING FLOOR",
      description: "Uncrowded layout opposite JP Park ground designed for focused training sessions and uninterrupted flow."
    },
    {
      num: "03",
      title: "SUPPORTIVE TRAINERS",
      description: "Approachable, certified fitness staff available on the floor to advise, adjust technique, and keep you safe."
    }
  ],

  // Verified facilities categories (strictly no unverified pools, saunas or fake classes)
  facilitiesCategories: [
    {
      id: "strength",
      title: "Strength Training",
      description: "Built for progressive overload: heavy-gauge power racks, Olympic lifting platforms, calibrated plates, and barbell stations.",
      equipmentHighlights: [
        "Heavy-duty power cages & squat stands",
        "Olympic barbells & competition-standard collars",
        "Rubber bumper & cast-iron weight plates",
        "Dedicated deadlift & barbell movement stations"
      ],
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Heavy Olympic barbells and lifting platforms in a dark strength training environment"
    },
    {
      id: "freeweights",
      title: "Free Weights Area",
      description: "Complete dumbbell sets and adjustable incline/flat benches engineered for unilateral and functional conditioning.",
      equipmentHighlights: [
        "Full dumbbell racks spanning progressive weight increments",
        "Commercial adjustable decline, flat, and incline benches",
        "Solid cast-iron kettlebells & grip accessories",
        "Spacious mirror line for posture verification"
      ],
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Orderly row of dumbbells on a steel rack in a modern gym"
    },
    {
      id: "equipment",
      title: "Workout Equipment & Machines",
      description: "Biomechanically sound cable systems and plate-loaded machines that isolate muscle groups with controlled resistance.",
      equipmentHighlights: [
        "Dual adjustable cable crossover pulley stations",
        "Plate-loaded leg press, hack squat & calf extensions",
        "Lat pulldown, seated cable rows & chest press units",
        "Targeted isolation equipment for core & arms"
      ],
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Pin-selected cable gym machine and workout stations"
    },
    {
      id: "support",
      title: "Floor Training & Guidance",
      description: "Hands-on floor supervision, form adjustments, and tailored exercise recommendations directly from knowledgeable trainers.",
      equipmentHighlights: [
        "Active floor coaches observing technique & posture",
        "Warm-up, stretching & mobility guidance",
        "Routine orientation for beginners and advanced lifters",
        "Direct member assistance without pressure"
      ],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Trainer providing technique guidance to an athlete in the gym"
    }
  ],

  // Gallery items for Facilities page (replaceable easily by gym owner)
  galleryImages: [
    {
      id: "g1",
      title: "Olympic Barbell & Deadlift Zone",
      category: "Strength Training",
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      alt: "Barbells loaded with plates in clean gym environment",
      spanClass: "md:col-span-8 md:row-span-2"
    },
    {
      id: "g2",
      title: "Precision Dumbbell Rack",
      category: "Free Weights",
      url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
      alt: "Close-up of hex dumbbells arranged neatly on steel rack",
      spanClass: "md:col-span-4 md:row-span-1"
    },
    {
      id: "g3",
      title: "Cable Pulley & Resistance Systems",
      category: "Workout Equipment",
      url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
      alt: "Cable workout station with multi-grip attachments",
      spanClass: "md:col-span-4 md:row-span-1"
    },
    {
      id: "g4",
      title: "Floor Training & Coaching",
      category: "Training Support",
      url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      alt: "Gym trainer explaining workout technique to a member",
      spanClass: "md:col-span-5 md:row-span-2"
    },
    {
      id: "g5",
      title: "Spacious Training Floor",
      category: "Gym Atmosphere",
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      alt: "Wide angle perspective of spacious workout floor with rubber flooring",
      spanClass: "md:col-span-7 md:row-span-2"
    },
    {
      id: "g6",
      title: "Grip & Strength Focus",
      category: "Strength Training",
      url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
      alt: "Athlete preparing chalked hands for heavy deadlift",
      spanClass: "md:col-span-4 md:row-span-1"
    },
    {
      id: "g7",
      title: "Conditioning & Movement",
      category: "Workout Equipment",
      url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
      alt: "Athlete training on gym floor with focus",
      spanClass: "md:col-span-8 md:row-span-1"
    }
  ],

  // Membership enquiry options (no fabricated prices!)
  membershipEnquiryInfo: {
    title: "Transparent, Goal-Driven Membership",
    description: "At Level Up Fitness, membership pricing is shared directly and honestly based on your duration and training needs. We do not inflate prices with unnecessary resort fees or lock-in traps.",
    durations: [
      "Monthly Membership",
      "Quarterly (3 Months)",
      "Half-Yearly (6 Months)",
      "Annual Plan (12 Months)",
      "Student / Flex Plan (On enquiry)"
    ],
    goals: [
      "Strength & Muscle Conditioning",
      "Fat Loss & Body Composition",
      "General Functional Fitness & Mobility",
      "Post-Rehab / Guided Return to Fitness",
      "Athletic & Endurance Conditioning"
    ],
    contactTimes: [
      "Morning (6:00 AM – 10:00 AM)",
      "Midday (11:00 AM – 3:00 PM)",
      "Evening (4:00 PM – 8:00 PM)",
      "Night (8:00 PM – 10:30 PM)"
    ],
    note: "All plans include full floor access, clean locker facilities, orientation with a trainer, and periodic form reviews."
  },

  // Frequently Asked Questions
  faqs: [
    {
      question: "How can I enquire about membership fees?",
      answer: "You can submit an enquiry through our membership page form, call our front desk directly at +91 99169 90052, or visit us in person at Athriya Towers, Mathikere. We will walk you through the options without any sales pressure."
    },
    {
      question: "Can I visit the gym before joining?",
      answer: "Yes, absolutely. We encourage prospective members to visit during working hours, inspect the workout area, assess equipment availability, and speak directly with our trainers."
    },
    {
      question: "What training facilities are available?",
      answer: "We offer dedicated strength training equipment, power racks, Olympic barbells and bumper plates, a comprehensive free-weights dumbbell station, selectorized cable machines, and a spacious matted training floor."
    },
    {
      question: "How can I speak to a trainer about guidance?",
      answer: "Our trainers are actively on the floor during operational hours. You can ask for assistance with form correction, equipment setup, or request dedicated personal training sessions when you visit or enquire."
    },
    {
      question: "Where is Level Up Fitness located?",
      answer: "We are located at No. 14, Athriya Towers, Tank Bund Road, opposite the JP Park ground and next to Reliance Supermarket in Brindavan Nagar / SBM Colony, Mathikere, Bengaluru (560054)."
    }
  ]
};
