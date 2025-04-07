export type Project = {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string;
  };
  
  export type Skill = {
    name: string;
    icon?: string; // Optional: for skill icons
  };