export default function CommissionCycle() {
  return (
    <section id="commission" className="py-24 bg-brand-gray-50 border-t border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4 uppercase">
            Parcel Commission
          </h2>
          <div className="inline-block bg-brand-black text-brand-white px-8 py-4 rounded mb-6">
            <span className="text-2xl font-black">UP TO ₹21 PER ELIGIBLE PARCEL</span>
          </div>
          <p className="text-lg text-brand-gray-600 max-w-3xl mx-auto font-medium">
            Commission is calculated based on eligible parcel transactions recorded during the respective payment period.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* 1st Cycle */}
            <div className="bg-brand-white rounded border-2 border-brand-black p-8 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-red rounded-t-sm"></div>
              <h3 className="text-xl font-bold uppercase mb-2">1st Payment Cycle</h3>
              <p className="text-3xl font-black text-brand-red mb-6">1st – 15th <span className="text-lg text-brand-black">of the Month</span></p>
              
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-brand-black text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded border border-slate-200 bg-white">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-slate-900">1–15</div>
                    </div>
                    <div className="text-slate-500 font-medium">Commission Calculation</div>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-brand-red text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded border border-brand-red/30 bg-brand-red/5">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-brand-red">Settlement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd Cycle */}
            <div className="bg-brand-white rounded border-2 border-brand-black p-8 relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-black rounded-t-sm"></div>
              <h3 className="text-xl font-bold uppercase mb-2">2nd Payment Cycle</h3>
              <p className="text-3xl font-black text-brand-black mb-6">16th – End <span className="text-lg text-brand-gray-600">of the Month</span></p>
              
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-brand-black text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded border border-slate-200 bg-white">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-slate-900">16–End</div>
                    </div>
                    <div className="text-slate-500 font-medium">Commission Calculation</div>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-brand-red text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded border border-brand-red/30 bg-brand-red/5">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-brand-red">Settlement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {['Timely Payments', 'Transparent Process', 'Accurate Settlements', 'Partner Growth'].map((principle, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                <span className="font-bold text-brand-gray-600 uppercase text-sm tracking-wider">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
