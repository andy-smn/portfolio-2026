import { useState } from 'react';

const softSkills = [
  { icon: '🤝', label: 'Travail en équipe' },
  { icon: '💡', label: 'Créativité' },
  { icon: '🔍', label: 'Curiosité' },
  { icon: '🎯', label: 'Rigueur' },
  { icon: '🗣️', label: 'Communication' },
  { icon: '⚡', label: 'Adaptabilité' },
];

const passions = [
  { icon: '🎮', label: 'Gaming' },
  { icon: '🎵', label: 'Musique' },
  { icon: '📚', label: 'Lecture' },
  { icon: '🏔️', label: 'Randonnée' },
  { icon: '✈️', label: 'Voyages' },
  { icon: '🍕', label: 'Cuisine' },
];

type Tab = 'softskills' | 'passions';

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>('softskills');

  const items = activeTab === 'softskills' ? softSkills : passions;

  return (
    <section id="about" className="py-24 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div>
          <p className="text-secondary font-medium tracking-widest text-sm uppercase mb-3">
            Qui suis-je ?
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <div className="space-y-4 text-muted text-lg leading-relaxed">
            <p>
              Je suis un développeur passionné avec une forte appétence pour les technologies web modernes.
              J'aime construire des applications robustes et des interfaces utilisateur intuitives.
            </p>
            <p>
              Toujours en quête d'apprentissage, je cherche constamment à améliorer mes compétences et
              à découvrir de nouvelles technologies qui me permettront de créer de meilleures expériences.
            </p>
            <p>
              En dehors du code, j'apprécie de nombreuses activités qui nourrissent ma créativité
              et m'aident à garder un bon équilibre.
            </p>
          </div>
        </div>

        {/* Right — tab switcher */}
        <div>
          {/* Tabs */}
          <div className="flex bg-dark rounded-xl p-1 mb-6 border border-border w-fit">
            {(['softskills', 'passions'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'text-muted hover:text-white'
                }`}
              >
                {tab === 'softskills' ? '🧠 Soft Skills' : '❤️ Passions'}
              </button>
            ))}
          </div>

          {/* Grid of items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 animate-fade-in" key={activeTab}>
            {items.map((item) => (
              <div
                key={item.label}
                className="gradient-border bg-card rounded-xl p-4 flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform duration-200 cursor-default"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white text-sm font-medium text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
