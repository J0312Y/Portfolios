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

// ── Icons for Tech Section ──
import python from "../assets/tech2/py2.png";
import java from "../assets/tech2/java2.png";
import php from "../assets/tech2/php2.png";
import bash from "../assets/tech2/bash2.png";
import nodejsIcon from "../assets/tech2/nodejs.png";
import mongodbIcon from "../assets/tech2/mongodb.png";
import mysql from "../assets/tech2/mysql.png";
import dockerIcon from "../assets/tech2/docker.png";
import gitIcon from "../assets/tech2/git.png";
import github from "../assets/tech2/github.png";
import postman from "../assets/tech2/postman.png";
import aws from "../assets/tech2/aws.png";
import composer from "../assets/tech2/composer2.png";
import bootstrapIcon from "../assets/tech2/bootstrap.png";
import chartjs from "../assets/tech2/chartjs.png";
import reactIcon from "../assets/tech2/react2.png";
import tailwindIcon from "../assets/tech2/tailwindcss.png";
import javascriptIcon from "../assets/tech2/js2.png";

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
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "PHP", icon: php },
  { name: "Composer", icon: composer },
  { name: "Bash", icon: bash },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "MySQL", icon: mysql },
  { name: "Docker", icon: dockerIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: github },
  { name: "Postman", icon: postman },
  { name: "AWS", icon: aws },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "Chart.js", icon: chartjs },
];

const experiences = [
  {
    title: "Co-Founder & Full-Stack Developer",
    company_name: "Lamuka",
    icon: web,
    iconBg: "#1a0030",
    date: "2026 - Present",
    points: [
      "Leading technical architecture and development for the African digital ecosystem.",
      "Developing offline-first applications resilient to infrastructure challenges.",
      "Implementing secure mobile money integrations (MTN/Airtel) for e-commerce.",
      "Managing server/infrastructure for enterprise ERP and POS solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "The digital ecosystem built for our local operations is highly efficient and scalable.",
    name: "Strategic Partner",
    designation: "COO",
    company: "Lamuka",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const projects = [
  {
    name: "KinaCoach",
    description: "A comprehensive health and fitness coaching application designed to promote proactive prevention in the African healthcare sector.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "HealthTech", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500",
    source_code_link: "http://kina-psi.vercel.app/",
  },
  {
    name: "Lamuka Market",
    description: "A collaborative marketplace platform facilitating local trade and digital connectivity within the RDC market.",
    tags: [
      { name: "Full-Stack", color: "orange-text-gradient" },
      { name: "Marketplace", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500",
    source_code_link: "https://marche-gamma.vercel.app/",
  },
  {
    name: "KoloPay",
    description: "A digital tontine and savings application focused on secure financial management and payment default handling.",
    tags: [
      { name: "Fintech", color: "green-text-gradient" },
      { name: "Security", color: "blue-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb27cd6c?w=500",
    source_code_link: "https://kolopay-six.vercel.app/",
  },
  {
    name: "MacCloud",
    description: "An infrastructure and cloud storage management solution optimized for enterprise data handling and hardware integration.",
    tags: [
      { name: "Cloud", color: "blue-text-gradient" },
      { name: "Infrastructure", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
    source_code_link: "https://mac-cloud.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };