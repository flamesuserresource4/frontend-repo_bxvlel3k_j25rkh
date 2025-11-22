import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Motto from './components/Motto'
import Tech from './components/Tech'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Who We Are</h2>
                <p className="mt-4 text-slate-300">Geo Transect is a consultancy uniting earth sciences and modern technology. We specialize in groundwater surveys, subsurface mapping, and conservation planning with a focus on Kerala and Tamil Nadu.</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-6">
                <p className="text-slate-200">Trusted by institutions and communities for precise, ethical, and science-backed decisions.</p>
              </div>
            </div>
          </div>
        </section>
        <Services />
        <Motto />
        <Tech />
        <footer className="py-10 text-center text-slate-400 bg-slate-950">© {new Date().getFullYear()} Geo Transect. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
