import { Target, Eye, Award, Users, TrendingUp, Globe, Shield, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '1000+', label: 'Active Franchises', icon: Users, color: 'text-blue-600' },
    { value: '500+', label: 'Cities Covered', icon: Globe, color: 'text-green-600' },
    { value: '50K+', label: 'Daily Transactions', icon: TrendingUp, color: 'text-purple-600' },
    { value: '₹10Cr+', label: 'Monthly Business', icon: Award, color: 'text-amber-600' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower entrepreneurs across India by providing a comprehensive multi-service platform that enables financial independence and business growth.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To become India\'s most trusted and widespread multi-service franchise network, accessible in every pincode and serving millions daily.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Shield,
      title: 'Our Values',
      description: 'Integrity, transparency, and partner success drive everything we do. We believe in building long-term relationships based on trust and mutual growth.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  const whyChoose = [
    {
      icon: Zap,
      title: 'Proven Business Model',
      description: '3+ years of successful operations with consistent franchise profitability',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Comprehensive Support',
      description: '24/7 technical and business support for all franchise partners',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: TrendingUp,
      title: 'High Returns',
      description: 'Average ROI within 5-12 months with sustainable monthly income',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Globe,
      title: 'Wide Network',
      description: 'Partner with leading brands like Flipkart, Swiggy, Zomato, and more',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Award,
      title: 'Training & Development',
      description: 'Complete training program and ongoing skill development workshops',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Bank-grade security and reliable technology infrastructure',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const timeline = [
    { year: '2020', title: 'Foundation', desc: 'eLocal Store founded with a vision to digitize local services' },
    { year: '2021', title: 'First 100', desc: 'Reached 100 franchise partners across 5 states' },
    { year: '2022', title: 'Pan-India', desc: 'Expanded to 500+ locations nationwide' },
    { year: '2023', title: 'Service Expansion', desc: 'Launched 65+ services across 10 categories' },
    { year: '2024', title: 'Industry Leader', desc: '1000+ franchises with ₹10Cr+ monthly business volume' }
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About eLocal Store</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Transforming local entrepreneurship through technology and innovation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                eLocal Store was born from a simple yet powerful idea: to create a platform that enables every Indian to become an entrepreneur by providing access to multiple revenue-generating services under one roof.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Starting in 2020, we've grown from a small team with a big dream to India's leading multi-service franchise network. Today, we serve thousands of franchise partners who collectively process over 50,000 transactions daily.
              </p>
              <p className="text-lg text-gray-700">
                Our success is built on the success of our franchise partners. Every milestone we achieve is a testament to their hard work and our commitment to providing the best platform, support, and opportunities in the industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                  <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mission, Vision & Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className={`${value.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose eLocal Store?</h2>
            <p className="text-xl text-gray-600">Built for your success from day one</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((reason, idx) => (
              <div key={idx} className={`${reason.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all`}>
                <reason.icon className={`w-12 h-12 ${reason.color} mb-4`} />
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-white/80">Milestones that shaped our growth</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-500"></div>
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all">
                      <div className="text-3xl font-bold text-indigo-400 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/80">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-indigo-500 rounded-full border-4 border-gray-900 z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Success Story</h2>
          <p className="text-xl mb-8 text-white/90">
            Be part of India's fastest-growing franchise network and write your own success story
          </p>
          <a
            href="/apply"
            className="inline-block bg-white text-indigo-600 px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Apply for Franchise
          </a>
        </div>
      </section>
    </div>
  );
}
