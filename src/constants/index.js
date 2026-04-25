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

// ── Icons ──
import python from "../assets/tech2/py2.png";
import php from "../assets/tech2/php2.png";
import nodejsIcon from "../assets/tech2/nodejs.png";
import mysql from "../assets/tech2/mysql.png";
import dockerIcon from "../assets/tech2/docker.png";
import gitIcon from "../assets/tech2/git.png";
import reactIcon from "../assets/tech2/react2.png";
import tailwindIcon from "../assets/tech2/tailwindcss.png";
import javascriptIcon from "../assets/tech2/js2.png";

export const navLinks = [
  { id: "about", title: "À Propos" },
  { id: "work", title: "Expérience" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Co-Founder & Tech Lead @ Lamuka", icon: web },
  { title: "Team Lead IT Infrastructure", icon: backend },
  { title: "Software Engineer Full-Stack", icon: creator },
  { title: "Cloud & Solutions Architect", icon: mobile },
];

const technologies = [
  { name: "Python / Bash", icon: python },
  { name: "React JS / Next JS", icon: reactIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "PHP / Laravel", icon: php },
  { name: "MySQL / GaussDB", icon: mysql },
  { name: "Docker / VMware", icon: dockerIcon },
  { name: "Git", icon: gitIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
];

const experiences = [
  {
    title: "Co-Founder & Tech Lead",
    company_name: "Lamuka",
    icon: web,
    iconBg: "#1a0030",
    date: "2026 - Présent",
    points: [
      "Co-fondateur et concepteur de l'écosystème digital Lamuka, visant à transformer les services numériques en RDC et au Congo.",
      "Développement de solutions SaaS (Bonresto, Lamuka Market) avec une architecture 'offline-first' adaptée aux contraintes locales.",
      "Implémentation de systèmes de paiement mobile (MoMo/Airtel Money) pour faciliter l'inclusion financière.",
      "Supervision de la stratégie produit et de l'architecture technique (UI/UX et Back-end).",
    ],
  },
  {
    title: "Team Lead IT Infrastructure & Software Engineer",
    company_name: "Huawei Congo",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Janvier 2024 - Présent",
    points: [
      "Supervision des infrastructures NGBSS (CRM, CBS, VAS) pour les opérateurs télécoms majeurs.",
      "Gestion des incidents critiques et maintenance préventive (Disaster Recovery, Patching).",
      "Automatisation des processus via Python et Bash pour optimiser la performance des plateformes.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "L'approche de Simon sur l'architecture technique et le SaaS a été déterminante pour la croissance de Lamuka.",
    name: "Partenaire Stratégique",
    designation: "Product Owner",
    company: "Lamuka",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const projects = [
  {
    name: "Bonresto (SaaS)",
    description: "ERP/POS complet pour la restauration. Gestion en temps réel des commandes, menus digitaux et réservations, conçu pour une adoption commerciale rapide.",
    tags: [
      { name: "SaaS", color: "blue-text-gradient" },
      { name: "ERP/POS", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500",
    source_code_link: "#",
  },
  {
    name: "Lamuka AI",
    description: "Plateforme intelligente automatisant la recherche d'emploi et l'assistance à la candidature grâce à des modèles d'IA adaptés aux profils locaux.",
    tags: [
      { name: "IA", color: "pink-text-gradient" },
      { name: "Automation", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500",
    source_code_link: "#",
  },
  {
    name: "Lamuka Market",
    description: "Marketplace collaborative locale connectant les vendeurs et acheteurs avec un suivi logistique et paiement mobile intégré.",
    tags: [
      { name: "Marketplace", color: "orange-text-gradient" },
      { name: "Paiement", color: "blue-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500",
    source_code_link: "https://marche-gamma.vercel.app/",
  },
  {
    name: "Kolo Tontine",
    description: "Application de finance collaborative sécurisée pour la gestion des tontines, incluant la gestion des défauts de paiement et l'épargne communautaire.",
    tags: [
      { name: "Fintech", color: "green-text-gradient" },
      { name: "Sécurité", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500",
    source_code_link: "https://kolopay-six.vercel.app/",
  },
  {
    name: "KinaCoach",
    description: "Application de santé et fitness axée sur la prévention proactive dans le secteur médical africain.",
    tags: [
      { name: "HealthTech", color: "blue-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500",
    source_code_link: "http://kina-psi.vercel.app/",
  },
  {
    name: "MacCloud",
    description: "Infrastructure cloud dédiée à la virtualisation d'environnements MacOS pour les développeurs.",
    tags: [
      { name: "Cloud", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
    source_code_link: "https://mac-cloud.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };