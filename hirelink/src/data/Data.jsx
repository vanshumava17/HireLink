import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { TbRecharging } from "react-icons/tb";

export const companies = [
  "Google",
  "Amazon",
  "Figma",
  "Netflix",
  "Meta",
  "Microsoft",
  "Pinterest",
  "Slack",
  "Spotify",
  "Walmart",
];

export const jobCategory = [
  {
    img: "/Category/Customer Support.png",
    name: "Customer Support",
    desc: "Assist customers with inquires and issues",
    jobs: "1.2K",
  },
  {
    img: "/Category/Sales.png",
    name: "Sales",
    desc: "Sell products and services to customers",
    jobs: "900",
  },
  {
    img: "/Category/Finance.png",
    name: "Finance",
    desc: "Manage financial records and transactions",
    jobs: "700",
  },
  {
    img: "/Category/Human Resource.png",
    name: "Human Resource",
    desc: "Recruit, manage and support company employees",
    jobs: "600",
  },
  {
    img: "/Category/Digital Marketing.png",
    name: "Digital Marketing",
    desc: "Promote brands online with marketing strategies",
    jobs: "1K",
  },
  {
    img: "/Category/Web Developer.png",
    name: "Web Developer",
    desc: "Build and maintain website for client",
    jobs: "2K",
  },
  {
    img: "/Category/Arts & Design.png",
    name: "Arts & Design",
    desc: "Create visual content for branding and media",
    jobs: "500",
  },
  {
    img: "/Category/UI-UX Designer.png",
    name: "UI-UX Designer",
    desc: "Design user interface and enhance user experience",
    jobs: "800",
  },
  {
    img: "/Category/Content Writing.png",
    name: "Content Writing",
    desc: "Write and edit content for different fields",
    jobs: "1.5K",
  },
  {
    img: "/Category/Data Entry.png",
    name: "Data Entry",
    desc: "Input data into system accurately and efficiently",
    jobs: "2K",
  },
];

export const testimonials = [
  {
    img: "avatar.webp",
    name: "Vansh Umava",
    rating: "4",
    desc: "This job portal made job search easy and quick. Recommended to all job seekers!",
  },
  {
    img: "avatar.webp",
    name: "Ananya Gupta",
    rating: "5",
    desc: "Great platform! Found my dream job within days. Highly recommended!",
  },
  {
    img: "avatar.webp",
    name: "Rohit Sharma",
    rating: "4",
    desc: "Easy to use and has great job listings. A must-try for job seekers.",
  },
  {
    img: "avatar.webp",
    name: "Neha Kapoor",
    rating: "5",
    desc: "Amazing experience! Found multiple opportunities quickly.",
  },
  {
    img: "avatar.webp",
    name: "Aditya Mehra",
    rating: "3",
    desc: "Good platform, but the search filters can be improved.",
  },
  {
    img: "avatar.webp",
    name: "Simran Singh",
    rating: "4",
    desc: "Helpful platform with plenty of job options. Recommended!",
  },
  {
    img: "avatar.webp",
    name: "Karan Joshi",
    rating: "5",
    desc: "Exceptional portal for job hunting. Found a perfect fit!",
  },
  {
    img: "avatar.webp",
    name: "Priya Desai",
    rating: "4",
    desc: "User-friendly interface and good job postings. Worth trying!",
  },
  {
    img: "avatar.webp",
    name: "Amit Roy",
    rating: "3",
    desc: "Decent platform, but notifications could be more timely.",
  },
  {
    img: "avatar.webp",
    name: "Sanya Malhotra",
    rating: "5",
    desc: "Fantastic job portal! Highly effective and time-saving.",
  },
];

export const dropDownData = [
  {
    title: "Job Title",
    icon: <FaSearch />,
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
    ],
  },
  {
    title: "Location",
    icon: <CiLocationOn />,
    options: [
      "Bengaluru",
      "Bhopal",
      "Delhi",
      "Indore",
      "Mumbai",
      "Pune",
      "Ujjain",
    ],
  },
  {
    title: "Experience",
    icon: <IoBriefcaseOutline />,
    options: ["Entry Level", "Intermediate", "Expert"],
  },
  {
    title: "Job Type",
    icon: <TbRecharging />,
    options: ["Full Time", "Part Time", "Contract", "Internship", "Freelance"],
  },
];

export const jobsList = [
  {
    img: "/Icons/Google.png",
    jobTitle: "Designer",
    company: "Google",
    applicants: 45,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "Bengaluru",
    package: "28 LPA",
    postedDaysAgo: 10,
    description:
      "Join Google as a Designer and craft user-focused designs for innovative tech solutions. Collaborate with experts and grow your career in a fast-paced environment.",
  },
  {
    img: "/Icons/Amazon.png",
    jobTitle: "Developer",
    company: "Amazon",
    applicants: 30,
    experience: "Intermediate",
    jobType: "Part-Time",
    location: "Mumbai",
    package: "20 LPA",
    postedDaysAgo: 7,
    description:
      "Amazon is hiring skilled Developers to build scalable systems. Work with a diverse team and contribute to cutting-edge projects in e-commerce and technology.",
  },
  {
    img: "/Icons/Figma.png",
    jobTitle: "Product Manager",
    company: "Figma",
    applicants: 18,
    experience: "Expert",
    jobType: "Contract",
    location: "Delhi",
    package: "35 LPA",
    postedDaysAgo: 15,
    description:
      "Figma seeks an experienced Product Manager to lead strategic projects. Help shape the future of design tools while driving innovation and excellence.",
  },
  {
    img: "/Icons/Netflix.png",
    jobTitle: "Data Analyst",
    company: "Netflix",
    applicants: 22,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Pune",
    package: "30 LPA",
    postedDaysAgo: 5,
    description:
      "Analyze and interpret data at Netflix to enhance viewer experience. Leverage your skills to influence decision-making in a data-driven culture.",
  },
  {
    img: "/Icons/Meta.png",
    jobTitle: "Sales Executive",
    company: "Meta",
    applicants: 12,
    experience: "Entry Level",
    jobType: "Internship",
    location: "Indore",
    package: "10 LPA",
    postedDaysAgo: 20,
    description:
      "Meta is looking for an energetic Sales Executive intern to boost product outreach. A great opportunity to learn and grow in a tech giant.",
  },
  {
    img: "/Icons/Microsoft.png",
    jobTitle: "Content Writer",
    company: "Microsoft",
    applicants: 27,
    experience: "Entry Level",
    jobType: "Freelance",
    location: "Ujjain",
    package: "12 LPA",
    postedDaysAgo: 12,
    description:
      "Join Microsoft as a Content Writer to create compelling narratives. Showcase your creativity and enhance user engagement through impactful content.",
  },
  {
    img: "/Icons/Pinterest.png",
    jobTitle: "Customer Support",
    company: "Pinterest",
    applicants: 19,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Bhopal",
    package: "15 LPA",
    postedDaysAgo: 8,
    description:
      "Provide exceptional customer support at Pinterest. Help users solve problems and enhance their experience with a creative platform.",
  },
  {
    img: "/Icons/Slack.png",
    jobTitle: "Web Developer",
    company: "Slack",
    applicants: 25,
    experience: "Expert",
    jobType: "Part-Time",
    location: "Mumbai",
    package: "40 LPA",
    postedDaysAgo: 18,
    description:
      "Slack is hiring an experienced Web Developer to build robust and responsive web applications. Join a collaborative team and drive innovation.",
  },
  {
    img: "/Icons/Spotify.png",
    jobTitle: "Tester",
    company: "Spotify",
    applicants: 33,
    experience: "Intermediate",
    jobType: "Contract",
    location: "Delhi",
    package: "22 LPA",
    postedDaysAgo: 11,
    description:
      "Spotify is searching for skilled Testers to ensure product quality. Identify bugs and work with engineers to deliver seamless user experiences.",
  },
  {
    img: "/Icons/Walmart.png",
    jobTitle: "Designer",
    company: "Walmart",
    applicants: 14,
    experience: "Entry Level",
    jobType: "Internship",
    location: "Pune",
    package: "8 LPA",
    postedDaysAgo: 3,
    description:
      "As a Designer at Walmart, create customer-centric interfaces. A great opportunity for fresh graduates to build a rewarding career in retail technology.",
  },
  {
    img: "/Icons/Google.png",
    jobTitle: "Developer",
    company: "Google",
    applicants: 40,
    experience: "Expert",
    jobType: "Full-Time",
    location: "Bengaluru",
    package: "50 LPA",
    postedDaysAgo: 6,
    description:
      "Google is looking for an expert Developer to create scalable solutions. Work on groundbreaking projects with a team of world-class engineers.",
  },
  {
    img: "/Icons/Amazon.png",
    jobTitle: "Product Manager",
    company: "Amazon",
    applicants: 21,
    experience: "Intermediate",
    jobType: "Freelance",
    location: "Indore",
    package: "30 LPA",
    postedDaysAgo: 4,
    description:
      "Drive product strategy and execution at Amazon. Join a dynamic team and contribute to the innovation of customer-first solutions.",
  },
  {
    img: "/Icons/Figma.png",
    jobTitle: "Data Analyst",
    company: "Figma",
    applicants: 18,
    experience: "Entry Level",
    jobType: "Internship",
    location: "Ujjain",
    package: "9 LPA",
    postedDaysAgo: 15,
    description:
      "Analyze design tool usage patterns at Figma. Perfect opportunity for budding analysts to grow and learn in the creative tech space.",
  },
  {
    img: "/Icons/Netflix.png",
    jobTitle: "Sales Executive",
    company: "Netflix",
    applicants: 15,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Mumbai",
    package: "18 LPA",
    postedDaysAgo: 5,
    description:
      "Join Netflix as a Sales Executive and help expand the brand’s footprint. A challenging role with immense growth opportunities.",
  },
  {
    img: "/Icons/Meta.png",
    jobTitle: "Content Writer",
    company: "Meta",
    applicants: 23,
    experience: "Expert",
    jobType: "Contract",
    location: "Bhopal",
    package: "25 LPA",
    postedDaysAgo: 17,
    description:
      "Meta is looking for an experienced Content Writer to craft impactful stories. Drive engagement and creativity for a global audience.",
  },
  {
    img: "/Icons/Microsoft.png",
    jobTitle: "Tester",
    company: "Microsoft",
    applicants: 20,
    experience: "Entry Level",
    jobType: "Part-Time",
    location: "Delhi",
    package: "10 LPA",
    postedDaysAgo: 2,
    description:
      "Microsoft is hiring entry-level Testers to ensure the quality of their cutting-edge solutions. Collaborate with skilled teams to deliver excellence.",
  },
  {
    img: "/Icons/Pinterest.png",
    jobTitle: "Designer",
    company: "Pinterest",
    applicants: 28,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Indore",
    package: "22 LPA",
    postedDaysAgo: 13,
    description:
      "Join Pinterest as a Designer to create visually stunning and user-friendly platforms. Collaborate and grow your design skills in a supportive environment.",
  },
  {
    img: "/Icons/Slack.png",
    jobTitle: "Customer Support",
    company: "Slack",
    applicants: 17,
    experience: "Entry Level",
    jobType: "Internship",
    location: "Ujjain",
    package: "8 LPA",
    postedDaysAgo: 9,
    description:
      "Slack is looking for enthusiastic Customer Support interns. An excellent chance to learn and assist users in an innovative workspace.",
  },
  {
    img: "/Icons/Spotify.png",
    jobTitle: "Web Developer",
    company: "Spotify",
    applicants: 35,
    experience: "Expert",
    jobType: "Freelance",
    location: "Mumbai",
    package: "38 LPA",
    postedDaysAgo: 14,
    description:
      "Spotify is hiring expert Web Developers to create scalable, visually stunning applications. Innovate and thrive in a dynamic team environment.",
  },
  {
    img: "/Icons/Walmart.png",
    jobTitle: "Tester",
    company: "Walmart",
    applicants: 25,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Bengaluru",
    package: "16 LPA",
    postedDaysAgo: 11,
    description:
      "Walmart is seeking experienced Testers to ensure seamless operations in retail tech. Contribute to high-quality solutions in a global organization.",
  },
];

export const searchFields = [
  {
    title: "Job Title",
    icon: <FaSearch />,
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
      "Web Developer",
    ],
  },

  {
    title: "Location",
    icon: <CiLocationOn />,
    options: [
      "Bengaluru",
      "Bhopal",
      "Delhi",
      "Indore",
      "Mumbai",
      "Pune",
      "Ujjain",
    ],
  },

  {
    title: "Skills",
    icon: <TbRecharging />,
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "NodeJS",
      "Python",
      "Java",
      "Ruby",
      "PHP",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "API Development",
      "Testing & Debugging",
      "Agile Methodologies",
      "DevOps",
      "AWS",
      "Azure",
      "Google Cloud",
    ],
  },
];

export const talents = [
  {
    name: "Vansh Umava",
    role: "Designer",
    company: "Google",
    topSkills: ["HTML", "CSS", "JavaScript"],
    about:
      "A passionate Designer with an eye for detail and a flair for creating stunning visuals. Excels in delivering user-friendly designs with high responsiveness.",
    expectedCTC: "28 - 40 LPA",
    location: "Bengaluru, India",
    image: "avatar.webp",
  },
  {
    name: "Aditi Sharma",
    role: "Developer",
    company: "Amazon",
    topSkills: ["React", "NodeJS", "API Development"],
    about:
      "Experienced Developer with expertise in building scalable applications. Passionate about solving complex problems and delivering efficient code.",
    expectedCTC: "40 - 50 LPA",
    location: "Mumbai, India",
    image: "avatar.webp",
  },
  {
    name: "Rohit Mehta",
    role: "Product Manager",
    company: "Figma",
    topSkills: ["Agile Methodologies", "API Development", "SQL"],
    about:
      "Product Manager skilled in bridging technical and business needs. Adept at delivering customer-centric products and driving innovation.",
    expectedCTC: "50 - 65 LPA",
    location: "Delhi, India",
    image: "avatar.webp",
  },
  {
    name: "Sneha Verma",
    role: "Marketing Specialist",
    company: "Netflix",
    topSkills: ["SEO", "HTML", "Content Marketing"],
    about:
      "Marketing Specialist with a knack for creative storytelling and driving impactful campaigns. Experienced in delivering measurable growth.",
    expectedCTC: "18 - 25 LPA",
    location: "Pune, India",
    image: "avatar.webp",
  },
  {
    name: "Arjun Patel",
    role: "Data Analyst",
    company: "Meta",
    topSkills: ["Python", "SQL", "Data Visualization"],
    about:
      "Detail-oriented Data Analyst with a passion for transforming data into actionable insights. Proficient in creating dashboards and reports.",
    expectedCTC: "30 - 40 LPA",
    location: "Indore, India",
    image: "avatar.webp",
  },
  {
    name: "Priya Singh",
    role: "Sales Executive",
    company: "Microsoft",
    topSkills: ["CRM Tools", "Communication", "Negotiation"],
    about:
      "Sales Executive with a proven track record of achieving sales targets. Adept at building strong client relationships and driving growth.",
    expectedCTC: "15 - 20 LPA",
    location: "Bhopal, India",
    image: "avatar.webp",
  },
  {
    name: "Vikas Kumar",
    role: "Content Writer",
    company: "Pinterest",
    topSkills: ["Copywriting", "SEO", "Content Marketing"],
    about:
      "Creative Content Writer with expertise in crafting engaging and impactful content. Skilled in improving online visibility and brand presence.",
    expectedCTC: "12 - 18 LPA",
    location: "Ujjain, India",
    image: "avatar.webp",
  },
  {
    name: "Richa Tiwari",
    role: "Customer Support",
    company: "Slack",
    topSkills: ["Problem Solving", "CRM Tools", "Communication"],
    about:
      "Customer Support professional dedicated to providing top-notch assistance. Skilled in resolving issues quickly and ensuring customer satisfaction.",
    expectedCTC: "10 - 15 LPA",
    location: "Delhi, India",
    image: "avatar.webp",
  },
  {
    name: "Sameer Shah",
    role: "Web Developer",
    company: "Spotify",
    topSkills: ["React", "NodeJS", "Git"],
    about:
      "Web Developer with expertise in building responsive and dynamic web applications. Committed to delivering optimal user experiences.",
    expectedCTC: "25 - 35 LPA",
    location: "Mumbai, India",
    image: "avatar.webp",
  },
  {
    name: "Pooja Sinha",
    role: "Tester",
    company: "Walmart",
    topSkills: ["Testing & Debugging", "API Testing", "Python"],
    about:
      "QA Tester with a focus on ensuring software quality. Experienced in writing and executing test cases to identify and resolve issues.",
    expectedCTC: "18 - 22 LPA",
    location: "Pune, India",
    image: "avatar.webp",
  },
  {
    name: "Amit Chauhan",
    role: "Designer",
    company: "Meta",
    topSkills: ["CSS", "JavaScript", "Git"],
    about:
      "Designer focused on crafting clean and modern interfaces. Skilled in implementing responsive designs for web and mobile platforms.",
    expectedCTC: "28 - 35 LPA",
    location: "Bhopal, India",
    image: "avatar.webp",
  },
  {
    name: "Neha Agrawal",
    role: "Developer",
    company: "Google",
    topSkills: ["Angular", "Python", "SQL"],
    about:
      "Experienced Developer with a passion for writing clean and efficient code. Skilled in building scalable solutions for complex problems.",
    expectedCTC: "38 - 45 LPA",
    location: "Indore, India",
    image: "avatar.webp",
  },
  {
    name: "Karan Gupta",
    role: "Product Manager",
    company: "Amazon",
    topSkills: ["API Development", "Agile Methodologies", "Ruby"],
    about:
      "Dynamic Product Manager with expertise in developing and executing product strategies. Skilled in leading cross-functional teams to success.",
    expectedCTC: "50 - 60 LPA",
    location: "Delhi, India",
    image: "avatar.webp",
  },
  {
    name: "Swati Joshi",
    role: "Marketing Specialist",
    company: "Figma",
    topSkills: ["Content Marketing", "SEO", "HTML"],
    about:
      "Creative Marketing Specialist with a strong background in digital campaigns. Adept at driving brand growth and user engagement.",
    expectedCTC: "20 - 30 LPA",
    location: "Ujjain, India",
    image: "avatar.webp",
  },
  {
    name: "Vivek Sharma",
    role: "Data Analyst",
    company: "Netflix",
    topSkills: ["SQL", "Python", "PostgreSQL"],
    about:
      "Data Analyst with a keen eye for patterns and trends. Experienced in providing actionable insights through data interpretation.",
    expectedCTC: "35 - 45 LPA",
    location: "Bengaluru, India",
    image: "avatar.webp",
  },
  {
    name: "Nidhi Desai",
    role: "Sales Executive",
    company: "Pinterest",
    topSkills: ["Negotiation", "CRM Tools", "Communication"],
    about:
      "Sales Executive skilled in driving revenue growth through strategic planning and strong customer relationships. Proven sales achiever.",
    expectedCTC: "12 - 20 LPA",
    location: "Mumbai, India",
    image: "avatar.webp",
  },
  {
    name: "Ankit Bansal",
    role: "Content Writer",
    company: "Microsoft",
    topSkills: ["Copywriting", "Content Marketing", "SEO"],
    about:
      "Content Writer passionate about creating high-quality and engaging content. Specializes in crafting impactful stories for digital platforms.",
    expectedCTC: "15 - 22 LPA",
    location: "Pune, India",
    image: "avatar.webp",
  },
  {
    name: "Shweta Yadav",
    role: "Customer Support",
    company: "Slack",
    topSkills: ["Problem Solving", "Communication", "CRM Tools"],
    about:
      "Customer Support professional with a focus on delivering exceptional service. Skilled in resolving customer issues and maintaining satisfaction.",
    expectedCTC: "10 - 15 LPA",
    location: "Bhopal, India",
    image: "avatar.webp",
  },
  {
    name: "Rohan Malhotra",
    role: "Web Developer",
    company: "Spotify",
    topSkills: ["React", "NodeJS", "Git"],
    about:
      "Web Developer with experience in creating user-friendly and responsive web applications. Passionate about modern design trends.",
    expectedCTC: "30 - 40 LPA",
    location: "Delhi, India",
    image: "avatar.webp",
  },
  {
    name: "Simran Mehta",
    role: "Tester",
    company: "Walmart",
    topSkills: ["Testing & Debugging", "Python", "API Testing"],
    about:
      "Tester committed to ensuring software reliability and performance. Experienced in identifying and resolving critical issues efficiently.",
    expectedCTC: "20 - 28 LPA",
    location: "Ujjain, India",
    image: "avatar.webp",
  },
];

export const profile = [
  {
    name: "Vansh Umava",
    role: "Software Engineer",
    company: "Google",
    location: "Bhopal, India",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. In non eius labore sed quas velit reprehenderit repellat ipsam dicta et ratione alias magni, quisquam magnam rerum quidem. Repellendus esse amet soluta, neque magnam accusamus consectetur numquam inventore quasi ex laudantium. Laborum, beatae dicta molestiae veniam deleniti eos labore impedit asperiores.",
    skills: [
      "React",
      "SpringBoot",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Java",
      "SQL",
    ],
    experience: [
      {
        title: "SoftWare Engineer III",
        company: "Google",
        location: "Bhopal, India",
        startDate: "April 2022",
        endDate: "May 2024",
        description: "",
      },
    ],
    certifications: [
      {
        name: "Google Cloud Architecture",
        issuer: "Google",
        issueDate: "August 2023",
        certificationId: "CB72589874",
      },
    ],
  },
];

export const fields = [
  {
    label: "Job Title",
    placeholder: "Enter Job Title",
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
    ],
  },
  {
    label: "Company",
    placeholder: "Enter Company Name",
    options: [
      "Google",
      "Microsoft",
      "Meta",
      "Netflix",
      "Adobe",
      "Facebook",
      "Amazon",
      "Apple",
      "Spotify",
    ],
  },
  {
    label: "Experience",
    placeholder: "Enter Experience Level",
    options: ["Entry Level", "Intermediate", "Expert"],
  },
  {
    label: "Job Type",
    placeholder: "Enter Job Type",
    options: ["Full Time", "Part Time", "Contract", "Freelance", "Internship"],
  },
  {
    label: "Location",
    placeholder: "Enter Job Location",
    options: ["Delhi", "Mumbai", "Pune", "Indore", "Bhopal"],
  },
  {
    label: "Salary",
    placeholder: "Enter Salary",
    options: ["3 LPA", "4 LPA", "5 LPA", "10 LPA", "15 LPA", "20 LPA"],
  },
];

export const skills = ["React", "MongoDB", "SQL", "C", "C++", "Java", "Python"];

export const description =
  "<h4>About the Job</h4><p>We are looking for a dedicated and skilled professional to join our team as a Software Developer. The ideal candidate will have a passion for coding and a strong understanding of software development processes.</p><h4>Responsibilities</h4><ul><li>Design, develop, and maintain software applications according to client requirements.</li><li>Collaborate with cross-functional teams to define, design, and ship new features.</li><li>Identify and resolve software defects and performance issues.</li><li>Write clean, scalable, and efficient code following industry standards.</li><li>Participate in code reviews to maintain code quality.</li></ul><h4>Criteria</h4><ul><li>Bachelor's degree in Computer Science, Software Engineering, or a related field.</li><li>1-3 years of experience in software development or a related role.</li><li>Proven experience with programming languages such as Python, Java, or JavaScript.</li><li>Familiarity with software development lifecycle and Agile methodologies.</li><li>Strong problem-solving and analytical skills.</li></ul>";

export const companyProfile = {
  name: "Google",
  overview:
    "Google is a global technology leader founded in 1998 by Larry Page and Sergey Brin. Known primarily for its search engine, Google has expanded into various sectors, including cloud computing, advertising, consumer electronics, and software development. The company’s mission is to organize the world's information and make it universally accessible and useful. Over the years, Google has revolutionized the internet experience with groundbreaking products like Gmail, Google Maps, and Android, alongside services like YouTube and Google Workspace. A pioneer in artificial intelligence and machine learning, Google drives innovation through projects such as Google Assistant, DeepMind, and TensorFlow. The company places a strong emphasis on sustainability, diversity, and corporate social responsibility. It has committed to operating entirely on carbon-free energy by 2030. Google fosters a culture of innovation and learning, offering employees opportunities to work on cutting-edge technologies and ideas.",
  industry: "Technology, Internet, Software",
  website: "https://www.google.com",
  headquarters: "Mountain View, California, United States",
  specialties: [
    "Search Engine",
    "Cloud Computing",
    "Mobile Operating Systems (Android)",
    "Artificial Intelligence",
    "Video Streaming (YouTube)",
    "Machine Learning",
    "Online Advertising",
    "Consumer Electronics",
    "Productivity Tools (Google Workspace)",
    "Digital Mapping (Google Maps)",
    "Quantum Computing",
    "Sustainable Technology",
  ],
};

export const similarCompanies = [
  { name: "Google", employees: "190.2K" },
  { name: "Amazon", employees: "1.6M" },
  { name: "Figma", employees: "500" },
  { name: "Netflix", employees: "12.5K" },
  { name: "Meta", employees: "58.3K" },
  { name: "Microsoft", employees: "221K" },
  { name: "Pinterest", employees: "4K" },
  { name: "Slack", employees: "2K" },
  { name: "Spotify", employees: "9.2K" },
  { name: "Walmart", employees: "2.3M" },
];

export const activeJobs = [
  {
    jobTitle: "FrontEnd Developer",
    location: "Delhi, India",
    posted: "5 days ago",
  },
  {
    jobTitle: "BackEnd Developer",
    location: "Mumbai, India",
    posted: "3 days ago",
  },
  {
    jobTitle: "FullStack Developer",
    location: "Bangalore, India",
    posted: "1 week ago",
  },
  { jobTitle: "UI/UX Designer", location: "Pune, India", posted: "2 days ago" },
  {
    jobTitle: "Software Engineer",
    location: "Hyderabad, India",
    posted: "4 days ago",
  },
  {
    jobTitle: "Data Scientist",
    location: "Chennai, India",
    posted: "6 days ago",
  },
  {
    jobTitle: "DevOps Engineer",
    location: "Noida, India",
    posted: "2 weeks ago",
  },
  {
    jobTitle: "Cloud Architect",
    location: "Kolkata, India",
    posted: "1 day ago",
  },
  {
    jobTitle: "Mobile Developer",
    location: "Jaipur, India",
    posted: "3 days ago",
  },
  { jobTitle: "QA Engineer", location: "Lucknow, India", posted: "5 days ago" },
  {
    jobTitle: "Product Manager",
    location: "Gurgaon, India",
    posted: "1 week ago",
  },
  {
    jobTitle: "Business Analyst",
    location: "Ahmedabad, India",
    posted: "4 days ago",
  },
  {
    jobTitle: "Project Manager",
    location: "Surat, India",
    posted: "2 weeks ago",
  },
  {
    jobTitle: "Cybersecurity Analyst",
    location: "Bhopal, India",
    posted: "3 days ago",
  },
  {
    jobTitle: "Database Administrator",
    location: "Patna, India",
    posted: "6 days ago",
  },
  {
    jobTitle: "Network Engineer",
    location: "Coimbatore, India",
    posted: "2 days ago",
  },
  { jobTitle: "AI Engineer", location: "Nagpur, India", posted: "1 week ago" },
  {
    jobTitle: "Game Developer",
    location: "Indore, India",
    posted: "5 days ago",
  },
  {
    jobTitle: "Blockchain Developer",
    location: "Raipur, India",
    posted: "3 days ago",
  },
  {
    jobTitle: "Technical Writer",
    location: "Ranchi, India",
    posted: "2 weeks ago",
  },
  {
    jobTitle: "Systems Analyst",
    location: "Chandigarh, India",
    posted: "4 days ago",
  },
  {
    jobTitle: "Machine Learning Engineer",
    location: "Mysore, India",
    posted: "6 days ago",
  },
  {
    jobTitle: "IT Support Specialist",
    location: "Vijayawada, India",
    posted: "1 week ago",
  },
  {
    jobTitle: "Web Developer",
    location: "Visakhapatnam, India",
    posted: "3 days ago",
  },
  {
    jobTitle: "Digital Marketing Specialist",
    location: "Varanasi, India",
    posted: "2 days ago",
  },
];
