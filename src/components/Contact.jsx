import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const { t } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend-only demo: wire this up to your own backend or a service
    // like Formspree / EmailJS when you're ready to receive real messages.
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="border-t border-border scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
        <p className="eyebrow mb-6">{t.contact.eyebrow}</p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="min-w-0">
            <h2 className="font-display font-semibold text-display-lg uppercase leading-none break-words [hyphens:auto]">
              {t.contact.headingLine1}
              <br />
              {t.contact.headingLine2}
            </h2>
            <p className="text-muted leading-relaxed max-w-sm mt-8">{t.contact.description}</p>

            <div className="flex flex-col gap-3 mt-10 font-mono text-sm">
              <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2 w-fit hover:text-accent transition-colors">
                {profile.email}
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={profile.telegram} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 w-fit hover:text-accent transition-colors">
                Telegram
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 w-fit hover:text-accent transition-colors">
                GitHub
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 w-fit hover:text-accent transition-colors">
                Instagram
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="min-w-0 flex flex-col gap-8">
            <label className="flex flex-col gap-3">
              <span className="eyebrow !text-[0.65rem]">{t.contact.form.name}</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="bg-transparent border-b border-border py-3 focus:border-accent outline-none transition-colors"
              />
            </label>
            <label className="flex flex-col gap-3">
              <span className="eyebrow !text-[0.65rem]">{t.contact.form.email}</span>
              <input
                required
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="bg-transparent border-b border-border py-3 focus:border-accent outline-none transition-colors"
              />
            </label>
            <label className="flex flex-col gap-3">
              <span className="eyebrow !text-[0.65rem]">{t.contact.form.message}</span>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="bg-transparent border-b border-border py-3 focus:border-accent outline-none transition-colors resize-none leading-relaxed"
              />
            </label>

            <button
              type="submit"
              className="mt-2 self-start px-6 py-3 rounded-md bg-text text-bg font-mono text-sm hover:opacity-85 transition-opacity"
            >
              {t.contact.form.submit}
            </button>

            {sent && <p className="font-mono text-xs text-accent">{t.contact.form.sent}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
