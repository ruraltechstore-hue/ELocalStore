import { useState } from 'react';
import { MapPin, CheckCircle, XCircle, Loader } from 'lucide-react';

export default function PincodeChecker() {
  const [pincode, setPincode] = useState('');
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<{ available: boolean; message: string } | null>(null);

  const coveredPincodes = [
    '560001', '560002', '560003', '560004', '560005',
    '110001', '110002', '110003', '110004', '110005',
    '400001', '400002', '400003', '400004', '400005',
    '700001', '700002', '700003', '700004', '700005',
    '600001', '600002', '600003', '600004', '600005'
  ];

  const handleCheck = () => {
    if (pincode.length !== 6) {
      setResult({ available: false, message: 'Please enter a valid 6-digit pincode' });
      return;
    }

    setChecking(true);
    setTimeout(() => {
      const isAvailable = coveredPincodes.includes(pincode);
      setResult({
        available: isAvailable,
        message: isAvailable
          ? `Great! ${pincode} is available for franchise. Apply now to secure your territory!`
          : `${pincode} is not yet covered. However, we're expanding rapidly! Contact us to express interest.`
      });
      setChecking(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-green-100 p-3 rounded-xl">
          <MapPin className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold">Pincode Availability Checker</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Enter Your Pincode
          </label>
          <div className="flex space-x-3">
            <input
              type="text"
              value={pincode}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                setPincode(value);
                setResult(null);
              }}
              placeholder="Enter 6-digit pincode"
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg"
              maxLength={6}
            />
            <button
              onClick={handleCheck}
              disabled={checking || pincode.length !== 6}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {checking ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                'Check'
              )}
            </button>
          </div>
        </div>

        {result && (
          <div
            className={`rounded-xl p-6 flex items-start space-x-4 ${
              result.available
                ? 'bg-green-50 border-2 border-green-200'
                : 'bg-amber-50 border-2 border-amber-200'
            }`}
          >
            {result.available ? (
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
            ) : (
              <XCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            )}
            <div className="flex-1">
              <p className={`font-semibold mb-2 ${result.available ? 'text-green-900' : 'text-amber-900'}`}>
                {result.available ? 'Territory Available!' : 'Not Available Yet'}
              </p>
              <p className={result.available ? 'text-green-800' : 'text-amber-800'}>
                {result.message}
              </p>
              {result.available ? (
                <a
                  href="/apply"
                  className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
                >
                  Apply Now
                </a>
              ) : (
                <a
                  href="/contact"
                  className="inline-block mt-4 bg-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-700 transition-colors"
                >
                  Contact Us
                </a>
              )}
            </div>
          </div>
        )}

        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Currently covering 500+ pincodes across India</strong>
          </p>
          <p className="text-xs text-gray-600">
            Major cities: Bangalore, Delhi, Mumbai, Kolkata, Chennai, Hyderabad, Pune, Ahmedabad, Jaipur, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
