import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [note, setNote] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Front-end only placeholder — wire this up to a real backend/email service (e.g. Formspree, Resend, or a serverless function).
    setNote('Thanks — your message has been noted. (Connect this form to an email service to receive submissions.)')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 overflow-hidden">
      <div className="max-w-wrap mx-auto px-7 grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold text-goldLight mb-4">Get in touch</p>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-navy max-w-[16ch] mb-4">
            Have a topic you'd like covered?
          </h2>
          <p className="text-charcoalSoft max-w-[40ch]">
            Send a note with what you're navigating right now — it might just become the next episode.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-1.5 bg-stone p-8 rounded"
        >
          <label htmlFor="name" className="text-sm font-semibold text-navy mt-0">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="font-body text-[0.98rem] px-3.5 py-2.5 border-[1.5px] border-navy/10 rounded bg-cream text-charcoal focus:outline-none focus:border-gold transition-colors"
          />

          <label htmlFor="email" className="text-sm font-semibold text-navy mt-3.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="font-body text-[0.98rem] px-3.5 py-2.5 border-[1.5px] border-navy/10 rounded bg-cream text-charcoal focus:outline-none focus:border-gold transition-colors"
          />

          <label htmlFor="message" className="text-sm font-semibold text-navy mt-3.5">
            What would you like guidance on?
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={form.message}
            onChange={handleChange}
            className="font-body text-[0.98rem] px-3.5 py-2.5 border-[1.5px] border-navy/10 rounded bg-cream text-charcoal focus:outline-none focus:border-gold resize-y transition-colors"
          />

          <motion.button
            type="submit"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 self-start px-7 py-3 rounded bg-gold text-navyDeep font-semibold text-sm hover:bg-goldLight transition-colors"
          >
            Send message
          </motion.button>

          <div className="min-h-[1.2em] mt-2.5">
            <AnimatePresence>
              {note && (
                <motion.p
                  role="status"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-charcoalSoft"
                >
                  {note}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
