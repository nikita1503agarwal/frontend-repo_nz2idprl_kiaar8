import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Contact />

      <footer className="bg-slate-950 text-white/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <p className="text-sm">© {new Date().getFullYear()} Alex Rivera — Architect</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
