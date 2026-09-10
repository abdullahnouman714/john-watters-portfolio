import { motion } from 'framer-motion'

const shows = [
  {
    tag: 'Weekly · 10–15 min',
    title: 'Career Guidance with John Watters',
    description:
      "Short, practical coaching videos — fixing up your LinkedIn profile, prepping for an interview, negotiating a promotion, or planning your next move. New episodes drop every week, built into a library anyone can search when they need it.",
    linkLabel: 'Browse the library',
    url: 'https://www.youtube.com/@CareerGuidancewithJohnWatters/videos',
    thumbGradient: 'from-[#1B2C48] to-[#142137]',
  },
  {
    tag: 'Monthly · Conversations',
    title: 'Inspiring Careers with John Watters',
    description:
      "Long-form interviews with people who've built genuinely interesting careers — across business, sport, tech, finance, and beyond. Real stories about resilience, mindset, and the decisions that moved things forward.",
    linkLabel: 'Listen to the podcast',
    url: 'https://www.youtube.com/@JWattersIC',
    thumbGradient: 'from-[#4A3A1E] to-[#2E2410]',
  },
]

export default function Shows() {
  return (
    <section id="shows" className="bg-stone py-24 overflow-hidden">
      <div className="max-w-wrap mx-auto px-7">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold text-gold mb-4"
        >
          Two shows, one mission
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-semibold text-3xl md:text-4xl text-navy max-w-[18ch] mb-10"
        >
          Where to start
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shows.map((show, i) => (
            <motion.article
              key={show.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-cream rounded border border-navy/10 overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`aspect-video bg-gradient-to-br ${show.thumbGradient} flex items-center justify-center text-cream/75 text-sm text-center p-4`}
              >
                <span>Add show artwork</span>
              </div>
              <div className="p-7">
                <p className="text-sm font-semibold text-gold mb-2">{show.tag}</p>
                <h3 className="font-display font-semibold text-xl text-navy mb-3">
                  {show.title}
                </h3>
                <p className="text-charcoalSoft mb-5">{show.description}</p>
                <a
                  href={show.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-navy border-b-[1.5px] border-gold pb-0.5 hover:text-gold transition-colors"
                >
                  {show.linkLabel} →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
