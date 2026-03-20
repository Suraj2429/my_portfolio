
import React from "react";
import { Project, SkillCategory, Education } from "./types";
import profilePic from "./assets/Casual Shoot.png";

export const PERSONAL_INFO = {
  name: "Suraj Prakash Patil",
  title: "Software & Backend Developer",
  location: "Kolhapur, Maharashtra, India",
  email: "surajp7275@gmail.com",
  phone: "+91 9307153180",
  linkedin: "linkedin.com/in/suraj-patil90",
  github: "github.com/Suraj2429",
  profileImage: profilePic,
  bio: "Motivated MCA Final Year student with a strong interest in software and backend development.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript (ES6+)", "Shell Scripting"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "FastAPI", "ASP.NET", "RESTful APIs"]
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "Git", 
      "GitHub", 
      "Docker", 
      "Kubernetes (Basics)", 
      "GitHub Actions (CI/CD)", 
      "AWS (EC2, S3 - Basics)", 
      "Linux"
    ]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Jenkins (Basics)", "Terraform (Basics)", "Postman", "VS Code"]
  },

];

export const PROJECTS: Project[] = [
  {
    title: "SecureFS - Role-Based File Management",
    techStack: ["React.js", "FastAPI", "MongoDB", "JWT", "GridFS"],
    description: "A secure microservices-style web application featuring separate user and admin functionalities with robust role-based access control.",
    github: "https://github.com/Suraj2429/Microservices-Project.git",
    features: [
      "JWT-based secure authentication",
      "RBAC (Role-Based Access Control)",
      "Secure file upload/download via GridFS",
      "Responsive admin/user dashboards"
    ]
  },
  {
    title: "Hey Jervis - Virtual Voice Assistant",
    techStack: ["Python", "SpeechRecognition", "pyttsx3", "Scikit-learn"],
    description: "An intelligent Python-based assistant capable of natural language processing and executing system/web commands via voice.",
    github: "https://github.com/Suraj2429/virtual_voice_assistant.git",
    features: [
      "Natural language query handling",
      "Web searching and YouTube control",
      "Basic calculations and time queries",
      "Application automation"
    ]
  },

];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "FAMT, Ratnagiri",
    university: "Mumbai University",
    year: "Present"
  },
  {
    degree: "B.Sc. Information Technology",
    institution: "ICSIT, Sawarde",
    university: "Mumbai University",
    year: "2024",
    grade: "8.75 CGPI"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "S.G.R.W. College, Malkapur",
    university: "Kolhapur Division Board",
    year: "2021",
    grade: "59.00%"
  }
];
