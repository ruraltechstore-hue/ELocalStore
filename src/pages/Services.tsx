import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { CreditCard, FileText, Plane, ShoppingCart, GraduationCap, Building, Sprout, Smartphone, Wifi, Droplets, Phone, Tv, Database, PiggyBank, TrendingUp, Calculator, Briefcase, Receipt, Landmark, Brain as Train, Bus, Hotel, Car, Package, Truck, BookOpen, Award, FileCheck, Wheat, Tractor, CloudRain, Code, Cpu, Globe, DollarSign } from 'lucide-react';

export default function Services() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    {
      icon: CreditCard,
      category: 'Banking & Financial Services',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      services: [
        { icon: CreditCard, name: 'Credit Card Bill Payment', description: 'All banks supported' },
        { icon: PiggyBank, name: 'Loan EMI Payment', description: 'Home, car, personal loans' },
        { icon: TrendingUp, name: 'Insurance Premium Payment', description: 'Life, health, vehicle insurance' },
        { icon: Database, name: 'FASTag Recharge', description: 'All banks FASTag' },
        { icon: Calculator, name: 'Mutual Fund Investments', description: 'SIP and lumpsum' },
        { icon: DollarSign, name: 'Money Transfer Services', description: 'Domestic transfers' },
        { icon: CreditCard, name: 'AEPS Services', description: 'Cash withdrawal & deposits' }
      ]
    },
    {
      icon: FileText,
      category: 'Tax & Business Services',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      services: [
        { icon: FileText, name: 'Income Tax Return Filing', description: 'ITR 1-4 filing support' },
        { icon: Receipt, name: 'GST Registration', description: 'New GST registration' },
        { icon: FileCheck, name: 'GST Return Filing', description: 'GSTR filing services' },
        { icon: Briefcase, name: 'Company Registration', description: 'Private limited, LLP' },
        { icon: Landmark, name: 'MSME/Udyam Registration', description: 'Udyog Aadhaar registration' },
        { icon: FileText, name: 'TAN/TDS Services', description: 'TAN application & TDS return' },
        { icon: Award, name: 'Trademark Registration', description: 'Brand protection services' }
      ]
    },
    {
      icon: Plane,
      category: 'Travel & Tickets',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
      services: [
        { icon: Plane, name: 'Flight Booking', description: 'Domestic and international' },
        { icon: Train, name: 'Railway Ticket Booking', description: 'IRCTC bookings' },
        { icon: Bus, name: 'Bus Ticket Booking', description: 'All operators nationwide' },
        { icon: Hotel, name: 'Hotel Reservations', description: 'Budget to luxury hotels' },
        { icon: Car, name: 'Cab Booking', description: 'Ola, Uber integration' },
        { icon: Plane, name: 'Travel Insurance', description: 'Domestic & international' }
      ]
    },
    {
      icon: ShoppingCart,
      category: 'E-commerce & Logistics',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      services: [
        { icon: Package, name: 'Flipkart Delivery Partner', description: 'Last mile delivery' },
        { icon: ShoppingCart, name: 'Swiggy Food Delivery', description: 'Food delivery partner' },
        { icon: ShoppingCart, name: 'Zomato Delivery', description: 'Restaurant delivery' },
        { icon: Package, name: 'Zepto Quick Commerce', description: '10-min delivery partner' },
        { icon: Truck, name: 'Porter Logistics', description: 'Intra-city logistics' },
        { icon: Package, name: 'Ecom Express Pickup', description: 'E-commerce shipments' }
      ]
    },
    {
      icon: GraduationCap,
      category: 'Education & Skills',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      services: [
        { icon: BookOpen, name: 'Exam Form Submission', description: 'Board, competitive exams' },
        { icon: Award, name: 'Online Course Enrollment', description: 'Skill development courses' },
        { icon: GraduationCap, name: 'Education Loan Assistance', description: 'Documentation support' },
        { icon: FileCheck, name: 'Certificate Attestation', description: 'Document verification' },
        { icon: BookOpen, name: 'Library Card Services', description: 'Digital library access' }
      ]
    },
    {
      icon: Building,
      category: 'Government & Citizen Services',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      services: [
        { icon: FileText, name: 'PAN Card Application', description: 'New & correction' },
        { icon: CreditCard, name: 'Aadhaar Services', description: 'Update, print, verify' },
        { icon: FileCheck, name: 'Passport Services', description: 'Application assistance' },
        { icon: Car, name: 'Driving License', description: 'Apply & renew' },
        { icon: Building, name: 'Voter ID Services', description: 'New & corrections' },
        { icon: FileText, name: 'Ration Card Services', description: 'Application & updates' },
        { icon: Receipt, name: 'Birth/Death Certificate', description: 'Certificate services' },
        { icon: Landmark, name: 'Property Tax Payment', description: 'Municipal tax payment' }
      ]
    },
    {
      icon: Sprout,
      category: 'Agriculture & Farmer Services',
      color: 'text-green-700',
      bgColor: 'bg-green-50',
      services: [
        { icon: Wheat, name: 'Crop Insurance', description: 'PM Fasal Bima Yojana' },
        { icon: Tractor, name: 'Kisan Credit Card', description: 'KCC application support' },
        { icon: Sprout, name: 'Soil Testing Services', description: 'Lab analysis booking' },
        { icon: CloudRain, name: 'Weather Advisory', description: 'Forecast & alerts' },
        { icon: DollarSign, name: 'Mandi Price Updates', description: 'Real-time rates' },
        { icon: FileCheck, name: 'Subsidy Applications', description: 'Government schemes' }
      ]
    },
    {
      icon: Smartphone,
      category: 'Digital & Technical Services',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-100',
      services: [
        { icon: Code, name: 'Website Development', description: 'Business website setup' },
        { icon: Cpu, name: 'Software Solutions', description: 'Custom software' },
        { icon: Globe, name: 'Digital Marketing', description: 'SEO, social media' },
        { icon: Smartphone, name: 'Mobile App Development', description: 'Android & iOS' },
        { icon: Database, name: 'Data Entry Services', description: 'Bulk data processing' },
        { icon: FileText, name: 'Typing & Printing', description: 'Document services' },
        { icon: Award, name: 'Graphic Design', description: 'Logo, banner design' }
      ]
    }
  ];

  const filteredCategories = serviceCategories.map(cat => ({
    ...cat,
    services: cat.services.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.services.length > 0);

  const totalServices = serviceCategories.reduce((sum, cat) => sum + cat.services.length, 0);

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            {totalServices}+ services across 8 categories - Everything your customers need, all in one place
          </p>
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <button
                  onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${category.bgColor} p-3 rounded-xl`}>
                      <category.icon className={`w-7 h-7 ${category.color}`} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                      <p className="text-gray-600">{category.services.length} services available</p>
                    </div>
                  </div>
                  {openCategory === idx ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </button>

                {openCategory === idx && (
                  <div className="border-t border-gray-100 p-6 bg-gray-50">
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.services.map((service, serviceIdx) => (
                        <div
                          key={serviceIdx}
                          className="bg-white p-5 rounded-xl hover:shadow-md transition-all group cursor-pointer border-2 border-transparent hover:border-indigo-200"
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`${category.bgColor} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                              <service.icon className={`w-6 h-6 ${category.color}`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                                {service.name}
                              </h4>
                              <p className="text-sm text-gray-600">{service.description}</p>
                              <button className="mt-3 text-sm text-indigo-600 font-semibold hover:text-indigo-700 flex items-center space-x-1">
                                <span>Know More</span>
                                <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No services found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Offer All These Services?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get access to all {totalServices}+ services with any franchise plan
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/apply"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Apply for Franchise
            </a>
            <a
              href="/franchise"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-50 transition-all"
            >
              View Pricing Plans
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
