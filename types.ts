
export interface Project {
  title: string;
  techStack: string[];
  description: string;
  github?: string;
  features: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  university: string;
  year: string;
  grade?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}



