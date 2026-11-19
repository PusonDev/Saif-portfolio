export interface ShowcaseWork {
  id: string;
  index: string;
  title: string;
  italicTitle?: string;
  category: string;
  description: string;
  tools: string[];
  link: string;
  isFlagship?: boolean;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  tools: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company?: string;
  handle: string;
  points: string[];
}

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
  description: string;
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
    avatar: "/images/saif-studio-motion.jpg",
    bio: "Creative and detail-oriented Motion Designer focused on visual storytelling, dynamic typography and engaging video content. Transforming concepts into clean, modern motion graphics for digital and social media platforms using Adobe After Effects, Illustrator and Photoshop.",
    metadataItems: [
      { label: "Focus", value: "Kinetic Typography & Reels" },
      { label: "Suite", value: "After Effects · Illustrator · Photoshop" },
      { label: "Location", value: "Dhaka, Bangladesh" },
      { label: "Handle", value: "@motion.bysaif" },
    ],
  },
  navigation: [
    { label: "Selected Work", href: "#works" },
    { label: "Process", href: "#process" },
    { label: "Background", href: "#experience" },
  ],
  works: [
    {
      id: "kinetic-typography",
      index: "01",
      title: "Kinetic Typography & Narrative",
      italicTitle: "Flow",
      category: "Kinetic Animation",
      description: "Expressive text choreography, rhythmic pacing and custom easing engineered in After Effects.",
      tools: ["After Effects", "Kinetic Typography", "Visual Storytelling"],
      link: "https://www.instagram.com/motion.bysaif/",
      isFlagship: true,
    },
    {
      id: "social-reels",
      index: "02",
      title: "Short-Form Social Reels & Brand",
      italicTitle: "Motion",
      category: "Social Storytelling",
      description: "Scroll-stopping short-form motion assets tailored for Instagram reels and digital brands.",
      tools: ["After Effects", "Illustrator", "Video Editing"],
      link: "https://www.instagram.com/motion.bysaif/",
      isFlagship: false,
    },
    {
      id: "transitions-vfx",
      index: "03",
      title: "Dynamic Transitions & Visual",
      italicTitle: "Effects",
      category: "Compositing & VFX",
      description: "Seamless transitions, layered vector preparation and polished visual effects workflows.",
      tools: ["After Effects", "Photoshop", "Graphic Design"],
      link: "https://www.instagram.com/motion.bysaif/",
      isFlagship: false,
    },
  ] as ShowcaseWork[],
  process: [
    {
      step: "01",
      title: "Concept & Storyboarding",
      description: "Translating rough briefs and scripts into clear visual direction, pacing and narrative rhythm.",
      tools: "Visual Direction",
    },
    {
      step: "02",
      title: "Graphic Asset Prep",
      description: "Building crisp vector shapes, kinetic typography hierarchy and layered artwork in Illustrator and Photoshop.",
      tools: "Illustrator · Photoshop",
    },
    {
      step: "03",
      title: "Motion & Keyframe Animation",
      description: "Bringing typography, camera transitions and VFX to life with customized cubic-bezier easing in After Effects.",
      tools: "After Effects",
    },
    {
      step: "04",
      title: "Refinement & Final Render",
      description: "Polishing micro-timing curves, color grading passes and exporting crisp, platform-ready video files.",
      tools: "Render Pipeline",
    },
  ] as WorkflowStep[],
  experience: {
    period: "2026 – Present",
    role: "Freelance Motion Designer",
    company: "Personal & Creative Projects",
    handle: "@motion.bysaif",
    points: [
      "Designs and animates high-impact motion graphics, kinetic typography, smooth transitions and visual effects using Adobe After Effects.",
      "Produces engaging short-form video content and visual storytelling assets tailored for social media platforms.",
      "Manages end-to-end motion production workflows: concept ideation, graphic asset preparation in Illustrator and Photoshop, animation and final rendering.",
    ],
  } as ExperienceItem,
  education: [
    {
      year: "2025",
      title: "IELTS Preparation Course",
      institution: "British Council",
      description: "Completed structured English communication and language proficiency training.",
    },
    {
      year: "2024",
      title: "Higher Secondary Certificate (HSC)",
      institution: "Milestone College",
      description: "Completed higher secondary curriculum with academic excellence.",
    },
  ] as EducationItem[],
  capabilities: {
    primarySuite: ["Adobe After Effects", "Adobe Illustrator", "Adobe Photoshop"],
    competencies: ["Motion Design", "Kinetic Typography", "Visual Storytelling", "Video Editing", "Graphic Design"],
    strengths: ["Creative Thinking", "Time Management", "Adaptability", "Continuous Learning"],
    languages: ["Bangla (Native)", "English (Working Proficiency)"],
    interests: ["Motion Design", "Technology", "Gaming", "Movies"],
  },
};
