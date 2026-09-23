import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="pt-40 pb-8 bg-brand-white relative overflow-hidden">
      {/* Decorative geometric shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-bl-full -z-10" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-black/5 rounded-tr-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight uppercase">
              Start Your Own <span className="text-brand-red">Multi-Service</span> Business
            </h1>
            <p className="text-base md:text-lg mb-4 font-semibold text-brand-black">
              One Platform. Multiple Services. One Powerful Business Opportunity.
            </p>
            <div className="flex flex-wrap gap-3 mb-6 text-xs md:text-sm font-bold text-brand-gray-600">
              <span className="flex items-center"><span className="w-2 h-2 bg-brand-red rounded-full mr-1.5"></span> RIGHT INVESTMENT</span>
              <span className="flex items-center"><span className="w-2 h-2 bg-brand-red rounded-full mr-1.5"></span> GROWING DEMAND</span>
              <span className="flex items-center"><span className="w-2 h-2 bg-brand-red rounded-full mr-1.5"></span> GROW WITH US</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/apply"
                className="bg-brand-red text-brand-white px-6 py-4 rounded font-bold hover:bg-brand-black transition-colors shadow-lg"
              >
                EXPLORE FRANCHISE
              </Link>
              <Link
                to="/reserve-pincode"
                className="border-2 border-brand-black text-brand-black px-6 py-4 rounded font-bold hover:bg-brand-black hover:text-brand-white transition-colors"
              >
                RESERVE PINCODE
              </Link>
              <a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-black text-brand-white px-6 py-4 rounded font-bold hover:bg-brand-red transition-colors shadow-lg"
              >
                DOWNLOAD BROCHURE
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Visual composition mockup using CSS/HTML for a premium look instead of a missing image */}
            <div className="bg-brand-black rounded-2xl p-8 shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-red rounded-xl rotate-12 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-gray-200 rounded-full -z-10" />
              
              <div className="flex justify-between items-start mb-8 border-b border-brand-gray-600 pb-4">
                <div>
                  <h3 className="text-brand-white text-lg font-bold">Logistics & Digital Services</h3>
                  <p className="text-brand-gray-300 text-sm">Franchise Network Dashboard</p>
                </div>
                <div className="w-3 h-3 bg-brand-red rounded-full animate-pulse" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-brand-white/10 rounded p-4">
                  <p className="text-brand-gray-300 text-xs uppercase mb-1">Active Deliveries</p>
                  <p className="text-brand-white text-2xl font-bold">142</p>
                </div>
                <div className="bg-brand-red/20 rounded p-4 border border-brand-red/30">
                  <p className="text-brand-red text-xs uppercase mb-1">New Parcels</p>
                  <p className="text-brand-red text-2xl font-bold">+56</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-12 bg-brand-white/10 rounded flex items-center px-4">
                  <div className="w-8 h-8 bg-brand-white/20 rounded mr-3"></div>
                  <div className="h-2 w-24 bg-brand-white/40 rounded"></div>
                </div>
                <div className="h-12 bg-brand-white/10 rounded flex items-center px-4">
                  <div className="w-8 h-8 bg-brand-white/20 rounded mr-3"></div>
                  <div className="h-2 w-32 bg-brand-white/40 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
