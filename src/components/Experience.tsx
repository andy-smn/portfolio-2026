import Timeline from './Timeline';
import type { TimelineItem } from './Timeline';

// ─── Ajouter une expérience ici pour en rajouter une ───
const experienceItems: TimelineItem[] = [
  {
    year: 'Jan 2025 – Juin 2025',
    title: 'Développeur Web — Stage',
    subtitle: 'Entreprise XYZ — Ville',
    description:
      'Développement de nouvelles fonctionnalités sur une application React / Node.js. Participation aux code reviews, sprints agiles et déploiements CI/CD.',
    tags: ['React', 'Node.js', 'Docker', 'GitLab CI'],
  },
  {
    year: 'Été 2024',
    title: 'Développeur Front-end — CDD',
    subtitle: 'Agence ABC — Ville',
    description:
      'Intégration de maquettes Figma en composants React, optimisation des performances et accessibilité WCAG.',
    tags: ['React', 'Figma', 'Tailwind', 'A11y'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-3">
            Mon parcours professionnel
          </p>
          <h2 className="text-4xl font-bold text-white">
            Mes <span className="gradient-text">Expériences</span>
          </h2>
        </div>

        <Timeline items={experienceItems} />
      </div>
    </section>
  );
}
