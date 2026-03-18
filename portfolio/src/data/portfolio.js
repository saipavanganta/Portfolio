export const personal = {
  name: "Ganta Sai Pavan",
  title: "Full Stack Developer",
  subtitle: "B.Tech CSE Student at Lovely Professional University",
  email: "saipavanganta9@gmail.com",
  phone: "+91 6309503478",
  linkedin: "https://www.linkedin.com/in/sai-pavan-ganta/",
  github: "https://github.com/saipavanganta",
  location: "Lovely Professional University, Punjab, India",
  bio: "Passionate Computer Science Engineering student specializing in Full Stack Development. I build clean, performant web applications using modern technologies. Currently pursuing B.Tech at LPU with hands-on experience in both frontend and backend development.",
  photo: "/profile.jpg",
};

export const skills = {
  languages: [
    { name: "C",       level: 75, icon: "💻" },
    { name: "C++",     level: 80, icon: "💻" },
    { name: "Python",  level: 78, icon: "🐍" },
    { name: "Java",    level: 72, icon: "☕" },
  ],
  frontend: [
    { name: "HTML5",         level: 92, icon: "🌐" },
    { name: "CSS3",          level: 88, icon: "🎨" },
    { name: "Tailwind CSS",  level: 85, icon: "💨" },
    { name: "JavaScript",    level: 82, icon: "⚡" },
    { name: "React.js",      level: 78, icon: "⚛️"  },
  ],
  backend: [
    { name: "Node.js", level: 72, icon: "🟢" },
    { name: "PHP",     level: 70, icon: "🐘" },
    { name: "MySQL",   level: 75, icon: "🗄️"  },
  ],
  tools: [
    { name: "Git",    level: 80, icon: "🔧" },
    { name: "GitHub", level: 82, icon: "🐙" },
    { name: "XAMPP",  level: 75, icon: "🖥️"  },
    { name: "VS Code",level: 90, icon: "📝" },
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Adaptability",
    "Communication",
    "Critical Thinking",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Walk Worthy",
    subtitle: "Shoe Customization Platform",
    description:
      "A full-stack web platform that allows users to design and customize their own shoes. Features an interactive customizer with real-time preview, user authentication, product catalog, and order management system.",
    date: "Apr 2025",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "MySQL"],
    color: "from-primary-600 to-primary-800",
    icon: "👟",
    highlights: [
      "Interactive real-time shoe customizer",
      "User authentication & session management",
      "Product catalog with filtering options",
      "Admin dashboard for order management",
      "Responsive design across all devices",
    ],
    github: "https://github.com/saipavanganta",
    live: null,
  },
  {
    id: 2,
    title: "Sustainable Energy Resources",
    subtitle: "Informational Web Platform",
    description:
      "An educational and informational website dedicated to sustainable energy resources. Covers solar, wind, hydro, and other renewable energy topics with interactive visual elements and detailed content sections.",
    date: "Nov 2023",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-accent-500 to-accent-700",
    icon: "♻️",
    highlights: [
      "Clean, informative UI about renewable energy",
      "Interactive visual sections",
      "Responsive layout for all screen sizes",
      "Educational content with statistics",
    ],
    github: "https://github.com/saipavanganta",
    live: null,
  },
];

export const certificates = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Dec 2025",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=",
    icon: "🏅",
    color: "from-orange-500 to-red-600",
    category: "Cloud & AI",
    description: "Validates foundational knowledge of AI concepts and Oracle Cloud Infrastructure AI services.",
  },
  {
    id: 2,
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "Oct 2025",
    credentialUrl: "https://nptel.ac.in/courses/",
    icon: "🔐",
    color: "from-blue-500 to-blue-700",
    category: "Security",
    description: "Covers privacy mechanisms, security threats, and countermeasures in online social media platforms.",
  },
  {
    id: 3,
    title: "IELTS Pro: Reading | Writing | Listening | Speaking",
    issuer: "Udemy",
    date: "Dec 2024",
    credentialUrl: "https://www.udemy.com/",
    icon: "📚",
    color: "from-purple-500 to-purple-700",
    category: "Language",
    description: "Comprehensive IELTS preparation covering all four test components with expert strategies.",
  },
  {
    id: 4,
    title: "Introduction to Hardware and Operating Systems",
    issuer: "Coursera",
    date: "Sep 2024",
    credentialUrl: "https://www.coursera.org/",
    icon: "🖥️",
    color: "from-teal-500 to-cyan-600",
    category: "Computer Science",
    description: "Foundational course on computer hardware components and operating system concepts.",
  },
];

export const training = [
  {
    id: 1,
    title: "Data Structures and Algorithms using C++",
    organization: "Lovely Professional University",
    period: "Jun 2025 – Jul 2025",
    type: "Training",
    icon: "🧠",
    description:
      "Intensive training covering fundamental and advanced data structures (arrays, linked lists, trees, graphs) and algorithm design paradigms including dynamic programming, greedy, and divide & conquer approaches in C++.",
    skills: ["C++", "Algorithms", "Data Structures", "Problem Solving"],
  },
];

export const achievements = [
  {
    id: 1,
    title: "Binary Blitz Hackathon – Final Round",
    organization: "Coding Ninjas (LPU)",
    date: "Oct 2024",
    description:
      "Qualified for the final round of the Binary Blitz Hackathon conducted by Coding Ninjas at LPU. Competed among top participants demonstrating strong problem-solving skills under time constraints.",
    icon: "🏆",
    type: "Hackathon",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech – Computer Science Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "Aug 2023 – Present",
    grade: "CGPA: 6.92",
    icon: "🎓",
    type: "current",
    description: "Pursuing B.Tech in CSE with focus on Full Stack Development, Data Structures, and Algorithms.",
  },
  {
    id: 2,
    degree: "Intermediate (PCM) – 97.6%",
    institution: "Tirumala Educational Institutes",
    location: "Andhra Pradesh, India",
    period: "Mar 2021 – May 2023",
    grade: "97.6%",
    icon: "🏫",
    type: "completed",
    description: "Physics, Chemistry, Mathematics. Achieved exceptional scores with strong academic foundation.",
  },
  {
    id: 3,
    degree: "Matriculation – 97.0%",
    institution: "Z.P.P High School",
    location: "Andhra Pradesh, India",
    period: "Mar 2020 – May 2021",
    grade: "97.0%",
    icon: "🏫",
    type: "completed",
    description: "Completed high school with outstanding academic performance.",
  },
];

export const navItems = [
  { label: "Home",         href: "#home"         },
  { label: "About",        href: "#about"        },
  { label: "Skills",       href: "#skills"       },
  { label: "Projects",     href: "#projects"     },
  { label: "Certificates", href: "#certificates" },
  { label: "Education",    href: "#education"    },
  { label: "Contact",      href: "#contact"      },
];
