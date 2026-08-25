import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../data/translations.js'

const LanguageContext = createContext(null)

// Change this to 'en' if you want English as the default language
const DEFAULT_LANGUAGE = 'uz'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE
    return localStorage.getItem('portfolio-lang') || DEFAULT_LANGUAGE
  })

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'uz' ? 'en' : 'uz'))
  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
