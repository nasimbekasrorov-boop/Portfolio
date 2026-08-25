import { Github, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function ProjectCard({ project }) {
  const { t } = useLanguage()

  return (
    <article className="group border-b border-border py-12 md:py-16 grid md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-10">
      <span className="font-mono text-muted text-sm">{project.number}</span>

      <div
        className="aspect-[4/3] md:aspect-auto w-full border border-border flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-text"
        style={{
          backgroundImage: project.image ? `url(${project.image})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {!project.image && (
          <span className="font-mono text-xs text-muted uppercase tracking-widest">
            {t.projects.titles[project.key]}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-display text-2xl md:text-3xl mb-3">{t.projects.titles[project.key]}</h3>
          <p className="text-muted leading-relaxed max-w-md">{t.projects.descriptions[project.key]}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((tech) => (
              <span key={tech} className="font-mono text-xs border border-border px-2.5 py-1 text-muted">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 mt-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 font-mono text-sm hover:text-accent transition-colors"
          >
            <Github size={15} />
            {t.projects.viewCode}
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 font-mono text-sm hover:text-accent transition-colors"
          >
            {t.projects.liveDemo}
            <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  )
}
