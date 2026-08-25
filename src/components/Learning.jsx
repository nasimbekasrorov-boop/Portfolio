import { useLanguage } from '../context/LanguageContext.jsx'

export default function Learning() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 grid md:grid-cols-[160px_1fr] gap-8 md:gap-16">
        <div className="flex md:flex-col items-start justify-between md:justify-start gap-4">
          <p className="eyebrow">{t.learning.eyebrow}</p>
          <span className="font-mono text-muted text-sm">04</span>
        </div>

        <div>
          <h2 className="font-display font-medium text-display-md mb-10">{t.learning.heading}</h2>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-2xl">
            {t.learning.items.map((item, i) => (
              <li key={item} className="flex items-baseline gap-3 font-mono text-sm text-muted">
                <span className="text-accent">{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
