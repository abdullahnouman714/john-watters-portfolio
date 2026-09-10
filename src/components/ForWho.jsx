import { motion } from 'framer-motion'

const audiences = [
  {
    title: 'Students & graduates',
    description:
      'Making sense of the jump from university to a first real job — CVs, interviews, and figuring out what you actually want.',
  },
  {
    title: 'Early-career professionals',
    description:
      "Building the skills, habits, and personal brand that get you noticed for the next step, not just the current one.",
  },
  {
    title: 'Professionals in transition',
    description:
      'Changing industries, negotiating a promotion, or rebuilding confidence after a setback.',
  },
  {
    title: 'Leaders & mentors',
    description: 'Sharpening how you communicate, coach, and grow the people around you.',
  },
]

export default function ForWho() {
  return (
    <section id="for-who" className="py-24 overflow-hidden">
      <div className="max-w-wrap mx-auto px-7 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-14">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold text-goldLight mb-4">Built for every stage</p>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-navy">
            Wherever you are in your career, there's something here.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t-[1.5px] border-navy/10 pt-4"
            >
              <h3 className="font-display font-semibold text-lg text-navy mb-2">{a.title}</h3>
              <p className="text-charcoalSoft text-[0.96rem]">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
