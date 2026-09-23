import { Building2, Users, Target, Globe, Network, MapPin, Briefcase, Zap, Shield, TrendingUp, Handshake, Store } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 min-h-screen bg-brand-white">
      {/* Hero Section */}
      <section className="bg-brand-black text-brand-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-brand-red font-bold tracking-widest uppercase mb-4">About Us</h4>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase leading-tight">
                Building A Connected <br />
                <span className="text-brand-red">Local Service Network</span>
              </h1>
              <p className="text-xl text-brand-gray-300 font-medium mb-8">
                Empowering entrepreneurs and transforming communities by bringing essential logistics and digital services directly to every neighborhood.
              </p>
            </div>
            <div className="relative">
              <div className="bg-brand-white/10 backdrop-blur-sm border border-brand-white/20 p-8 rounded-xl relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-red rounded-full opacity-50 blur-2xl"></div>
                <Building2 className="w-24 h-24 text-brand-red mb-6" />
                <h3 className="text-2xl font-bold uppercase mb-2">One Franchise.</h3>
                <h3 className="text-2xl font-bold text-brand-red uppercase">Multiple Services.</h3>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-brand-white/20 pt-6">
                  <div>
                    <p className="text-4xl font-extrabold text-brand-white mb-1">65+</p>
                    <p className="text-brand-gray-400 text-xs font-bold uppercase tracking-wider">Services</p>
                  </div>
                  <div>
                    <p className="text-4xl font-extrabold text-brand-white mb-1">0%</p>
                    <p className="text-brand-gray-400 text-xs font-bold uppercase tracking-wider">Royalty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & Mission/Vision */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold uppercase mb-6 text-brand-black">Who We Are</h2>
              <div className="w-16 h-1 bg-brand-red mb-8"></div>
              <p className="text-lg text-brand-gray-600 font-medium mb-6 leading-relaxed">
                eLocal Store Private Limited is a pioneering aggregator platform designed to bridge the gap between essential services and local communities. We operate on a unique "One Platform, Multiple Services" model.
              </p>
              <p className="text-lg text-brand-gray-600 font-medium leading-relaxed">
                By partnering with local entrepreneurs, we are establishing a nationwide network of service points that offer everything from logistics and e-commerce delivery to travel bookings, banking, and government citizen services.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-brand-gray-50 border-l-4 border-brand-red p-8 rounded shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <Target className="w-8 h-8 text-brand-red" />
                  <h3 className="text-2xl font-extrabold uppercase text-brand-black">Our Mission</h3>
                </div>
                <p className="text-brand-gray-600 font-medium leading-relaxed">
                  To empower local entrepreneurs with a comprehensive digital and logistics infrastructure, enabling them to provide essential, high-quality services to their communities while building a profitable, sustainable business.
                </p>
              </div>

              <div className="bg-brand-gray-50 border-l-4 border-brand-black p-8 rounded shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <Globe className="w-8 h-8 text-brand-black" />
                  <h3 className="text-2xl font-extrabold uppercase text-brand-black">Our Vision</h3>
                </div>
                <p className="text-brand-gray-600 font-medium leading-relaxed">
                  To become the largest and most trusted decentralized service network in India, ensuring that no citizen is left behind in the digital revolution, regardless of their geographic location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business Model */}
      <section className="py-24 bg-brand-gray-50 border-y border-brand-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 text-brand-black">Our Business Model</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mb-8"></div>
            <p className="text-xl text-brand-gray-600 max-w-3xl mx-auto font-medium">
              We provide the technology, the brand, and the partnerships. You provide the local expertise and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-white p-8 rounded border border-brand-gray-200 text-center hover:border-brand-red transition-colors shadow-sm">
              <div className="bg-brand-gray-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-brand-black" />
              </div>
              <h3 className="text-xl font-extrabold uppercase text-brand-black mb-4">B2B2C Approach</h3>
              <p className="text-brand-gray-600 font-medium">
                We aggregate services from major B2B providers (logistics, banks, government portals) and deliver them to consumers (C) through our localized business partners (B).
              </p>
            </div>

            <div className="bg-brand-white p-8 rounded border border-brand-red relative text-center shadow-lg transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-brand-red text-brand-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-bl">Core Advantage</div>
              <div className="bg-brand-red/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-extrabold uppercase text-brand-black mb-4">Zero Royalty Structure</h3>
              <p className="text-brand-gray-600 font-medium">
                Unlike traditional franchises that take a monthly cut of your gross sales, eLocal Store operates on a 0% royalty model. You keep the profits you earn.
              </p>
            </div>

            <div className="bg-brand-white p-8 rounded border border-brand-gray-200 text-center hover:border-brand-red transition-colors shadow-sm">
              <div className="bg-brand-gray-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-brand-black" />
              </div>
              <h3 className="text-xl font-extrabold uppercase text-brand-black mb-4">Pincode Exclusivity</h3>
              <p className="text-brand-gray-600 font-medium">
                We protect your investment by ensuring territorial exclusivity. Only one franchise is approved per pincode, preventing internal competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="py-24 bg-brand-black text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4">The eLocal Ecosystem</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-brand-white/10 border border-brand-white/20 p-6 rounded backdrop-blur-sm">
                <Users className="w-10 h-10 text-brand-red mx-auto mb-4" />
                <h4 className="font-bold uppercase tracking-wider mb-2">Customers</h4>
                <p className="text-sm text-brand-gray-300">Accessing essential services locally</p>
              </div>
              <div className="bg-brand-white/10 border border-brand-white/20 p-6 rounded backdrop-blur-sm">
                <Store className="w-10 h-10 text-brand-red mx-auto mb-4" />
                <h4 className="font-bold uppercase tracking-wider mb-2">Partners</h4>
                <p className="text-sm text-brand-gray-300">Operating exclusive franchise zones</p>
              </div>
              <div className="bg-brand-white/10 border border-brand-white/20 p-6 rounded backdrop-blur-sm">
                <Network className="w-10 h-10 text-brand-red mx-auto mb-4" />
                <h4 className="font-bold uppercase tracking-wider mb-2">Providers</h4>
                <p className="text-sm text-brand-gray-300">Supplying backend digital services</p>
              </div>
              <div className="bg-brand-white/10 border border-brand-white/20 p-6 rounded backdrop-blur-sm">
                <Building2 className="w-10 h-10 text-brand-red mx-auto mb-4" />
                <h4 className="font-bold uppercase tracking-wider mb-2">Platform</h4>
                <p className="text-sm text-brand-gray-300">Connecting all ecosystem layers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why eLocal Store */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 text-brand-black">Why Choose eLocal Store?</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Ready-to-Use Platform", desc: "Start operating from day one with our fully integrated technological dashboard." },
              { icon: Shield, title: "Trusted Brand", desc: "Leverage a recognized name that commands trust in the local community." },
              { icon: TrendingUp, title: "High Demand Services", desc: "Offer 65+ services that people need and use on a daily basis." },
              { icon: Briefcase, title: "Low Overhead", desc: "Run a high-volume business with manageable operational costs." },
              { icon: Users, title: "Training Support", desc: "Receive comprehensive onboarding and continuous operational guidance." },
              { icon: MapPin, title: "Protected Territory", desc: "Operate with peace of mind in your exclusive pincode zone." }
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-4 p-6 border border-brand-gray-200 rounded hover:shadow-md hover:border-brand-red transition-all">
                <div className="bg-brand-gray-50 p-3 rounded shrink-0">
                  <feature.icon className="w-6 h-6 text-brand-black" />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-brand-black mb-2">{feature.title}</h4>
                  <p className="text-sm font-medium text-brand-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-gray-50 border-t border-brand-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold uppercase mb-6 text-brand-black">Join Our Growing Network</h2>
          <p className="text-xl text-brand-gray-600 mb-10 font-medium">
            Be the digital and logistics hub for your local community. Secure your territory today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/apply"
              className="bg-brand-red text-brand-white px-10 py-4 rounded font-bold uppercase tracking-widest hover:bg-brand-black transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-brand-black text-brand-black px-10 py-4 rounded font-bold uppercase tracking-widest hover:bg-brand-black hover:text-brand-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
