import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, FileText, Plane, ShoppingCart, GraduationCap, Building, 
  Sprout, Smartphone, Database, PiggyBank, TrendingUp, Calculator, 
  Briefcase, Receipt, Landmark, Brain as Train, Bus, Hotel, Car, 
  Package, Truck, BookOpen, Award, FileCheck, Wheat, Tractor, 
  CloudRain, Code, Cpu, Globe, DollarSign, Network 
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'banking',
    category: 'Banking & Financial',
    icon: CreditCard,
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
    id: 'tax',
    category: 'Tax & Business',
    icon: FileText,
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
    id: 'travel',
    category: 'Travel & Tickets',
    icon: Plane,
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
    id: 'logistics',
    category: 'E-commerce & Logistics',
    icon: ShoppingCart,
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
    id: 'education',
    category: 'Education & Skills',
    icon: GraduationCap,
    services: [
      { icon: BookOpen, name: 'Exam Form Submission', description: 'Board, competitive exams' },
      { icon: Award, name: 'Online Course Enrollment', description: 'Skill development courses' },
      { icon: GraduationCap, name: 'Education Loan Assistance', description: 'Documentation support' },
      { icon: FileCheck, name: 'Certificate Attestation', description: 'Document verification' },
      { icon: BookOpen, name: 'Library Card Services', description: 'Digital library access' }
    ]
  },
  {
    id: 'government',
    category: 'Government & Citizen',
    icon: Building,
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
    id: 'agriculture',
    category: 'Agriculture & Farmer',
    icon: Sprout,
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
    id: 'digital',
    category: 'Digital & Technical',
    icon: Smartphone,
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

const featuredServices = [
  { icon: Plane, name: 'Flight Booking', description: 'Domestic and international flights', category: 'Travel & Tickets' },
  { icon: FileText, name: 'Income Tax Return Filing', description: 'ITR 1-4 filing support', category: 'Tax & Business' },
  { icon: Database, name: 'FASTag Recharge', description: 'All banks FASTag supported', category: 'Banking & Financial' },
  { icon: Package, name: 'Flipkart Delivery Partner', description: 'Last mile logistics delivery', category: 'E-commerce & Logistics' },
  { icon: FileText, name: 'PAN Card Application', description: 'New & correction assistance', category: 'Government & Citizen' },
  { icon: Code, name: 'Website Development', description: 'Business website setup', category: 'Digital & Technical' },
];

export default function Services() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredCategories = serviceCategories.map(cat => ({
    ...cat,
    services: cat.services.filter(service =>
      (activeFilter === 'ALL' || cat.id.toUpperCase() === activeFilter.toUpperCase()) &&
      (service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(cat => cat.services.length > 0);

  const totalServices = serviceCategories.reduce((sum, cat) => sum + cat.services.length, 0);
  const resultCount = filteredCategories.reduce((sum, cat) => sum + cat.services.length, 0);

  const filters = ['ALL', 'BANKING', 'TAX', 'TRAVEL', 'LOGISTICS', 'EDUCATION', 'GOVERNMENT', 'AGRICULTURE', 'DIGITAL'];

  return (
    <div className="pt-32 bg-brand-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-brand-black text-brand-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-brand-red font-bold tracking-widest uppercase mb-4">Our Services</h4>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase leading-tight">
                One Platform. <br />
                <span className="text-brand-red">Multiple Services.</span>
              </h1>
              <p className="text-xl text-brand-gray-300 font-medium mb-8">
                eLocal Store brings multiple everyday services together through a connected local business and franchise network. Explore the range of services available.
              </p>
            </div>
            
            <div className="relative animate-fade-up">
              <div className="bg-brand-white/10 backdrop-blur-sm border border-brand-white/20 p-8 rounded-xl relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-red rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-white/20 rounded-full opacity-50 blur-2xl"></div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Truck, label: 'Logistics' },
                    { icon: ShoppingCart, label: 'E-Commerce' },
                    { icon: Plane, label: 'Travel' },
                    { icon: Smartphone, label: 'Digital' },
                    { icon: Building, label: 'Government' },
                    { icon: Sprout, label: 'Agriculture' },
                  ].map((item, i) => (
                    <div key={i} className="bg-brand-black border border-brand-gray-800 p-4 rounded flex flex-col items-center justify-center text-center">
                      <item.icon className="w-8 h-8 text-brand-red mb-2" />
                      <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-brand-gray-50 border-b border-brand-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-12 py-4 rounded text-lg font-medium border-2 border-brand-gray-200 focus:outline-none focus:border-brand-red text-brand-black shadow-sm"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-brand-gray-400 hover:text-brand-red font-bold text-xl"
                >
                  &times;
                </button>
              )}
            </div>
            <p className="text-center mt-4 text-brand-gray-600 font-medium">
              {resultCount} services found
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-colors border ${
                  activeFilter === filter
                    ? 'bg-brand-red border-brand-red text-brand-white shadow-md'
                    : 'bg-brand-white border-brand-gray-200 text-brand-gray-600 hover:border-brand-black hover:text-brand-black'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      {(searchTerm === '' && activeFilter === 'ALL') && (
        <section className="py-20 bg-brand-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 text-brand-black">Featured Services</h2>
              <div className="w-24 h-1 bg-brand-red mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service, idx) => (
                <div key={idx} className="bg-brand-white border border-brand-gray-200 rounded p-6 shadow-sm hover:shadow-md hover:border-brand-red transition-all group">
                  <div className="bg-brand-gray-50 w-14 h-14 rounded flex items-center justify-center mb-6 group-hover:bg-brand-red/5 transition-colors">
                    <service.icon className="w-7 h-7 text-brand-black group-hover:text-brand-red transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-brand-gray-400 uppercase tracking-wider mb-2 block">{service.category}</span>
                  <h3 className="text-xl font-extrabold text-brand-black uppercase mb-2">{service.name}</h3>
                  <p className="text-brand-gray-600 font-medium mb-6">{service.description}</p>
                  <button className="text-sm font-bold text-brand-red uppercase tracking-wider flex items-center group-hover:text-brand-black transition-colors">
                    Explore <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Categories (Accordion) */}
      <section className="py-20 bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 text-brand-black">Service Directory</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto"></div>
          </div>

          <div className="space-y-6">
            {filteredCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-brand-white rounded border border-brand-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenCategory(openCategory === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-brand-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-6">
                    <div className="bg-brand-gray-100 p-4 rounded">
                      <category.icon className="w-8 h-8 text-brand-black" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-2xl font-extrabold text-brand-black uppercase mb-1 tracking-wide">{category.category}</h3>
                      <p className="text-brand-red font-bold text-sm tracking-wider">{category.services.length} SERVICES AVAILABLE</p>
                    </div>
                  </div>
                  <div className={`p-2 rounded-full border-2 transition-colors ${openCategory === idx ? 'border-brand-red bg-brand-red text-brand-white' : 'border-brand-gray-200 text-brand-gray-400'}`}>
                    {openCategory === idx ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>

                {openCategory === idx && (
                  <div className="border-t border-brand-gray-200 p-8 bg-brand-white">
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.services.map((service, serviceIdx) => (
                        <div
                          key={serviceIdx}
                          className="flex items-start space-x-4 p-4 rounded hover:bg-brand-gray-50 border border-transparent hover:border-brand-gray-200 transition-all cursor-pointer group"
                        >
                          <div className="bg-brand-gray-100 p-3 rounded group-hover:bg-brand-black transition-colors">
                            <service.icon className="w-6 h-6 text-brand-black group-hover:text-brand-white transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-brand-black mb-1 uppercase group-hover:text-brand-red transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-sm text-brand-gray-600 font-medium mb-3">{service.description}</p>
                            <span className="text-xs font-bold text-brand-gray-400 uppercase tracking-widest border border-brand-gray-200 px-3 py-1 rounded">Explore</span>
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
            <div className="text-center py-16 bg-brand-white border border-brand-gray-200 rounded">
              <Search className="w-12 h-12 text-brand-gray-300 mx-auto mb-4" />
              <p className="text-xl text-brand-gray-600 font-bold uppercase">No services found</p>
              <p className="text-brand-gray-400 font-medium mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-brand-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 text-brand-black">The eLocal Store Ecosystem</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative py-12">
            {/* Center Node */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-brand-black text-brand-white w-40 h-40 rounded-full flex flex-col items-center justify-center border-4 border-brand-red shadow-xl">
                <Network className="w-10 h-10 mb-2 text-brand-red" />
                <span className="font-extrabold uppercase tracking-widest text-sm text-center px-4">eLocal<br/>Store</span>
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-brand-red/30 -translate-y-1/2 z-0 hidden md:block"></div>
            
            {/* Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-24 relative z-10">
              <div className="bg-brand-gray-50 border-2 border-brand-gray-200 rounded p-6 text-center hover:border-brand-red transition-colors shadow-sm">
                <Plane className="w-8 h-8 mx-auto mb-3 text-brand-black" />
                <h4 className="font-bold uppercase text-brand-black text-sm">Travel</h4>
              </div>
              <div className="bg-brand-gray-50 border-2 border-brand-gray-200 rounded p-6 text-center hover:border-brand-red transition-colors shadow-sm">
                <Truck className="w-8 h-8 mx-auto mb-3 text-brand-black" />
                <h4 className="font-bold uppercase text-brand-black text-sm">Logistics</h4>
              </div>
              <div className="bg-brand-gray-50 border-2 border-brand-gray-200 rounded p-6 text-center hover:border-brand-red transition-colors shadow-sm">
                <GraduationCap className="w-8 h-8 mx-auto mb-3 text-brand-black" />
                <h4 className="font-bold uppercase text-brand-black text-sm">Education</h4>
              </div>
              <div className="bg-brand-gray-50 border-2 border-brand-gray-200 rounded p-6 text-center hover:border-brand-red transition-colors shadow-sm">
                <Building className="w-8 h-8 mx-auto mb-3 text-brand-black" />
                <h4 className="font-bold uppercase text-brand-black text-sm">Government</h4>
              </div>
              <div className="bg-brand-gray-50 border-2 border-brand-gray-200 rounded p-6 text-center hover:border-brand-red transition-colors shadow-sm">
                <Sprout className="w-8 h-8 mx-auto mb-3 text-brand-black" />
                <h4 className="font-bold uppercase text-brand-black text-sm">Agriculture</h4>
              </div>
              <div className="bg-brand-gray-50 border-2 border-brand-gray-200 rounded p-6 text-center hover:border-brand-red transition-colors shadow-sm">
                <Smartphone className="w-8 h-8 mx-auto mb-3 text-brand-black" />
                <h4 className="font-bold uppercase text-brand-black text-sm">Digital</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-black text-brand-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase">Ready to Explore Our Services?</h2>
          <p className="text-xl text-brand-gray-300 mb-10 font-medium">
            Discover the full potential of the services available through the eLocal Store network. Partner with us today.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              to="/apply"
              className="bg-brand-red text-brand-white px-10 py-5 rounded font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              Become a Franchise Partner
            </Link>
            <Link
              to="/franchise-models"
              className="border-2 border-brand-white text-brand-white px-10 py-5 rounded font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              View Franchise Models
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
