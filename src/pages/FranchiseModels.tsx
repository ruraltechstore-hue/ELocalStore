import { Shield, Target, Users, MapPin, CheckCircle, Store, Map, FileText, Briefcase, TrendingUp, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { franchisePlans, commissionPerEligibleParcel, agreementTenureYears } from '../config/constants';

export default function FranchiseModels() {
  const singlePlan = franchisePlans.find(p => p.id === 'single-pincode')!;
  const multiPlan = franchisePlans.find(p => p.id === 'multi-pincode')!;

  return (
    <div className="pt-32 min-h-screen bg-brand-white">
      {/* Hero Section */}
      <section className="bg-brand-black text-brand-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Store className="w-16 h-16 mx-auto mb-6 text-brand-red" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase text-brand-red">Franchise Plans</h1>
          <p className="text-xl text-brand-gray-300 font-medium max-w-3xl mx-auto">
            Become a part of the fastest-growing local service network. Two clear models designed for different scales of business ambition.
          </p>
        </div>
      </section>

      {/* Franchise Models Detail */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Single Pincode */}
            <div className="bg-brand-white border-2 border-brand-gray-200 rounded p-8 hover:border-brand-red transition-all shadow-sm">
              <div className="bg-brand-gray-50 w-16 h-16 rounded flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-brand-black" />
              </div>
              <h2 className="text-3xl font-extrabold uppercase text-brand-black mb-2">{singlePlan.name}</h2>
              <div className="text-brand-red text-2xl font-bold mb-6">₹{singlePlan.basePrice.toLocaleString()} <span className="text-sm text-brand-gray-600 font-medium">+ 18% GST</span></div>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <span className="text-brand-gray-600 font-medium">Exclusive rights to <strong>1 Preferred Pincode</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <span className="text-brand-gray-600 font-medium">Unlimited Delivery Riders access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <span className="text-brand-gray-600 font-medium">Subject to availability and management approval</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <span className="text-brand-gray-600 font-medium">Access to all 65+ digital and logistics services</span>
                </li>
              </ul>

              <Link
                to="/reserve-pincode"
                className="block w-full bg-brand-black text-brand-white text-center py-4 rounded font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
              >
                Reserve Pincode
              </Link>
            </div>

            {/* Multi Pincode */}
            <div className="bg-brand-white border-2 border-brand-red rounded p-8 relative shadow-lg">
              <div className="absolute top-0 right-0 bg-brand-red text-brand-white px-4 py-1 rounded-bl font-bold text-xs uppercase tracking-widest">
                Recommended for scale
              </div>
              <div className="bg-brand-red/10 w-16 h-16 rounded flex items-center justify-center mb-6">
                <Map className="w-8 h-8 text-brand-red" />
              </div>
              <h2 className="text-3xl font-extrabold uppercase text-brand-black mb-2">{multiPlan.name}</h2>
              <div className="text-brand-red text-2xl font-bold mb-6">₹{multiPlan.basePrice.toLocaleString()} <span className="text-sm text-brand-gray-600 font-medium">+ 18% GST</span></div>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <span className="text-brand-gray-600 font-medium">Exclusive rights to <strong>up to 5 Pincodes</strong></span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <span className="text-brand-gray-600 font-medium">Unlimited Delivery Riders access across all zones</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <span className="text-brand-gray-600 font-medium">Priority approval and onboarding support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <span className="text-brand-gray-600 font-medium">Highest volume processing capacity</span>
                </li>
              </ul>

              <Link
                to="/reserve-pincode"
                className="block w-full bg-brand-red text-brand-white text-center py-4 rounded font-bold uppercase tracking-widest hover:bg-brand-black transition-colors"
              >
                Reserve Pincodes
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Plan Comparison */}
      <section className="py-24 bg-brand-gray-50 border-t border-brand-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 text-brand-black">Plan Comparison</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto"></div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b-2 border-brand-gray-200 bg-brand-white text-brand-black font-extrabold uppercase tracking-widest w-1/3">Feature</th>
                  <th className="p-4 border-b-2 border-brand-gray-200 bg-brand-white text-brand-black font-extrabold uppercase tracking-widest w-1/3 text-center">{singlePlan.name}</th>
                  <th className="p-4 border-b-2 border-brand-red bg-brand-red text-brand-white font-extrabold uppercase tracking-widest w-1/3 text-center rounded-t">{multiPlan.name}</th>
                </tr>
              </thead>
              <tbody className="bg-brand-white">
                <tr>
                  <td className="p-4 border-b border-brand-gray-100 font-bold text-brand-black">Investment (Base)</td>
                  <td className="p-4 border-b border-brand-gray-100 text-center font-medium text-brand-gray-600">₹{singlePlan.basePrice.toLocaleString()}</td>
                  <td className="p-4 border-b border-brand-gray-100 text-center font-bold text-brand-red">₹{multiPlan.basePrice.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-brand-gray-100 font-bold text-brand-black">Territory Coverage</td>
                  <td className="p-4 border-b border-brand-gray-100 text-center font-medium text-brand-gray-600">{singlePlan.pincodeLimit} Pincode</td>
                  <td className="p-4 border-b border-brand-gray-100 text-center font-bold text-brand-red">Up to {multiPlan.pincodeLimit} Pincodes</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-brand-gray-100 font-bold text-brand-black">Rider Access</td>
                  <td className="p-4 border-b border-brand-gray-100 text-center font-medium text-brand-gray-600">Unlimited</td>
                  <td className="p-4 border-b border-brand-gray-100 text-center font-bold text-brand-red">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-brand-gray-100 font-bold text-brand-black">Service Access</td>
                  <td className="p-4 border-b border-brand-gray-100 text-center font-medium text-brand-gray-600">Full 65+ Portfolio</td>
                  <td className="p-4 border-b border-brand-gray-100 text-center font-bold text-brand-red">Full 65+ Portfolio</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-brand-gray-100 font-bold text-brand-black">Dashboard Analytics</td>
                  <td className="p-4 border-b border-brand-gray-100 text-center font-medium text-brand-gray-600">Standard</td>
                  <td className="p-4 border-b border-brand-gray-100 text-center font-bold text-brand-red">Advanced Multi-Zone</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits & Commission */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Briefcase className="w-8 h-8 text-brand-red" />
                <h2 className="text-3xl font-extrabold uppercase text-brand-black">Franchise Benefits</h2>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="bg-brand-gray-50 p-2 rounded shrink-0">
                    <Target className="w-6 h-6 text-brand-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black uppercase mb-1">Zero Royalty Model</h4>
                    <p className="text-brand-gray-600 font-medium text-sm">You keep what you earn. We don't charge monthly royalty fees on your revenue.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-brand-gray-50 p-2 rounded shrink-0">
                    <Users className="w-6 h-6 text-brand-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black uppercase mb-1">Comprehensive Training</h4>
                    <p className="text-brand-gray-600 font-medium text-sm">Full onboarding training provided for you and your staff on the unified platform.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-brand-gray-50 p-2 rounded shrink-0">
                    <Shield className="w-6 h-6 text-brand-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black uppercase mb-1">Territory Protection</h4>
                    <p className="text-brand-gray-600 font-medium text-sm">Exclusive rights to your approved pincodes ensure you face no internal competition.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-6">
                <DollarSign className="w-8 h-8 text-brand-red" />
                <h2 className="text-3xl font-extrabold uppercase text-brand-black">Commission & Agreement</h2>
              </div>
              
              <div className="bg-brand-gray-50 border border-brand-gray-200 rounded p-6 mb-6">
                <h4 className="font-bold text-brand-black uppercase mb-2">Delivery Commissions</h4>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl font-extrabold text-brand-red">₹{commissionPerEligibleParcel}</span>
                  <span className="text-brand-gray-600 font-medium">per eligible parcel delivery</span>
                </div>
                <p className="text-sm text-brand-gray-500 italic">*Subject to terms & conditions</p>
              </div>

              <div className="bg-brand-gray-50 border border-brand-gray-200 rounded p-6">
                <h4 className="font-bold text-brand-black uppercase mb-2">Agreement Terms</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 text-sm">
                    <FileText className="w-4 h-4 text-brand-black" />
                    <span className="text-brand-gray-600 font-medium">Standard {agreementTenureYears}-Year Agreement Tenure</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm">
                    <TrendingUp className="w-4 h-4 text-brand-black" />
                    <span className="text-brand-gray-600 font-medium">Renewable upon satisfactory performance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-black text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase">Ready to Secure Your Pincode?</h2>
          <p className="text-xl text-brand-gray-300 mb-10 font-medium">
            Check the availability of your preferred territory and begin the application process today. Pincodes are allocated on a first-come, first-served basis.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              to="/reserve-pincode"
              className="bg-brand-red text-brand-white px-10 py-5 rounded font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              Check Availability
            </Link>
            <Link
              to="/apply"
              className="border-2 border-brand-white text-brand-white px-10 py-5 rounded font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              Start Application
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
