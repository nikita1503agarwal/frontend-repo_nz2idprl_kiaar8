function Projects() {
  const works = [
    {
      title: 'Courtyard House',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop',
      location: 'Lisbon, Portugal',
      year: '2024',
    },
    {
      title: 'Glass Studio',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1400&auto=format&fit=crop',
      location: 'Berlin, Germany',
      year: '2023',
    },
    {
      title: 'Hill Cabin',
      image: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=1400&auto=format&fit=crop',
      location: 'Lake District, UK',
      year: '2022',
    },
  ]

  return (
    <section id="projects" className="relative bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">Selected Projects</h2>
          <a href="#contact" className="text-white/70 hover:text-white transition">All Projects →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w) => (
            <article key={w.title} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={w.image} alt={w.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{w.title}</h3>
                  <span className="text-white/60 text-sm">{w.year}</span>
                </div>
                <p className="text-white/60 text-sm mt-1">{w.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
