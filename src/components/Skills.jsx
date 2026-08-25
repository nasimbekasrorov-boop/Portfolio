import { useLanguage } from '../context/LanguageContext.jsx'
import { skills } from '../data/skills.js'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="eyebrow mb-3">{t.skills.eyebrow}</p>
            <h2 className="font-display font-medium text-display-md">{t.skills.heading}</h2>
          </div>
          <span className="font-mono text-muted text-sm hidden md:block">02</span>
        </div>

        <div className="border-t border-border">
          {skills.map((skill) => (
            <div
              key={skill.key}
              className="group relative grid md:grid-cols-[80px_1fr_1fr] gap-2 md:gap-8 py-6 md:py-8 px-4 -mx-4 border-b border-border items-baseline overflow-hidden cursor-default"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-text origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-smooth"
              />
              <span className="relative font-mono text-muted text-sm transition-colors duration-300 group-hover:text-bg/60 group-hover:delay-100">
                {skill.number}
              </span>
              <h3 className="relative font-display text-2xl md:text-3xl transition-all duration-300 group-hover:text-bg group-hover:delay-100 group-hover:translate-x-1">
                {skill.name}
              </h3>
              <p className="relative text-muted text-sm md:text-base max-w-md transition-colors duration-300 group-hover:text-bg/70 group-hover:delay-100">
                {t.skills.items[skill.key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
