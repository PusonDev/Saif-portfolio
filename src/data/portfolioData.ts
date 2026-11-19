export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  year: string;
  details: string;
}

export interface PortfolioData {
  profile: {
    fullName: string;
    name: string;
    role: string;
    headline: string;
    bio: string;
    location: string;
    availability: string;
    email: string;
    phone: string;
    instagram: string;
    instagramHandle: string;
    avatar: string;
    stats: { label: string; value: string }[];
  };
  navigation: { label: string; href: string }[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  languages: string[];
  interests: string[];
}

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "MD SAIFUDDIN",
    name: "Saif",
    role: "Motion Designer",
    headline: "Visual Storytelling, Dynamic Kinetic Typography and Modern Motion Graphics",
    bio: "Creative and detail-oriented Motion Designer specializing in transforming concepts into clean, modern motion graphics for digital and social media platforms using Adobe After Effects, Illustrator and Photoshop.",
    location: "Uttara, Dhaka, Bangladesh",
    availability: "Available for Freelance & Select Projects",
    email: "madas3709@gmail.com",
    phone: "+880 1876 422 288",
    instagram: "https://www.instagram.com/motion.bysaif/",
    instagramHandle: "@motion.bysaif",
    avatar: "/images/saif-profile.jpg",
    stats: [
      { label: "Core Focus", value: "Motion & FX" },
      { label: "Design Tools", value: "Ae · Ai · Ps" },
      { label: "Visual Delivery", value: "4K / 60 FPS" },
      { label: "Client SLA", value: "<15 Min" }
    ]
  },
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "Works", href: "#works" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ],
  skills: [
    {
      title: "Motion & Design Tools",
      skills: ["Adobe After Effects", "Adobe Illustrator", "Adobe Photoshop"]
    },
    {
      title: "Core Competencies",
      skills: ["Motion Design", "Kinetic Typography", "Visual Storytelling", "Video Editing", "Graphic Design"]
    },
    {
      title: "Professional Skills",
      skills: ["Creative Thinking", "Time Management", "Adaptability", "Continuous Learning"]
    }
  ],
  projects: [
    {
      id: "motion-typography",
      title: "Kinetic Typography & Narrative Flow",
      category: "Kinetic Animation",
      description: "Expressive text choreography synchronized with rhythmic visual pacing, modern easing curves and punchy typographic hierarchy.",
      tags: ["After Effects", "Kinetic Typography", "Visual Flow"],
      metrics: "Custom Keyframe Easing",
      demoUrl: "https://www.instagram.com/motion.bysaif/",
      featured: true
    },
    {
      id: "brand-motion-assets",
      title: "Brand Motion & Social Media Assets",
      category: "Social Media Motion",
      description: "Short-form high-impact motion creative packages engineered for Instagram reels, product launches and digital brand campaigns.",
      tags: ["Illustrator", "After Effects", "Short-Form"],
      metrics: "Tailored for High Retention",
      demoUrl: "https://www.instagram.com/motion.bysaif/",
      featured: true
    },
    {
      id: "smooth-transitions-vfx",
      title: "Dynamic Transitions & Visual Effects",
      category: "VFX & Compositing",
      description: "End-to-end motion workflows including vector asset preparation, seamless camera whips, glow dynamics and final rendering.",
      tags: ["After Effects", "Photoshop", "Compositing"],
      metrics: "Seamless Render Pipeline",
      demoUrl: "https://www.instagram.com/motion.bysaif/",
      featured: true
    }
  ],
  experience: [
    {
      role: "Freelance Motion Designer",
      company: "Personal & Creative Projects (@motion.bysaif)",
      period: "2026 – Present",
      description: "Managing complete end-to-end motion graphics and video editing workflows for digital platforms.",
      highlights: [
        "Design and animate high-impact motion graphics, kinetic typography, smooth transitions and visual effects using Adobe After Effects.",
        "Produce engaging short-form video content and visual storytelling assets tailored for social media platforms.",
        "Manage end-to-end motion production workflows, including concept ideation, graphic asset preparation in Illustrator and Photoshop, animation and final rendering."
      ]
    }
  ],
  education: [
    {
      title: "IELTS Preparation Course",
      institution: "British Council",
      year: "2025",
      details: "Completed structured English communication and language proficiency training."
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Milestone College",
      year: "2024",
      details: "Completed higher secondary curriculum with academic excellence."
    }
  ],
  languages: ["Bangla (Native)", "English (Working Proficiency)"],
  interests: ["Motion Design", "Technology", "Gaming", "Movies"]
};
