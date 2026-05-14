import Timeline from './Timeline';
import type { TimelineItem } from './Timeline';

// ─── Ajouter une expérience ici pour en rajouter une ───
const experienceItems: TimelineItem[] = [
  {
    year: 'Mai 2026 – Août 2026',
    title: 'Développeur Full Stack — Stage',
    subtitle: 'INETUM — Lille',
    description:
      'Développement de nouvelles fonctionnalités sur une application Php/Symfony. Participation aux code reviews et sprints agiles.',
    tags: ['Php', 'Symfony', 'JavaScript', 'Docker', 'Agile'],
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
