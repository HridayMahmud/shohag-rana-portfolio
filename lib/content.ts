/**
 * Single source of truth for every piece of content on this site.
 * Everything here is taken from the CV — nothing is invented.
 */

export const profile = {
  name: "MD Shohag Rana",
  shortName: "Shohag Rana",
  initials: "SR",
  role: "Full Stack Software Developer",
  location: "Dhaka, Bangladesh",
  email: "shohag.rana0114@gmail.com",
  phone: "01760980498",
  phoneHref: "+8801760980498",
  github: "https://github.com/HridayMahmud",
  githubHandle: "HridayMahmud",
  cv: "/md-shohag-rana-cv.pdf",
  portrait: "/md-shohag-rana.jpg",
  objective:
    "Motivated Full Stack Software Developer with experience in building scalable web applications using modern frontend and backend technologies. Skilled in RESTful APIs, databases, authentication, and responsive development. Seeking to contribute technical expertise to impactful software solutions while continuously growing as a software engineer.",
  tagline:
    "I build scalable, secure and high-performance web applications — from RESTful APIs and authentication through to modern, responsive interfaces.",
} as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Codemoly",
    role: "Software Developer",
    location: "The Emporium Tower, Shaymoli, Dhaka-1207",
    period: "Feb 2026 — Present",
    current: true,
    summary:
      "Software Developer specializing in the MERN Stack (MongoDB, Express.js, React.js, Node.js), along with Next.js and Vue.js. Building scalable, secure and high-performance web applications with modern UI/UX, RESTful APIs and authentication.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "Vue.js"],
  },
  {
    company: "BemanTech Ltd.",
    role: "Software Developer",
    location: "Tongi, Gazipur",
    period: "Jun 2025 — Feb 2026",
    current: false,
    summary:
      "Software Developer specializing in the MERN Stack (MongoDB, Express.js, React.js, Node.js), along with Next.js and Vue.js. Built scalable, secure and high-performance web applications with modern UI/UX, RESTful APIs and authentication.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "Vue.js"],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "PHP", "C++", "Python", "Java"],
  },
  {
    title: "Frontend Technologies",
    items: ["HTML5", "CSS3", "React.js", "Next.js", "Vue.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend Technologies",
    items: ["Node.js", "Express.js", "Laravel"],
  },
  {
    title: "Databases & Query Languages",
    items: ["MySQL", "MongoDB", "SQL Server", "SQL"],
  },
  {
    title: "ORM & Database Tools",
    items: ["Prisma Client", "Drizzle ORM"],
  },
  {
    title: "API & Authentication",
    items: ["RESTful APIs", "JWT Authentication"],
  },
  {
    title: "Version Control & Tools",
    items: ["Git", "GitHub"],
  },
];

/** Flat list used by the hero marquee. */
export const marqueeStack = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express.js",
  "Laravel",
  "MongoDB",
  "MySQL",
  "Prisma Client",
  "Drizzle ORM",
  "Tailwind CSS",
  "RESTful APIs",
  "JWT Authentication",
  "Git",
];

export type Project = {
  slug: string;
  title: string;
  category: "Backend & API" | "Frontend";
  summary: string;
  highlights: string[];
  stack: string[];
  repo: string;
  live?: string;
  liveLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "courier-management-system",
    title: "Courier Management System",
    category: "Backend & API",
    summary:
      "A role-based RESTful API for courier and parcel management, built with Node.js, Express.js and MongoDB.",
    highlights: [
      "JWT authentication with Role-Based Access Control (RBAC)",
      "Full CRUD operations for parcel management",
      "Admin-level authorization across protected routes",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "JWT", "RESTful API"],
    repo: "https://github.com/HridayMahmud/courier-management-backend",
  },
  {
    slug: "mini-cloud-storage-system",
    title: "Mini Cloud Storage System",
    category: "Backend & API",
    summary:
      "A RESTful API-based cloud storage system with per-user storage accounting, built with Node.js, Express.js and MongoDB.",
    highlights: [
      "File upload, file deletion and user storage management",
      "A 500 MB storage limit enforced per user",
      "Data validation and concurrency handling for reliable file and storage operations",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "RESTful API"],
    repo: "https://github.com/HridayMahmud/mini-cloud-storage-system",
  },
  {
    slug: "book-review-app",
    title: "Book Review App",
    category: "Frontend",
    summary:
      "A responsive book review application built with React.js and Tailwind CSS.",
    highlights: [
      "Browse and explore book reviews",
      "Wishlist management",
      "Read-status notifications",
    ],
    stack: ["React.js", "Tailwind CSS", "HTML5", "CSS3"],
    repo: "https://github.com/HridayMahmud/my-library",
    live: "https://my-library-neon-delta.vercel.app",
    liveLabel: "my-library-neon-delta.vercel.app",
  },
  {
    slug: "chefs-table",
    title: "Chef’s Table",
    category: "Frontend",
    summary:
      "A modern, responsive food blog platform built with React.js, Tailwind CSS and JavaScript.",
    highlights: [
      "An intuitive interface for exploring dishes",
      "An ordering flow built into the browsing experience",
      "Fully responsive layout across breakpoints",
    ],
    stack: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    repo: "https://github.com/HridayMahmud/chefs-table",
    live: "https://chefs-table-dun.vercel.app",
    liveLabel: "chefs-table-dun.vercel.app",
  },
];

export type Education = {
  institution: string;
  qualification: string;
  year: string;
  resultLabel: string;
  result: string;
};

export const education: Education[] = [
  {
    institution: "Bangladesh University of Business & Technology (BUBT)",
    qualification: "B.Sc. in Computer Science & Engineering (CSE)",
    year: "2024",
    resultLabel: "CGPA",
    result: "3.22",
  },
  {
    institution: "Vashantek Govt. College",
    qualification: "Higher Secondary Certificate (H.S.C)",
    year: "2016",
    resultLabel: "GPA",
    result: "4.50",
  },
  {
    institution: "Rupshi High School",
    qualification: "Secondary School Certificate (S.S.C)",
    year: "2014",
    resultLabel: "GPA",
    result: "5.00",
  },
];

export const achievement =
  "Participated in coding contests, building strong problem-solving and algorithm skills.";

export type Competency = { title: string; description: string };

export const competencies: Competency[] = [
  {
    title: "Web Development",
    description:
      "Proficient in developing modern, scalable web applications using JavaScript, React.js, Next.js, Node.js and Express.js, with a focus on clean, maintainable code and performance.",
  },
  {
    title: "Problem Solving",
    description:
      "Strong analytical and problem-solving skills with the ability to identify issues and develop practical, efficient solutions.",
  },
  {
    title: "Communication",
    description:
      "Able to communicate technical concepts clearly and effectively with team members and stakeholders.",
  },
  {
    title: "Teamwork & Collaboration",
    description:
      "Able to work effectively in team environments, contribute to shared goals and collaborate on software development projects.",
  },
];

export const languages = [
  { name: "Bangla", level: "First language" },
  { name: "English", level: "Fluent" },
];
