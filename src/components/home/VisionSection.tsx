export default function VisionSection() {
  return (
    <section id="vision" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-black mb-4 uppercase">
            Our Vision
          </h2>
          <p className="text-xl text-brand-black max-w-4xl mx-auto font-medium">
            "To build a reliable and accessible local service network that connects customers, businesses, logistics providers and digital services through a single franchise ecosystem."
          </p>
        </div>

        {/* Network Graphic UI */}
        <div className="relative py-12 max-w-5xl mx-auto hidden md:block">
          <div className="flex justify-between items-center relative z-10">
            <div className="w-48 bg-brand-white border-2 border-brand-black p-4 text-center rounded shadow-lg font-bold">
              CUSTOMERS
            </div>
            <div className="w-8 h-0.5 bg-brand-red"></div>
            <div className="w-48 bg-brand-white border-2 border-brand-black p-4 text-center rounded shadow-lg font-bold">
              LOCAL BUSINESSES
            </div>
            <div className="w-8 h-0.5 bg-brand-red"></div>
            <div className="w-48 bg-brand-white border-2 border-brand-black p-4 text-center rounded shadow-lg font-bold">
              LOGISTICS & DELIVERY
            </div>
            <div className="w-8 h-0.5 bg-brand-red"></div>
            <div className="w-48 bg-brand-white border-2 border-brand-black p-4 text-center rounded shadow-lg font-bold">
              DIGITAL SERVICES
            </div>
          </div>
          
          <div className="w-0.5 h-16 bg-brand-red mx-auto my-4 relative z-0"></div>
          
          <div className="mx-auto w-64 bg-brand-black text-brand-white border-4 border-brand-red p-6 text-center rounded shadow-2xl font-black uppercase text-xl z-10 relative">
            ONE CONNECTED ECOSYSTEM
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {[
            { title: 'Customers', desc: 'Serving everyday needs with greater convenience.' },
            { title: 'Local Businesses', desc: 'Empowering local entrepreneurs and communities.' },
            { title: 'Logistics & Delivery', desc: 'Connecting through trusted logistics and delivery partners.' },
            { title: 'Digital Services', desc: 'Providing essential digital and online services.' },
            { title: 'One Connected Ecosystem', desc: 'Bringing everything together for a stronger tomorrow.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-brand-gray-50 border border-brand-gray-200 p-6 rounded shadow-sm text-center">
              <h3 className="font-bold text-brand-black mb-2 uppercase text-sm">{item.title}</h3>
              <p className="text-brand-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
