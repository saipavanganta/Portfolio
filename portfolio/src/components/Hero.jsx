import { Github, Linkedin, Mail, Phone, ArrowDown, Download, Sparkles } from "lucide-react";
import { personal } from "../data/portfolio";

const roles = ["Full Stack Developer", "React Developer", "Problem Solver", "CS Engineering Student"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-3xl" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(to right, rgba(14,165,233,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container w-full py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
              <Sparkles size={14} className="animate-pulse" />
              Open to Opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4">
              Hi, I'm{" "}
              <span className="gradient-text block mt-1">
                {personal.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Animated roles */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <p className="text-xl sm:text-2xl text-dark-300 font-medium">
                {personal.title}
              </p>
            </div>

            <p className="text-dark-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              {personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-10">
              <a href={`mailto:${personal.email}`} className="btn-primary">
                <Mail size={16} /> Get In Touch
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn-outline">
                <Github size={16} /> View GitHub
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-dark-500 text-xs uppercase tracking-widest">Connect</span>
              <div className="h-px w-8 bg-dark-700" />
              <div className="flex items-center gap-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-700 hover:border-primary-500/50 hover:bg-primary-500/10 flex items-center justify-center text-dark-400 hover:text-primary-400 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-700 hover:border-primary-500/50 hover:bg-primary-500/10 flex items-center justify-center text-dark-400 hover:text-primary-400 transition-all duration-200"
                >
                  <Github size={16} />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-700 hover:border-primary-500/50 hover:bg-primary-500/10 flex items-center justify-center text-dark-400 hover:text-primary-400 transition-all duration-200"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 animate-fade-in animation-delay-200">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20 blur-xl animate-pulse-slow" />
              {/* Ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-500 via-primary-400 to-accent-400 opacity-60" />
              {/* Photo */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-dark-950">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 25%" }}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-dark-800 border border-dark-700 rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex justify-center animate-bounce">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="text-dark-500 hover:text-primary-400 transition-colors"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
