import {
  releve,
  pmsb,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // php,
  laravel,
  ibdaa,
  eltamiuz,
  mondia,
  freelance,
  carhub,
  realtystate,
  vidzphere,
  musclusion,
  gpt3,
  socialbook,
  jobit,
  tripguide,
  threejs,
  sitereleve,
  applireleve,
  meteo,
  sitecarbon,
  apiytb,
} from "../assets";

export const navLinks = [
  {
    id: "personal-assistant",
    title: "Assistant",
  },
  {
    id: "about",
    title: "À propos",
  },
  
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "projets",
    title: "Mes projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];



const services = [
  {
    title: "Frontend Développeur",
    icon: web,
  },
  {
    title: "Backend Développeur",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "php",
  //   icon: php,
  // },
  {
    name: "laravel",
    icon: laravel,
  },
];

const experiences = [
  {
    title: "Développeur Web Apprenti",
    company_name: "PMSB",
    icon: pmsb,
    iconBg: "#383E56",
    date: "Avril 2023 - Janvier 2024",
    points: [
      "Création du site web de l’entreprise en React JS.",
      "Création d’une application d’émargement en React Native."
    ],
  },
  {
    title: "Développeur Web Apprenti",
    company_name: "La Relève Bariolée",
    icon: releve,
    iconBg: "#E6DEDD",
    date: "Avril 2024 - Octobre 2024",
    points: [
      "Création du site web de l’entreprise en Next JS.",
      "Création d’une application d’émargement en React Native.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Site Web la Relève Bariolée",
    description:
      "Site Web de présentation de l'entreprise avec différentes fonctionnalités, tel que le paiement en ligne, la prise de contact par email ou encore la réservation d'événement. ",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: sitereleve,
    source_code_link: "https://www.larelevebariolee.fr/",
  },
  {
    name: "Application d'émargement",
    description:
      "Application d'émargement pour les employés de l'entreprise, incluant un système de localisation et d'horaires d'émargement.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "mariadb",
        color: "pink-text-gradient",
      },
    ],
    image: applireleve,
    source_code_link: "https://github.com/rayenebnt/emargement_releve",
  },
  {
    name: "Application de météo",
    description:
      "Application de météo donnant le climat de la ville demandé , avec un système d'historique.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: meteo,
    source_code_link: "https://github.com/rayenebnt/M-t-o",
  },
  {
    name: "Site CarbonTrace",
    description:
      "Site Web permettant à des entreprises d'acheter ou de vendre des crédits carbones sur la blockchain.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: sitecarbon,
    source_code_link: "https://github.com/rayenebnt/carbontrace",
  },
  {
    name: "Api Youtube",
    description:
      "Api ayant les mêmes fonctionnalités que Youtube tel que l'inscription, la connexion, poster des vidéos avec plusieurs qualités, ajouter des commentaires aux vidéos etc...",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: apiytb,
    source_code_link: "https://github.com/rayenebnt/Api-Youtube",
  },
];

export { services, technologies, experiences, testimonials, projects };
