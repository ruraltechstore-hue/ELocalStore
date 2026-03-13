import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl text-white/90">Last Updated: January 2024</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-xl">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 m-0">
                  Please read these terms carefully before applying for or operating an eLocal Store franchise. By proceeding, you agree to be bound by these terms.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">1. Agreement Overview</h2>
                <p className="text-gray-700">
                  This Franchise Agreement ("Agreement") is entered between eLocal Store Private Limited ("Franchisor") and the franchise applicant ("Franchisee"). This Agreement grants the Franchisee the right to operate a franchise business using the eLocal Store brand, systems, and services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">2. Franchise Models & Investment</h2>

                <h3 className="text-xl font-semibold mb-3">Agent Franchise</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Investment: ₹70,000 + 18% GST (Total: ₹82,600)</li>
                  <li>Territory: 1 Pincode coverage</li>
                  <li>Resources: 5 Delivery Riders</li>
                  <li>Duration: 3 years (renewable)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Distributor Franchise</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Investment: ₹1,00,000 + 18% GST (Total: ₹1,18,000)</li>
                  <li>Territory: 5 Pincode coverage</li>
                  <li>Resources: 15 Delivery Riders</li>
                  <li>Duration: 3 years (renewable)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Super Distributor Franchise</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Investment: ₹2,00,000 + 18% GST (Total: ₹2,36,000)</li>
                  <li>Territory: Entire City/Location</li>
                  <li>Resources: Unlimited Delivery Riders</li>
                  <li>Duration: 3 years (renewable)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">3. Franchisee Obligations</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
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
                <h2 className="text-3xl font-bold mb-4">4. Franchisor Support</h2>
                <p className="text-gray-700 mb-4">eLocal Store will provide:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Comprehensive initial training (7-10 days)</li>
                  <li>Access to proprietary technology platform</li>
                  <li>Marketing materials and brand assets</li>
                  <li>Ongoing technical and business support</li>
                  <li>Regular updates and system improvements</li>
                  <li>Territory protection within agreed boundaries</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">5. Commission & Payments</h2>
                <p className="text-gray-700 mb-4">
                  Franchisees earn commission on every transaction processed through their franchise. Commission structure varies by service category and franchise tier. Detailed commission schedules will be provided during onboarding.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Commissions paid within 7 business days of settlement</li>
                  <li>No monthly franchise fees or royalties</li>
                  <li>Payment via bank transfer to registered account</li>
                  <li>Minimum payout threshold: ₹500</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">6. Territory Rights</h2>
                <p className="text-gray-700">
                  Franchisees receive exclusive territory rights as per their franchise model. The Franchisor will not establish or operate competing franchises within the designated territory during the term of this Agreement. Territory boundaries are clearly defined in the franchise agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">7. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All trademarks, service marks, trade names, logos, and proprietary materials remain the exclusive property of eLocal Store. Franchisees receive a limited, non-exclusive license to use these materials solely for operating the franchise.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>No ownership rights transferred to Franchisee</li>
                  <li>Use restricted to approved purposes only</li>
                  <li>All rights revert upon termination</li>
                  <li>Unauthorized use subject to legal action</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">8. Confidentiality</h2>
                <p className="text-gray-700">
                  Franchisees must maintain strict confidentiality of all proprietary information, including but not limited to business methods, operations manuals, customer data, pricing structures, and technical systems. This obligation continues indefinitely beyond the term of the Agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">9. Term & Renewal</h2>
                <p className="text-gray-700 mb-4">
                  Initial term: 3 years from franchise activation date
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Renewal available for additional 3-year terms</li>
                  <li>Renewal subject to satisfactory performance</li>
                  <li>Renewal terms negotiable at time of renewal</li>
                  <li>Written notice required 90 days before expiry</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">10. Termination</h2>
                <p className="text-gray-700 mb-4">This Agreement may be terminated:</p>

                <h3 className="text-xl font-semibold mb-3">By Franchisor:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Material breach of Agreement terms</li>
                  <li>Fraudulent activities or misrepresentation</li>
                  <li>Failure to meet minimum performance standards</li>
                  <li>Unauthorized use of intellectual property</li>
                  <li>Violation of confidentiality obligations</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">By Franchisee:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>90-day written notice (after first year)</li>
                  <li>Payment of any outstanding obligations</li>
                  <li>Return of all proprietary materials</li>
                  <li>Cessation of use of trademarks and branding</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">11. Liability & Indemnification</h2>
                <p className="text-gray-700">
                  Franchisees operate as independent contractors and assume all risks associated with franchise operations. Franchisees agree to indemnify and hold harmless eLocal Store from any claims, damages, or liabilities arising from franchise operations.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">12. Dispute Resolution</h2>
                <p className="text-gray-700">
                  Any disputes will be resolved through arbitration in Hyderabad, Telangana under Indian Arbitration and Conciliation Act, 1996. The language of arbitration will be English. Arbitrator's decision is final and binding on both parties.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">13. Governing Law</h2>
                <p className="text-gray-700">
                  This Agreement is governed by the laws of India. Courts in Hyderabad, Telangana have exclusive jurisdiction over any legal proceedings.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">14. Amendments</h2>
                <p className="text-gray-700">
                  eLocal Store reserves the right to amend these terms with 30 days' written notice. Material changes require Franchisee acceptance. Continued operation after notice period constitutes acceptance.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 m-0">Questions About Terms?</h3>
                    <p className="text-gray-700 m-0">
                      Contact our legal team at helpdesk@elocalstore.com or call +91-9492036363 for clarifications.
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
