import { ExternalLink, Award, Calendar, Tag } from "lucide-react";
import { certificates } from "../data/portfolio";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-dark-900/30 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">Professional certifications and verified credentials</p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="card card-hover p-6 flex flex-col group">
              {/* Top row */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform`}>
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="tag bg-dark-700/80 text-dark-400 border border-dark-600/60 text-xs mb-2">
                    <Tag size={10} /> {cert.category}
                  </span>
                  <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-primary-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-3 text-xs text-dark-500">
                <div className="flex items-center gap-1.5">
                  <Award size={12} className="text-primary-500" />
                  <span className="font-medium text-dark-400">{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {cert.date}
                </div>
              </div>

              <p className="text-dark-500 text-xs leading-relaxed flex-1 mb-5">
                {cert.description}
              </p>

              {/* Verify button */}
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary-400 hover:text-primary-300 transition-colors group/link"
              >
                <div className="w-6 h-6 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover/link:bg-primary-500/20 transition-colors">
                  <ExternalLink size={11} />
                </div>
                Verify Certificate
              </a>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-12 card p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Total Certificates", value: "4", icon: "🏅" },
              { label: "Platforms",          value: "4", icon: "🌐" },
              { label: "Categories",         value: "4", icon: "📂" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-dark-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
