import { useState } from "react";
import { Rocket, GitBranch, Globe, Calendar, Gamepad2 } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import type { Project } from "../types/project";

// ─── Ajouter un projet ici pour en rajouter un ───
const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description:
      "Mon portfolio développé avec React et Tailwind CSS pour présenter mes projets et compétences.",
    longDescription:
      "Ce portfolio a été conçu pour présenter mon parcours de développeur. Il est entièrement responsive, animé et pensé pour offrir une expérience utilisateur agréable. Il inclut des sections dédiées à mes compétences, projets, formations et expériences professionnelles. Stack : React 19, TypeScript, Tailwind CSS, Vite.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    icon: <Rocket className="w-8 h-8 text-white" />,
    gradient: "from-violet-600 to-cyan-500",
    links: [
      {
        label: "GitHub",
        url: "https://github.com",
        icon: <GitBranch className="w-4 h-4" />,
      },
      {
        label: "Demo live",
        url: "https://example.com",
        icon: <Globe className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 2,
    title: "Plateforme de Réservation en Ligne",
    description:
      "Application de réservation type Doctolib permettant la gestion des appointments et des créneaux disponibles.",
    longDescription:
      "Plateforme complète de réservation en ligne inspirée de Doctolib. Les utilisateurs peuvent consulter les créneaux disponibles, effectuer des réservations, et gérer leur calendrier. L'application dispose d'une API REST robuste avec authentification, gestion des utilisateurs (clients et professionnels) et un système de notifications. La base de données PostgreSQL assure la persistance et la cohérence des données. Stack : Java 17, Spring Boot, Spring Security, Hibernate, PostgreSQL, REST API.",
    tags: ["Java", "SpringBoot", "PostgreSQL", "REST API", "Hibernate"],
    icon: <Calendar className="w-8 h-8 text-white" />,
    gradient: "from-emerald-600 to-teal-500",
    links: [
      {
        label: "GitHub",
        url: "https://github.com",
        icon: <GitBranch className="w-4 h-4" />,
      },
    ],
  },
  {
    id: 3,
    title: "Mods Garry's Mod",
    description:
      "Collection de modifications et scripts personnalisés pour Garry's Mod en GLua avec base de données MySQL.",
    longDescription:
      "Plusieurs mods développés pour Garry's Mod utilisant le langage GLua (Lua). Ces modifications incluent des systèmes de gestion de serveur, des gamemodes personnalisés et des outils administrateur. Intégration complète avec MySQL pour la persistance des données joueur et des configurations. Compétences acquises : scripting Lua, architecture modulaire, optimisation réseau, SQL et gestion de bases de données. Stack : GLua, Lua, MySQL, Garry's Mod Source Engine.",
    tags: ["Développement Jeu vidéo", "GLua", "Lua", "MySQL", "Garry's Mod"],
    icon: <Gamepad2 className="w-8 h-8 text-white" />,
    gradient: "from-orange-600 to-red-500",
    links: [
      {
        label: "GitHub",
        url: "https://github.com",
        icon: <GitBranch className="w-4 h-4" />,
      },
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
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelected}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
