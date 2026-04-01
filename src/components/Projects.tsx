import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import type { Project } from '../types/project';

// ─── Ajouter un projet ici pour en rajouter un ───
const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Personnel',
    description: 'Mon portfolio développé avec React et Tailwind CSS pour présenter mes projets et compétences.',
    longDescription:
      'Ce portfolio a été conçu pour présenter mon parcours de développeur. Il est entièrement responsive, animé et pensé pour offrir une expérience utilisateur agréable. Il inclut des sections dédiées à mes compétences, projets, formations et expériences professionnelles. Stack : React 19, TypeScript, Tailwind CSS, Vite.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    emoji: '🚀',
    gradient: 'from-violet-600 to-cyan-500',
    links: [
      { label: '🔗 GitHub', url: 'https://github.com' },
      { label: '🌐 Demo live', url: 'https://example.com' },
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-3">
            Ce que j'ai réalisé
          </p>
          <h2 className="text-4xl font-bold text-white">
            Mes <span className="gradient-text">Projets</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelected} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
