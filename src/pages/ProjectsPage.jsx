import { useLanguage } from '../context/LanguageContext.jsx'
import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function ProjectsPage() {
  const { t } = useLanguage()
  const headingLines = t.projects.heading.split('\n')

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <p className="eyebrow mb-6">{t.projects.eyebrow}</p>
      <h1 className="font-display font-semibold text-display-lg uppercase leading-none">
        {headingLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <p className="text-muted max-w-md mt-6">{t.projects.subheading}</p>

      <div className="mt-16 border-t border-border">
        {projects.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
    </div>
  )
}
