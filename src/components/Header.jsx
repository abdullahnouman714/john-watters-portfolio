import { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#shows', label: 'The Shows' },
  { href: '#for-who', label: "Who It's For" },
  { href: '#topics', label: 'Topics' },
  { href: '#contact', label: 'Get in Touch' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -68 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-navy/10"
    >
      <div className="max-w-wrap mx-auto px-7 h-[68px] flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-xl text-navy">
          John Watters
        </a>

        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-charcoalSoft hover:text-navy transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 bg-navy rounded" />
          <span className="block h-0.5 bg-navy rounded" />
          <span className="block h-0.5 bg-navy rounded" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden absolute top-[68px] left-0 right-0 bg-cream border-b border-navy/10 flex flex-col gap-5 px-7 py-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-charcoalSoft hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  )
}
