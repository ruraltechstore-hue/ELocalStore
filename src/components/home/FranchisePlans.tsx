import { Link } from 'react-router-dom';
import { franchisePlans } from '../../config/constants';
import { MapPin } from 'lucide-react';

export default function FranchisePlans() {
  return (
    <section id="franchise-plans" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-black mb-4 uppercase">Franchise Plans</h2>
          <p className="text-lg text-brand-gray-600">Choose the right plan for your business growth.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {franchisePlans.map((plan, idx) => (
            <div key={idx} className="bg-brand-white border-2 border-brand-black p-8 rounded-xl relative group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red opacity-0 group-hover:opacity-10 transition-opacity rounded-tr-xl rounded-bl-full"></div>
              
              <h3 className="text-2xl font-black uppercase tracking-wider mb-2">
                PLAN 0{idx + 1} <br/> <span className="text-brand-red">{plan.name}</span>
              </h3>
              
              <div className="my-6">
                <p className="text-sm font-bold text-brand-gray-600 uppercase tracking-widest mb-1">Investment</p>
                <p className="text-4xl font-black text-brand-black">₹{plan.basePrice.toLocaleString()} <span className="text-lg font-bold text-brand-gray-600">+ 18% GST</span></p>
              </div>

              <div className="flex items-center space-x-3 mb-6 bg-brand-gray-50 p-4 rounded border border-brand-gray-200">
                <MapPin className="text-brand-red w-6 h-6" />
                <p className="font-bold text-brand-black">{plan.description}</p>
              </div>

              <p className="text-xs text-brand-gray-600 mb-8 italic">Subject to pincode availability and approval.</p>

              <Link
                to="/apply"
                className={`block w-full text-center py-4 rounded font-bold uppercase transition-colors ${
                  idx === 1 
                  ? 'bg-brand-red text-brand-white hover:bg-brand-black' 
                  : 'bg-brand-black text-brand-white hover:bg-brand-red'
                }`}
              >
                {idx === 0 ? 'RESERVE PINCODE' : 'RESERVE PINCODES'}
              </Link>
            </div>
          ))}
        </div>

        {/* Plan Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-brand-gray-200 shadow-sm">
          <div className="bg-brand-black text-brand-white px-6 py-4 grid grid-cols-3 gap-4 font-bold uppercase tracking-wider text-sm">
            <div>Feature</div>
            <div className="text-center">Single Pincode</div>
            <div className="text-center text-brand-red">Multi-Pincode</div>
          </div>
          
          <div className="bg-brand-white">
            {[
              { label: 'Investment', single: '₹1,50,000 + 18% GST', multi: '₹2,00,000 + 18% GST' },
              { label: 'Coverage', single: '1 Preferred Pincode', multi: 'Up to 5 Pincodes' },
              { label: 'Pincode Availability', single: 'Subject to availability and approval', multi: 'Subject to availability and approval' },
              { label: 'Core Franchise Benefits', single: 'Included', multi: 'Included' },
              { label: 'Digital Dashboard', single: 'Included', multi: 'Included' },
              { label: 'Training & Guidance', single: 'Included', multi: 'Included' },
            ].map((row, idx) => (
              <div key={idx} className={`grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-4 border-b border-brand-gray-100 items-center ${idx % 2 === 0 ? 'bg-brand-gray-50' : ''}`}>
                <div className="font-bold text-brand-black">{row.label}</div>
                <div className="md:text-center text-brand-gray-600 font-medium"><span className="md:hidden font-bold mr-2">Single:</span>{row.single}</div>
                <div className="md:text-center text-brand-black font-bold"><span className="md:hidden font-bold mr-2">Multi:</span>{row.multi}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
