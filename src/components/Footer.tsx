import { ArrowUp } from 'lucide-react';
import { navLinks, socialLinks } from '@/data/content';
import logo from "./FrameForge logo 3d.jpg"
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#232327] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a
              href="#home"
            >
             <img src={logo} alt="FrameForge Logo" className="!h-60 !w-60 object-contain"/>
            </a>
            <p className="mt-4 max-w-xs leading-relaxed text-[#6b6b73]">
              <h2>
              Graphic designing & web developement, intentional visual systems for ambitious brands and start-up businesses.
              </h2>
            </p>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-3">
            <p className="mb-4 text-xs tracking-[0.15em] text-[#6b6b73] uppercase">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-[#a1a1a8] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs tracking-[0.15em] text-[#6b6b73] uppercase">
              Connect
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-[#a1a1a8] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#232327] pt-8 sm:flex-row">
          <p className="text-xs text-[#6b6b73]">
            &copy; {year} FrameForge. All rights reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs text-[#6b6b73] transition-colors hover:text-[#d4af7a]"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
