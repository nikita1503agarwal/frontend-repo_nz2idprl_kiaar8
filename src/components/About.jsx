function About() {
  return (
    <section id="about" className="bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold">About</h2>
          <p className="mt-6 text-white/80">
            I’m Alex, an architect with a focus on residential and small-scale cultural works. My approach is minimalist and contextual, carefully framing views and choreographing daylight to elevate daily rituals.
          </p>
          <p className="mt-4 text-white/80">
            With experience across Europe, I lead projects from concept to construction, collaborating closely with clients, engineers and makers.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-white/10 p-4 bg-white/5">
              <div className="text-white/60">Experience</div>
              <div className="mt-1 font-medium">10+ years</div>
            </div>
            <div className="rounded-xl border border-white/10 p-4 bg-white/5">
              <div className="text-white/60">Based in</div>
              <div className="mt-1 font-medium">Barcelona</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?q=80&w=1100&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
