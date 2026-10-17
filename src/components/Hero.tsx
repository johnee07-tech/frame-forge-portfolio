import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af7a]/8 blur-[140px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#3a5a6b]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left — text */}
          <div className="lg:col-span-8">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 border border-[#232327] bg-[#111113] px-4 py-2 text-xs font-medium tracking-wider text-[#a1a1a8] uppercase">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d4af7a]" />
                Available for Projects
              </span>
            </div>

            <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>

  <h1 className="font-display text-5xl font-extrabold leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
    FrameForge
  </h1>

  <h2 className="mt-1 font-display text-lg font-bold uppercase leading-none tracking-[0.15em] text-[#d4af7a] sm:text-xl lg:text-2xl">
    Innovations
  </h2>
</div>
            
            <p className="mt-8 max-w-xl text-base font-medium leading-relaxed text-[#c4c4cc] sm:text-lg">
               
  Crafting digital experiences with precision and purpose.
</p>
            <p
              className="mt-6 max-w-xl font-display text-2xl font-medium leading-snug text-[#a1a1a8] animate-fade-in-up sm:text- pt-3 xl:text-1x1"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              We bring ideas to life through design and technology.
            </p>

            <p
              className="mt-6 max-w-lg text-base leading-relaxed text-[#6b6b73] animate-fade-in-up "
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              <h2>
              From distinctive logos and graphics to thoughtful interfaces and websites, we help businesses present their ideas with clarity and confidence.
              </h2>
            </p>

            <div
              className="mt-10 flex flex-col gap-4 animate-fade-in-up sm:flex-row sm:items-center pt-0"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 bg-[#d4af7a] px-7 py-4 text-sm font-semibold text-[#0a0a0b] transition-all duration-300 hover:bg-[#e0bd88]"
              >
                View Selected Work
                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-2 border border-[#33333a] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#d4af7a] hover:text-[#d4af7a]"
              >
                Start a Project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* Right — stat block */}
          <div
            className="hidden flex-col justify-end lg:col-span-4 lg:flex animate-fade-in-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            <div className="border-l border-[#232327] pl-6">
              <div>
  <p className="font-display text-lg font-bold tracking-wide text-white sm:text-xl">
    DESIGN MEETS <span className="text-[#d4af7a]">TECHNOLOGY</span>
  </p>

  <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#a1a1a8]">
    Creative thinking, thoughtful design, and digital experiences built with purpose.
  </p>
</div>
              <div className="mt-8 space-y-3">
                {['Graphic & Brand Design', 'Web Design', 'UI/UX Design', 'Front-end Development'].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-[#a1a1a8]"
                    >
                      <span className="h-px w-6 bg-[#d4af7a]" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.2em] text-[#6b6b73] uppercase">
            Scroll
          </span>
          <div className="h-12 w-px overflow-hidden bg-[#232327]">
            <div
              className="h-1/2 w-full bg-[#d4af7a]"
              style={{
                animation: 'fadeInUp 1.2s ease-in-out infinite alternate',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
