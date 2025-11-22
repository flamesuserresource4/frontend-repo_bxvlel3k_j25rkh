import { Cpu, Droplets, Map, Radar, Waves, Satellite, LineChart } from 'lucide-react'

const services = [
  { title: 'Subsurface Water Zonation', icon: Droplets, desc: 'High-resolution aquifer identification and recharge mapping using resistivity and ML.' },
  { title: 'Geophysical Surveys', icon: Radar, desc: 'Electrical resistivity tomography (ERT), seismic refraction, and GPR for subsurface models.' },
  { title: 'Hydrogeological Consulting', icon: Waves, desc: 'Well siting, yield estimation, and sustainable extraction plans with environmental safeguards.' },
  { title: 'Remote Sensing & GIS', icon: Satellite, desc: 'Satellite analytics, DEM processing, and terrain intelligence for land use planning.' },
  { title: 'AI/ML for Geoscience', icon: Cpu, desc: 'Predictive mapping, anomaly detection, and decision support systems.' },
  { title: 'Mapping & Cartography', icon: Map, desc: 'Publication-grade maps, thematic layers, and interactive web maps.' },
  { title: 'Data Analysis & Dashboards', icon: LineChart, desc: 'Custom analytics and dashboards to communicate groundwater and conservation insights.' },
]

export default function Services() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.12),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-105 transition-transform duration-500 opacity-10" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)'}} />
              <div className="relative z-10">
                <s.icon className="w-10 h-10 text-cyan-300 drop-shadow" />
                <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-cyan-400/0 to-cyan-400/0 group-hover:via-cyan-400/10 group-hover:to-emerald-400/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
