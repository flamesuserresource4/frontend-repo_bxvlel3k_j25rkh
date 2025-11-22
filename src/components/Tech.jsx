export default function Tech() {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Technology & Approach</h2>
            <p className="mt-4 text-slate-300">We fuse machine learning with decades of field experience. Our ML pipelines process ERT profiles, DEM-derived hydrological indices, and remote sensing layers to produce actionable subsurface probability maps.</p>
            <ul className="mt-6 space-y-2 text-slate-300 list-disc list-inside">
              <li>AI-assisted aquifer probability mapping</li>
              <li>Terrain analysis from DEMs and Lidar point clouds</li>
              <li>Zero-Stressed Environment methodology for ethical extraction</li>
            </ul>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-400/10" />
            <img alt="Point Cloud" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(34,211,238,0.25),transparent_40%)] mix-blend-screen" />
          </div>
        </div>
      </div>
    </section>
  )
}
