import { Github, Linkedin, Mail, Heart, Code2, ArrowUp } from "lucide-react";
import { personal, navItems } from "../data/portfolio";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-dark-800/60 bg-dark-950/80 backdrop-blur-sm">
      <div className="section-container py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-white">
                Sai<span className="gradient-text">Pavan</span>
              </span>
            </div>
            <p className="text-dark-500 text-sm leading-relaxed mb-4">
              Full Stack Developer & B.Tech CSE Student at LPU. Building clean, functional web applications.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Github,   href: personal.github   },
                { icon: Linkedin, href: personal.linkedin },
                { icon: Mail,     href: `mailto:${personal.email}` },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-dark-800 border border-dark-700 hover:border-primary-500/40 hover:bg-primary-500/10 flex items-center justify-center text-dark-500 hover:text-primary-400 transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-dark-400 uppercase tracking-widest mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-left text-dark-500 hover:text-primary-400 text-sm py-1 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-dark-400 uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-dark-500">
              <div><a href={`mailto:${personal.email}`} className="hover:text-primary-400 transition-colors">{personal.email}</a></div>
              <div><a href={`tel:${personal.phone}`} className="hover:text-primary-400 transition-colors">{personal.phone}</a></div>
              <div className="text-dark-600">LPU, Punjab, India</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-600 text-xs flex items-center gap-1.5">
            © 2025 Ganta Sai Pavan · Made with <Heart size={11} className="text-red-500 fill-red-500" /> and React
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-dark-500 hover:text-primary-400 text-xs transition-colors group"
          >
            Back to top
            <div className="w-6 h-6 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center group-hover:border-primary-500/40 transition-colors">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
