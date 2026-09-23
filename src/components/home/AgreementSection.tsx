export default function AgreementSection() {
  return (
    <section className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4 uppercase">
            Official Franchise Agreement
          </h2>
          <p className="text-lg text-brand-gray-600 max-w-3xl mx-auto font-medium">
            Every eLocal Store franchise partner receives a formal official agreement covering applicable franchise terms, operational conditions, payment conditions, business policies and franchise responsibilities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 max-w-5xl mx-auto">
          {['Franchise Terms', 'Operational Conditions', 'Payment Conditions', 'Business Policies'].map((term, idx) => (
            <div key={idx} className="bg-brand-gray-50 border border-brand-gray-200 p-6 rounded text-center">
              <h3 className="font-bold uppercase text-brand-black text-sm md:text-base">{term}</h3>
            </div>
          ))}
        </div>

        {/* 3-Year Agreement Timeline */}
        <div className="bg-brand-black text-brand-white rounded-xl p-8 md:p-12 shadow-2xl mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-brand-red mb-4 uppercase">3-Year Agreement Tenure</h3>
            <p className="text-brand-gray-300 max-w-3xl mx-auto">
              The standard franchise agreement is valid for 3 years, during which the franchise partner operates within the approved/preferred pincode.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            {[
              { year: '01', title: 'Launch & Operations' },
              { year: '02', title: 'Business Growth' },
              { year: '03', title: 'Continuation / Renewal Decision' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                {idx < 2 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-brand-gray-600"></div>}
                <div className="w-16 h-16 mx-auto bg-brand-red rounded-full flex items-center justify-center font-black text-2xl mb-6 relative z-10">
                  {item.year}
                </div>
                <h4 className="font-bold text-lg uppercase">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* After 3 Years */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-brand-white border border-brand-gray-200 p-8 rounded shadow-sm">
            <h3 className="text-xl font-bold uppercase mb-4 text-brand-black">Continue</h3>
            <p className="text-brand-gray-600">Continue the franchise under applicable renewal/continuation terms.</p>
          </div>
          <div className="bg-brand-white border border-brand-gray-200 p-8 rounded shadow-sm">
            <h3 className="text-xl font-bold uppercase mb-4 text-brand-black">Discontinue</h3>
            <p className="text-brand-gray-600">If the partner does not wish to continue, the company may transfer the franchise opportunity for that pincode to another eligible partner.</p>
          </div>
          <div className="bg-brand-white border border-brand-gray-200 p-8 rounded shadow-sm">
            <h3 className="text-xl font-bold uppercase mb-4 text-brand-black">Refund</h3>
            <p className="text-brand-gray-600">As per applicable company policy, 50% of the eligible franchise amount may be refunded upon discontinuation after the agreed tenure.</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-brand-gray-600 italic">
            * Refund eligibility is subject to applicable company policy and agreement terms.
          </p>
        </div>

        <div className="mt-16 bg-brand-gray-50 p-8 rounded border border-brand-gray-200 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold uppercase mb-4 text-brand-black">Lifetime Continuation</h3>
          <p className="text-brand-gray-600">
            Existing franchise partners may continue operating after the initial agreement period, subject to applicable company policies and terms.
          </p>
        </div>
      </div>
    </section>
  );
}
