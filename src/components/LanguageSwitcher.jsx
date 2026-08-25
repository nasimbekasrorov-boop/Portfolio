import { useLanguage } from '../context/LanguageContext.jsx'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="eyebrow !text-[0.7rem] flex items-center gap-1.5" role="group" aria-label="Language">
      <button
        onClick={() => setLang('en')}
        className={lang === 'en' ? 'text-text' : 'text-muted hover:text-text transition-colors'}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span className="text-border">/</span>
      <button
        onClick={() => setLang('uz')}
        className={lang === 'uz' ? 'text-text' : 'text-muted hover:text-text transition-colors'}
        aria-pressed={lang === 'uz'}
      >
        UZ
      </button>
    </div>
  )
}
