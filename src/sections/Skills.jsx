import { motion } from 'framer-motion'
import { skillGroups } from '@/data'
import { SectionHeader } from '@/components/SectionHeader'
import { ProgressBar } from '@/components/ProgressBar'
import { staggerContainer, fadeUp, fadeLeft } from '@/utils/variants'

const categoryIcons = {
  Backend: '⚙️',
  Frontend: '🎨',
  'DevOps & Tools': '🛠️',
}

const categoryColors = {
  Backend: 'from-brand/20 to-violet-500/10',
  Frontend: 'from-cyan-500/20 to-blue-500/10',
  'DevOps & Tools': 'from-orange-500/20 to-amber-500/10',
}

function SkillGroup({ group, index }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl bg-card border border-border p-6 hover:border-brand/20 transition-colors duration-300"
    >
      {/* Category header */}
      <div className={`flex items-center gap-3 mb-6 pb-4 border-b border-border`}>
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryColors[group.category]} flex items-center justify-center text-lg`}>
          {categoryIcons[group.category]}
        </div>
        <div>
          <h3 className="text-text font-semibold">{group.category}</h3>
          <p className="text-muted text-xs">{group.skills.length} technologies</p>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-5">
        {group.skills.map((skill, i) => (
          <ProgressBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </motion.div>
  )
}

export function Skills() {
  const allSkills = skillGroups.flatMap((g) => g.skills)
  const topSkills = allSkills.filter((s) => s.level >= 90)

  return (
    <section
      id="skills"
      className="py-32 relative overflow-hidden"
      aria-label="Technical skills"
    >
      {/* Background blob */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Skills"
          title="My Technology Stack"
          description="Built up over years of shipping real products to real users."
        />

        {/* Top skills callout */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {topSkills.map((skill) => (
            <motion.span
              key={skill.name}
              variants={fadeUp}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-brand" />
              {skill.name} — {skill.level}%
            </motion.span>
          ))}
        </motion.div>

        {/* Skill groups */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} group={group} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
