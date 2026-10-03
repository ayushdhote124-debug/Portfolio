const projectsData = [
  {
    _id: '1',
    title: 'Employee Attendance & Work Tracking System',
    description: 'Built a full-stack MERN application for automated employee attendance tracking with camera selfie verification, GPS location validation, Role-Based Access Control (RBAC for Admin, Manager, Employee), Cloudinary image uploads, and automated daily work hours/overtime calculation.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    techStack: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'Web APIs'],
    githubUrl: 'https://github.com/ayushdhote124-debug',
    liveUrl: 'http://employee-managment-system-ems16.vercel.app/',
    category: 'Full Stack',
    featured: true,
  },
  {
    _id: '2',
    title: 'NamoCart – Full Stack E-commerce Application',
    description: 'A full-stack MERN e-commerce application featuring dynamic product catalog, Redux state management, secure user authentication with JWT, Cloudinary media management, and order processing workflows.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    techStack: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary'],
    githubUrl: 'https://github.com/ayushdhote124-debug',
    liveUrl: 'https://namo-cart-e-commerce-client-9kx4.vercel.app',
    category: 'Full Stack',
    featured: true,
  },
];

// Get all projects locally
export const fetchProjects = async (category = '') => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (category && category !== 'All') {
    return projectsData.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }
  return projectsData;
};

// Simulate contact form submission
export const sendContactMessage = async (formData) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Log message to console (since there's no backend to receive it)
  console.log("New Contact Message Received:", formData);
  
  return {
    success: true,
    message: "Message sent successfully! (Mocked)"
  };
};

export default { fetchProjects, sendContactMessage };
