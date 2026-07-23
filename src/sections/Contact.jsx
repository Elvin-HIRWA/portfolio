import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowUpRight, Send, MapPin } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'
import { GradientBorder } from '@/components/GradientBorder'
import { staggerContainer, fadeUp, scaleIn } from '@/utils/variants'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'elvin@example.com',
    href: 'mailto:elvin@example.com',
    description: 'For direct inquiries',
    color: 'text-brand bg-brand/10 hover:bg-brand/20 border-brand/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/elvinhirwa',
    href: 'https://github.com/elvinhirwa',
    description: 'Browse my code',
    color: 'text-text bg-white/5 hover:bg-white/10 border-white/10',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/elvinhirwa',
    href: 'https://linkedin.com/in/elvinhirwa',
    description: 'Connect professionally',
    color: 'text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 border-blue-400/20',
  },
]

function ContactCard({ link, index }) {
  const Icon = link.icon

  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      variants={fadeUp}
      className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 ${link.color}`}
      whileHover={{ scale: 1.02, x: 4 }}
      transition={{ duration: 0.2 }}
      aria-label={`Contact via ${link.label}: ${link.value}`}
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        <Icon size={20} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-muted mb-0.5">{link.description}</div>
        <div className="font-semibold text-sm text-text truncate">{link.value}</div>
      </div>
      <ArrowUpRight size={16} className="opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
    </motion.a>
  )
}

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
      aria-label="Contact section"
    >
      {/* Background blobs */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/6 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build Something Great Together"
          description="I'm actively looking for backend engineering opportunities. Whether it's MailerLite or a conversation — I'd love to connect."
        />

        {/* Main CTA card */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <GradientBorder>
            <div className="p-8 sm:p-12 space-y-10">
              {/* Central message */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto">
                  <Send size={28} className="text-brand" />
                </div>
                <p className="text-muted leading-relaxed max-w-lg mx-auto">
                  I'm a backend engineer who ships clean, scalable code. I bring production experience with Laravel, Node.js, Redis, and Docker — and a genuine passion for building tools that matter.
                </p>
                <div className="flex items-center justify-center gap-1.5 text-sm text-muted">
                  <MapPin size={14} />
                  <span>Kigali, Rwanda — Open to remote</span>
                </div>
              </div>

              {/* Contact links */}
              <motion.div
                className="space-y-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactLinks.map((link, i) => (
                  <ContactCard key={link.label} link={link} index={i} />
                ))}
              </motion.div>

              {/* Availability badge */}
              <div className="text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Available for new opportunities
                </span>
              </div>
            </div>
          </GradientBorder>
        </motion.div>
      </div>
    </section>
  )
}
