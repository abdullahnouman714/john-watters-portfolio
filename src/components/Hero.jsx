import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="bg-navy text-cream py-24 md:py-28 overflow-hidden">
      <div className="max-w-wrap mx-auto px-7 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm font-semibold text-goldLight mb-4"
          >
            Career Guidance &amp; Coaching
          </motion.p>
          <h1 className="font-display font-semibold leading-[1.1] text-4xl sm:text-5xl md:text-6xl max-w-[11ch] mb-5">
            Love Your Career.
            <br />
            Love Your Life.
          </h1>
          <p className="text-lg text-cream/80 max-w-[46ch] mb-7">
            Thirty years in executive recruitment, distilled into honest, practical advice —
            for anyone building a working life they genuinely enjoy waking up to.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.youtube.com/@CareerGuidancewithJohnWatters/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded bg-gold text-navyDeep font-semibold text-sm hover:bg-goldLight transition-colors"
            >
              Watch the weekly show
            </motion.a>
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.youtube.com/@JWattersIC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded border-[1.5px] border-cream/40 text-cream font-semibold text-sm hover:border-cream transition-colors"
            >
              Listen to the podcast
            </motion.a>
          </div>
          <p className="text-sm text-cream/55">
            John Watters, GAICD · Managing Director, Abercorn International Search
          </p>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <svg viewBox="0 0 320 320" className="w-full max-w-[220px] md:max-w-[320px]" aria-hidden="true">
            <motion.polyline
              points="10,290 70,250 120,265 170,180 220,200 270,90 310,40"
              fill="none"
              stroke="#B8923F"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.4 }}
            />
            <motion.circle
              cx="310"
              cy="40"
              r="6"
              fill="#D4B267"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.9 }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
