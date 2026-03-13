import { Link } from 'react-router-dom';
import {
  TrendingUp, Users, Shield, ChevronRight,
  Package, CreditCard, Truck, ShoppingCart,
  GraduationCap, FileText, Plane, Star
} from 'lucide-react';
import { useState, useEffect } from 'react';
import DeliveryPartners from '../components/DeliveryPartners';

export default function Home() {
  const [franchises, setFranchises] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [pincodes, setPincodes] = useState(0);
  const [services, setServices] = useState(0);

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

    animateCounter(setFranchises, 1000, 2000);
    animateCounter(setTransactions, 50000, 2000);
    animateCounter(setPincodes, 500, 2000);
    animateCounter(setServices, 65, 2000);
  }, []);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'Started with Agent franchise 6 months ago. Now earning ₹40,000+ monthly. Best decision ever!',
      franchise: 'Agent Franchise'
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'Distributor franchise changed my life. Managing 5 pincodes with consistent income of ₹1.5L monthly.',
      franchise: 'Distributor Franchise'
    },
    {
      name: 'Amit Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      text: 'Super Distributor covering entire city. Monthly revenue crossed ₹3L. Excellent support from team!',
      franchise: 'Super Distributor'
    }
  ];

  const serviceIcons = [
    { icon: CreditCard, name: 'Banking', color: 'text-blue-500' },
    { icon: FileText, name: 'Tax Services', color: 'text-green-500' },
    { icon: Plane, name: 'Travel', color: 'text-indigo-500' },
    { icon: ShoppingCart, name: 'E-Commerce', color: 'text-purple-500' },
    { icon: GraduationCap, name: 'Education', color: 'text-red-500' },
    { icon: Truck, name: 'Logistics', color: 'text-orange-500' },
  ];

  const franchiseModels = [
    {
      name: 'Agent Franchise',
      price: '₹82,600',
      gst: '(₹70,000 + 18% GST)',
      riders: '5 Delivery Riders',
      coverage: '1 Pincode Coverage',
      features: [
        'All 65+ Services',
        'Training & Support',
        'Marketing Materials',
        'Mobile App Access'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Distributor Franchise',
      price: '₹1,18,000',
      gst: '(₹1,00,000 + 18% GST)',
      riders: '15 Delivery Riders',
      coverage: '5 Pincode Coverage',
      features: [
        'All Agent Benefits',
        'Priority Support',
        'Higher Commission',
        'Sub-Agent Network'
      ],
      gradient: 'from-indigo-500 to-purple-500',
      popular: true
    },
    {
      name: 'Super Distributor',
      price: '₹2,36,000',
      gst: '(₹2,00,000 + 18% GST)',
      riders: 'Unlimited Riders',
      coverage: 'Entire City',
      features: [
        'Master Franchise Rights',
        'Unlimited Sub-Distributors',
        'Maximum Commission',
        'Dedicated Manager'
      ],
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Start Your Own Multi-Service Business
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Join India's fastest-growing franchise network. 65+ services, proven business model, unlimited earning potential.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/apply"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all flex items-center space-x-2"
                >
                  <span>Apply for Franchise</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/franchise"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all"
                >
                  View Plans
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {serviceIcons.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105"
                >
                  <service.icon className={`w-8 h-8 ${service.color} mb-3`} />
                  <p className="font-semibold">{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                {franchises.toLocaleString()}+
              </div>
              <p className="text-gray-600">Active Franchises</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                {transactions.toLocaleString()}+
              </div>
              <p className="text-gray-600">Daily Transactions</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                {pincodes.toLocaleString()}+
              </div>
              <p className="text-gray-600">Pincodes Covered</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                {services}+
              </div>
              <p className="text-gray-600">Services Offered</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join 1000+ successful franchise partners and build your business empire today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/apply"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Apply for Franchise
            </Link>
            <a
              href="https://wa.me/919492036363"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              Chat with Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our franchise partners</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-indigo-600 font-semibold">{testimonial.franchise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Franchise Model</h2>
            <p className="text-xl text-gray-600">Flexible investment options to match your goals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {franchiseModels.map((model, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
                  model.popular ? 'ring-4 ring-indigo-500' : ''
                }`}
              >
                {model.popular && (
                  <div className="absolute top-4 right-4 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`bg-gradient-to-r ${model.gradient} text-white p-8`}>
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  <div className="text-4xl font-bold mb-1">{model.price}</div>
                  <p className="text-sm text-white/80">{model.gst}</p>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-indigo-600" />
                      <span className="font-semibold">{model.riders}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Package className="w-5 h-5 text-green-600" />
                      <span className="font-semibold">{model.coverage}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/apply"
                    className={`block w-full bg-gradient-to-r ${model.gradient} text-white text-center py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all`}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DeliveryPartners />
    </div>
  );
}
