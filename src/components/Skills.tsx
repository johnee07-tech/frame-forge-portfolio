import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skills } from '@/data/content';

export default function Skills() {
  const { ref, isVisible } = useScrollReveal();

  const designSkills = skills.filter((s) => s.category === 'Design');
  const devSkills = skills.filter((s) => s.category === 'Development');

  const renderBar = (skill: (typeof skills)[number], index: number) => (
    <div key={skill.name}>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-white">{skill.name}</span>
        <span className="font-display text-xs text-[#6b6b73]">
          {skill.level}%
        </span>
      </div>
      <div className="mt-2 h-px w-full bg-[#232327]">
        <div
          className="h-px bg-[#d4af7a] transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${0.1 + index * 0.08}s`,
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="relative border-t border-[#232327] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          {/* Header */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#d4af7a]" />
            <span className="text-xs font-medium tracking-[0.2em] text-[#d4af7a] uppercase">
              Skills
            </span>
          </div>

          <h2 className="mt-8 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tools we use to bring ideas to life
          </h2>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Design */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <h3 className="font-display text-sm font-semibold tracking-[0.15em] text-white uppercase">
                  Design
                </h3>
                <span className="h-px flex-1 bg-[#232327]" />
              </div>
              <div className="space-y-6">
                {designSkills.map((s, i) => renderBar(s, i))}
              </div>
            </div>

            {/* Development */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <h3 className="font-display text-sm font-semibold tracking-[0.15em] text-white uppercase">
                  Development
                </h3>
                <span className="h-px flex-1 bg-[#232327]" />
              </div>
              <div className="space-y-6">
                {devSkills.map((s, i) => renderBar(s, i))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
