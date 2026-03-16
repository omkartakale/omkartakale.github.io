const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1.10, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "+", label: "Projects Delivered" },
  { value: 8.95, suffix: "", label: "CGPA (VIT Pune)" },
  { value: 7.5, suffix: "", label: "IELTS Band Score" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality, production-ready code with attention to scalability and performance.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping stakeholders updated at every step to ensure transparency and alignment.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Omkar has been instrumental in building our real-time event delivery infrastructure. His contributions to the Global Pusher system and OMS have been outstanding.",
    imgPath: "/images/xb.png",
    logoPath: "/images/logo1.png",
    title: "Software Developer — XpressBees",
    date: "July 2024 - Present",
    responsibilities: [
      "Developed a config-driven Spring Boot microservices system (Global Pusher) to transform shipment payloads into client-specific schemas and deliver real-time events via HTTPS callbacks, processing ~100K events/min.",
      "Designed asynchronous architecture using AWS SQS for inter-service communication across Transformer, Scheduler, Notification, and Config services.",
      "Built and optimized REST APIs for order creation, status transitions, and event propagation across OMS microservices, handling ~50K orders/min.",
      "Published validated order events to Apache Kafka enabling asynchronous processing by warehouse and logistics systems.",
      "Developed an AI-powered webhook configuration generator using Python, FastAPI, LangChain, and LLMs, reducing manual configuration effort by 70%.",
      "Implemented CI/CD pipelines using Git, Jenkins, and Docker; deployed microservices on AWS (EC2, SQS).",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
];

const testimonials = [
  {
    name: "AI Text-to-Video Summarization",
    mentions: "Jan 2024 - May 2024",
    review:
      "Built a PDF-to-video summary system using PyPDF2 for text extraction and a fine-tuned BART model for summarization. Integrated GPT-4 API for video creation and assessed summarization accuracy with ROUGE metrics.",
    imgPath: "/images/client1.png",
  },
  {
    name: "CI/CD Pipeline Development",
    mentions: "Jul 2023 - Nov 2023",
    review:
      "Created a CI/CD pipeline with Jenkins, Docker, and GitHub, cutting build times by 40% and enabling bi-weekly releases. Automated build, test, and deployment processes using webhooks with integrated monitoring.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Global Pusher System",
    mentions: "XpressBees — 2024",
    review:
      "Config-driven Spring Boot microservices system to transform internal shipment payloads into client-specific schemas and deliver real-time events via HTTPS callbacks. Handles ~100K events/min with Redis caching and AWS SQS.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Order Management System",
    mentions: "XpressBees — 2024",
    review:
      "Built and optimized REST APIs for order creation, status transitions, and event propagation across OMS microservices. Implemented robust order validation handling ~50K orders/min with Apache Kafka integration.",
    imgPath: "/images/client5.png",
  },
  {
    name: "AI Webhook Config Generator",
    mentions: "XpressBees — Agentic AI",
    review:
      "AI-powered automation system using Generative AI (LLM-based) agents to parse client curl requests, validate authentication APIs, and test webhook endpoints. Reduced manual configuration effort by 70%.",
    imgPath: "/images/client4.png",
  },
  {
    name: "IEEE Research Publication",
    mentions: "ICCUBEA 2023",
    review:
      "Published research paper: 'Power Theft and Energy Fraud Detection' at IEEE ICCUBEA 2023. Applied data-driven techniques for anomaly detection in power consumption patterns.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/_omkar25_?igsh=MTR0MWJnd25zbGI0cQ%3D%3D&utm_source=qr",
  },
  {
    name: "leetcode",
    imgPath: "/images/leet.webp",
    url: "https://leetcode.com/u/omkarT25/",
  },
  {
    name: "git",
    imgPath: "/images/git.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/omkar-takale-7a56bb1b9/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
