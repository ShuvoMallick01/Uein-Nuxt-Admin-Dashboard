export const runningCourses = [
  {
    id: 1,
    title: "Sound Design with Cubase",
    totalModules: 10,
    completedModules: 8,
    progress: 80,
  },
  {
    id: 2,
    title: "Windows Server 2016 Administration",
    totalModules: 20,
    completedModules: 16,
    progress: 90,
  },
  {
    id: 3,
    title: "Ethical Hacking: Penetration Testing",
    totalModules: 20,
    completedModules: 16,
    progress: 70,
  },
  {
    id: 4,
    title: "Testing Vue.js Components",
    totalModules: 20,
    completedModules: 16,
    progress: 65,
  },
];

export const upcomingTasks = [
  { id: 1, status: true, title: "Morning Walk", time: "06:30 AM - 07:00 AM" },
  {
    id: 2,
    status: false,
    title: "Team Standup Meeting",
    time: "09:00 AM - 09:30 AM",
  },
  { id: 3, status: true, title: "Lunch Break", time: "12:30 PM - 01:00 PM" },
  {
    id: 4,
    status: false,
    title: "Grocery Shopping",
    time: "05:30 PM - 06:15 PM",
  },
  { id: 5, status: false, title: "Read a Book", time: "08:30 PM - 09:30 PM" },
];

export const status = [
  {
    id: 1,
    value: 1450,
    color: "primary",
    title: "Courses in Progress",
    icon: "mdi:book-outline",
  },
  {
    id: 2,
    value: 1050,
    color: "success",
    title: "Courses Completed",
    icon: "mdi:book-check-outline",
  },
  {
    id: 3,
    value: 3250,
    color: "warning",
    title: "Certificates",
    icon: "mdi:file-certificate-outline",
  },
];

export const categories = [
  {
    id: 1,
    size: "40+ Courses",
    title: "Web Development",
    image: "/images/courses/web-development.png",
  },
  {
    id: 2,
    size: "50+ Courses",
    title: "Graphic Design",
    image: "/images/courses/graphics-design.png",
  },
  {
    id: 3,
    size: "10+ Courses",
    title: "UI/UX Design",
    image: "/images/courses/ui-ux-design.png",
  },
  {
    id: 4,
    size: "30+ Courses",
    title: "3D Animation & Modeling",
    image: "/images/courses/3d-animation.png",
  },
  {
    id: 5,
    size: "80+ Courses",
    title: "Digital Marketing",
    image: "/images/courses/digital-marketing.png",
  },
];

export const featureCourses = [
  {
    id: 1,
    image: "/images/courses/python.jpg",
    courseName: "Fundamental of Python",
    description: "Programming, Python",
    category: "Programming",
    earned: 399,
    visitor: 1100,
  },
  {
    id: 2,
    image: "/images/courses/react-js.jpg",
    courseName: "Master in React",
    description: "JavaScript, React",
    category: "Development",
    earned: 199,
    visitor: 1200,
  },
  {
    id: 3,
    image: "/images/courses/ui-ux.jpg",
    courseName: "Creative UI Design",
    description: "Sketch, Figma, Adobe",
    category: "UI/UX Design",
    earned: 122,
    visitor: 2200,
  },
  {
    id: 4,
    image: "/images/courses/marketing.jpg",
    courseName: "Marketing Fundamentals",
    description: "SEO, Online Marketing",
    category: "Marketing",
    earned: 245,
    visitor: 1300,
  },
];
