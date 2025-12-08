
export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface Program {
  category: string;
  target: string;
  courses: string[];
  features: string;
  image: string;
}

export interface Expert {
  name: string;
  role: string;
  education: string;
  career: string[];
  fields: string[];
  image: string;
  fallbackImage?: string; // Added for robust error handling
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

// Added for Program Data & Search
export enum Category {
  ALL = 'All',
  AI_DT = 'AI & DT',
  LEADERSHIP = 'Leadership',
  TEAM_ORG = 'Team & Org',
  COMMUNICATION = 'Communication',
  PROBLEM_STRATEGY = 'Problem & Strategy',
  WORK_BASICS = 'Work Basics'
}

export interface Review {
  author: string;
  role: '교육생' | 'HR 담당자';
  content: string;
}

export interface ProgramDetail {
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  downloadLink?: string;
  details: {
    time: string;
    target: string;
    method: string;
    curriculum: string[];
    features: string[];
    effects?: string[];
    reviews: Review[];
  };
}
