import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { profile } from '../data/profile.js'
import ThemeToggle from './ThemeToggle.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

export default function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  const links = [
    { label: t.nav.about, href: '/#about' },
    { label: t.nav.projects, href: '/projects' },
    { label: t.nav.experience, href: '/#experience' },
    { label: t.nav.terminal, href: '/terminal' },
    { label: t.nav.contact, href: '/#contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-border' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-semibold text-lg tracking-tight">
          {profile.firstName}<span className="text-accent">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="eyebrow !text-[0.7rem] hover:text-text transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={profile.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-muted hover:text-text transition-colors duration-200"
          >
            <Send size={16} strokeWidth={1.75} />
          </a>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-text"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg px-6 py-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="font-display text-2xl">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <a
              href={profile.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-muted hover:text-text transition-colors"
            >
              <Send size={18} strokeWidth={1.75} />
            </a>
            <div className="flex items-center gap-5">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
