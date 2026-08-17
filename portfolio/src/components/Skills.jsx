/* eslint-disable no-unused-vars */
import { Braces, Database, Layers3, Wrench } from "lucide-react";
import { skills } from "../data/portfolio";

const groups = [
  { key: "languages", label: "Languages", icon: Braces, note: "Core programming" },
  { key: "frontend", label: "Frontend", icon: Layers3, note: "Interfaces and experiences" },
  { key: "backend", label: "Backend", icon: Database, note: "APIs and data" },
  { key: "tools", label: "Tools", icon: Wrench, note: "Daily workflow" },
];

export default function Skills() {
  return <section id="skills" className="py-24 relative"><div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,.07),transparent_62%)]" /><div className="section-container"><div className="max-w-2xl mb-14"><p className="text-primary-400 font-mono text-xs tracking-[.2em] uppercase mb-3">Toolbox</p><h2 className="section-title">Skills I use to ship.</h2><p className="text-dark-400 text-base">A focused stack for building responsive frontends and practical full-stack applications.</p></div><div className="grid md:grid-cols-2 gap-5">{groups.map(({ key, label, icon: Icon, note }) => <article key={key} className="card card-hover p-6"><div className="flex items-center gap-3 mb-5"><span className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-300 grid place-items-center"><Icon size={18} /></span><div><h3 className="font-semibold text-white">{label}</h3><p className="text-xs text-dark-500">{note}</p></div></div><div className="flex flex-wrap gap-2">{skills[key].map((skill) => <span key={skill} className="tag bg-dark-800 text-dark-300 border border-dark-700 hover:border-primary-500/40 hover:text-primary-200 transition-colors">{skill}</span>)}</div></article>)}</div><div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-dark-400"><span className="font-medium text-dark-300">Strengths:</span>{skills.soft.map((skill) => <span key={skill}>• {skill}</span>)}</div></div></section>;
}
