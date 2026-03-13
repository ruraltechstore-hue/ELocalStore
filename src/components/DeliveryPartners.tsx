import { Truck, Package, UtensilsCrossed, Zap, ShoppingBag, Car, Navigation, Package2 } from 'lucide-react';

interface Partner {
  name: string;
  icon: any;
  color: string;
}

export default function DeliveryPartners() {
  const partners: Partner[] = [
    { name: 'Flipkart', icon: ShoppingBag, color: '#2874F0' },
    { name: 'Swiggy', icon: UtensilsCrossed, color: '#FC8019' },
    { name: 'Zomato', icon: UtensilsCrossed, color: '#E23744' },
    { name: 'Zepto', icon: Zap, color: '#7C3AED' },
    { name: 'Blinkit', icon: Zap, color: '#F8CB46' },
    { name: 'Ola', icon: Car, color: '#000000' },
    { name: 'Uber', icon: Navigation, color: '#000000' },
    { name: 'Porter', icon: Truck, color: '#4A90E2' },
    { name: 'EcomExpress', icon: Package2, color: '#FF6B35' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Our Delivery Partners
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by India's leading brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.slice(0, 5).map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div
                className="w-16 h-16 mb-4 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${partner.color}15` }}
              >
                <partner.icon
                  className="w-8 h-8 transition-colors duration-300"
                  style={{ color: partner.color }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 lg:max-w-5xl lg:mx-auto">
          {partners.slice(5).map((partner, index) => (
            <div
              key={index + 5}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div
                className="w-16 h-16 mb-4 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${partner.color}15` }}
              >
                <partner.icon
                  className="w-8 h-8 transition-colors duration-300"
                  style={{ color: partner.color }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
