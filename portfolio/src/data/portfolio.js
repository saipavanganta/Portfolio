export const personal = {
  name: "Ganta Sai Pavan",
  title: "Full-Stack Developer",
  subtitle: "B.Tech Computer Science & Engineering · LPU",
  email: "saipavanganta9@gmail.com",
  phone: "+91 6309503478",
  linkedin: "https://www.linkedin.com/in/sai-pavan-ganta/",
  github: "https://github.com/saipavanganta21",
  location: "Phagwara, Punjab, India",
  bio: "I build responsive web experiences that are clear, useful, and made to scale — from thoughtful React interfaces to dependable backend integrations.",
  photo: "/profile.jpg",
};

export const skills = {
  languages: ["C", "C++", "Python", "Java"],
  frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  backend: ["Node.js", "PHP", "Express.js", "MongoDB"],
  tools: ["Git", "GitHub", "VS Code", "XAMPP"],
  soft: ["Problem-Solving", "Team Collaboration", "Adaptability"],
};

export const projects = [
  {
    id: 1, title: "Swadeshi Fit", subtitle: "Indigenous Fitness & Sports Platform", date: "Nov 2025", tone: "sky", icon: "activity",
    description: "A responsive fitness platform created to promote Swadeshi sports and activities through engaging, accessible digital experiences.",
    tech: ["React.js", "HTML", "CSS", "Node.js", "Express.js", "MongoDB"],
    highlights: ["Built reusable React components for a responsive experience", "Integrated RESTful APIs with Node.js and Express.js", "Used state management to keep interactions smooth and intuitive", "Designed for scalable MongoDB-backed data and a stronger UX"],
    github: "https://github.com/saipavanganta21/Swadeshi-Fit", live: null,
  },
  {
    id: 2, title: "Walk Worthy", subtitle: "Shoe Customization & Ordering Platform", date: "Apr 2025", tone: "amber", icon: "footprints",
    description: "An end-to-end web platform for creating, customizing, and ordering shoes with a responsive shopping journey.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "MySQL"],
    highlights: ["Created an interactive, responsive customization interface", "Implemented authentication, catalog, cart, and order tracking", "Connected PHP and MySQL through XAMPP for secure data operations", "Kept the architecture modular and the codebase reusable"],
    github: "https://github.com/saipavanganta21/Full-stack-project", live: null,
  },
];

export const certificates = [
  { id: 1, title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle", date: "Dec 2025", category: "Cloud & AI", description: "Foundation credential in AI concepts and Oracle Cloud Infrastructure AI services." },
  { id: 2, title: "Privacy and Security in Online Social Media", issuer: "NPTEL", date: "Oct 2025", category: "Security", description: "Coursework covering online social-media privacy, security risks, and safeguards." },
  { id: 3, title: "IELTS Pro: Reading, Writing, Listening & Speaking", issuer: "Udemy", date: "Dec 2024", category: "Language", description: "Preparation across the four IELTS components." },
  { id: 4, title: "Introduction to Hardware and Operating Systems", issuer: "Coursera", date: "Sep 2024", category: "Computer Science", description: "Core concepts in computer hardware and operating systems." },
];

export const training = [{ id: 1, title: "Data Structures and Algorithms using C++", organization: "Lovely Professional University", period: "Jun 2025 – Jul 2025", type: "Training", description: "Worked with foundational data structures and applied sorting, searching, recursion, OOP, and competitive-programming techniques to build more efficient solutions.", skills: ["C++", "Data Structures", "Algorithms", "Problem Solving"] }];

export const achievements = [
  { id: 1, title: "Binary Blitz Hackathon — Final Round", organization: "Coding Ninjas (LPU)", date: "Oct 2024", description: "Qualified for the final round, selected among 200+ participating teams.", type: "Hackathon" },
  { id: 2, title: "GraphTheory Programming Camp", organization: "AlgoUniversity", date: "Feb 2026", description: "Selected from 4,000 shortlisted candidates out of 40,000+ applicants; one of 1,000 participants to receive certification.", type: "Programming" },
];

export const education = [
  { id: 1, degree: "Bachelor of Technology — Computer Science & Engineering", institution: "Lovely Professional University", location: "Phagwara, Punjab", period: "Aug 2023 – Present", grade: "CGPA 7.21", type: "current", description: "Building a practical foundation in full-stack development, data structures, and algorithms." },
  { id: 2, degree: "Intermediate — PCM", institution: "Tirumala Educational Institutes", location: "Rajahmundry, Andhra Pradesh", period: "Mar 2021 – May 2023", grade: "97.6%", type: "completed", description: "Physics, Chemistry, and Mathematics." },
  { id: 3, degree: "Matriculation", institution: "Z.P.P High School", location: "Battelanka, Andhra Pradesh", period: "Mar 2020 – May 2021", grade: "97.0%", type: "completed", description: "Completed secondary education with a strong academic record." },
];

export const navItems = [
  { label: "About", href: "#about" }, { label: "Skills", href: "#skills" }, { label: "Projects", href: "#projects" }, { label: "Credentials", href: "#certificates" }, { label: "Education", href: "#education" }, { label: "Contact", href: "#contact" },
];
