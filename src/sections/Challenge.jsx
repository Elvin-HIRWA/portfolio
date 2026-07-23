import { motion } from 'framer-motion'
import {
  AlertCircle, Users, Zap, Link, Wrench,
  Layers, Database, Cpu, Search, Shield, CheckCircle,
  Layout, Rocket, Heart,
} from 'lucide-react'
import { challengeItems } from '@/data'
import { SectionHeader } from '@/components/SectionHeader'
import { GradientBorder } from '@/components/GradientBorder'
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '@/utils/variants'

const iconMap = {
  AlertCircle, Users, Zap, Link, Wrench,
  Layers, Database, Cpu, Search, Shield, CheckCircle,
  Layout, Rocket, Heart,
}

function PhaseCard({ phase, label, color, items, delay = 0 }) {
  const borderColors = {
    red: 'border-red-500/20 bg-red-500/5',
    brand: 'border-brand/20 bg-brand/5',
    accent: 'border-accent/20 bg-accent/5',
  }
  const iconColors = {
    red: 'text-red-400 bg-red-400/10',
    brand: 'text-brand bg-brand/10',
    accent: 'text-accent bg-accent/10',
  }
  const labelColors = {
    red: 'text-red-400 border-red-400/30 bg-red-400/5',
    brand: 'text-brand border-brand/30 bg-brand/5',
    accent: 'text-accent border-accent/30 bg-accent/5',
  }

  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-2xl border p-6 space-y-4 ${borderColors[color]}`}
    >
      <div className="flex items-center gap-3">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${labelColors[color]}`}>
          {phase}
        </span>
        <h3 className="text-text font-semibold text-lg">{label}</h3>
      </div>
      <div className="space-y-3">
        {items.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <div key={item.title} className="flex gap-3">
              <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${iconColors[color]}`}>
                {Icon && <Icon size={15} />}
              </div>
              <div>
                <div className="text-text text-sm font-medium">{item.title}</div>
                <div className="text-muted text-xs leading-relaxed mt-0.5">{item.description}</div>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export function Challenge() {
  return (
    <section
      id="challenge"
      className="py-32 relative overflow-hidden"
      aria-label="Technical challenge case study"
    >
      {/* Background blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Challenge"
          title={challengeItems.title}
          description={challengeItems.subtitle}
        />

        {/* Timeline connector */}
        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand/30 to-transparent -translate-x-1/2" aria-hidden="true" />

          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <PhaseCard
              phase="01 — Challenge"
              label="The Problem"
              color="red"
              items={challengeItems.challenges}
            />
            <PhaseCard
              phase="02 — Solution"
              label="The Approach"
              color="brand"
              items={challengeItems.solutions}
            />
          </motion.div>

          {/* Result card */}
          <motion.div
            className="mt-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <GradientBorder gradient="bg-gradient-to-br from-accent/40 via-brand/20 to-violet-500/40">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-accent border border-accent/30 bg-accent/5">
                    03 — Result
                  </span>
                  <h3 className="text-text font-semibold text-xl">The Outcome</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {challengeItems.results.map((result) => {
                    const Icon = iconMap[result.icon]
                    return (
                      <motion.div
                        key={result.label}
                        className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-3">
                          {Icon && <Icon size={20} />}
                        </div>
                        <div className="text-text font-semibold text-sm">{result.label}</div>
                        <div className="text-muted text-xs mt-1">{result.description}</div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </GradientBorder>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
