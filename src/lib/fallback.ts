import type {
  Education,
  Experience,
  Profile,
  Project,
  Skill,
} from "./types";

/**
 * Content the site renders before anything has been entered in the admin
 * panel. It doubles as the seed payload for a fresh database, so the
 * portfolio is never blank — even on a cold, empty deployment.
 */

export const fallbackProfile: Profile = {
  name: "MD Ajmeer Khaja",
  headline: "Full Stack Web Developer",
  location: "Hyderabad, Telangana, India",
  email: "khajamdajmeer@gmail.com",
  phone: "+91 63002 07822",
  bio: "I build web applications end to end — from responsive React front-ends to Node and Express APIs backed by MongoDB. I care about interfaces that feel fast, read clearly, and hold up on a phone as well as a desktop.",
  objective:
    "A web developer skilled in HTML, CSS, JavaScript, React.js, Node.js, Express and Git, looking for a role where I can apply that technical grounding and problem-solving to craft outstanding user experiences and contribute to a team building ambitious products.",
  github_url: "https://github.com/khajamdajmeer",
  linkedin_url: "https://www.linkedin.com/in/ajmeer-khaja-5398b9203",
  avatar_url: "/profile.jpg",
};

export const fallbackProjects: Omit<Project, "id">[] = [
  {
    title: "MHB Services",
    summary:
      "Freelance MERN platform for a service business, with an admin dashboard for tracking technicians in real time.",
    description:
      "Conceived, designed and built as an independent freelance project. The platform is tailored to service-based businesses and pairs a client-facing site with an advanced admin dashboard that tracks employee and technician progress as it happens, alongside workflow tooling that cut the manual coordination the business was doing by hand.",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    live_url: "https://clientmhb-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/clientMHB",
    image_url: "",
    featured: true,
    sort_order: 1,
  },
  {
    title: "ProjectBMS",
    summary:
      "Management dashboard with a full authentication flow — sign-in, OTP verification and password recovery.",
    description:
      "A business management front-end covering the complete account lifecycle: sign-in, one-time-password verification, forgotten-password recovery and password updates, wired through a React Router application with toast feedback and cookie-based sessions.",
    tech: ["React", "React Router", "Axios", "Bootstrap", "SCSS"],
    live_url: "https://projectbms-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/ProjectBMS",
    image_url: "",
    featured: true,
    sort_order: 2,
  },
  {
    title: "Minimal Ecommerce",
    summary:
      "Storefront with category browsing, product pages and a Redux-managed cart.",
    description:
      "A pared-back shopping experience built around Redux Toolkit: category navigation, best-seller and item cards, product detail pages and a cart that keeps its state as you move through the store.",
    tech: ["React", "Redux Toolkit", "React Router"],
    live_url: "https://ecomerce-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/Ecomerce",
    image_url: "/projects/MinimalEcomerce.jpeg",
    featured: true,
    sort_order: 3,
  },
  {
    title: "Car Rental",
    summary:
      "Rental front-end for browsing, comparing and booking vehicles.",
    description:
      "A front-end aimed at making car rental less tedious: browsing that surfaces the right vehicle quickly, side-by-side comparison, and a trip-planning and booking flow that suits both individual and business customers.",
    tech: ["React", "React Router", "Sass", "React Bootstrap"],
    live_url: "https://carrental-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/CarRental",
    image_url: "/projects/carproject.jpeg",
    featured: true,
    sort_order: 4,
  },
  {
    title: "Car Dealers",
    summary:
      "Scroll-driven dealership landing page built with GSAP and Lenis smooth scrolling.",
    description:
      "An animation-led marketing page for a car dealership. GSAP drives the sequenced section reveals while Lenis smooths the scroll, giving the page a continuous, cinematic feel rather than a series of static blocks.",
    tech: ["React", "GSAP", "Lenis"],
    live_url: "https://cardealers-aka-2930.vercel.app",
    repo_url: "https://github.com/khajamdajmeer/CarDealers",
    image_url: "",
    featured: false,
    sort_order: 5,
  },
];

export const fallbackExperience: Omit<Experience, "id">[] = [
  {
    role: "Front End Web Developer Intern",
    company: "Etihad Prime Pvt Ltd",
    location: "Hyderabad",
    period: "Mar 2022 — Jul 2022",
    description:
      "Worked with a team to develop and extend an education institute's website using React, HTML, CSS, JavaScript and responsive design. Partnered closely with UI/UX designers to translate design work into a seamless experience, and took part in code reviews to keep quality up.",
    sort_order: 1,
  },
];

export const fallbackEducation: Omit<Education, "id">[] = [
  {
    institution: "Deccan College of Engineering and Technology",
    degree: "Bachelor of Engineering, Computer Science",
    location: "Hyderabad",
    period: "Aug 2020 — Jul 2023",
    sort_order: 1,
  },
  {
    institution: "Sree Visvesvaraya Institute of Technology and Science",
    degree: "Diploma, Electrical and Electronics Engineering",
    location: "Mahbubnagar",
    period: "Jun 2017 — Mar 2020",
    sort_order: 2,
  },
];

export const fallbackSkills: Omit<Skill, "id">[] = [
  { name: "HTML", category: "Frontend", sort_order: 1 },
  { name: "CSS", category: "Frontend", sort_order: 2 },
  { name: "JavaScript", category: "Frontend", sort_order: 3 },
  { name: "React.js", category: "Frontend", sort_order: 4 },
  { name: "Redux", category: "Frontend", sort_order: 5 },
  { name: "Sass / SCSS", category: "Frontend", sort_order: 6 },
  { name: "Node.js", category: "Backend", sort_order: 7 },
  { name: "Express.js", category: "Backend", sort_order: 8 },
  { name: "MongoDB", category: "Backend", sort_order: 9 },
  { name: "REST APIs", category: "Backend", sort_order: 10 },
  { name: "Git", category: "Tools", sort_order: 11 },
  { name: "Responsive Web Design", category: "Tools", sort_order: 12 },
  { name: "Agile Development", category: "Tools", sort_order: 13 },
];
