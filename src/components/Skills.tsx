interface SkillBarProps {
  name: string;
  percent: number;
  color?: string;
}

function SkillBar({ name, percent, color = 'from-primary to-secondary' }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-white text-sm font-medium">{name}</span>
        <span className="text-muted text-sm">{percent}%</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; percent: number }[];
  color?: string;
}

// ─── Ajouter une catégorie ici pour en rajouter une ───
const skillCategories: SkillCategory[] = [
  {
    title: 'Développement Web',
    icon: '🌐',
    description: 'Technologies Front-end et Back-end pour créer des applications web modernes.',
    color: 'from-primary to-secondary',
    skills: [
      { name: 'React / TypeScript', percent: 85 },
      { name: 'Node.js / Express', percent: 75 },
      { name: 'HTML / CSS', percent: 90 },
      { name: 'SQL / PostgreSQL', percent: 70 },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="gradient-border bg-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>
              <p className="text-muted text-sm mb-6 leading-relaxed">{cat.description}</p>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} percent={skill.percent} color={cat.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
