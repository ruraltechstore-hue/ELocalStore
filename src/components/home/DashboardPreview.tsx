export default function DashboardPreview() {
  return (
    <section id="digital-dashboard" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-black mb-4 uppercase">
            Manage Your Franchise Digitally
          </h2>
          <p className="text-lg text-brand-gray-600 max-w-3xl mx-auto">
            Manage your franchise operations with a digital dashboard designed to provide visibility and control over your business.
          </p>
        </div>

        <div className="bg-brand-gray-100 rounded-xl p-2 md:p-6 shadow-xl border border-brand-gray-200">
          {/* Dashboard UI Mockup */}
          <div className="flex flex-col md:flex-row bg-brand-white rounded-lg overflow-hidden shadow-sm border border-brand-gray-200 h-[600px]">
            
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-brand-black text-brand-white p-4 flex flex-col">
              <div className="text-xl font-bold mb-8 uppercase text-brand-white">Dashboard</div>
              <nav className="flex-1 space-y-2">
                {[
                  { name: 'Dashboard', active: true },
                  { name: 'Parcels', active: false },
                  { name: 'Riders', active: false },
                  { name: 'Transactions', active: false },
                  { name: 'Customers', active: false },
                  { name: 'Reports', active: false },
                  { name: 'Settings', active: false }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`px-4 py-3 rounded font-semibold text-sm transition-colors cursor-pointer ${
                      item.active ? 'bg-brand-red text-brand-white' : 'hover:bg-brand-gray-900 text-brand-gray-300'
                    }`}
                  >
                    {item.name}
                  </div>
                ))}
              </nav>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-brand-gray-50 p-6 overflow-y-auto">
              {/* Top Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Incoming Parcels', val: '2,405' },
                  { label: 'Delivered Today', val: '1,842' },
                  { label: 'Active Riders', val: '45' },
                  { label: 'Total Transactions', val: '₹4,520' }
                ].map((metric, idx) => (
                  <div key={idx} className="bg-brand-white p-4 rounded border border-brand-gray-200 shadow-sm">
                    <div className="text-brand-gray-600 text-xs font-bold uppercase mb-2">{metric.label}</div>
                    <div className="text-2xl font-black text-brand-black">{metric.val}</div>
                  </div>
                ))}
              </div>

              {/* Main Content Areas */}
              <div className="grid lg:grid-cols-3 gap-6 mb-6">
                <div className="lg:col-span-2 bg-brand-white rounded border border-brand-gray-200 p-6 shadow-sm h-64 relative overflow-hidden">
                  <h3 className="font-bold text-brand-black mb-4 uppercase">Parcel Overview</h3>
                  {/* Fake Chart */}
                  <div className="absolute bottom-0 left-0 right-0 h-40 flex items-end px-6 space-x-2">
                    {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                      <div key={i} className="flex-1 bg-brand-red/80 rounded-t" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
                <div className="bg-brand-white rounded border border-brand-gray-200 p-6 shadow-sm h-64">
                  <h3 className="font-bold text-brand-black mb-4 uppercase">Rider Activity</h3>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-brand-gray-200"></div>
                        <div className="flex-1">
                          <div className="h-3 bg-brand-gray-200 rounded w-full mb-2"></div>
                          <div className="h-2 bg-brand-gray-100 rounded w-2/3"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
