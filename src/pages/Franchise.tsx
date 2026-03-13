import { Link } from 'react-router-dom';
import { Check, Users, MapPin, TrendingUp, Award, Clock, Headphones as HeadphonesIcon, Zap, Package, Shield, BarChart, Smartphone, Globe, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Franchise() {
  const [remainingSlots, setRemainingSlots] = useState(0);

  useEffect(() => {
    const animateCounter = (setter: (val: number) => void, target: number, duration: number) => {
      let current = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 16);
    };

    animateCounter(setRemainingSlots, 47, 2000);
  }, []);

  const whyChooseFeatures = [
    {
      icon: Package,
      title: '65+ Multi Services',
      description: 'One platform for all customer needs',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: TrendingUp,
      title: 'High Profit Margin',
      description: 'Attractive commission structure',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: BarChart,
      title: 'Fast Growing Network',
      description: '1000+ successful franchises',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: HeadphonesIcon,
      title: 'Complete Training',
      description: 'Technical & business support',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    },
    {
      icon: Smartphone,
      title: 'Digital Dashboard',
      description: 'Automation & real-time tracking',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Globe,
      title: 'Marketing Support',
      description: 'Materials & campaign assistance',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    }
  ];

  const comparisonData = [
    { feature: 'Investment Amount', agent: '₹70,000', distributor: '₹1,00,000', super: '₹2,00,000' },
    { feature: 'GST Charges', agent: '₹12,600', distributor: '₹18,000', super: '₹36,000' },
    { feature: 'Total Investment', agent: '₹82,600', distributor: '₹1,18,000', super: '₹2,36,000' },
    { feature: 'Expected Monthly Earnings', agent: '₹30K - ₹50K', distributor: '₹1L - ₹1.5L', super: '₹2.5L - ₹5L' },
    { feature: 'ROI Period', agent: '8-12 months', distributor: '6-10 months', super: '5-8 months' },
    { feature: 'Pincode Coverage', agent: '1', distributor: '5', super: 'Entire City' },
    { feature: 'Delivery Riders', agent: '5', distributor: '15', super: 'Unlimited' },
    { feature: 'Sub-Agent Rights', agent: false, distributor: true, super: true },
    { feature: 'Commission Level', agent: 'Standard', distributor: 'High', super: 'Maximum' },
    { feature: 'Territory Rights', agent: false, distributor: false, super: true },
    { feature: 'Branding Options', agent: 'Basic', distributor: 'Standard', super: 'Custom' },
    { feature: 'Customer Support', agent: '24/7', distributor: 'Priority', super: 'Dedicated' }
  ];

  const franchiseModels = [
    {
      name: 'Agent Franchise',
      investment: '₹70,000',
      gst: '18% GST',
      total: '₹82,600',
      riders: '5 Delivery Riders',
      coverage: '1 Pincode Coverage',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'All 65+ Services Included',
        'Complete Training Program',
        'Marketing Support Materials',
        'Mobile & Web Dashboard',
        'Technical Support',
        'Monthly Commission Payout',
        'Free Uniform for Riders',
        'Digital Payment Solutions'
      ],
      earning: '₹30,000 - ₹50,000/month',
      roi: '8-12 months'
    },
    {
      name: 'Distributor Franchise',
      investment: '₹1,00,000',
      gst: '18% GST',
      total: '₹1,18,000',
      riders: '15 Delivery Riders',
      coverage: '5 Pincode Coverage',
      gradient: 'from-indigo-500 to-purple-500',
      popular: true,
      features: [
        'All Agent Franchise Benefits',
        'Priority Customer Support',
        'Higher Commission Structure',
        'Sub-Agent Management Rights',
        'Advanced Analytics Dashboard',
        'Dedicated Account Manager',
        'Marketing Campaign Support',
        'Bulk Order Processing'
      ],
      earning: '₹1,00,000 - ₹1,50,000/month',
      roi: '6-10 months'
    },
    {
      name: 'Super Distributor Franchise',
      investment: '₹2,00,000',
      gst: '18% GST',
      total: '₹2,36,000',
      riders: 'Unlimited Delivery Riders',
      coverage: 'Entire City/Location',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'Master Franchise Rights',
        'Unlimited Sub-Distributors',
        'Maximum Commission Tier',
        'Exclusive Territory Rights',
        'White Label Solutions',
        'Custom Branding Options',
        'Priority API Access',
        'Quarterly Business Review'
      ],
      earning: '₹2,50,000 - ₹5,00,000/month',
      roi: '5-8 months'
    }
  ];


  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Franchise Investment Plans</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Choose the perfect franchise model that matches your investment capacity and business goals
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose eLocal Store</h2>
            <p className="text-xl text-gray-600">Built for success from day one</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Detailed Comparison Table</h2>
            <p className="text-xl text-gray-600">Compare features across all franchise models</p>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <th className="text-left p-6 font-semibold sticky left-0 bg-gradient-to-r from-indigo-600 to-purple-600">Features</th>
                    <th className="text-center p-6 font-semibold">Agent Franchise</th>
                    <th className="text-center p-6 font-semibold bg-purple-700 relative">
                      <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-purple-900 text-xs py-1 font-bold">
                        MOST POPULAR
                      </div>
                      <div className="mt-4">Distributor Franchise</div>
                    </th>
                    <th className="text-center p-6 font-semibold">Super Distributor</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="border-b hover:bg-indigo-50 transition-colors">
                      <td className="p-6 font-semibold text-gray-900 sticky left-0 bg-white">{row.feature}</td>
                      <td className="p-6 text-center">
                        {typeof row.agent === 'boolean' ? (
                          row.agent ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold text-gray-700">{row.agent}</span>
                        )}
                      </td>
                      <td className="p-6 text-center bg-purple-50">
                        {typeof row.distributor === 'boolean' ? (
                          row.distributor ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold text-indigo-700">{row.distributor}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof row.super === 'boolean' ? (
                          row.super ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="font-semibold text-gray-700">{row.super}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Clock className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl font-bold mb-6">Limited Franchise Slots Available!</h2>
          <p className="text-xl mb-4 text-white/90">
            Only limited franchises are available per location to maintain quality service and market exclusivity.
          </p>
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 mb-8 inline-block">
            <div className="text-6xl font-bold mb-2">{remainingSlots}</div>
            <p className="text-lg text-white/90">Slots Remaining in Your Area</p>
          </div>
          <p className="text-lg mb-8 text-white/90">
            Don't miss this opportunity to secure your territory and build a thriving business!
          </p>
          <Link
            to="/apply"
            className="inline-block bg-white text-indigo-600 px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Apply For Franchise Now
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {franchiseModels.map((model, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
                  model.popular ? 'ring-4 ring-indigo-500 scale-105' : ''
                }`}
              >
                {model.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-indigo-500 text-white text-center py-2 font-semibold text-sm">
                    🌟 MOST POPULAR CHOICE
                  </div>
                )}

                <div className={`bg-gradient-to-r ${model.gradient} text-white p-8 ${model.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-3xl font-bold mb-4">{model.name}</h3>
                  <div className="mb-6">
                    <div className="text-2xl mb-1">Investment: {model.investment}</div>
                    <div className="text-lg text-white/80">+ {model.gst}</div>
                    <div className="text-4xl font-bold mt-2 border-t-2 border-white/30 pt-4">
                      {model.total}
                    </div>
                    <div className="text-sm text-white/80 mt-1">Total Investment</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                      <Users className="w-6 h-6" />
                      <span className="font-semibold">{model.riders}</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                      <MapPin className="w-6 h-6" />
                      <span className="font-semibold">{model.coverage}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Expected Monthly Earning</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{model.earning}</div>
                    <div className="text-sm text-gray-600 mt-1">ROI Period: {model.roi}</div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-4 text-lg">What's Included:</h4>
                    <ul className="space-y-3">
                      {model.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Link
                      to="/apply"
                      className={`block w-full bg-gradient-to-r ${model.gradient} text-white text-center py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all`}
                    >
                      Apply for {model.name}
                    </Link>
                    <a
                      href="https://rzp.io/rzp/2h9roex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                    >
                      Pay Now - Secure Payment
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
