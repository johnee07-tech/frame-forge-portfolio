import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal ${isVisible ? 'is-visible' : ''}`}
        >
          {/* Section label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#d4af7a]" />
            <span className="text-xs font-medium tracking-[0.2em] text-[#d4af7a] uppercase">
              About
            </span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left — heading */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Design with intent. Build with precision.
              </h2>
            </div>

            {/* Right — body */}
            <div className="lg:col-span-11">
              <h2>
              <p className="text-lg leading-relaxed text-[#a1a1a8]">
                <h2>
                FrameForge Innovations is a growing creative studio focused on graphic design, digital experiences, and web development. We bring ideas to life through thoughtful design, combining creativity and technology to help businesses communicate clearly and present themselves with confidence.
                </h2>
              </p>
              <p className="opacity-100 mt-4 leading-relaxed text-[#a1a1a8]">
                <h2>
                We believe good design goes beyond appearance. Every colour, layout, image, and interaction should serve a purpose. Our approach combines creative thinking with attention to detail, helping us create visual identities and digital experiences that are distinctive, practical, and memorable.
                </h2>
              </p>
              </h2>
              <p className="opacity-100 mt-4 leading-relaxed text-[#a1a1a8]">
                <h2>
                From logo concepts and promotional graphics to website design and user interfaces, our goal is to turn ideas into meaningful visual experiences. As we continue to grow and develop our craft, we're committed to delivering thoughtful solutions, learning from every project, and helping ambitious businesses move forward.
                </h2>
              </p>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
