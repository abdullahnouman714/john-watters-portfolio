import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Shows from './components/Shows'
import ForWho from './components/ForWho'
import Topics from './components/Topics'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body text-charcoal bg-cream">
      <Header />
      <main>
        <Hero />
        <About />
        <Shows />
        <ForWho />
        <Topics />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
