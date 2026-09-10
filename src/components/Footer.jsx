const mainLinks = [
  { label: 'Career Guidance (YouTube)', url: 'https://www.youtube.com/@CareerGuidancewithJohnWatters/videos', type: 'youtube' },
  { label: 'Inspiring Careers (YouTube)', url: 'https://www.youtube.com/@JWattersIC', type: 'youtube' },
  { label: 'LinkedIn Profile', url: 'http://www.linkedin.com/in/johnwatters', type: 'linkedin' },
  { label: 'Abercorn International Search', url: 'http://www.abercornis.com', type: 'globe' },
]

export default function Footer() {
  return (
    <footer className="bg-navyDeep text-cream/80 pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-goldLight/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-wrap mx-auto px-7 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        
        {/* Column 1: Brand & Motto */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-goldLight text-navyDeep font-bold flex items-center justify-center text-lg shadow-lg">
              JW
            </div>
            <div>
              <p className="font-display text-xl font-bold text-cream tracking-wide">John Watters</p>
              <p className="text-xs text-goldLight tracking-wider uppercase font-medium">GAICD | Executive Search & Career Coach</p>
            </div>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed max-w-sm">
            Empowering graduates and professionals across Asia Pacific with 30+ years of recruitment expertise. <span className="text-goldLight italic block mt-1">"Love Your Career. Love Your Life."</span>
          </p>
        </div>

        {/* Column 2: Quick Links & Channels */}
        <div className="md:col-span-4 space-y-4">
          <p className="font-display text-sm font-semibold tracking-wider uppercase text-goldLight">Connect & Channels</p>
          <ul className="space-y-2.5">
            {mainLinks.map((l) => (
              <li key={l.url}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-cream/80 hover:text-goldLight transition-colors flex items-center justify-between group py-1"
                >
                  <span className="flex items-center space-x-2.5">
                    {l.type === 'youtube' && (
                      <svg className="w-4 h-4 text-red-400 group-hover:text-goldLight transition-colors fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                    {l.type === 'linkedin' && (
                      <svg className="w-4 h-4 text-blue-400 group-hover:text-goldLight transition-colors fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    )}
                    {l.type === 'globe' && (
                      <svg className="w-4 h-4 text-goldLight/70 group-hover:text-goldLight transition-colors fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    )}
                    <span>{l.label}</span>
                  </span>
                  <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-goldLight fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Office Contact Info */}
        <div className="md:col-span-3 space-y-4">
          <p className="font-display text-sm font-semibold tracking-wider uppercase text-goldLight">Headquarters</p>
          <div className="space-y-3 text-xs sm:text-sm text-cream/70">
            <div className="flex items-start space-x-2.5">
              <svg className="w-4 h-4 text-goldLight shrink-0 mt-0.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Level 14, 100 Walker Street, North Sydney NSW 2060</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <svg className="w-4 h-4 text-goldLight shrink-0 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+61 2 9954 0807</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright & Developer Credit Bar */}
      <div className="max-w-wrap mx-auto px-7 mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-cream/50 gap-4">
        <p>© {new Date().getFullYear()} John Watters & Abercorn International Search. All rights reserved.</p>
        <p>
          Designed & Developed by <span className="text-goldLight font-medium">Abdullah Nouman</span> (<a href="mailto:abdullahnouman714@gmail.com" className="hover:underline text-cream/70">abdullahnouman714@gmail.com</a>)
        </p>
      </div>

    </footer>
  )
}