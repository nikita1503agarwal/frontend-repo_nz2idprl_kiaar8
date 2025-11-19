function Services() {
  const services = [
    { name: 'Concept & Feasibility', desc: 'Site studies, zoning analysis and early-stage concept development.' },
    { name: 'Architecture & Interiors', desc: 'From schematic design to construction drawings and detailing.' },
    { name: 'Project Management', desc: 'Coordination with consultants, contractors and authorities.' },
  ]

  return (
    <section id="services" className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold">Services</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-medium">{s.name}</h3>
              <p className="text-white/70 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
