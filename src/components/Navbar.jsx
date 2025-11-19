import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-900/60 backdrop-blur border border-white/10 px-5 py-3">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/90 text-slate-900 grid place-items-center font-bold">A</div>
            <div className="text-white font-semibold tracking-tight">Alex Rivera</div>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-white/80">
            {links.map(l => (
              <a key={l.href} href={l.href} className="px-3 py-2 rounded-lg hover:bg-white/10 transition text-sm">
                {l.label}
              </a>
            ))}
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 mx-6 sm:mx-8 rounded-xl bg-slate-900/90 backdrop-blur border border-white/10 p-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-3 rounded-lg text-white/80 hover:bg-white/10">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
