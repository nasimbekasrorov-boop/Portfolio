import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { profile } from '../data/profile.js'
import HeroVisual from './HeroVisual.jsx'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_320px] gap-10 md:gap-12 items-start">
        <div className="min-w-0">
          <p className="eyebrow mb-8 animate-fadeUp">
            [ {profile.country.toUpperCase()} · {profile.city.toUpperCase()} · {profile.year} ]
          </p>

          <h1 className="font-display font-semibold text-hero uppercase animate-fadeUp" style={{ animationDelay: '80ms' }}>
            {t.hero.greeting}
          </h1>
          <h1
            className="font-display font-semibold text-hero uppercase outline-text animate-fadeUp"
            style={{ animationDelay: '160ms' }}
          >
            {profile.name}
          </h1>
          <h2
            className="font-display font-medium text-display-md uppercase text-muted mt-2 animate-fadeUp"
            style={{ animationDelay: '240ms' }}
          >
            {t.hero.role}
          </h2>
        </div>

        <div
          className="hidden md:block aspect-square rounded-full border border-border overflow-hidden animate-fadeUp"
          style={{ animationDelay: '160ms' }}
        >
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          ) : (
            <HeroVisual />
          )}
        </div>
      </div>

      <div
        className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-10 animate-fadeUp"
        style={{ animationDelay: '320ms' }}
      >
        <div className="max-w-md">
          <p className="text-muted leading-relaxed">{t.hero.description}</p>
          <p className="font-mono text-sm text-accent mt-4">// {t.hero.status}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-text text-bg font-mono text-sm hover:opacity-85 transition-opacity duration-200"
          >
            {t.hero.ctaProjects}
            <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border font-mono text-sm hover:border-text transition-colors duration-200"
          >
            {t.hero.ctaAbout}
            <ArrowDown size={15} className="transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
