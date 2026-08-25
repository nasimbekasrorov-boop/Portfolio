import { useLanguage } from '../context/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()
  const tags = [
    t.about.tags.role,
    t.about.tags.country,
    t.about.tags.city,
    t.about.tags.learning,
    t.about.tags.open,
  ]

  return (
    <section id="about" className="border-t border-border scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 grid md:grid-cols-[160px_1fr] gap-8 md:gap-16">
        <div className="flex md:flex-col items-start justify-between md:justify-start gap-4">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <span className="font-mono text-muted text-sm">01</span>
        </div>

        <div>
          <h2 className="font-display font-medium text-display-md">{t.about.heading}</h2>

          <p className="text-muted leading-relaxed max-w-xl mt-8">{t.about.body}</p>

          <div className="flex flex-wrap gap-3 mt-10">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs uppercase tracking-wide border border-border px-3 py-1.5 text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
