import { useState } from 'react'

function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-20">
        <h2 className="text-3xl sm:text-4xl font-semibold">Contact</h2>
        <p className="text-white/70 mt-3">For new projects and collaborations, send a message.</p>

        {!sent ? (
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <input className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30" placeholder="Name" required />
            <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30" placeholder="Email" required />
            <textarea rows="5" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30" placeholder="Tell me about your project" required />
            <button className="justify-self-start rounded-full bg-white/90 text-slate-900 px-6 py-3 font-medium hover:bg-white transition">Send</button>
          </form>
        ) : (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/90">Thanks for reaching out — I’ll get back within 48 hours.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact
