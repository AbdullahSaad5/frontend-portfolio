import type { PortfolioMode } from "@/context/portfolio-mode";

// ── Types ──────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  tags: string[];
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  gradient: string;
  accentColor: string;
}

export interface Stat {
  target: number;
  suffix: string;
  label: string;
}

export interface HeroHighlight {
  label: string;
  sub: string;
}

export interface PortfolioData {
  skills: Skill[];
  tools: string[];
  experiences: Experience[];
  projects: Project[];
  heroRoles: string[];
  heroSubtitle: string;
  heroHighlights: HeroHighlight[];
  aboutHeading: [string, string]; // [line1, line2(italic)]
  aboutParagraphs: string[];
  stats: Stat[];
  marqueeItems: string[];
  lookingForText: string;
  contactIntro: string;
  projectsSubtitle: string;
  resumePath: string;
}

// ── Shared (mode-independent) ──────────────────────────────────────────

export const testimonials = [
  {
    quote: "I cannot say enough good things about Axiom. The team knows their stuff — they ask the right questions and take the time to really get to know our entire business. They're extremely transparent with pricing and timeline, and really try to give realistic expectations. We view them as a true partner, not just a vendor. Special shout out to Eisha, but the whole team really rocks!",
    author: "Verified Client",
    role: "CEO, US Healthtech Startup",
    rating: 5,
  },
  {
    quote: "Eisha's ability to manage across timezones without missing a beat is remarkable. She understands both the technical and business side, which makes communication seamless. Our project was delivered ahead of schedule and exceeded expectations.",
    author: "Sarah M.",
    role: "VP of Engineering, E-Commerce Platform",
    rating: 5,
  },
  {
    quote: "Working with Eisha felt like having a technical co-founder rather than an external PM. Her CS background means she can dive into architecture discussions, catch potential issues early, and help the team make better decisions.",
    author: "James T.",
    role: "CTO, FinTech Startup",
    rating: 5,
  },
];

export const education = {
  degree: "BS Computer Science",
  university: "COMSATS University Islamabad",
  year: "Feb 2021 — Jan 2025",
  highlights: [
    "Machine Learning",
    "Computer Vision",
    "Data Mining & AI",
    "Software Engineering",
    "Data Structures & Algorithms",
    "Database Systems",
    "Web Development",
  ],
};

export const certifications = [
  { name: "Agentic AI and AI Agents", platform: "Coursera", year: "2025" },
  { name: "Google Project Management Professional Certificate", platform: "Coursera", year: "2025" },
  { name: "Web Development Course", platform: "Coursera", year: "2025" },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const contactInfo = [
  { label: "Location", value: "Islamabad, Pakistan" },
  { label: "Timezone", value: "PKT (GMT+5)" },
  { label: "Availability", value: "Flexible / US hours" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eisha313", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/Eisha313", icon: "github" },
  { label: "Email", href: "mailto:eishakamran313@gmail.com", icon: "mail" },
];

// ── All Experiences ────────────────────────────────────────────────────

const axiomExperience: Experience = {
  role: "Technical Project Manager",
  company: "Axiom Consulting",
  location: "California, US · Remote",
  period: "Oct 2024 — Present",
  tags: ["AI Automation", "Agentic AI", "Agile", "Jira"],
  highlights: [
    "Lead technical project planning, execution, and delivery ensuring alignment with client requirements and technical specifications",
    "Coordinate cross-functional teams using Agile methodologies in Jira and create comprehensive technical documentation and project roadmaps",
    "Facilitate communication between stakeholders, clients, and development teams to ensure project success",
    "Manage project timelines, resources, and budgets, while proactively addressing risks and obstacles",
  ],
};

const quantumEdgeExperience: Experience = {
  role: "Frontend & AI Engineer",
  company: "Quantum Edge",
  location: "Islamabad",
  period: "Apr 2023 — Aug 2024",
  tags: ["React.js", "Next.js", "AI/ML", "RESTful APIs"],
  highlights: [
    "Developed responsive web applications using React.js, Next.js with AI-powered features and integrated ML models/AI APIs",
    "Built real-time data visualization dashboards for AI predictions and RESTful API integrations connecting frontend with backend ML services",
    "Collaborated with data science teams to deploy AI models and create user-friendly interfaces for AI-driven applications",
  ],
};

const comsatsExperience: Experience = {
  role: "Teaching Assistant — Software Engineering",
  company: "COMSATS University Islamabad",
  location: "Islamabad",
  period: "Jan 2024 — Dec 2024",
  tags: ["Software Engineering", "Teaching", "Academia"],
  highlights: [
    "Assisted in teaching Software Engineering concepts to 150+ undergraduate students and conducted assessment sessions",
    "Created supplementary learning materials and tutorials, graded assignments, and provided academic guidance",
  ],
};

const decimalExperience: Experience = {
  role: "Front End Engineer (Intern)",
  company: "Decimal Solution",
  location: "Islamabad",
  period: "Jan 2023 — Apr 2023",
  tags: ["Next.js", "React.js", "Google Maps API", "Frontend"],
  highlights: [
    "Developed and enhanced user interfaces for various projects and integrated Google Maps tracking APIs into web applications",
    "Collaborated with team members to implement and refine frontend features, tested and debugged UI components",
  ],
};

const personalWebDevExperience: Experience = {
  role: "Web Developer — Personal Projects",
  company: "Personal / Open Source",
  location: "Remote",
  period: "2022 — Present",
  tags: ["MERN Stack", "Next.js", "Tailwind CSS", "Firebase"],
  highlights: [
    "Built a personal portfolio website using Next.js, TypeScript, Tailwind CSS, and Framer Motion with dynamic content switching",
    "Developed a full-stack task management app with React, Node.js, Express, and MongoDB featuring real-time updates via Socket.io",
    "Created a blog platform with Next.js, Markdown rendering, and Firebase authentication and hosting",
    "Built an e-commerce storefront with React, Redux, Stripe integration, and a Node.js/Express backend",
  ],
};

// ── PM Mode Data ───────────────────────────────────────────────────────

const pmData: PortfolioData = {
  skills: [
    { name: "Project Management", level: 92, color: "#F97316", icon: "📋" },
    { name: "Agile / Scrum", level: 90, color: "#EF4444", icon: "🔄" },
    { name: "Stakeholder Management", level: 88, color: "#8B5CF6", icon: "🤝" },
    { name: "AI & Automation", level: 85, color: "#06B6D4", icon: "🤖" },
    { name: "Cross-timezone Ops", level: 90, color: "#10B981", icon: "🌍" },
    { name: "Technical Architecture", level: 82, color: "#3B82F6", icon: "🏗️" },
    { name: "React / Next.js", level: 80, color: "#61DAFB", icon: "⚛️" },
    { name: "TypeScript", level: 78, color: "#3178C6", icon: "📘" },
    { name: "Tailwind CSS", level: 82, color: "#38BDF8", icon: "🎨" },
    { name: "JavaScript", level: 80, color: "#F7DF1E", icon: "⚡" },
    { name: "REST APIs", level: 78, color: "#FF6B6B", icon: "🔗" },
    { name: "Responsive Design", level: 80, color: "#A855F7", icon: "📱" },
    { name: "MongoDB", level: 78, color: "#47A248", icon: "🍃" },
    { name: "Express.js", level: 76, color: "#000000", icon: "🚂" },
    { name: "Node.js", level: 80, color: "#339933", icon: "🟢" },
    { name: "Mongoose / ODM", level: 75, color: "#880000", icon: "🗄️" },
  ],
  tools: [
    "Jira", "Confluence", "Notion", "Slack", "GitHub",
    "Figma", "Trello", "Linear", "Loom", "VS Code",
    "Python", "JavaScript", "Docker", "AWS", "Vercel",
    "MongoDB", "Express.js", "React", "Node.js", "Next.js",
    "TypeScript", "Tailwind CSS", "Postman", "Firebase", "Redux",
    "Mongoose", "npm", "Git", "REST APIs"
  ],
  experiences: [axiomExperience, quantumEdgeExperience, comsatsExperience, decimalExperience, personalWebDevExperience],
  projects: [
    {
      title: "SkyNova — VR Platform",
      description: "Developed interactive and immersive user interfaces for a VR flight platform. Ensured responsive design and cross-platform compatibility, integrating real-time data and collaborating with backend and VR teams.",
      tags: ["React.js", "VR", "Real-time", "Cross-platform"],
      metrics: [
        { value: "1.5yr", label: "Development Span" },
        { value: "3D", label: "Flight Experiences" },
      ],
      gradient: "from-orange-500/20 to-amber-500/20",
      accentColor: "#8B5CF6",
    },
    {
      title: "E-Commerce Suite — Platform Migration",
      description: "Orchestrated migration of a legacy e-commerce platform to a modern microservices architecture. Coordinated backend, frontend, and DevOps teams while maintaining zero-downtime deployment.",
      tags: ["E-Commerce", "Migration", "Microservices", "DevOps"],
      metrics: [
        { value: "0", label: "Downtime Hours" },
        { value: "40%", label: "Performance Gain" },
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "#06B6D4",
    },
    {
      title: "FinTech Dashboard — Real-time Analytics",
      description: "Managed the development of a real-time financial analytics dashboard. Defined requirements with stakeholders, prioritized backlog, and ensured compliance with financial data regulations.",
      tags: ["FinTech", "Analytics", "Real-time", "Compliance"],
      metrics: [
        { value: "12", label: "Sprints Delivered" },
        { value: "98%", label: "Stakeholder Satisfaction" },
      ],
      gradient: "from-emerald-500/20 to-green-500/20",
      accentColor: "#10B981",
    },
    {
      title: "SaaS DevTools — Agile Transformation",
      description: "Spearheaded Agile transformation for a developer tools startup. Introduced Scrum ceremonies, set up Jira workflows, and improved team velocity by establishing clear sprint goals and retrospectives.",
      tags: ["SaaS", "Agile", "Scrum", "DevTools"],
      metrics: [
        { value: "35%", label: "Velocity Increase" },
        { value: "4", label: "Teams Onboarded" },
      ],
      gradient: "from-orange-500/20 to-amber-500/20",
      accentColor: "#F97316",
    },
  ],
  heroRoles: [
    "Technical Project Manager",
    "AI & Automation Specialist",
    "Remote Team Leader",
    "Agile Practitioner",
  ],
  heroSubtitle: "Passionate about <strong>AI-powered project delivery & Agile leadership</strong>. Bridging timezones and teams to ship products that matter — from planning to production.",
  heroHighlights: [
    { label: "1.5+ Yrs", sub: "Remote TPM" },
    { label: "Fully Remote", sub: "US Clients" },
    { label: "CS Graduate", sub: "COMSATS" },
  ],
  aboutHeading: ["Building the future,", "one sprint at a time"],
  aboutParagraphs: [
    "I'm a Computer Science graduate from COMSATS University Islamabad, currently serving as Technical Project Manager at Axiom Consulting (US-based, remote). I bring a unique blend of technical depth and project leadership — managing cross-functional teams across timezones while staying hands-on with AI & automation initiatives.",
    "With expertise in Agile/Scrum methodologies, stakeholder management, and technical architecture, I bridge the gap between business goals and engineering execution. I've delivered 15+ projects across healthcare, fintech, e-commerce, and SaaS — all remotely, all on time.",
  ],
  stats: [
    { target: 1.5, suffix: "+", label: "Years as TPM" },
    { target: 15, suffix: "+", label: "Projects Delivered" },
    { target: 6, suffix: "+", label: "Industry Verticals" },
    { target: 100, suffix: "%", label: "Remote Track Record" },
  ],
  marqueeItems: [
    "Technical Project Management", "Agile / Scrum", "AI Automation",
    "Stakeholder Management", "Jira", "Cross-timezone Delivery",
    "Sprint Planning", "Risk Management", "Remote Leadership", "Agentic AI",
  ],
  lookingForText: "Entry-level Technical Project Management and Frontend Engineering roles where I can apply my CS background, Agile knowledge, and MERN stack skills. Eager to grow in fast-paced environments that value hands-on technical understanding, clear communication, and a passion for bridging engineering and project delivery.",
  contactIntro: "Whether you're looking for a junior technical project manager with a strong CS foundation, a MERN stack developer eager to contribute, or someone who can bridge the gap between code and coordination — I'd love to connect and explore opportunities.",
  projectsSubtitle: "Delivering impactful solutions across healthcare, fintech, e-commerce, and developer tools — all managed end-to-end, remotely.",
  resumePath: "/Eisha Kamran Resume Feb 2025.pdf",
};

// ── AI Mode Data ───────────────────────────────────────────────────────

const aiData: PortfolioData = {
  skills: [
    { name: "AI & Machine Learning", level: 88, color: "#8B5CF6", icon: "🤖" },
    { name: "Computer Vision", level: 85, color: "#06B6D4", icon: "👁️" },
    { name: "Frontend Development", level: 90, color: "#3B82F6", icon: "🖥️" },
    { name: "Data Science", level: 85, color: "#10B981", icon: "📊" },
    { name: "Project Management", level: 92, color: "#F97316", icon: "📋" },
    { name: "Agile / Scrum", level: 90, color: "#EF4444", icon: "🔄" },
  ],
  tools: [
    "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV",
    "Python", "JavaScript", "TypeScript", "React.js", "Next.js",
    "Node.js", "React Native", "Tailwind CSS", "Redux", "Firebase",
    "Pandas", "NumPy", "Matplotlib", "Git", "Jira",
    "Figma", "Vercel", "Docker", "RESTful APIs", "Socket.io",
  ],
  experiences: [axiomExperience, quantumEdgeExperience, comsatsExperience, decimalExperience],
  projects: [
    {
      title: "Human Emotion Detection using Deep Learning",
      description: "Developed a CNN using TensorFlow/Keras to classify 7 emotions from facial expressions, achieving 85% accuracy. Built data preprocessing pipeline with OpenCV and deployed real-time system for live webcam feeds.",
      tags: ["Deep Learning", "CNN", "TensorFlow", "OpenCV"],
      metrics: [
        { value: "85%", label: "Classification Accuracy" },
        { value: "7", label: "Emotion Classes" },
      ],
      gradient: "from-violet-500/20 to-purple-500/20",
      accentColor: "#8B5CF6",
    },
    {
      title: "Real-time Object Detection System",
      description: "Built a real-time object detection system using OpenCV and pre-trained YOLO models for live video streams. Optimized inference to achieve 25+ FPS with bounding box visualization and multi-object tracking.",
      tags: ["Computer Vision", "YOLO", "OpenCV", "Real-time"],
      metrics: [
        { value: "25+", label: "FPS Achieved" },
        { value: "Real-time", label: "Detection Speed" },
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "#06B6D4",
    },
    {
      title: "Customer Churn Prediction",
      description: "Analyzed 50,000+ customer records, performed data cleaning and feature engineering using Pandas/NumPy. Compared multiple ML algorithms and achieved 82% accuracy with Random Forest.",
      tags: ["Machine Learning", "Data Science", "Python", "Plotly"],
      metrics: [
        { value: "82%", label: "Prediction Accuracy" },
        { value: "50K+", label: "Records Analyzed" },
      ],
      gradient: "from-emerald-500/20 to-green-500/20",
      accentColor: "#10B981",
    },
    {
      title: "SkyNova — VR Platform",
      description: "Developed interactive and immersive user interfaces for a VR flight platform. Ensured responsive design and cross-platform compatibility, integrating real-time data and collaborating with backend and VR teams.",
      tags: ["React.js", "VR", "Real-time", "Cross-platform"],
      metrics: [
        { value: "1.5yr", label: "Development Span" },
        { value: "3D", label: "Flight Experiences" },
      ],
      gradient: "from-orange-500/20 to-amber-500/20",
      accentColor: "#F97316",
    },
  ],
  heroRoles: [
    "AI & Data Science Researcher",
    "Frontend & AI Engineer",
    "Technical Project Manager",
    "Computer Vision Enthusiast",
  ],
  heroSubtitle: "Passionate about <strong>Machine Learning, Computer Vision & AI</strong>. Building intelligent systems that solve real-world problems through data-driven approaches — from research to production.",
  heroHighlights: [
    { label: "AI & ML", sub: "Researcher" },
    { label: "Fully Remote", sub: "US Clients" },
    { label: "CS Graduate", sub: "COMSATS" },
  ],
  aboutHeading: ["Exploring intelligence,", "one model at a time"],
  aboutParagraphs: [
    "I'm a Computer Science graduate from COMSATS University Islamabad with a deep passion for Machine Learning, Deep Learning, and Computer Vision. Currently serving as Technical Project Manager at Axiom Consulting (US-based, remote), while bringing hands-on experience as a Frontend & AI Engineer from Quantum Edge.",
    "My research interests span Emotion Recognition, NLP, Predictive Analytics, and AI-driven Decision Systems. I build intelligent systems using TensorFlow, PyTorch, and OpenCV — from CNN-based emotion classifiers to real-time object detection with YOLO. I bridge the gap between research and production.",
  ],
  stats: [
    { target: 3, suffix: "+", label: "Years Experience" },
    { target: 15, suffix: "+", label: "Projects Delivered" },
    { target: 3, suffix: "", label: "Certifications" },
    { target: 100, suffix: "%", label: "Remote Track Record" },
  ],
  marqueeItems: [
    "Machine Learning", "Deep Learning", "Computer Vision", "TensorFlow",
    "React.js", "Next.js", "Technical Project Management", "Agile / Scrum",
    "Data Science", "Python", "Natural Language Processing", "AI Automation",
  ],
  lookingForText: "Frontend Engineering and Technical Project Management roles where I can combine hands-on MERN stack development with AI/ML expertise. Open to positions that value building intelligent, user-facing applications while leading cross-functional teams. I thrive in environments where I can ship production code and drive project delivery end-to-end.",
  contactIntro: "Whether you're looking for a frontend engineer with AI/ML expertise, a MERN stack developer who understands intelligent systems, or a technical project manager who ships code — I'd love to connect and explore opportunities.",
  projectsSubtitle: "From emotion detection to real-time computer vision — building intelligent systems that push the boundaries of AI research and application.",
  resumePath: "/EIsha CV.pdf",
};

// ── Accessor ───────────────────────────────────────────────────────────

export function getPortfolioData(mode: PortfolioMode): PortfolioData {
  return mode === "ai" ? aiData : pmData;
}
