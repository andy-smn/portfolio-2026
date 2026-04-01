import { useEffect } from 'react';
import type { Project } from '../types/project';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="gradient-border bg-card rounded-2xl max-w-lg w-full p-8 relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div
          className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-3xl mb-5`}
        >
          {project.emoji}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-dark text-secondary text-xs font-medium rounded-full border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted leading-relaxed mb-6">{project.longDescription}</p>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
