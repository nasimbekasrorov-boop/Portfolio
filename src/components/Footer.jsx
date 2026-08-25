import { useLanguage } from '../context/LanguageContext.jsx'
import { profile } from '../data/profile.js'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <p className="font-mono text-xs text-muted">
          © {year} {profile.name}. {t.footer.rights}
        </p>
        <p className="font-mono text-xs text-muted">{t.footer.built}</p>
      </div>
    </footer>
  )
}
