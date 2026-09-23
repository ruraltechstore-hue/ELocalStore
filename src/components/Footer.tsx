import { Link } from 'react-router-dom';
import { Mail, Phone, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../config/constants';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6 bg-brand-white p-2 rounded">
              <img
                src="/logo-C_KVBLWW.png"
                alt="eLocal Store Logo"
                className="w-40 h-auto object-contain"
              />
            </Link>
            <h2 className="text-xl font-bold mb-2">YOUR NEEDS OUR SERVICES</h2>
            <p className="text-brand-gray-300 mt-4 text-sm leading-relaxed">
              Logistics and Digital Services Franchise Network
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-red uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/" className="text-brand-gray-300 hover:text-brand-red transition-colors">Home</Link></li>
              <li><Link to="/franchise-models" className="text-brand-gray-300 hover:text-brand-red transition-colors">Franchise Models</Link></li>
              <li><Link to="/services" className="text-brand-gray-300 hover:text-brand-red transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-brand-gray-300 hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-brand-gray-300 hover:text-brand-red transition-colors">Contact</Link></li>
              <li><Link to="/apply" className="text-brand-gray-300 hover:text-brand-red transition-colors">Apply Now</Link></li>
              <li><Link to="/reserve-pincode" className="text-brand-gray-300 hover:text-brand-red transition-colors">Reserve Pincode</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-red uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/privacy" className="text-brand-gray-300 hover:text-brand-red transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-brand-gray-300 hover:text-brand-red transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/refunds" className="text-brand-gray-300 hover:text-brand-red transition-colors">Refunds & Cancellations</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-red">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-red" />
                <a href={`tel:+91${CONTACT_INFO.phone}`} className="text-brand-gray-200 hover:text-brand-red transition-colors">
                  +91 {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-red" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-gray-200 hover:text-brand-red transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-brand-red" />
                <span className="text-brand-gray-200">{CONTACT_INFO.website}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gray-900 mt-12 pt-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-sm text-brand-gray-600">
          <p className="font-bold text-brand-white mb-4 sm:mb-0">ELOCALSTORE</p>
          <div className="text-center sm:text-right">
            <p>Local Opportunities. Business Growth.</p>
            <p>Stronger Communities. A Brighter Tomorrow.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
