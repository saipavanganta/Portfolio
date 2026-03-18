import { Github, ExternalLink, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A selection of real-world applications I've developed</p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card card-hover overflow-hidden group"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                {/* Visual Panel */}
                <div className={`lg:w-72 xl:w-80 flex-shrink-0 bg-gradient-to-br ${project.color} p-8 flex flex-col items-center justify-center relative overflow-hidden`}>
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <span className="relative text-white/90 text-sm font-semibold text-center">
                    {project.subtitle}
                  </span>
                  <div className="relative mt-3 flex items-center gap-1.5 text-white/60 text-xs">
                    <Calendar size={12} />
                    {project.date}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-3">Key Features</h4>
                      <ul className="grid sm:grid-cols-2 gap-1.5">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm text-dark-400">
                            <CheckCircle size={14} className="text-accent-400 mt-0.5 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="tag bg-dark-700/80 text-dark-300 border border-dark-600/60 hover:border-primary-500/40 hover:text-primary-300 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline text-sm py-2 px-4"
                    >
                      <Github size={15} /> View Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary text-sm py-2 px-4"
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/saipavanganta"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors group"
          >
            View all projects on GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
