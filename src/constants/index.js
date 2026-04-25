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
  { title: "QA Engineer & Data Analyst", icon: mobile },
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
  { name: "QA & Testing Tools", icon: javascriptIcon },
];

const experiences = [
  {
    title: "Co-Founder & Tech Lead",
    company_name: "Lamuka",
    icon: web,
    iconBg: "#1a0030",
    date: "2026 - Présent",
    points: [
      "Fondateur de l'écosystème Lamuka : Architecture de solutions SaaS intelligentes et gestionnaire de connaissances basé sur l'IA.",
      "Développement de Lamuka AI, un assistant centralisant les données d'entreprise pour booster la productivité interne.",
      "Conception de plateformes e-commerce et Fintech (Lamuka Market, Kolo Tontine) adaptées au marché africain.",
      "Pilotage technique et vision produit pour la transformation digitale des entreprises locales.",
    ],
  },
  {
    title: "Team Lead IT Infrastructure & Software Engineer",
    company_name: "Huawei Congo Representative Office",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Janvier 2024 - Présent",
    points: [
      "Supervision des infrastructures critiques pour les grands opérateurs.",
      "Gestion d'incidents critiques L2/L3 et monitoring hardware via iBMC.",
      "Automatisation de l'administration système via scripts Python/Bash et optimisation de GaussDB.",
      "Maintenance de la continuité d'activité (Disaster Recovery) et déploiement de patchs critiques.",
    ],
  },
  {
    title: "QA Engineer (Stage)",
    company_name: "Airtel Congo",
    icon: mobile,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Assurance Qualité (QA) : Tests fonctionnels et validation des fonctionnalités des logiciels internes.",
      "Analyse de données et création de tableaux de bord KPI pour le suivi de l'expérience client.",
      "Identification proactive des anomalies systèmes et amélioration des processus de support.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Simon possède une vision rare qui combine une maîtrise profonde de l'infrastructure et une agilité exceptionnelle dans le développement de SaaS pilotés par l'IA.",
    name: "Direction Technique",
    designation: "Tech Partner",
    company: "Lamuka Écosystème",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const projects = [
  {
    name: "Lamuka AI",
    description: "Assistant de connaissances d'entreprise. Centralise les documents et outils pour répondre aux questions des équipes et automatiser les workflows internes.",
    tags: [
      { name: "AI/LLM", color: "pink-text-gradient" },
      { name: "Knowledge Management", color: "blue-text-gradient" },
      { name: "SaaS", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500",
    source_code_link: "#",
  },
  {
    name: "Bonresto (ERP)",
    description: "Solution SaaS de gestion complète pour restaurants. Inclut un système POS, la gestion des stocks, et des menus digitaux pour une gestion simplifiée.",
    tags: [
      { name: "ERP", color: "blue-text-gradient" },
      { name: "ERP", color: "orange-text-gradient" },
      { name: "FullStack", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500",
    source_code_link: "#",
  },
  {
    name: "Lamuka Market",
    description: "Marketplace collaborative locale facilitant le commerce avec suivi de commande en temps réel et paiements mobiles intégrés.",
    tags: [
      { name: "E-commerce", color: "blue-text-gradient" },
      { name: "Logistique", color: "orange-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500",
    source_code_link: "https://marche-gamma.vercel.app/",
  },
  {
    name: "Kolo Tontine",
    description: "Plateforme Fintech sécurisée pour la gestion de tontines communautaires, l'épargne collaborative et le scoring de confiance.",
    tags: [
      { name: "Fintech", color: "green-text-gradient" },
      { name: "Security", color: "pink-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500",
    source_code_link: "https://kolopay-six.vercel.app/",
  },
  {
    name: "KinaCoach",
    description: "Application HealthTech axée sur le bien-être et la prévention proactive, offrant un suivi personnalisé aux utilisateurs.",
    tags: [
      { name: "HealthTech", color: "blue-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500",
    source_code_link: "http://kina-psi.vercel.app/",
  },
  {
    name: "MacCloud",
    description: "Service Cloud permettant d'accéder à des environnements macOS distants pour les développeurs et les tests d'applications iOS.",
    tags: [
      { name: "Cloud", color: "orange-text-gradient" },
      { name: "Infrastructure", color: "blue-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
    source_code_link: "https://mac-cloud.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };