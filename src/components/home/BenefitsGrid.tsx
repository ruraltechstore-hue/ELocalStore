import { riderEarningPotential, commissionPerEligibleParcel } from '../../config/constants';

export default function BenefitsGrid() {
  return (
    <section className="py-24 bg-brand-gray-50 border-t border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4 uppercase">
            Benefits With Both Plans
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: '01',
              title: 'Unlimited Riders',
              desc: 'Access to an unlimited rider network to support franchise delivery operations.',
              disclaimer: ''
            },
            {
              id: '02',
              title: 'Unlimited Parcels',
              desc: 'Handle and process unlimited parcels through franchise operations, subject to applicable business terms.',
              disclaimer: ''
            },
            {
              id: '03',
              title: 'Per Rider Earning Potential',
              desc: `Up to ${riderEarningPotential} per rider`,
              disclaimer: 'Earnings depend on rider activity and applicable commission structure.'
            },
            {
              id: '04',
              title: 'Per Parcel Commission',
              desc: `Up to ₹${commissionPerEligibleParcel} per eligible parcel`,
              disclaimer: 'Commission is subject to eligible parcel transactions and applicable company terms.'
            }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-brand-white border border-brand-gray-200 p-8 rounded shadow-sm hover:shadow-md transition-shadow relative">
              <span className="absolute top-4 right-4 text-4xl font-black text-brand-gray-100">{benefit.id}</span>
              <h3 className="text-lg font-bold text-brand-black mb-4 uppercase relative z-10">{benefit.title}</h3>
              <p className="text-brand-gray-600 font-medium relative z-10 mb-4">{benefit.desc}</p>
              {benefit.disclaimer && (
                <p className="text-xs text-brand-gray-600 italic border-t border-brand-gray-100 pt-3 relative z-10">
                  {benefit.disclaimer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
