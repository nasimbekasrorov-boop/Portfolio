import { useLanguage } from '../context/LanguageContext.jsx'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="border-t border-border scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 grid md:grid-cols-[160px_1fr] gap-8 md:gap-16">
        <div className="flex md:flex-col items-start justify-between md:justify-start gap-4">
          <p className="eyebrow">{t.experience.eyebrow}</p>
          <span className="font-mono text-muted text-sm">03</span>
        </div>

        <div>
          <h2 className="font-display font-medium text-display-md mb-10">{t.experience.heading}</h2>

          <div className="border-l-2 border-accent pl-6">
            <p className="font-mono text-sm text-muted mb-2">{t.experience.period}</p>
            <h3 className="font-display text-xl md:text-2xl mb-3">{t.experience.title}</h3>
            <p className="text-muted leading-relaxed max-w-xl">{t.experience.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
