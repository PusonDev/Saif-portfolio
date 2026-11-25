export interface ShowcaseWork {
  id: string;
  index: string;
  title: string;
  italicTitle?: string;
  category: string;
  description: string;
  tools: string[];
  link: string;
  aspectRatio: "16:9" | "9:16" | "layered";
}

export interface CapabilityItem {
  index: string;
  title: string;
  description: string;
  tools: [string, string];
  highlight: string;
}

export interface ProcessCadenceStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
  tools: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const portfolioData = {
  profile: {
    fullName: "MD Saifuddin",
    firstName: "Saif",
    role: "Motion Designer",
    availabilityText: "Available for Freelance Motion Projects",
    location: "Uttara, Dhaka, Bangladesh",
    cityCountry: "Dhaka, BD",
    email: "madas3709@gmail.com",
    phone: "+880 1876 422 288",
    phoneTel: "tel:+8801876422288",
    whatsappUrl: "https://wa.me/8801876422288",
    instagramUrl: "https://www.instagram.com/motion.bysaif/",
    instagramHandle: "@motion.bysaif",
    resumePdfUrl: "/MD-SAIFUDDIN-Resume.pdf",
    avatar: "/images/saif-portrait.webp?v=20261120",
    bio: "Motion Designer crafting high-retention motion graphics, kinetic typography and digital product sequences in After Effects for SaaS products, gaming brands and content creators.",
    summary: "Creative and detail-oriented Motion Designer focused on visual storytelling, dynamic typography and engaging video content. Skilled in Adobe After Effects, Illustrator and Photoshop to transform concepts into clean, modern motion graphics for digital and social media platforms.",
    metadataItems: [
      { label: "Core Suite", value: "After Effects · Illustrator · Photoshop · Media Encoder" },
      { label: "Motion Focus", value: "UI Motion · SaaS and Gaming Reels" },
      { label: "Pacing Method", value: "Custom Graph Editor Easing" },
      { label: "Location", value: "Uttara, Dhaka, Bangladesh" },
    ],
  },
  navigation: [
    { label: "Showcase", href: "#works" },
    { label: "Easing Lab", href: "#playground" },
    { label: "Capabilities", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  works: [
    {
      id: "ui-motion-saas",
      index: "01",
      title: "UI Motion, SaaS Animation and Kinetic Typography",
      italicTitle: "Flow",
      category: "UI Motion and SaaS",
      description: "Interactive SaaS product interface motion and kinetic typography choreography engineered in After Effects.",
      tools: ["After Effects", "UI Motion", "SaaS Animation"],
      link: "https://www.instagram.com/motion.bysaif/",
      aspectRatio: "16:9",
    },
    {
      id: "gaming-social-reels",
      index: "02",
      title: "Promotional Reels for Gaming Brands and Social Platforms",
      italicTitle: "Hooks",
      category: "Gaming and Social",
      description: "High-retention 9:16 promotional reel pacing built for SaaS launches, gaming channels, Instagram Reels and YouTube Shorts.",
      tools: ["After Effects", "Short-Form", "Gaming Brands"],
      link: "https://www.instagram.com/motion.bysaif/",
      aspectRatio: "9:16",
    },
    {
      id: "logo-vector-transitions",
      index: "03",
      title: "Logo Animations, Vector Staging and Transitions",
      italicTitle: "Depth",
      category: "Logo and Staging",
      description: "Layered vector logo reveals and transitions prepared in Illustrator and Photoshop, animated in After Effects and rendered via Media Encoder.",
      tools: ["Illustrator", "Photoshop", "Media Encoder"],
      link: "https://www.instagram.com/motion.bysaif/",
      aspectRatio: "layered",
    },
  ] as ShowcaseWork[],
  capabilities: [
    {
      index: "01",
      title: "SaaS Product Walkthroughs",
      description: "Interactive dashboard previews, feature walkthroughs and crisp interface motion designed for conversion.",
      tools: ["After Effects", "UI Motion"],
      highlight: "SaaS Launches",
    },
    {
      index: "02",
      title: "Dynamic Kinetic Typography",
      description: "Expressive editorial text animation and brand reveals choreographed with weighted keyframe velocity.",
      tools: ["After Effects", "Illustrator"],
      highlight: "Brand Identity",
    },
    {
      index: "03",
      title: "High-Retention Social Reels",
      description: "Vertical 9:16 and 16:9 promotional hooks engineered for gaming creators, digital brands and viral feeds.",
      tools: ["After Effects", "Photoshop"],
      highlight: "High Retention",
    },
    {
      index: "04",
      title: "Vector Staging and Clean Handoff",
      description: "Multi-layer asset prep in Illustrator and Photoshop exported to crisp ProRes/MP4 with organized .AEP source files.",
      tools: ["Illustrator", "Media Encoder"],
      highlight: "Clean Source",
    },
  ] as CapabilityItem[],
  processCadence: [
    {
      step: "01",
      title: "Brief and Visual Direction",
      description: "Analyzing script narrative, pacing benchmarks and typography moodboard before opening project files.",
      deliverable: "Visual Direction Sheet",
      tools: "Concept Framing",
    },
    {
      step: "02",
      title: "Vector and Typography Prep",
      description: "Designing vector artwork, text styles and layered assets in Illustrator and Photoshop for crisp scaling.",
      deliverable: "Layered Vector Artboards",
      tools: "Illustrator · Photoshop",
    },
    {
      step: "03",
      title: "Keyframe Animation",
      description: "Handcrafting motion curves in After Effects with graph editor easing, alpha masks and kinetic camera flow.",
      deliverable: "Motion Sequence V1",
      tools: "After Effects",
    },
    {
      step: "04",
      title: "Voiceover Sync and Final Masters",
      description: "Locking visual hits to spoken narration beats, rendering 4K/1080p outputs and packaging organized .AEP files.",
      deliverable: "Masters + Clean Source",
      tools: "Media Encoder",
    },
  ] as ProcessCadenceStep[],
  credentials: {
    experience: {
      role: "Freelance Motion Designer",
      subRole: "Client and Creative Projects",
      handle: "@motion.bysaif",
      period: "2026 – Present",
      points: [
        "Designs and animates high-impact UI motion graphics, kinetic typography, logo animations and smooth transitions using Adobe After Effects.",
        "Produces engaging promotional videos and short-form visual storytelling content tailored for SaaS products, gaming brands and social media platforms.",
        "Manages end-to-end motion production workflows from concept ideation and vector asset preparation in Illustrator and Photoshop to final rendering in Adobe Media Encoder.",
      ],
    },
    education: [
      {
        year: "2025",
        institution: "British Council",
        title: "IELTS Preparation Course",
        description: "Completed structured English communication and language proficiency training.",
      },
      {
        year: "2024",
        institution: "Milestone College",
        title: "Higher Secondary Certificate (HSC)",
        description: "Completed higher secondary curriculum with academic excellence.",
      },
    ],
    languages: "Bangla (Native) · English (Working Proficiency) · Hindi (Fluent) · Urdu (Fluent)",
    strengths: [
      "Creative Thinking",
      "Time Management",
      "Adaptability and Continuous Learning",
    ],
    interests: [
      "Motion Design",
      "Technology",
      "Gaming",
      "Movies",
    ],
    guarantees: [
      "Handcrafted Graph Editor keyframe easing on every cut",
      "Organized .AEP source folder handover upon completion",
      "Native 9:16 vertical and 16:9 widescreen format delivery",
      "Direct designer communication via WhatsApp and Email",
    ],
  },
  faqs: [
    {
      question: "What software suite do you use for motion design?",
      answer: "I work in Adobe After Effects, Illustrator, Photoshop and Media Encoder. This end-to-end suite covers vector asset staging, kinetic typography, UI motion, SaaS animation, logo animation and high-retention gaming/social promotional videos.",
    },
    {
      question: "What is your typical turnaround time for a motion project?",
      answer: "Standard 30 to 60-second kinetic reels take 2 to 4 business days from storyboard confirmation to final master. Rush 48-hour delivery is available for priority launches.",
    },
    {
      question: "Do you deliver organized project source files (.AEP)?",
      answer: "Yes. Every completed commission includes the fully organized Adobe After Effects project file (.aep) along with linked vector assets and font references.",
    },
    {
      question: "In what resolutions and aspect ratios do you export?",
      answer: "I export in full 1080p and 4K ProRes or web-optimized H.264 via Adobe Media Encoder, tailored for both 9:16 vertical (Instagram Reels and YouTube Shorts) and 16:9 widescreen (Web and YouTube).",
    },
  ] as FAQItem[],
};
