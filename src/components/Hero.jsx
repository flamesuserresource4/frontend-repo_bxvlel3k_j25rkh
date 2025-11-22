import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <p className="text-cyan-300 uppercase tracking-widest text-xs mb-3">Advanced Technology meets Environmental Wisdom</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Unearthing Wisdom with AI
          </h1>
          <p className="mt-4 text-slate-200 text-lg max-w-2xl">
            Bridging geoscience expertise with modern data science to deliver precise groundwater surveys, subsurface mapping, and conservation strategies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/services" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white rounded-lg group">
              <span className="absolute inset-0 bg-cyan-400/20 group-hover:bg-cyan-400/30 transition" />
              <span className="absolute left-0 w-0 h-full bg-cyan-500 transition-all duration-300 ease-out group-hover:w-full" />
              <span className="relative">Explore Our Services</span>
            </Link>
            <Link to="/projects" className="text-white/80 hover:text-white underline underline-offset-4">View Projects</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
