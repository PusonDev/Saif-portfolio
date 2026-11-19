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
    avatar: "/images/saif-workstation.webp",
    bio: "Motion Designer crafting kinetic typography, short-form social reels and visual storytelling for brands, founders and creators using Adobe After Effects, Illustrator and Photoshop.",
    metadataItems: [
      { label: "Core Suite", value: "After Effects · Illustrator · Photoshop" },
      { label: "Motion Focus", value: "Kinetic Typography & 9:16 Reels" },
      { label: "Pacing Method", value: "Custom Graph Editor Easing" },
      { label: "Location", value: "Uttara, Dhaka, Bangladesh" },
    ],
  },
  navigation: [
    { label: "Showcase", href: "#works" },
    { label: "Easing Lab", href: "#playground" },
    { label: "Capabilities", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Scope", href: "#contact" },
  ],
  works: [
    {
      id: "kinetic-typography",
      index: "01",
      title: "Kinetic Typography & Brand Storytelling",
      italicTitle: "Flow",
      category: "Kinetic Animation",
      description: "Expressive text choreography, weighted cubic-bezier easing curves and clean narrative hierarchy in After Effects.",
      tools: ["After Effects", "Kinetic Timing"],
      link: "https://www.instagram.com/motion.bysaif/",
      aspectRatio: "16:9",
    },
    {
      id: "social-reels",
      index: "02",
      title: "High-Retention Social Reels",
      italicTitle: "Hooks",
      category: "Vertical Video",
      description: "Scroll-stopping vertical motion assets built for the critical first 3 seconds on Instagram Reels and YouTube Shorts.",
      tools: ["After Effects", "Illustrator"],
      link: "https://www.instagram.com/motion.bysaif/",
      aspectRatio: "9:16",
    },
    {
      id: "transitions-vfx",
      index: "03",
      title: "Vector Staging & Transitions",
      italicTitle: "Depth",
      category: "Compositing",
      description: "Custom layered vector artwork prepared from scratch in Illustrator, animated with clean camera moves and alpha reveals.",
      tools: ["Illustrator", "After Effects"],
      link: "https://www.instagram.com/motion.bysaif/",
      aspectRatio: "layered",
    },
  ] as ShowcaseWork[],
  capabilities: [
    {
      index: "01",
      title: "Kinetic Typography & Titles",
      description: "Expressive text choreography, weighted easing curves and clean narrative hierarchy engineered in After Effects.",
      tools: ["After Effects", "Kinetic Timing"],
      highlight: "Custom Easing",
    },
    {
      index: "02",
      title: "9:16 High-Retention Reels",
      description: "Vertical motion assets tailored for Instagram Reels, YouTube Shorts and high-impact product launches.",
      tools: ["After Effects", "Illustrator"],
      highlight: "Vertical Masters",
    },
    {
      index: "03",
      title: "Vector Staging & Visual Transitions",
      description: "Custom layered artwork prepared from scratch in Illustrator and Photoshop before timeline keyframing.",
      tools: ["Illustrator", "Photoshop"],
      highlight: "Zero Pixelation",
    },
    {
      index: "04",
      title: "Multi-Platform Masters & Clean .AEP",
      description: "Lossless ProRes and lightweight web MP4 exports in 9:16 and 16:9 with organized project source folders.",
      tools: ["Media Encoder", "ProRes / H.264"],
      highlight: "Production Ready",
    },
  ] as CapabilityItem[],
  processCadence: [
    {
      step: "01",
      title: "Brief & Visual Direction",
      description: "Analyzing script narrative, pacing benchmarks and typography moodboard before opening project files.",
      deliverable: "Visual Direction Sheet",
      tools: "Concept Framing",
    },
    {
      step: "02",
      title: "Vector & Typography Prep",
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
      title: "Voiceover Sync & Final Masters",
      description: "Locking visual hits to spoken narration beats, rendering 4K/1080p outputs and packaging organized .AEP files.",
      deliverable: "Masters + Clean Source",
      tools: "Media Encoder",
    },
  ] as ProcessCadenceStep[],
  credentials: {
    experience: {
      role: "Freelance Motion Designer",
      handle: "@motion.bysaif",
      period: "2026 – Present",
      points: [
        "Animates kinetic typography, social reels and graphic sequences in Adobe After Effects.",
        "Prepares vector assets, layered typography and color grading passes in Illustrator and Photoshop.",
        "Manages end-to-end delivery from initial concept framing to multi-platform exports and source handover.",
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
    languages: "Bangla (Native) · English (Working Proficiency)",
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
      answer: "I work in Adobe After Effects for keyframe animation and kinetic typography, paired with Adobe Illustrator and Photoshop for vector asset preparation and color grading.",
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
      answer: "I export in full 1080p and 4K ProRes or web-optimized H.264, tailored for both 9:16 vertical (Instagram Reels, Shorts) and 16:9 widescreen (Web, YouTube).",
    },
  ] as FAQItem[],
};
