import { useState, useEffect } from 'react';

export default function StatsSection() {
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

  return (
    <section className="py-16 bg-brand-white border-b border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4 relative">
            <div className="absolute right-0 top-1/4 h-1/2 w-px bg-brand-gray-200 hidden md:block"></div>
            <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2 font-mono tracking-tighter">
              {franchises.toLocaleString()}+
            </div>
            <p className="text-brand-red font-bold uppercase text-sm tracking-wider">Active Franchises</p>
          </div>
          <div className="p-4 relative">
            <div className="absolute right-0 top-1/4 h-1/2 w-px bg-brand-gray-200 hidden md:block"></div>
            <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2 font-mono tracking-tighter">
              {transactions.toLocaleString()}+
            </div>
            <p className="text-brand-red font-bold uppercase text-sm tracking-wider">Daily Transactions</p>
          </div>
          <div className="p-4 relative">
            <div className="absolute right-0 top-1/4 h-1/2 w-px bg-brand-gray-200 hidden md:block"></div>
            <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2 font-mono tracking-tighter">
              {pincodes.toLocaleString()}+
            </div>
            <p className="text-brand-red font-bold uppercase text-sm tracking-wider">Pincodes Covered</p>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2 font-mono tracking-tighter">
              {services}+
            </div>
            <p className="text-brand-red font-bold uppercase text-sm tracking-wider">Services Offered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
