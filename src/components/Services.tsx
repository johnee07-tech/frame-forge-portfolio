import { PenTool, Layout, Code, Smartphone, Sparkles, Image, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { services } from '@/data/content';

const iconMap: Record<string, typeof PenTool> = {
  PenTool,
  Layout,
  Code,
  Smartphone,
  Sparkles,
  Image,
};

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="relative border-t border-[#232327] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          {/* Header */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#d4af7a]" />
            <span className="text-xs font-medium tracking-[0.2em] text-[#d4af7a] uppercase">
              Services
            </span>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              What I can do for you
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-[#6b6b73]">
              From a single logo to a full brand and web build — here's how I
              can help your project move forward.
            </p>
          </div>

          {/* Services grid */}
          <div className="mt-16 grid gap-px overflow-hidden border border-[#232327] bg-[#232327] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? PenTool;
              return (
                <div
                  key={service.title}
                  className="group relative bg-[#0a0a0b] p-8 transition-colors duration-500 hover:bg-[#111113] lg:p-10"
                >
                  {/* Hover accent line */}
                  <div className="absolute top-0 left-0 h-px w-0 bg-[#d4af7a] transition-all duration-500 group-hover:w-full" />

                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center border border-[#232327] text-[#d4af7a] transition-colors duration-300 group-hover:border-[#d4af7a]">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-[#33333a] transition-all duration-300 group-hover:text-[#d4af7a] group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6b6b73]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
