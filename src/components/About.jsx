import { motion } from 'framer-motion'
import johnPhoto from '/john-watters.jpg'

export default function About() {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-wrap mx-auto px-7 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative mx-auto md:mx-0 max-w-[320px] w-full"
        >
          <div className="absolute -inset-3 rounded-lg border-[1.5px] border-gold/40 -z-10" />
          <div className="aspect-[4/5] w-full rounded overflow-hidden shadow-xl shadow-navy/10">
            <img
              src={johnPhoto}
              alt="John Watters, Managing Director of Abercorn International Search"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <p className="text-sm font-semibold text-gold mb-4">About John</p>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-navy max-w-[16ch] mb-5">
            Insider knowledge, no longer behind closed doors.
          </h2>
          <p className="text-charcoalSoft max-w-[58ch] mb-4">
            John Watters has spent over three decades in executive recruitment and
            professional coaching across Asia Pacific, with more than 2,000 placements
            to his name. As Managing Director of Abercorn International Search, he's
            spent a career watching what actually gets people hired, promoted, and unstuck.
          </p>
          <p className="text-charcoalSoft max-w-[58ch]">
            Now he's sharing that experience directly — through weekly coaching videos
            and long-form conversations with people who've built remarkable careers,
            so you don't have to learn it the hard way.
          </p>
        </motion.div>
      </div>
    </section>
  )
}