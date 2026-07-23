import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects } from '@/data'
import { SectionHeader } from '@/components/SectionHeader'
import { Badge } from '@/components/Badge'
import { Pill } from '@/components/Pill'
import { staggerContainer, fadeUp } from '@/utils/variants'

const colorMap = {
  brand: {
    accent: 'from-brand/20 via-violet-500/10 to-transparent',
    badge: 'bg-brand/10 text-brand border-brand/20',
    glow: 'group-hover:shadow-[0_0_50px_rgba(91,91,214,0.15)]',
    dot: 'bg-brand',
    icon: 'text-brand',
  },
  accent: {
    accent: 'from-accent/20 via-emerald-500/10 to-transparent',
    badge: 'bg-accent/10 text-accent border-accent/20',
    glow: 'group-hover:shadow-[0_0_50px_rgba(34,197,94,0.15)]',
    dot: 'bg-accent',
    icon: 'text-accent',
  },
  purple: {
    accent: 'from-violet-500/20 via-purple-500/10 to-transparent',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    glow: 'group-hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]',
    dot: 'bg-violet-400',
    icon: 'text-violet-400',
  },
}

function ProjectCard({ project, index }) {
  const colors = colorMap[project.color] || colorMap.brand

  return (
    <motion.article
      variants={fadeUp}
      className={`relative group rounded-2xl bg-card border border-border hover:border-white/15 transition-all duration-500 overflow-hidden flex flex-col ${colors.glow}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Top gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${colors.accent} pointer-events-none`} />

      {/* Number */}
      <div className="absolute top-5 right-5 text-7xl font-black text-white/[0.03] select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative p-7 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border mb-2 ${colors.badge}`}>
              {project.category}
            </span>
            <h3 className="text-text font-bold text-2xl leading-tight">{project.title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-center gap-1.5 text-xs text-muted">
              <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
              {h}
            </div>
          ))}
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Pill key={tech}>{tech}</Pill>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-5 border-t border-border">
          <a
            href={project.links.github}
            className="flex items-center gap-1.5 text-muted hover:text-text text-sm font-medium transition-colors focus:outline-none focus:underline"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={15} />
            Code
          </a>
          <a
            href={project.links.live}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors focus:outline-none focus:underline ${colors.icon} hover:opacity-80`}
            aria-label={`View ${project.title} live demo`}
          >
            Live Demo
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden"
      aria-label="Projects"
    >
      {/* Background blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Work"
          title="Projects I've Built"
          description="A selection of production systems and products shipped to real users."
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
