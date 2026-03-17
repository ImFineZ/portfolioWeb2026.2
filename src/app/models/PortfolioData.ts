// Models - Data structures and types

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'methodology' | 'database';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  color: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  availability: string;
}

// Data
export const personalInfo: PersonalInfo = {
  name: 'Greivin',
  title: 'Computer Science Engineering Student',
  tagline: 'Building the future, one commit at a time.',
  bio: `I'm a passionate Computer Science Engineering student dedicated to building innovative solutions through code. 
  My journey in tech is driven by curiosity and a commitment to continuous learning. With a strong focus on software development, 
  systems architecture, and agile methodologies, I thrive on transforming ideas into functional, scalable applications.`,
  availability: 'Currently available for internships and collaboration'
};

export const skills: Skill[] = [
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Python', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'Azure DevOps', category: 'tools' },
  { name: 'Agile/Scrum', category: 'methodology' },
  { name: 'SQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Docker', category: 'tools' },
  { name: 'CI/CD', category: 'tools' },
];

export const projects: Project[] = [
  {
    title: 'PetHealth Record',
    description: 'A comprehensive veterinary records management platform built with agile methodology. Features include patient tracking, appointment scheduling, medical history management, and real-time collaboration for veterinary clinics.',
    tags: ['Azure DevOps', 'Agile/Scrum', 'Full-stack', 'Database Design', 'CI/CD'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    title: 'Task Management System',
    description: 'Modern task tracking application with kanban boards, real-time updates, and team collaboration features. Built with React and Node.js backend.',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    title: 'Weather Analytics Dashboard',
    description: 'Interactive weather data visualization dashboard using external APIs. Features include forecast predictions, historical data analysis, and location-based weather tracking.',
    tags: ['JavaScript', 'REST APIs', 'Data Visualization', 'Responsive Design'],
    github: '#',
    demo: '#',
    featured: false
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
        url: 'https://linkedin.com/in/greivinrodriguezn',
        handle: '/in/greivinrodriguezn',
    color: '#0077B5',
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
      url:'https://github.com/ImFineZ',
    handle: '@greivin',
    color: '#E8E8E8',
    icon: 'github'
  },
  {
    name: 'Email',
    url: 'mailto:greivinrodriguez@icloud.com',
      handle: 'greivinrodriguez@icloud.com',
    color: '#00F5C4',
    icon: 'mail'
  },
  {
    name: 'WhatsApp',
      url: 'https://wa.me/+50688018555',
    handle: '+506 88018555',
    color: '#25D366',
    icon: 'message-circle'
  },
  
];
