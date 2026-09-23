import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-white mb-6 uppercase leading-tight">
          Ready to Start <br/>
          Your <span className="text-brand-red">eLocal Store</span>?
        </h2>
        
        <p className="text-2xl text-brand-white font-bold mb-4 uppercase">
          Your Investment. Our Network. Your Local Business.
        </p>
        
        <p className="text-brand-gray-300 text-lg mb-12">
          Build your local presence with a franchise network that brings logistics, delivery, e-commerce and digital services together.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            to="/apply"
            className="w-full sm:w-auto bg-brand-red text-brand-white px-8 py-4 rounded font-bold uppercase hover:bg-brand-white hover:text-brand-black transition-colors"
          >
            Reserve Your Preferred Pincode
          </Link>
          <Link
            to="/franchise"
            className="w-full sm:w-auto bg-transparent border-2 border-brand-white text-brand-white px-8 py-4 rounded font-bold uppercase hover:bg-brand-white hover:text-brand-black transition-colors"
          >
            Explore Franchise Opportunity
          </Link>
        </div>
      </div>
    </section>
  );
}
