export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  emoji: string;
  gradient: string;
  links: { label: string; url: string }[];
}
