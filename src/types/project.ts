import type { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  icon: ReactNode;
  gradient: string;
  links: { label: string; url: string; icon?: ReactNode }[];
}
