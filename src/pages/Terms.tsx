import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import { CONTACT_INFO, franchisePlans } from '../config/constants';

export default function Terms() {
  return (
    <div className="pt-32 min-h-screen bg-brand-white">
      <section className="bg-brand-black text-brand-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Scale className="w-16 h-16 mx-auto mb-6 text-brand-red" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase">Terms & Conditions</h1>
          <p className="text-xl text-brand-gray-300 font-medium">Last Updated: January 2024</p>
        </div>
      </section>

      <section className="py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-brand-gray-50 border-l-4 border-brand-red p-6 mb-12 rounded">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <p className="text-brand-gray-600 m-0 font-medium">
                  Please read these terms carefully before applying for or operating an eLocal Store franchise. By proceeding, you agree to be bound by these terms.
                </p>
              </div>
            </div>

            <div className="space-y-16">
              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">1. Agreement Overview</h2>
                <p className="text-brand-gray-600 font-medium">
                  This Franchise Agreement ("Agreement") is entered between eLocal Store Private Limited ("Franchisor") and the franchise applicant ("Franchisee"). This Agreement grants the Franchisee the right to operate a franchise business using the eLocal Store brand, systems, and services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">2. Franchise Models & Investment</h2>

                {franchisePlans.map((plan, idx) => (
                  <div key={idx} className="mb-6">
                    <h3 className="text-xl font-bold mb-3 uppercase text-brand-black">{plan.name}</h3>
                    <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium mb-4">
                      <li>Investment: ₹{plan.basePrice.toLocaleString()} + 18% GST</li>
                      <li>Territory: {plan.description}</li>
                      <li>Resources: Unlimited Delivery Riders access</li>
                      <li>Duration: 3 years (renewable)</li>
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">3. Franchisee Obligations</h2>
                <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                  <li>Operate the franchise in accordance with eLocal Store standards</li>
                  <li>Maintain professional conduct and service quality</li>
                  <li>Complete mandatory training programs</li>
                  <li>Use only approved marketing materials and branding</li>
                  <li>Maintain accurate records and submit required reports</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Protect confidential information and trade secrets</li>
                  <li>Maintain insurance coverage as required</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">4. Franchisor Support</h2>
                <p className="text-brand-gray-600 mb-4 font-medium">eLocal Store will provide:</p>
                <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                  <li>Comprehensive initial training (7-10 days)</li>
                  <li>Access to proprietary technology platform</li>
                  <li>Marketing materials and brand assets</li>
                  <li>Ongoing technical and business support</li>
                  <li>Regular updates and system improvements</li>
                  <li>Territory protection within agreed boundaries</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">5. Commission & Payments</h2>
                <p className="text-brand-gray-600 mb-4 font-medium">
                  Franchisees earn commission on every transaction processed through their franchise. Commission structure varies by service category and franchise tier. Detailed commission schedules will be provided during onboarding.
                </p>
                <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                  <li>Commissions paid within 7 business days of settlement</li>
                  <li>No monthly franchise fees or royalties</li>
                  <li>Payment via bank transfer to registered account</li>
                  <li>Minimum payout threshold: ₹500</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">6. Territory Rights</h2>
                <p className="text-brand-gray-600 font-medium">
                  Franchisees receive exclusive territory rights as per their franchise model. The Franchisor will not establish or operate competing franchises within the designated territory during the term of this Agreement. Territory boundaries are clearly defined in the franchise agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">7. Intellectual Property</h2>
                <p className="text-brand-gray-600 mb-4 font-medium">
                  All trademarks, service marks, trade names, logos, and proprietary materials remain the exclusive property of eLocal Store. Franchisees receive a limited, non-exclusive license to use these materials solely for operating the franchise.
                </p>
                <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                  <li>No ownership rights transferred to Franchisee</li>
                  <li>Use restricted to approved purposes only</li>
                  <li>All rights revert upon termination</li>
                  <li>Unauthorized use subject to legal action</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">8. Confidentiality</h2>
                <p className="text-brand-gray-600 font-medium">
                  Franchisees must maintain strict confidentiality of all proprietary information, including but not limited to business methods, operations manuals, customer data, pricing structures, and technical systems. This obligation continues indefinitely beyond the term of the Agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">9. Term & Renewal</h2>
                <p className="text-brand-gray-600 mb-4 font-medium">
                  Initial term: 3 years from franchise activation date
                </p>
                <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                  <li>Renewal available for additional 3-year terms</li>
                  <li>Renewal subject to satisfactory performance</li>
                  <li>Renewal terms negotiable at time of renewal</li>
                  <li>Written notice required 90 days before expiry</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">10. Termination</h2>
                <p className="text-brand-gray-600 mb-4 font-medium">This Agreement may be terminated:</p>

                <h3 className="text-xl font-bold mb-3 uppercase text-brand-black">By Franchisor:</h3>
                <ul className="list-disc list-inside space-y-2 text-brand-gray-600 mb-8 font-medium">
                  <li>Material breach of Agreement terms</li>
                  <li>Fraudulent activities or misrepresentation</li>
                  <li>Failure to meet minimum performance standards</li>
                  <li>Unauthorized use of intellectual property</li>
                  <li>Violation of confidentiality obligations</li>
                </ul>

                <h3 className="text-xl font-bold mb-3 uppercase text-brand-black">By Franchisee:</h3>
                <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                  <li>90-day written notice (after first year)</li>
                  <li>Payment of any outstanding obligations</li>
                  <li>Return of all proprietary materials</li>
                  <li>Cessation of use of trademarks and branding</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">11. Liability & Indemnification</h2>
                <p className="text-brand-gray-600 font-medium">
                  Franchisees operate as independent contractors and assume all risks associated with franchise operations. Franchisees agree to indemnify and hold harmless eLocal Store from any claims, damages, or liabilities arising from franchise operations.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">12. Dispute Resolution</h2>
                <p className="text-brand-gray-600 font-medium">
                  Any disputes will be resolved through arbitration in Hyderabad, Telangana under Indian Arbitration and Conciliation Act, 1996. The language of arbitration will be English. Arbitrator's decision is final and binding on both parties.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">13. Governing Law</h2>
                <p className="text-brand-gray-600 font-medium">
                  This Agreement is governed by the laws of India. Courts in Hyderabad, Telangana have exclusive jurisdiction over any legal proceedings.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">14. Amendments</h2>
                <p className="text-brand-gray-600 font-medium">
                  eLocal Store reserves the right to amend these terms with 30 days' written notice. Material changes require Franchisee acceptance. Continued operation after notice period constitutes acceptance.
                </p>
              </div>

              <div className="bg-brand-gray-50 border-l-4 border-brand-red p-6 rounded mt-12 shadow-sm">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 m-0 uppercase text-brand-black">Questions About Terms?</h3>
                    <p className="text-brand-gray-600 m-0 font-medium">
                      Contact our legal team at <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-red hover:underline">{CONTACT_INFO.email}</a> or call <a href={`tel:+91${CONTACT_INFO.phone}`} className="text-brand-red hover:underline">+91-{CONTACT_INFO.phone}</a> for clarifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
