import Timeline from './Timeline';
import type { TimelineItem } from './Timeline';

// ─── Ajouter une formation ici pour en rajouter une ───
const educationItems: TimelineItem[] = [
  {
    year: "2023 – 2026",
    title: "BUT Informatique",
    subtitle: "IUT de Lille — Villeneuve d'Ascq",
    description:
      "Formation en développement logiciel, algorithmique, bases de données et architecture web. Projets en équipe, méthodes agiles.",
    tags: ["Algorithmique", "Web", "BDD", "Agile"],
  },
  {
    year: "2023 – 2025",
    title: "DUT Informatique",
    subtitle: "IUT de Lille — Villeneuve d'Ascq",
    description:
      "Formation en développement logiciel, algorithmique, bases de données et architecture web. Projets en équipe, méthodes agiles.",
    tags: ["Algorithmique", "Web", "BDD", "Agile"],
  },
  {
    year: "2023",
    title: "Baccalauréat STI2D Option SIN",
    subtitle: "Lycée de l'Europe — Dunkerque",
    description:
      "Baccalauréat technologique orienté systèmes d'information et numérique : développement, réseaux, électronique embarquée et gestion de projet. Mention Bien.",
    tags: ["STI2D", "SIN", "Réseaux", "Électronique", "Projet"],
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
