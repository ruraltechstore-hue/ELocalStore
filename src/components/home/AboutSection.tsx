export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-6 uppercase">About eLocal Store</h2>
          <p className="text-lg text-brand-black leading-relaxed font-medium">
            "eLocal Store is a logistics and digital services franchise network that enables local entrepreneurs to operate a range of courier, delivery, e-commerce and essential services under one platform."
          </p>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-8"></div>
        </div>

        <div className="bg-brand-black text-brand-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Abstract geometric decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red rounded-bl-full opacity-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
                <span className="text-brand-red">One</span> Franchise.<br />
                <span className="text-brand-red">Multiple</span> Services.<br />
                <span className="text-brand-red">One</span> Connected Network.
              </h3>
              <p className="text-brand-gray-300 leading-relaxed mb-6">
                The franchise model connects local businesses and customers with leading e-commerce, courier, food delivery and quick-commerce platforms, helping franchise partners manage delivery-related services within their service area.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {['Logistics', 'Courier', 'Delivery', 'E-Commerce', 'Food Delivery', 'Quick Commerce', 'Digital Services', 'Mobility'].map((service, idx) => (
                <div key={idx} className="bg-brand-white/10 p-4 rounded border border-brand-white/20 hover:border-brand-red transition-colors group">
                  <span className="text-brand-white font-semibold group-hover:text-brand-red transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
