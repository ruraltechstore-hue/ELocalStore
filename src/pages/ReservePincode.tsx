import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Search, CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';

export default function ReservePincode() {
  const navigate = useNavigate();
  const [pincode, setPincode] = useState('');
  const [status, setStatus] = useState<'idle' | 'searching' | 'available' | 'unavailable' | 'pending'>('idle');

  const checkAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.length !== 6) return;
    
    setStatus('searching');
    
    // Simulate backend check
    setTimeout(() => {
      // Mock logic: randomly assign status for demo purposes
      const lastDigit = parseInt(pincode.charAt(5));
      if (lastDigit < 4) setStatus('available');
      else if (lastDigit < 7) setStatus('unavailable');
      else setStatus('pending');
    }, 1500);
  };

  return (
    <div className="pt-32 min-h-screen bg-brand-white">
      <section className="bg-brand-black text-brand-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <MapPin className="w-16 h-16 mx-auto mb-6 text-brand-red" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase">Reserve Your Preferred Pincode</h1>
          <p className="text-xl text-brand-gray-300 font-medium max-w-2xl mx-auto">
            Check availability and secure exclusive franchise rights for your territory.
          </p>
        </div>
      </section>

      <section className="py-24 bg-brand-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-brand-white border-2 border-brand-gray-200 rounded p-8 shadow-lg">
            <form onSubmit={checkAvailability} className="mb-8">
              <label className="block text-brand-black font-bold uppercase mb-4 text-lg">
                Enter 6-digit Pincode
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    maxLength={6}
                    pattern="[0-9]{6}"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                    placeholder="e.g. 500072"
                    className="w-full pl-12 pr-4 py-4 rounded text-xl font-bold border-2 border-brand-gray-200 focus:outline-none focus:border-brand-red text-brand-black tracking-widest"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={pincode.length !== 6 || status === 'searching'}
                  className="bg-brand-black text-brand-white px-8 py-4 rounded font-bold hover:bg-brand-red transition-colors disabled:opacity-50 uppercase tracking-wider flex items-center justify-center min-w-[220px]"
                >
                  {status === 'searching' ? (
                    <span className="flex items-center">
                      <Search className="w-5 h-5 mr-2 animate-spin" /> Checking...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Search className="w-5 h-5 mr-2" /> Check Availability
                    </span>
                  )}
                </button>
              </div>
            </form>

            {status !== 'idle' && status !== 'searching' && (
              <div className="border-t border-brand-gray-200 pt-8 mt-8 animate-fade-up">
                {status === 'available' && (
                  <div>
                    <div className="flex items-center space-x-3 text-green-600 mb-6">
                      <CheckCircle className="w-8 h-8" />
                      <h3 className="text-2xl font-bold uppercase">Pincode {pincode} is Available</h3>
                    </div>
                    <div className="bg-brand-gray-50 border border-brand-gray-200 p-6 rounded mb-8">
                      <p className="text-brand-gray-600 font-medium mb-4">
                        Great news! This pincode is currently open for franchise allocation. You can proceed with the application process to secure it.
                      </p>
                    </div>
                    <button
                      onClick={() => navigate('/apply', { state: { pincode } })}
                      className="w-full bg-brand-red text-brand-white py-4 rounded font-bold uppercase hover:bg-brand-black transition-colors"
                    >
                      Proceed to Application
                    </button>
                  </div>
                )}

                {status === 'unavailable' && (
                  <div>
                    <div className="flex items-center space-x-3 text-brand-red mb-6">
                      <XCircle className="w-8 h-8" />
                      <h3 className="text-2xl font-bold uppercase">Pincode {pincode} is Unavailable</h3>
                    </div>
                    <div className="bg-brand-red/5 border border-brand-red/20 p-6 rounded mb-8">
                      <p className="text-brand-gray-600 font-medium">
                        This pincode is already allocated to an active franchise partner. Please check a neighboring pincode.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'pending' && (
                  <div>
                    <div className="flex items-center space-x-3 text-amber-500 mb-6">
                      <Clock className="w-8 h-8" />
                      <h3 className="text-2xl font-bold uppercase">Approval Required</h3>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 p-6 rounded mb-8">
                      <p className="text-brand-gray-600 font-medium mb-4">
                        This pincode is in a high-demand area or currently pending finalization with another applicant. You may still apply, but allocation is subject to management approval.
                      </p>
                    </div>
                    <button
                      onClick={() => navigate('/apply', { state: { pincode } })}
                      className="w-full bg-brand-black text-brand-white py-4 rounded font-bold uppercase hover:bg-brand-gray-800 transition-colors"
                    >
                      Proceed to Application Anyway
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          
        </div>
      </section>
    </div>
  );
}
