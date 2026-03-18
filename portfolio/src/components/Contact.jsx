import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from "lucide-react";
import { personal } from "../data/portfolio";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: "from-primary-500 to-primary-700",
    iconColor: "text-primary-400",
    bg: "bg-primary-500/10 border-primary-500/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    color: "from-green-500 to-green-700",
    iconColor: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "LPU, Punjab, India",
    href: null,
    color: "from-purple-500 to-purple-700",
    iconColor: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "sai-pavan-ganta",
    href: personal.linkedin,
    color: "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "saipavanganta",
    href: personal.github,
    color: "hover:border-white/20 hover:bg-white/5 hover:text-white",
  },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    window.location.href = `mailto:${personal.email}?subject=Message from ${name}&body=${message}%0A%0AFrom: ${email}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm tracking-widest uppercase mb-3">Let's Talk</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open to internships, collaborations, and exciting opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Left - Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle size={16} className="text-primary-400" />
                <h3 className="font-semibold text-white text-sm">Say Hello!</h3>
              </div>
              <p className="text-dark-400 text-sm leading-relaxed">
                I'm currently open to new opportunities — internships, freelance projects, or
                full-time positions. Feel free to reach out for any reason!
              </p>
            </div>

            {/* Contact cards */}
            {contactItems.map((item) => (
              <div
                key={item.label}
                className={`card card-hover p-4 flex items-center gap-4`}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${item.bg}`}>
                  <item.icon size={16} className={item.iconColor} />
                </div>
                <div>
                  <div className="text-xs text-dark-500 mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-dark-200 hover:text-primary-400 transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-dark-200 font-medium">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="card p-5">
              <h4 className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-4">Find Me On</h4>
              <div className="flex flex-col gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl border border-dark-700/60 text-dark-400 transition-all duration-200 ${s.color}`}
                  >
                    <s.icon size={16} />
                    <div>
                      <div className="text-xs font-semibold">{s.label}</div>
                      <div className="text-xs opacity-70">@{s.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="card p-7">
              <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                <Send size={16} className="text-primary-400" />
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-dark-400 mb-2">
                      Your Name <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-dark-700/60 border border-dark-600/60 text-white placeholder-dark-500 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-dark-700 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-dark-400 mb-2">
                      Your Email <span className="text-primary-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-700/60 border border-dark-600/60 text-white placeholder-dark-500 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-dark-700 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl bg-dark-700/60 border border-dark-600/60 text-white placeholder-dark-500 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-dark-700 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-400 mb-2">
                    Message <span className="text-primary-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-700/60 border border-dark-600/60 text-white placeholder-dark-500 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-dark-700 transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
