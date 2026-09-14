import Zerodha from '../../assets/optimized/zerodha.webp';
import Foodflow from '../../assets/optimized/FoodFlow.webp';
import Foodflow1 from '../../assets/optimized/img1.png';
import Foodflow2 from '../../assets/optimized/img2.png';
import Portfolio from '../../assets/optimized/Portfolio.webp';
import Travel from '../../assets/optimized/Travel.webp';
import Blog from '../../assets/optimized/Blog.webp';
import Alumni from '../../assets/optimized/Alumni.png';
import Restoria from '../../assets/optimized/Restoria.webp';
import ScholarOrbit from '../../assets/optimized/ScholarOrbit.png'

export const projects = [
  {
    title: 'Zerodha Trading Platform',
    description: 'Trading platform dashboard and website experience built for a modern stock-tech workflow.',
    category: 'Dashboard',
    tech: ['React', 'Bootstrap', 'Express', 'MongoDB', 'Node.js', 'Material UI'],
    liveLink: 'https://zerodha-frotend.onrender.com/',
    img: Zerodha,
  },
  {
    title: 'FoodFlow',
    description: 'Food delivery website and admin panel for ordering, tracking and managing digital restaurant operations.',
    category: 'Full-Stack Application',
    tech: ['Vite', 'React', 'Express', 'MongoDB', 'Node.js', 'Stripe'],
    liveLink: 'https://foodflow-ui.onrender.com/',
    img: Foodflow,
  },
  {
    title: 'Portfolio',
    description: 'Personal developer portfolio for presenting work, skills and contact information in a clean format.',
    category: 'Website',
    tech: ['React', 'Bootstrap', 'CSS'],
    liveLink: 'https://rohit-mhetre-info.onrender.com',
    img: Portfolio,
  },
  {
    title: 'WanderLusti Platform',
    description: 'Travel listings platform designed to help users explore destinations and plan trips.',
    category: 'Business Website',
    tech: ['HTML', 'CSS', 'JavaScript', 'Express', 'EJS', 'MongoDB'],
    liveLink: 'https://wnderlust-project.onrender.com/listings',
    img: Travel,
  },
  {
  title: 'Alumni Management System',
  description: 'Full-stack alumni management application with a React frontend, secure authentication, backend APIs, SQL database integration, email communication, and Stripe payment integration.',
  category: 'Full-Stack Application',
  tech: [
    'React',
    'CSS',
    'JavaScript',
    'Node.js',
    'Express.js',
    'SQL',
    'Stripe',
    'Email',
    'Authentication'
  ],
  liveLink: 'https://apcoeralumni.onrender.com/',
  img: Alumni,
},
  {
    title: 'Restoria',
    description: 'Restaurant website with booking flow and a polished customer-facing experience.',
    category: 'Website',
    tech: ['React', 'Bootstrap', 'CSS', 'Flex/Grid'],
    liveLink: 'https://restoria-com.onrender.com',
    img: Restoria,
  },
  {
  title: 'Scholar-Orbit',
  description: 'Full-stack MHT-CET platform with separate student, admin, and backend applications for managing the student experience and data.',
  category: 'Full-Stack Application',
  tech: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'CSS'],
  liveLink: 'https://scholar-orbit-1.onrender.com/',
  githubLink: 'https://github.com/rohitmhetre02/Scholar-Orbit',
  img: ScholarOrbit,
},

 {
    title: 'Tech-Blogs',
    description: 'Blogging platform with content publishing and admin management features.',
    category: 'Full-Stack Application',
    tech: ['HTML', 'CSS', 'JavaScript', 'Express', 'EJS', 'MongoDB'],
    liveLink: 'https://full-stack-blog-application-with-admin.onrender.com',
    img: Blog,
  },


];

export const caseStudy = {
  projectName: 'FoodFlow',
  category: 'Full-Stack Application',
  summary: 'Food delivery website and admin panel for ordering, tracking and managing digital restaurant operations.',
  challenge:
    'The project was designed to help a food business manage online ordering, delivery workflow and operations through a single digital platform. It needed a customer-facing ordering experience and an internal admin layer for running the service effectively.',
  solution:
    'I built a full-stack food delivery application using React for the frontend and Node.js / Express for the backend, connected to MongoDB for data handling. The platform includes order flow and admin management features to support digital restaurant operations.',
  features: [
    'Product management',
    'Shopping cart',
    'Orders',
    'Admin functionality',
    'Payment integration when required',
  ],
  technology: ['Vite', 'React', 'Express', 'MongoDB', 'Node.js', 'Stripe'],
  myRole:
    'I developed the application flow, frontend experience, backend APIs, database integration and the overall structure for the ordering and admin system.',
  result:
    'This project was built as a working full-stack food delivery solution with the requested ordering and management functionality. No separate verified business metrics were provided.',
  liveLink: 'https://foodflow-ui.onrender.com/',
  githubLink: 'https://github.com/rohitmhetre02',
  screenshot: Foodflow,
  image1 : Foodflow1,
  imgae2 : Foodflow2
};

export const allProjectsExternal = 'https://github.com/rohitmhetre02/project';
