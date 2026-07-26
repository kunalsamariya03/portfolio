export const SKILL_BRANCHES = [
  {
    id: "languages",
    label: "Languages",
    angle: -66,
    nodes: ["C", "C++", "Python", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    id: "frontend",
    label: "Frontend & Mobile",
    angle: -22,
    nodes: ["React.js", "React Native", "Tailwind CSS", "NativeWind", "chess.js", "react-chessboard"],
  },
  {
    id: "backend",
    label: "Backend & Database",
    angle: 22,
    nodes: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    id: "realtime",
    label: "Real-Time & Architecture",
    angle: 66,
    nodes: ["Socket.io", "WebRTC / Peer.js", "Redux Toolkit", "Redux Persist"],
  },
  {
    id: "tools",
    label: "Tools & Hardware",
    angle: 108,
    nodes: ["Git", "GitHub", "VS Code", "Android Studio", "Vite", "Sensor Interfacing"],
  },
];

export const PROJECTS = [
  {
    index: "01",
    title: "AetherPawn — Pass & Play Chess",
    subtitle: "React.js · Glassmorphism UI Engine",
    description:
      "A modern, high-performance local 2-player chess application featuring custom SVG piece sets, state-tree move history, dynamic glassmorphism board themes, and auto-persistence.",
    tech: ["React.js", "Tailwind CSS", "chess.js", "react-chessboard", "Vite"],
    image: "chess", // Fallback icon auto-render hoga
    links: { 
      demo: "https://aetherpawn-chess.vercel.app/", 
      github: "https://github.com/kunalsamariya03/AetherPawn-chess" 
    },
  },
  {
    index: "02",
    title: "Social Media Application",
    subtitle: "MERN Stack · Real-Time Communication",
    description:
      "Microblogging platform supporting real-time video/audio calling, live content sharing, and persistent session state across devices.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "Socket.io", "Redux Toolkit"],
    image: "social",
    links: { demo: null, github: "https://github.com/kunalsamariya03/AetherPawn-chess" },
  },
  {
    index: "03",
    title: "Mechanical 3D Ventilator System",
    subtitle: "Biomedical Engineering · Mechatronics",
    description:
      "Low-cost emergency ventilator engineered for low-resource environments, focused on mechanical reliability, safety redundancy, and affordability.",
    tech: ["Mechanical Design", "3D Printing", "Sensor Safety Logic"],
    image: "ventilator",
    links: { demo: null, github: null },
  },
  {
    index: "04",
    title: "Object Detection & Stabilization Drone",
    subtitle: "Robotics · Embedded Systems",
    description:
      "Autonomous drone built on a KK2.0 flight controller with integrated obstacle-sensor logic for real-time detection and stabilization response.",
    tech: ["KK2.0", "Sensor Fusion", "Flight Control", "Embedded C"],
    image: "drone",
    links: { demo: null, github: null },
  },
];

export const TIMELINE = [
  {
    year: "2025–26",
    title: "Geospatial Hackathon",
    detail: "Built a full-stack Offline Navigation solution using React.js & Node.js.",
  },
  {
    year: "2024–25",
    title: "Smart India Hackathon (SIH)",
    detail: "Shortlisted in the Top 20 teams nationally for a practical, deployable solution.",
  },
  {
    year: "2023–24",
    title: "Smart India Hackathon (SIH)",
    detail: "Shortlisted in the Top 10 teams nationally in an earlier edition of SIH.",
  },
  {
    year: "2025",
    title: "Hack AryaVerse",
    detail: "Rapid Prototyping Award — college-level hackathon under tight time constraints.",
  },
];

export const PROFILE = {
  name: "Kunal Samariya",
  title: "Full-Stack Developer",
  subtitle: "Electronics & Communication Engineering Undergraduate",
  location: "Jaipur, Rajasthan",
  email: "kunalsamariya03@gmail.com",
  phone: "+91 8306449196",
  github: "https://github.com/kunalsamariya03",
  linkedin: "https://linkedin.com/in/kunalsamariya03",
  cgpa: "7.5 / 10",
  college: "Arya College of Engineering, Jaipur",
  year: "3rd Year · 2023–2027",
};