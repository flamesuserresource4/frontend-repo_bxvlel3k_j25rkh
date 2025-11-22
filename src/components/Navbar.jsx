import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-cyan-300' : 'text-slate-200 hover:text-white'
        }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-emerald-500 to-cyan-400"></div>
            <span className="text-white font-semibold">Geo Transect</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('/', 'Home')}
            {navItem('/services', 'Services')}
            {navItem('/technology', 'Technology & Approach')}
            {navItem('/projects', 'Projects')}
            {navItem('/about', 'About Us')}
            {navItem('/contact', 'Contact')}
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-1">
          <div className="flex flex-col bg-slate-800/60 rounded-lg p-2">
            {navItem('/', 'Home')}
            {navItem('/services', 'Services')}
            {navItem('/technology', 'Technology & Approach')}
            {navItem('/projects', 'Projects')}
            {navItem('/about', 'About Us')}
            {navItem('/contact', 'Contact')}
          </div>
        </div>
      )}
    </header>
  )
}
