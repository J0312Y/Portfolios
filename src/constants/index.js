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

// ── Icons (Utilisation des imports existants ou liens sécurisés) ──
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
  { title: "Team Lead Infrastructure IT", icon: backend },
  { title: "Software Engineer Full-Stack", icon: web },
  { title: "Expert Systèmes NGBSS & VAS", icon: creator },
  { title: "Solutions Cloud & Virtualisation", icon: mobile },
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
  { name: "Linux / Windows Server", icon: javascriptIcon }, // Utilisation de JS icon comme placeholder
];

const experiences = [
  {
    title: "Team Lead IT Infrastructure & Software Engineer",
    company_name: "Huawei Congo Representative Office",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Janvier 2024 - Présent",
    points: [
      "Supervision technique de l'infrastructure NGBSS (CRM, CBS, VAS) pour les opérateurs majeurs (MTN, Airtel, Congo Telecom).",
      "Gestion des incidents critiques de niveau 2/3, monitoring hardware via iBMC et optimisation des performances systèmes.",
      "Déploiement et automatisation de tâches d'administration via scripts Python et Bash.",
      "Configuration de la sécurité réseau (Firewalls FortiGate/Eudemon) et gestion de la continuité d'activité (Disaster Recovery).",
      "Intégration de solutions ERP avec les plateformes backend et systèmes d'authentification AAA/BRAS."
    ],
  },
  {
    title: "Gestionnaire Expérience Client (Stage)",
    company_name: "Airtel Congo",
    icon: mobile,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Analyse des besoins clients et création de bases de données pour le suivi des KPI de performance.",
      "Support technique de premier niveau et résolution des problématiques liées aux services télécoms.",
    ],
  },
];

const projects = [
  {
    name: "KinaCoach",
    description: "Solution HealthTech visant la prévention proactive. Application de coaching santé permettant un suivi personnalisé pour le bien-être des utilisateurs au Congo.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "HealthTech", color: "green-text-gradient" },
      { name: "API", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
    source_code_link: "http://kina-psi.vercel.app/",
  },
  {
    name: "Lamuka Market",
    description: "Marketplace collaborative locale avec système de suivi de commande en temps réel et gestion logistique intégrée pour les commerçants du Congo.",
    tags: [
      { name: "Fullstack", color: "orange-text-gradient" },
      { name: "E-commerce", color: "blue-text-gradient" },
      { name: "NextJS", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500",
    source_code_link: "https://marche-gamma.vercel.app/",
  },
  {
    name: "Kolo Tontine",
    description: "Digitalisation de l'épargne communautaire (tontine). Système sécurisé de gestion des cotisations, des tours de rôle et des paiements.",
    tags: [
      { name: "Fintech", color: "green-text-gradient" },
      { name: "Security", color: "pink-text-gradient" },
      { name: "MySQL", color: "white-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500",
    source_code_link: "https://kolopay-six.vercel.app/",
  },
  {
    name: "MacCloud",
    description: "Solution d'infrastructure Cloud permettant l'accès distant à des environnements MacOS pour les développeurs d'applications iOS/Mac.",
    tags: [
      { name: "Cloud", color: "blue-text-gradient" },
      { name: "Virtualisation", color: "orange-text-gradient" },
      { name: "Infrastructure", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
    source_code_link: "https://mac-cloud.vercel.app/",
  },
  {
    name: "BonResto",
    description: "Plateforme de découverte et de réservation de restaurants avec menus digitaux et géolocalisation des meilleurs établissements locaux.",
    tags: [
      { name: "Web", color: "pink-text-gradient" },
      { name: "Geoloc", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500",
    source_code_link: "#",
  },
];

const testimonials = [
  {
    testimonial: "Simon Joeldy a su stabiliser nos infrastructures critiques NGBSS tout en automatisant nos rapports quotidiens.",
    name: "Direction Technique",
    designation: "Manager",
    company: "Huawei / Partenaires Telecom",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export { services, technologies, experiences, testimonials, projects };