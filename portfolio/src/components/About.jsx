import { MapPin, Mail, Phone, GraduationCap, Code2, Zap, Target } from "lucide-react";
import { personal } from "../data/portfolio";

const stats = [
  { label: "Projects Built",  value: "2+",   icon: Code2         },
  { label: "Certificates",    value: "4",    icon: GraduationCap },
  { label: "Hackathon",       value: "1",    icon: Target        },
  { label: "CGPA",            value: "6.92", icon: Zap           },
];

const highlights = [
  { icon: "⚡", title: "Fast Learner",        desc: "Quickly adapts to new technologies and frameworks." },
  { icon: "🎯", title: "Goal Oriented",       desc: "Focused on building real-world solutions that matter." },
  { icon: "🤝", title: "Team Player",         desc: "Collaborative mindset with strong communication skills." },
  { icon: "🧠", title: "Problem Solver",      desc: "Strong foundation in DSA and algorithmic thinking." },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A passionate developer with a drive for continuous learning</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="card card-hover p-6 text-center">
              <s.icon size={20} className="text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-xs text-dark-400 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Bio & Contact */}
          <div className="space-y-6">
            <div className="card p-7">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-primary-400 to-accent-400 inline-block" />
                My Story
              </h3>
              <div className="space-y-3 text-dark-400 text-sm leading-relaxed">
                <p>
                  I'm <strong className="text-white">Ganta Sai Pavan</strong>, a B.Tech CSE student at
                  Lovely Professional University, Punjab. My journey into programming started with a
                  curiosity about how websites work — and that curiosity quickly grew into a passion
                  for full-stack development.
                </p>
                <p>
                  I specialize in building end-to-end web applications, from crafting pixel-perfect
                  user interfaces to designing robust backend systems. I've worked with technologies
                  like React, Node.js, PHP, and MySQL to bring ideas to life.
                </p>
                <p>
                  When I'm not coding, I participate in hackathons, explore new tools, and strengthen
                  my foundation in Data Structures and Algorithms.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card p-7">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-primary-400 to-accent-400 inline-block" />
                Contact Info
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Mail,     label: "Email",    value: personal.email,    href: `mailto:${personal.email}` },
                  { icon: Phone,    label: "Phone",    value: personal.phone,    href: `tel:${personal.phone}` },
                  { icon: MapPin,   label: "Location", value: "LPU, Punjab, India", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="w-9 h-9 rounded-xl bg-dark-700/60 flex items-center justify-center flex-shrink-0">
                      <item.icon size={15} className="text-primary-400" />
                    </div>
                    <div>
                      <div className="text-xs text-dark-500 mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-dark-300 hover:text-primary-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-dark-300">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
              <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-primary-400 to-accent-400 inline-block" />
              What I Bring
            </h3>
            {highlights.map((h) => (
              <div key={h.title} className="card card-hover p-5 flex items-start gap-4">
                <div className="text-2xl flex-shrink-0">{h.icon}</div>
                <div>
                  <h4 className="font-semibold text-white text-sm mb-1">{h.title}</h4>
                  <p className="text-dark-400 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}

            {/* Soft skills */}
            <div className="card p-5 mt-2">
              <h4 className="text-sm font-semibold text-white mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Team Collaboration", "Adaptability", "Communication", "Critical Thinking"].map((s) => (
                  <span
                    key={s}
                    className="tag bg-primary-500/10 text-primary-300 border border-primary-500/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
