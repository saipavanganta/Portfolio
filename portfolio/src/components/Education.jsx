import { education } from "../data/portfolio";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-dark-900/30 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey and qualifications</p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-700 to-dark-700 hidden sm:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={edu.id} className="relative flex gap-6 group">
                {/* Dot */}
                <div className="flex-shrink-0 relative z-10 hidden sm:flex">
                  <div
                    className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-xl shadow-lg transition-all duration-300 group-hover:scale-110 ${
                      edu.type === "current"
                        ? "border-primary-500 bg-primary-500/20 shadow-primary-900/40"
                        : "border-dark-600 bg-dark-800 group-hover:border-primary-500/50"
                    }`}
                  >
                    {edu.icon}
                  </div>
                  {edu.type === "current" && (
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent-400 border-2 border-dark-950 animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`flex-1 card card-hover p-6 ${
                    edu.type === "current" ? "border-primary-500/30 bg-primary-900/10" : ""
                  }`}
                >
                  {edu.type === "current" && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-400/10 border border-accent-400/20 text-accent-400 text-xs font-semibold mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                      Currently Enrolled
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-white text-base group-hover:text-primary-300 transition-colors mb-1">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-1.5 text-dark-400 text-sm">
                        <GraduationCap size={14} className="text-primary-500 flex-shrink-0" />
                        {edu.institution}
                      </div>
                    </div>
                    <div
                      className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 ${
                        edu.type === "current"
                          ? "bg-primary-500/15 text-primary-400 border border-primary-500/20"
                          : "bg-accent-500/10 text-accent-400 border border-accent-500/20"
                      }`}
                    >
                      <Star size={11} />
                      {edu.grade}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-3 text-xs text-dark-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={11} /> {edu.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={11} /> {edu.location}
                    </div>
                  </div>

                  <p className="text-dark-400 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
