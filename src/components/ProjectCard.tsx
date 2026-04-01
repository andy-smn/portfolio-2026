import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={() => onClick(project)}
      className="gradient-border bg-card rounded-2xl p-6 text-left w-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
    >
      {/* Emoji / icon */}
      <div
        className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {project.emoji}
      </div>

      <h3 className="text-white font-bold text-lg mb-2 group-hover:gradient-text transition-all">
        {project.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-dark text-secondary text-xs font-medium rounded-full border border-border"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-primary text-xs mt-4 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
        Voir plus <span>→</span>
      </p>
    </button>
  );
}
