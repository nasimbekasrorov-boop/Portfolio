import { useLanguage } from '../context/LanguageContext.jsx'
import Terminal from '../components/Terminal.jsx'

export default function TerminalPage() {
  const { t } = useLanguage()

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <p className="eyebrow mb-6">{t.terminal.eyebrow}</p>
        <h1 className="font-display font-semibold text-display-lg uppercase leading-none">
          {t.terminal.heading}
        </h1>
        <p className="text-muted max-w-md mx-auto mt-6">{t.terminal.subheading}</p>
      </div>

      <Terminal />
    </div>
  )
}
