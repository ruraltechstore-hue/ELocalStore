import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import FranchiseModels from './pages/FranchiseModels';
import Services from './pages/Services';
import Apply from './pages/Apply';
import ReservePincode from './pages/ReservePincode';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Refunds from './pages/Refunds';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Update document title based on route
    const baseTitle = 'eLocal Store';
    switch (pathname) {
      case '/':
        document.title = `${baseTitle} | Multi-Franchise Platform`;
        break;
      case '/franchise-models':
        document.title = `Franchise Models & Plans | ${baseTitle}`;
        break;
      case '/services':
        document.title = `Our Services | ${baseTitle}`;
        break;
      case '/about':
        document.title = `About Us | ${baseTitle}`;
        break;
      case '/contact':
        document.title = `Contact Us | ${baseTitle}`;
        break;
      case '/apply':
        document.title = `Apply for Franchise | ${baseTitle}`;
        break;
      case '/reserve-pincode':
        document.title = `Reserve Pincode | ${baseTitle}`;
        break;
      case '/privacy':
        document.title = `Privacy Policy | ${baseTitle}`;
        break;
      case '/terms':
        document.title = `Terms & Conditions | ${baseTitle}`;
        break;
      case '/refunds':
        document.title = `Refunds & Cancellations | ${baseTitle}`;
        break;
      default:
        document.title = `${baseTitle} | Multi-Franchise Platform`;
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Breadcrumbs />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/franchise-models" element={<FranchiseModels />} />
            <Route path="/services" element={<Services />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/reserve-pincode" element={<ReservePincode />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refunds" element={<Refunds />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;
