export default function PartnerNetwork() {
  const partners = [
    { name: 'Flipkart' },
    { name: 'Shadowfax' },
    { name: 'Zepto' },
    { name: 'Zomato' },
    { name: 'Swiggy' },
    { name: 'Uber' },
    { name: 'Rapido' },
  ];

  return (
    <section id="partner-network" className="py-20 bg-brand-gray-50 border-y border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4 uppercase">
          Connected With <span className="text-brand-red">Leading Platforms</span>
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-brand-gray-600 mb-12">
          eLocal Store connects franchise partners with leading platforms across e-commerce, courier, food delivery, quick-commerce and mobility services.
        </p>

        <div className="flex flex-wrap justify-center gap-6 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-brand-white px-8 py-6 rounded border border-brand-gray-200 shadow-sm hover:shadow-md transition-shadow min-w-[160px]"
            >
              <h3 className="text-xl font-extrabold text-brand-black tracking-tight">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
