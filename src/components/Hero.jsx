import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-24 flex items-end min-h-[90vh]">
        <div className="text-white/95">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/80" />
          <div className="relative">
            <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-white/70 mb-4">Architecture • Interiors • Urban</p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight">
              Minimal, timeless
              <br />
              spaces built with light
            </h1>
            <p className="mt-6 max-w-xl text-white/80">
              I’m an architect crafting modern, functional environments that balance geometry, materiality and natural light.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center rounded-full bg-white/90 text-slate-900 px-6 py-3 font-medium hover:bg-white transition">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-white/40 text-white px-6 py-3 font-medium hover:bg-white/10 transition">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
