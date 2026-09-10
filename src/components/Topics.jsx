import { motion } from 'framer-motion'
import aiThumbnail from '../assets/ai-made-simple.jpg'
import parentsThumbnail from '../assets/parents-listen-up.jpg'

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

const podcastEpisodes = [
  {
    title: "AI Made Simple",
    channel: "Inspiring Careers",
    image: aiThumbnail,
    url: "https://www.youtube.com/@JWattersIC",
    description: "Breaking down artificial intelligence and its impact on modern careers with expert insights."
  },
  {
    title: "Parents Listen Up",
    channel: "Career Guidance with John Watters",
    image: parentsThumbnail,
    url: "https://www.youtube.com/@CareerGuidancewithJohnWatters/videos",
    description: "Essential advice for parents guiding their children through career choices and professional development."
  }
]

export default function Topics() {
  return (
    <section id="topics" className="bg-navy text-cream py-24 overflow-hidden">
      <div className="max-w-wrap mx-auto px-7">
        
        {/* Header Section */}
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

        {/* Tags / Topics List */}
        <ul className="flex flex-wrap gap-4 list-none p-0 m-0 mb-20">
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

        {/* Featured Video Thumbnails Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-cream">
            Featured <span className="text-gold">Videos & Insights</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {podcastEpisodes.map((ep, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-navyDeep/80 rounded-2xl overflow-hidden border border-cream/10 group hover:border-gold/50 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={ep.image} 
                      alt={ep.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navyDeep via-transparent to-transparent opacity-60"></div>
                    <span className="absolute top-4 left-4 bg-navy/90 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30 backdrop-blur-md">
                      {ep.channel}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h4 className="font-display text-xl font-bold text-cream group-hover:text-gold transition-colors">
                      {ep.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                      {ep.description}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <a 
                    href={ep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-gold/10 text-gold hover:bg-gold hover:text-navy font-semibold text-xs sm:text-sm transition-all duration-300 border border-gold/20 shadow-sm"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}