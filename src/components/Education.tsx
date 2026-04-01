import Timeline from './Timeline';
import type { TimelineItem } from './Timeline';

// ─── Ajouter une formation ici pour en rajouter une ───
const educationItems: TimelineItem[] = [
  {
    year: '2023 – 2026',
    title: 'Bachelor Informatique',
    subtitle: 'Université / École — Ville',
    description:
      'Formation en développement logiciel, algorithmique, bases de données et architecture web. Projets en équipe, méthodes agiles.',
    tags: ['Algorithmique', 'Web', 'BDD', 'Agile'],
  },
  {
    year: '2021 – 2023',
    title: 'BTS SIO option SLAM',
    subtitle: 'Lycée — Ville',
    description:
      `Spécialité Solutions Logicielles et Applications Métiers. Développement d'applications, gestion de projet, stage en entreprise.`,
    tags: ['Java', 'PHP', 'SQL', 'POO'],
  },
  {
    year: '2021',
    title: 'Baccalauréat Général',
    subtitle: 'Lycée — Ville',
    description: 'Spécialités Mathématiques et Numérique & Sciences Informatiques. Mention Bien.',
    tags: ['Maths', 'NSI'],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-3">
            Mon parcours académique
          </p>
          <h2 className="text-4xl font-bold text-white">
            Mes <span className="gradient-text">Formations</span>
          </h2>
        </div>

        <Timeline items={educationItems} />
      </div>
    </section>
  );
}
