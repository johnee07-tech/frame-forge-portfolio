import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { socialLinks } from '@/data/content';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  const inputBase =
    'w-full bg-transparent border-b border-[#232327] py-3 text-sm text-white placeholder:text-[#6b6b73] focus:border-[#d4af7a] focus:outline-none transition-colors duration-300';

  return (
    <section id="contact" className="relative border-t border-[#232327] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          {/* Header */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#d4af7a]" />
            <span className="text-xs font-medium tracking-[0.2em] text-[#d4af7a] uppercase">
              Contact
            </span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left — intro + details */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let's create something remarkable
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-[#a1a1a8]">
                Have a project, a question, or just want to say hello? I'm
                always open to discussing new ideas and opportunities.
              </p>

              {/* Contact info */}
              <div className="mt-10 space-y-5">
                <a
                  href="mailto:johneeb207@gmail.com"
                  className="group flex items-center gap-4 text-[#a1a1a8] transition-colors hover:text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center border border-[#232327] text-[#d4af7a] transition-colors group-hover:border-[#d4af7a]">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm">johneeb207@gmail.com</span>
                </a>

                <div className="flex items-center gap-4 text-[#a1a1a8]">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#232327] text-[#d4af7a]">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm">Abuja, Nigeria — working worldwide</span>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">
                <p className="mb-4 text-xs tracking-[0.15em] text-[#6b6b73] uppercase">
                  Follow
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-sm text-[#a1a1a8] transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="border border-[#232327] bg-[#111113] p-8 lg:p-10"
              >
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs tracking-wide text-[#6b6b73] uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className={inputBase}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs tracking-wide text-[#6b6b73] uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label className="mb-2 block text-xs tracking-wide text-[#6b6b73] uppercase">
                    Describe your Project
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className={`${inputBase} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sent}
                  className="mt-8 inline-flex items-center gap-2 bg-[#d4af7a] px-7 py-4 text-sm font-semibold text-[#0a0a0b] transition-all duration-300 hover:bg-[#e0bd88] disabled:opacity-70"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 size={16} />
                      Message Sent
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
