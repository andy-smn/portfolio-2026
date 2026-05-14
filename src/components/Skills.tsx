import { Globe } from "lucide-react";

interface SkillItemProps {
  name: string;
  technologies: string[];
  color?: string;
}

function SkillItem({
  name,
  technologies,
  color = "from-primary to-secondary",
}: SkillItemProps) {
  return (
    <div>
      <h4 className="text-white text-sm font-medium mb-3">{name}</h4>
      <div className="overflow-x-auto pb-1">
        <div className="flex flex-nowrap gap-2 min-w-max">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r ${color} rounded-lg border border-opacity-20 border-white hover:scale-105 transition-transform duration-200`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: { name: string; technologies: string[] }[];
  color?: string;
}

// ─── Ajouter une catégorie ici pour en rajouter une ───
const skillCategories: SkillCategory[] = [
  {
    title: "Développement Web",
    icon: <Globe className="w-8 h-8 text-primary" />,
    description:
      "Technologies Front-end et Back-end pour créer des applications web modernes.",
    color: "from-primary to-secondary",
    skills: [
      {
        name: "Frontend",
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Vite",
          "Next.js",
          "Stimulus",
        ],
      },
      {
        name: "Backend",
        technologies: [
          "Node.js",
          "Express",
          "Symfony",
          "Twig",
          "Java",
          "SpringBoot",
          "REST APIs",
          "PostgreSQL",
        ],
      },
      {
        name: "Tools & Methods",
        technologies: [
          "Git",
          "GitHub",
          "VS Code",
          "JetBrains IDE",
          "DevTools",
          "Agile",
        ],
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-3">
            Ce que je sais faire
          </p>
          <h2 className="text-4xl font-bold text-white">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 gap-8 justify-items-center">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="gradient-border bg-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 w-fit max-w-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div>{cat.icon}</div>
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>
              <p className="text-muted text-sm mb-6 leading-relaxed">
                {cat.description}
              </p>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    technologies={skill.technologies}
                    color={cat.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
