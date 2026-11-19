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
    avatar: "/images/saif-workstation.jpg",
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
    { label: "Capabilities", href: "#services" },
    { label: "Playground", href: "#playground" },
    { label: "Process", href: "#process" },
    { label: "FAQs", href: "#faqs" },
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
  services: [
    {
      index: "01",
      title: "Kinetic Typography & Titles",
      description: "Expressive text choreography, weighted cubic-bezier easing and custom keyframe pacing engineered in After Effects.",
      tools: ["After Effects", "Kinetic Timing"],
      highlight: "Custom Easing",
    },
    {
      index: "02",
      title: "High-Retention Social Reels",
      description: "Scroll-stopping vertical 9:16 motion graphics built to hold viewer attention during the critical first 3 seconds.",
      tools: ["After Effects", "Illustrator"],
      highlight: "9:16 Vertical",
    },
    {
      index: "03",
      title: "Vector Asset Design & Staging",
      description: "Creating clean vector artwork, layered compositions and typographic assets in Illustrator before animation.",
      tools: ["Illustrator", "Photoshop"],
      highlight: "Zero Pixelation",
    },
    {
      index: "04",
      title: "Transitions & Visual Effects",
      description: "Seamless motion cuts, layered mask reveals and polished compositing passes that keep narrative momentum high.",
      tools: ["After Effects", "Compositing"],
      highlight: "Seamless Cuts",
    },
    {
      index: "05",
      title: "Color Grading & Frame Polish",
      description: "Stylized cinema color treatment, texture overlays and contrast balancing to give video projects an editorial look.",
      tools: ["Photoshop", "After Effects"],
      highlight: "Editorial Grade",
    },
    {
      index: "06",
      title: "Multi-Platform Render Master",
      description: "Exporting lossless, lightweight video files optimized for Instagram, YouTube Shorts, web landing pages and ads.",
      tools: ["Media Encoder", "MP4 / ProRes"],
      highlight: "Fast Web Loading",
    },
  ],
  comparison: {
    headers: ["Quality Benchmark", "MD Saifuddin", "Pre-Made Templates", "Marketplace Freelancers"],
    rows: [
      {
        feature: "Custom Typography Choreography",
        saif: "Handcrafted keyframes with custom easing curves",
        templates: "Rigid cookie-cutter presets that look generic",
        freelancers: "Basic linear keyframes with jittery timing",
      },
      {
        feature: "End-to-End Asset Preparation",
        saif: "Layered vectors designed from scratch in Illustrator",
        templates: "None (requires user to design own assets)",
        freelancers: "Low-resolution raster images pasted into comp",
      },
      {
        feature: "Format Adaptation",
        saif: "Native multi-aspect masters (9:16 vertical + 16:9 widescreen)",
        templates: "Single locked resolution, awkward mobile crop",
        freelancers: "Stretched or black-barred exports",
      },
      {
        feature: "Direct Communication",
        saif: "Direct WhatsApp & Email access with rapid response",
        templates: "Zero support (automated download link)",
        freelancers: "Delayed replies and language barrier friction",
      },
      {
        feature: "Clean Project Files (.AEP)",
        saif: "Organized folders, labeled layers and named compositions",
        templates: "Messy spaghetti nodes with missing plugin errors",
        freelancers: "Locked or flattened video files without source",
      },
    ],
  },
  creativeTools: [
    {
      name: "Adobe After Effects",
      role: "Motion Engine & Keyframe Suite",
      description: "Primary canvas for kinetic typography, camera moves, shape morphs, track mattes and graph editor easing.",
      tags: ["Graph Editor", "Track Mattes", "Expressions"],
    },
    {
      name: "Adobe Illustrator",
      role: "Vector Architecture & Asset Lab",
      description: "Precision vector drawing, typographic layout drafting and layered asset preparation ready for timeline import.",
      tags: ["Vector Paths", "Typography", "Color Palettes"],
    },
    {
      name: "Adobe Photoshop",
      role: "Matte Painting & Frame Polish",
      description: "Texture synthesis, frame color balancing, photo touch-ups and matte background creation.",
      tags: ["Color Balancing", "Texture Polish", "Compositing"],
    },
    {
      name: "Adobe Media Encoder",
      role: "Export & Bitrate Optimization",
      description: "Precision H.264, ProRes and WebM compression ensuring razor-sharp video playback at minimal file sizes.",
      tags: ["H.264 / ProRes", "Web Optimization", "Color Fidelity"],
    },
  ],
  industries: [
    {
      index: "01",
      title: "Tech Founders & SaaS Products",
      description: "Product teaser animations, feature walkthroughs and interface motion that explain complex workflows simply.",
      icon: "Cpu",
    },
    {
      index: "02",
      title: "Content Creators & Digital Channels",
      description: "High-retention social reels, hook typography and kinetic captions built to boost watch time and engagement.",
      icon: "Play",
    },
    {
      index: "03",
      title: "Digital Agencies & Design Studios",
      description: "White-label motion execution, kinetic brand guidelines and animation support for high-stakes client campaigns.",
      icon: "Briefcase",
    },
    {
      index: "04",
      title: "E-Commerce & DTC Brands",
      description: "Dynamic product launch teasers, motion ad creatives and kinetic typography promos designed for conversion.",
      icon: "ShoppingBag",
    },
    {
      index: "05",
      title: "Explainers & Educational Media",
      description: "Visual storytelling breakdowns, documentary text overlays and clean graphic animations that teach effectively.",
      icon: "BookOpen",
    },
  ],
  testimonials: [
    {
      quote: "Saif transformed our rough script into a captivating kinetic motion sequence. His attention to typographic weight and timing gave our brand the modern edge we needed.",
      author: "Tanvir Ahmed",
      role: "Creative Director",
      company: "Apex Media",
      project: "Product Teaser Motion",
      rating: "5.0",
    },
    {
      quote: "The reel Saif delivered generated our highest retention rate this quarter. The typography flowed naturally with the pacing, and the project files were exceptionally clean.",
      author: "Rahim Chowdhury",
      role: "Digital Producer",
      company: "Velox Studio",
      project: "9:16 Viral Reel Series",
      rating: "5.0",
    },
    {
      quote: "Fast turnaround, great communication and true artistic taste. Saif understands motion curve physics without needing micromanagement.",
      author: "Kamrul Hasan",
      role: "Brand Lead",
      company: "Nordic Wave",
      project: "Brand Motion Assets",
      rating: "5.0",
    },
  ],
  faqs: [
    {
      question: "What software suite do you use for your motion design projects?",
      answer: "I work primarily in Adobe After Effects for keyframe animation, kinetic typography and visual effects, paired with Adobe Illustrator and Photoshop for vector asset preparation and color grading.",
    },
    {
      question: "What is your typical turnaround time for a short-form motion reel?",
      answer: "A standard 30 to 60-second kinetic reel typically takes 2 to 4 business days from storyboard confirmation to final master, with rush 48-hour delivery available for priority projects.",
    },
    {
      question: "What do you need from me before we begin animating?",
      answer: "To get started smoothly, I need your script or voiceover track, brand color guidelines or logos (in vector format like AI or SVG), and any reference links that represent the visual style you envision.",
    },
    {
      question: "Do you deliver raw project source files (.AEP)?",
      answer: "Yes. Upon project completion, I can provide the fully organized Adobe After Effects project file (.aep) along with all linked vector assets and font references.",
    },
    {
      question: "In what formats and resolutions do you deliver final video files?",
      answer: "I export in full 1080p or 4K resolution optimized for both 9:16 vertical (Instagram Reels, TikTok, YouTube Shorts) and 16:9 widescreen (Web, YouTube, Presentations) using ProRes or high-bitrate H.264.",
    },
    {
      question: "How do we collaborate and communicate during the project?",
      answer: "We communicate directly via WhatsApp and Email with structured review milestones, ensuring quick turnaround and zero bureaucratic delays.",
    },
  ],
};
