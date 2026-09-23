import { useState } from 'react';
import { Search, MapPin, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PincodeBooking() {
  const [pincode, setPincode] = useState('');
  const [status, setStatus] = useState<'idle' | 'searching' | 'available' | 'unavailable' | 'pending'>('idle');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length !== 6) return;
    
    setStatus('searching');
    // Simulate backend check
    setTimeout(() => {
      // Just a mockup logic
      if (pincode.startsWith('5')) {
        setStatus('available');
      } else if (pincode.startsWith('4')) {
        setStatus('pending');
      } else {
        setStatus('unavailable');
      }
    }, 1500);
  };

  return (
    <section className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-black mb-4 uppercase">
            Reserve Your Preferred Pincode
          </h2>
          <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            Choose your preferred service area and begin your eLocal Store franchise journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Pincode Search UI */}
          <div className="bg-brand-gray-50 border border-brand-gray-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 uppercase">Check Availability</h3>
            
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-brand-gray-600" />
                </div>
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  className="block w-full pl-10 pr-3 py-4 border-2 border-brand-gray-200 rounded bg-brand-white text-brand-black placeholder-brand-gray-600 focus:outline-none focus:ring-0 focus:border-brand-red text-lg font-bold"
                  placeholder="Enter 6-digit Pincode"
                />
                <button
                  type="submit"
                  disabled={pincode.length !== 6 || status === 'searching'}
                  className="absolute inset-y-2 right-2 bg-brand-red text-brand-white px-6 rounded font-bold hover:bg-brand-black transition-colors disabled:opacity-50"
                >
                  {status === 'searching' ? 'Checking...' : 'Search'}
                </button>
              </div>
            </form>

            {status !== 'idle' && status !== 'searching' && (
              <div className={`p-4 rounded border ${
                status === 'available' ? 'bg-green-50 border-green-200' :
                status === 'pending' ? 'bg-yellow-50 border-yellow-200' :
                'bg-red-50 border-red-200'
              }`}>
                <div className="flex items-center">
                  {status === 'available' && <CheckCircle className="w-6 h-6 text-green-600 mr-3" />}
                  {status === 'pending' && <Clock className="w-6 h-6 text-yellow-600 mr-3" />}
                  {status === 'unavailable' && <Search className="w-6 h-6 text-brand-red mr-3" />}
                  
                  <div>
                    <h4 className={`font-bold uppercase ${
                      status === 'available' ? 'text-green-800' :
                      status === 'pending' ? 'text-yellow-800' :
                      'text-brand-red'
                    }`}>
                      {status === 'available' ? 'Available' :
                       status === 'pending' ? 'Requires Approval' :
                       'Unavailable'}
                    </h4>
                    <p className="text-sm mt-1 text-brand-gray-900">
                      {status === 'available' ? 'This pincode is available for reservation.' :
                       status === 'pending' ? 'This pincode is currently pending approval.' :
                       'This pincode is already reserved or unavailable.'}
                    </p>
                  </div>
                </div>
                
                {status === 'available' && (
                  <div className="mt-4 pt-4 border-t border-green-200">
                    <Link
                      to="/apply"
                      className="block w-full text-center bg-brand-red text-brand-white py-3 rounded font-bold uppercase hover:bg-brand-black transition-colors"
                    >
                      Reserve Now
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            <p className="text-xs text-brand-gray-600 mt-4 italic text-center">
              Subject to pincode availability and approval.
            </p>
          </div>

          {/* Booking Flow */}
          <div>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Select Pincode', desc: 'Choose your preferred available pincode.' },
                { step: '02', title: 'Check Availability', desc: 'Verify if the territory is open.' },
                { step: '03', title: 'Select Franchise Plan', desc: 'Single Pincode OR Multi-Pincode' },
                { step: '04', title: 'Pay Advance', desc: 'Pay the applicable advance amount to reserve the selected pincode.' },
                { step: '05', title: 'Complete Remaining Payment', desc: 'Complete the remaining payment within 5–8 days from the booking date.' },
                { step: '06', title: 'Franchise Activation', desc: 'Activation and onboarding will be processed according to applicable company procedures.' }
              ].map((item, idx) => (
                <div key={idx} className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-10 h-10 rounded-full bg-brand-black text-brand-white font-bold flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    {idx < 5 && <div className="w-0.5 h-full bg-brand-gray-200 my-2"></div>}
                  </div>
                  <div className="pb-4">
                    <h4 className="font-bold text-brand-black uppercase">{item.title}</h4>
                    <p className="text-brand-gray-600 text-sm mt-1 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
