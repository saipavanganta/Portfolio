import { training, achievements } from "../data/portfolio";
import { BookOpen, Trophy, Calendar, Tag } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">Growth</p>
          <h2 className="section-title">Training & Achievements</h2>
          <p className="section-subtitle">Professional development and notable accomplishments</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Training */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-xl bg-primary-500/15 border border-primary-500/20 flex items-center justify-center">
                <BookOpen size={15} className="text-primary-400" />
              </div>
              <h3 className="font-bold text-white">Training Programs</h3>
            </div>

            <div className="space-y-5">
              {training.map((t) => (
                <div key={t.id} className="card card-hover p-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-700 rounded-l-2xl" />
                  <div className="flex items-start gap-4 pl-2">
                    <div className="text-3xl flex-shrink-0">{t.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-white text-sm group-hover:text-primary-300 transition-colors">
                          {t.title}
                        </h4>
                        <span className="tag bg-primary-500/10 text-primary-400 border border-primary-500/20 text-xs flex-shrink-0">
                          {t.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mb-3 text-xs text-dark-500">
                        <span className="text-dark-400 font-medium">{t.organization}</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={10} /> {t.period}
                        </span>
                      </div>
                      <p className="text-dark-400 text-sm leading-relaxed mb-4">{t.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {t.skills.map((s) => (
                          <span key={s} className="tag bg-dark-700/80 text-dark-400 border border-dark-600/60 text-xs">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-xl bg-yellow-500/15 border border-yellow-500/20 flex items-center justify-center">
                <Trophy size={15} className="text-yellow-400" />
              </div>
              <h3 className="font-bold text-white">Achievements</h3>
            </div>

            <div className="space-y-5">
              {achievements.map((a) => (
                <div key={a.id} className="card card-hover p-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-orange-500 rounded-l-2xl" />
                  <div className="flex items-start gap-4 pl-2">
                    <div className="text-3xl flex-shrink-0">{a.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-white text-sm group-hover:text-yellow-300 transition-colors">
                          {a.title}
                        </h4>
                        <span className="tag bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 text-xs flex-shrink-0">
                          {a.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mb-3 text-xs text-dark-500">
                        <span className="text-dark-400 font-medium">{a.organization}</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={10} /> {a.date}
                        </span>
                      </div>
                      <p className="text-dark-400 text-sm leading-relaxed">{a.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Placeholder future */}
              <div className="card p-6 border-dashed opacity-50">
                <div className="flex items-center justify-center gap-3 text-dark-500">
                  <Trophy size={16} />
                  <span className="text-sm italic">More achievements coming soon...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
