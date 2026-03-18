import { skills } from "../data/portfolio";

const categoryMeta = {
  languages: { label: "Programming Languages", color: "from-purple-500 to-purple-700", barColor: "bg-purple-500" },
  frontend:  { label: "Frontend Development",  color: "from-primary-500 to-primary-700", barColor: "bg-primary-500" },
  backend:   { label: "Backend Development",   color: "from-green-500 to-green-700",   barColor: "bg-green-500" },
  tools:     { label: "Tools & Platforms",     color: "from-orange-500 to-orange-700", barColor: "bg-orange-500" },
};

function SkillCard({ skill, barColor }) {
  return (
    <div className="group flex items-center gap-4 p-3 rounded-xl hover:bg-dark-700/40 transition-colors">
      <div className="text-xl flex-shrink-0 w-8 text-center">{skill.icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-sm font-medium text-dark-200 group-hover:text-white transition-colors">{skill.name}</span>
          <span className="text-xs text-dark-500 font-mono">{skill.level}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-dark-700 overflow-hidden">
          <div
            className={`h-full rounded-full ${barColor} transition-all duration-700`}
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle bg */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-dark-900/30 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        {/* Skill grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {Object.entries(categoryMeta).map(([key, meta]) => (
            <div key={key} className="card card-hover p-6">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${meta.color}`} />
                <h3 className="font-semibold text-white text-sm">{meta.label}</h3>
              </div>
              {/* Skills */}
              <div className="space-y-1">
                {skills[key].map((skill) => (
                  <SkillCard key={skill.name} skill={skill} barColor={meta.barColor} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech icons banner */}
        <div className="card p-6">
          <h3 className="text-sm font-semibold text-dark-400 text-center mb-5 uppercase tracking-widest">Full Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "C",           icon: "💻" },
              { name: "C++",         icon: "💻" },
              { name: "Python",      icon: "🐍" },
              { name: "Java",        icon: "☕" },
              { name: "HTML5",       icon: "🌐" },
              { name: "CSS3",        icon: "🎨" },
              { name: "Tailwind",    icon: "💨" },
              { name: "JavaScript",  icon: "⚡" },
              { name: "React.js",    icon: "⚛️"  },
              { name: "Node.js",     icon: "🟢" },
              { name: "PHP",         icon: "🐘" },
              { name: "MySQL",       icon: "🗄️"  },
              { name: "Git",         icon: "🔧" },
              { name: "GitHub",      icon: "🐙" },
              { name: "VS Code",     icon: "📝" },
              { name: "XAMPP",       icon: "🖥️"  },
            ].map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-dark-800/60 border border-dark-700/60 hover:border-primary-500/40 hover:bg-dark-700/60 transition-all duration-200 group cursor-default"
              >
                <span className="text-sm">{t.icon}</span>
                <span className="text-xs font-medium text-dark-400 group-hover:text-dark-200 transition-colors">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
