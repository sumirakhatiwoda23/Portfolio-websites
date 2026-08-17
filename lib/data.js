export const profile = {
  name: "Sumira Khatiwoda",
  initials: "SK",
  logoName: "Sumira",
  roles: [
    "Full-Stack MERN Developer",
    "React & Node.js Engineer",
    "ML Research Enthusiast",
  ],
  lede:
    "I’m a Full-Stack MERN Developer passionate about building modern, scalable, and intuitive web applications. I turn ideas into polished digital experiences from responsive React interfaces to robust Node.js backends, secure APIs, and seamless database integration.",
  email: "sumirakhatiwoda23@gmail.com",
  github: "https://github.com/sumirakhatiwoda23",
  linkedin: "https://linkedin.com/in/sumirraa-khatiwoda",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
];

export const about = {
  caption: "< I build stuff 🚀 />",
  heading: "Full Stack Developer",
  paragraphs: [
    "I'm a Computer Engineering student and Full-Stack MERN Developer who enjoys turning ideas into practical, user-focused web applications. I work across the stack—from building responsive React interfaces to developing secure Node.js APIs and integrating MongoDB databases.",
    "Alongside web development, I have experience working with machine learning and computer vision, which has shaped the way I approach problems is to understand the data, break down the complexity, and build solutions that actually work.",
    "I'm currently focused on becoming a stronger full-stack engineer by building real-world projects, exploring new technologies, and continuously improving the way I write and structure code."
  ],
  meta: [
    { k: "Location", v: "Kathmandu, Nepal" },
    { k: "Education", v: "BCT, 2022–2026" },
    { k: "Focus", v: "MERN Stack Development" },
    { k: "Email", v: "sumirakhatiwoda23@gmail.com" },
  ],
};

export const skillGroups = [
  {
    cat: "Frontend",
    color: "var(--violet)",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "React Router",
      "React Hooks",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
  },
  {
    cat: "Backend",
    color: "var(--pink)",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
  },
  {
    cat: "Database",
    color: "var(--amber)",
    items: ["MongoDB", "Mongoose", "MongoDB Atlas"],
  },
  {
    cat: "Services",
    color: "#10b981",
    items: ["Cloudinary", "eSewa Payment Gateway"],
  },
  {
    cat: "Tools & Deployment",
    color: "#3b82f6",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"],
  },
  {
    cat: "Concepts",
    color: "#8b5cf6",
    items: ["State Management", "Authentication & Authorization", "Responsive Design"],
  },
];

export const projects = [
  {
    banner: "Medicare",
    image: "/projects/medicare.png",
    gradient: "linear-gradient(135deg, #7c3aed, #3b82f6)",
    cat: "MERN Stack",
    name: "Medicare — Appointment Booking",
    stack: "React.js, Node.js, Express.js, MongoDB, JWT, Cloudinary, eSewa",
    desc: "Full-stack doctor appointment booking platform with separate patient, admin, and doctor modules, role-based auth, and eSewa payments with HMAC-SHA256 verification.",
    live: "https://medicare-pi-six-35.vercel.app/",
    code: "https://github.com/sumirakhatiwoda23/medicare",
  },
  {
    banner: "E-Commerce",
    image: "/projects/ecommerce.png",
    gradient: "linear-gradient(135deg, #ec4899, #f59e0b)",
    cat: "MERN Stack",
    name: "E-Commerce Website",
    stack: "React.js, Redux Toolkit, Node.js, Express.js, MongoDB, JWT, Cloudinary, eSewa",
    desc: "E-commerce platform with customer storefront and admin dashboard — filtering, search, Redux-powered cart, eSewa checkout, and purchase-verified reviews.",
    live: "https://ecommerce-xdmk.vercel.app/",
    code: "https://github.com/sumirakhatiwoda23/Ecommerce",
  },
  {
    banner: "Academia",
    image: "/projects/student-management.png",
    gradient: "linear-gradient(135deg, #10b981, #3b82f6)",
    cat: "MERN Stack",
    name: "Academia — Student Management",
    stack: "React.js, Node.js, Express.js, MongoDB, JWT, Tailwind CSS",
    desc: "Role-based student management system with JWT auth, drag-and-drop avatar uploads, password-strength feedback, and paginated, searchable records.",
    live: "https://student-management-kappa-hazel.vercel.app/",
    code: "https://github.com/sumirakhatiwoda23/student-management",
  },
  {
    banner: "MealDB",
    image: "/projects/mealdb.png",
    gradient: "linear-gradient(135deg, #10b981, #3b82f6)",
    cat: "MERN Stack",
    name: "MealDB-Frontend React",
    stack: "React.js, Tailwind CSS",
    desc: "Role-based student management system with JWT auth, drag-and-drop avatar uploads, password-strength feedback, and paginated, searchable records.",
    live: "https://meal-db-react-project.vercel.app/",
    code: "https://github.com/sumirakhatiwoda23/MealDB-React-Project",
  },
];

export const education = [
  {
    duration: "2022 – 2026",
    title: "Bachelor of Computer Engineering (BCT)",
    sub: "Kathmandu Engineering College, Tribhuvan University · Kathmandu, Nepal",
    desc: ["Relevant coursework: DSA, Web Development, OS, OOP, DBMS, Data Mining"],
  },
  {
    duration: "2019 – 2021",
    title: "Senior Secondary (Class 12)",
    sub: "Orient A-levels · Kathmandu, Nepal",
    desc: [],
  },
  {
    duration: "Nov 2025 – May 2026",
    title: "Full Stack Web Development Training",
    sub: "Mindrisers Institute of Technology",
    desc: [
      "Completed full-stack training covering the MERN stack, RESTful API design, and JWT authentication",
      "Practiced building responsive UIs with HTML, CSS, JavaScript, and React.js",
      "Learned to deploy full-stack applications using Vercel and Render",
    ],
    credential: "https://www.mindrisers.com.np/certificate/validate/MR-82052-MS",
  },
];

export const achievements = [
  {
    gradient: "linear-gradient(135deg, #7c3aed, #ec4899)",
    image: "/projects/posterpresentation1.png",
    tag: "Poster Presentation · Feb 2026",
    title: "Nepali Sign Language Detection",
    desc: "Presented a real-time hand gesture recognition system using deep learning and computer vision at the Khwopa National Conference.",
  },
  {
    gradient: "linear-gradient(135deg, #f59e0b, #ec4899)",
    image: "/projects/presentationpaper.png",
    tag: "Abstract Submission · Feb 2026",
    title: "MediPredict — Disease Prediction System",
    desc: "Presented a multiple disease prediction system demonstrating ML models for diabetes, heart disease, and Parkinson's disease at the Khwopa National Conference.",
  },
];