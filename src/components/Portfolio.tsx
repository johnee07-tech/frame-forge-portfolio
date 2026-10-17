import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { projects } from '@/data/content';

export default function Portfolio() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="work" className="relative border-t border-[#232327] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          {/* Header */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#d4af7a]" />
            <span className="text-xs font-medium tracking-[0.2em] text-[#d4af7a] uppercase">
              Work
            </span>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Selected projects
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-[#6b6b73]">
              A selection of recent work across branding, web, and editorial.
            </p>
          </div>

          {/* Project grid */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-10">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`reveal ${isVisible ? 'is-visible' : ''} group cursor-pointer ${
                  index === 0 || index === 5 ? 'lg:col-span-2' : ''
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
              >
               {/* Image */}
<div className=" aspect-[3/2] overflow-hidden bg-[#111113]">
  <div className="h-full w-full overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      className="h-full w-full object-cover opacity-80 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
    />
  </div>

  {/* Year badge */}
  <div className="absolute top-4 right-4 bg-[#0a0a0b]/80 px-3 py-1 font-display text-xs font-medium text-white backdrop-blur-sm">
    {project.year}
  </div>

  {/* Hover arrow */}
  <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-[#d4af7a] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
    <ArrowUpRight size={18} className="text-[#0a0a0b]" />
  </div>
</div>
                {/* Text */}
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#d4af7a]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs tracking-wide text-[#6b6b73] uppercase">
                      {project.category}
                    </p>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-[#a1a1a8]">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#232327] px-3 py-1 text-xs text-[#a1a1a8] transition-colors duration-300 group-hover:border-[#33333a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border border-[#33333a] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#d4af7a] hover:text-[#d4af7a]"
            >
              Have a project in mind?
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
