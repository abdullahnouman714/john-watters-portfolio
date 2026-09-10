import { motion } from 'framer-motion'

const topics = [
  'Interview preparation',
  'Resume & CV writing',
  'LinkedIn profile tips',
  'Workplace communication',
  'Landing a promotion',
  'Career change advice',
  'Building confidence at work',
  'First job foundations',
  'Personal branding',
]

export default function Topics() {
  return (
    <section id="topics" className="bg-navy text-cream py-24 overflow-hidden">
      <div className="max-w-wrap mx-auto px-7">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold text-gold mb-4"
        >
          What's covered
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-semibold text-3xl md:text-4xl text-cream mb-10"
        >
          Topics in the library
        </motion.h2>
        <ul className="flex flex-wrap gap-4 list-none p-0 m-0">
          {topics.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.06, borderColor: '#D4B267', color: '#D4B267' }}
              className="border-[1.5px] border-cream/30 rounded-full px-5 py-2.5 text-[0.95rem] text-cream/90 cursor-default"
            >
              {t}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
