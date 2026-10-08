import { useScrollReveal } from '@/hooks/useScrollReveal';
import { stats } from '@/data/content';

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
                We are a multidisciplinary designing and development company based in
                Abuja, Nigeria. For the past 4 years, We have been helping founders and
                creative teams translate ambitious ideas into cohesive visual
                systems and polished digital products.
                </h2>
              </p>
              <p className="opacity-100 mt-4 leading-relaxed text-[#a1a1a8]">
                <h2>
                Our approach is simple: strip away the unnecessary, amplify what
                matters. We believe that a great design lives in the details — the
                weight of a typeface, the rhythm of a grid, the feel of a
                transition. Every project we take on starts with listening and
                ends with something we are proud to put our name on.
                </h2>
              </p>
              </h2>
              <p className="opacity-100 mt-4 leading-relaxed text-[#a1a1a8]">
                <h2>
                This approach has helped us in creating business brands that stand out,
                professional, responsive and quality websites for both private and public businesses and so much more.
                We take your ideas and transform them into pixels that speak for you. 
                </h2>
              </p>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
