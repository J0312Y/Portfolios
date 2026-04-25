import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
} from "../assets";

// ── New tech icons ──
import python from "../assets/tech2/py2.png";
import php from "../assets/tech2/php2.png";
import nodejsIcon from "../assets/tech2/nodejs.png";
import mongodbIcon from "../assets/tech2/mongodb.png";
import mysql from "../assets/tech2/mysql.png";
import dockerIcon from "../assets/tech2/docker.png";
import gitIcon from "../assets/tech2/git.png";
import reactIcon from "../assets/tech2/react2.png";
import tailwindIcon from "../assets/tech2/tailwindcss.png";
import javascriptIcon from "../assets/tech2/js2.png";

// ── Project images (Remplacez ces chemins par vos images réelles) ──
import kinacoach from "../assets/kinacoach.png";
import lamuka from "../assets/lamuka.png";
import kolopay from "../assets/kolopay.png";
import maccloud from "../assets/maccloud.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full-Stack Developer", icon: web },
  { title: "IT Infrastructure & Security", icon: backend },
  { title: "Mobile App Development", icon: mobile },
  { title: "Digital Solutions Architect", icon: creator },
];

const technologies = [
  { name: "JavaScript", icon: javascriptIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "PHP", icon: php },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Git", icon: gitIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Python", icon: python },
];

const experiences = [
  {
    title: "Co-Founder & Full-Stack Developer",
    company_name: "Lamuka",
    icon: web,
    iconBg: "#1a0030",
    date: "2026 - Present",
    points: [
      "Leading the technical architecture and development of digital solutions for the African market.",
      "Developing offline-first applications to overcome regional infrastructure challenges.",
      "Implementing secure Mobile Money payment integrations (MTN/Airtel) for local platforms.",
      "Managing server infrastructure and deployment of enterprise ERP/POS solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "The work on our digital ecosystem has been transformative for our local operations.",
    name: "Partner",
    designation: "Strategic Lead",
    company: "Lamuka",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const projects = [
  {
    name: "KinaCoach",
    description: "A health and fitness coaching application designed to promote proactive prevention and wellness in the African healthcare sector.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "HealthTech", color: "green-text-gradient" },
    ],
    image: kinacoach,
    source_code_link: "http://kina-psi.vercel.app/",
  },
  {
    name: "Lamuka Market",
    description: "A collaborative marketplace platform facilitating local trade and digital connectivity within the RDC market.",
    tags: [
      { name: "Full-Stack", color: "orange-text-gradient" },
      { name: "Marketplace", color: "pink-text-gradient" },
    ],
    image: lamuka,
    source_code_link: "https://marche-gamma.vercel.app/",
  },
  {
    name: "KoloPay",
    description: "A digital tontine and savings application focused on secure financial management and payment default handling.",
    tags: [
      { name: "Fintech", color: "green-text-gradient" },
      { name: "Security", color: "blue-text-gradient" },
    ],
    image: kolopay,
    source_code_link: "https://kolopay-six.vercel.app/",
  },
  {
    name: "MacCloud",
    description: "An infrastructure and cloud storage management solution optimized for enterprise data handling and hardware integration.",
    tags: [
      { name: "Cloud", color: "blue-text-gradient" },
      { name: "Infrastructure", color: "orange-text-gradient" },
    ],
    image: maccloud,
    source_code_link: "https://mac-cloud.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };