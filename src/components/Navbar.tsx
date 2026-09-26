import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Franchise Models & Plans', path: '/franchise-models' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-brand-gray-200 ${
        isScrolled ? 'bg-brand-white shadow-md py-1' : 'bg-brand-white/95 backdrop-blur-sm py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo-C_KVBLWW.png"
              alt="eLocal Store Logo"
              className="w-32 h-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors text-sm font-semibold ${
                  location.pathname === link.path
                    ? 'text-brand-red'
                    : 'text-brand-black hover:text-brand-red'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/apply"
              className="bg-brand-red text-brand-white px-6 py-2 rounded font-bold hover:bg-brand-black hover:text-brand-white transition-colors uppercase tracking-wide"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brand-black hover:text-brand-red"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 bg-brand-white">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-bold ${
                  location.pathname === link.path
                    ? 'text-brand-red'
                    : 'text-brand-black'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/apply"
              onClick={() => setIsOpen(false)}
              className="block bg-brand-red text-brand-white px-6 py-3 rounded text-center font-bold uppercase tracking-wide"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
