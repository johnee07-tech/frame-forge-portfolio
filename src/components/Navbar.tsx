import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/content';
import logo from "./FrameForge logo 3d.jpg"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    setActive(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0b]/85 backdrop-blur-xl border-b border-[#232327]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleClick('#home')}
            className="font-display text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-70"
          >
             
              <img src={logo} alt="FrameForge Logo" className="!h-14 !w-14 rounded-full object-cover"/>
            
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`link-underline text-sm font-medium transition-colors duration-300 ${
                    active === link.href
                      ? 'text-white'
                      : 'text-[#a1a1a8] hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden bg-[#d4af7a] px-5 py-2.5 text-sm font-semibold text-[#0a0a0b] transition-all duration-300 hover:bg-[#e0bd88] md:inline-block"
          >
            Let's Talk
          </a>

          {/* Mobile toggle */}
          <button
            className="text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-[#232327] transition-all duration-400 md:hidden ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  className={`block px-2 py-3 text-sm font-medium transition-colors ${
                    active === link.href
                      ? 'text-[#d4af7a]'
                      : 'text-[#a1a1a8]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => handleClick('#contact')}
                className="mt-2 block bg-[#d4af7a] px-2 py-3 text-center text-sm font-semibold text-[#0a0a0b]"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
