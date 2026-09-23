import { RefreshCw, XCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../config/constants';

export default function Refunds() {
  return (
    <div className="pt-32 min-h-screen bg-brand-white">
      <section className="bg-brand-black text-brand-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <RefreshCw className="w-16 h-16 mx-auto mb-6 text-brand-red" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase">Refunds & Cancellations</h1>
          <p className="text-xl text-brand-gray-300 font-medium">Last Updated: January 2024</p>
        </div>
      </section>

      <section className="py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-brand-gray-50 border-l-4 border-brand-red p-6 mb-12 rounded">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <p className="text-brand-gray-600 m-0 font-medium">
                  This policy outlines the terms and conditions for refunds and cancellations for eLocal Store franchise applications and services.
                </p>
              </div>
            </div>

            <div className="space-y-16">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-brand-gray-50 p-3 rounded border border-brand-gray-200">
                    <RefreshCw className="w-6 h-6 text-brand-black" />
                  </div>
                  <h2 className="text-3xl font-extrabold m-0 uppercase text-brand-black">Franchise Application Refunds</h2>
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-bold mb-3 uppercase">Before Approval</h3>
                  <p className="text-brand-gray-600 mb-4 font-medium">
                    If your franchise application is rejected during the evaluation process:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium mb-8">
                    <li>100% refund of advance fee</li>
                    <li>Refund processed within 10-15 business days</li>
                    <li>Refund to original payment method</li>
                    <li>No questions asked policy</li>
                  </ul>

                  <h3 className="text-xl font-bold mb-3 uppercase">After Approval - Cooling Off Period</h3>
                  <p className="text-brand-gray-600 mb-4 font-medium">
                    Within 7 days of franchise approval (before training completion):
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium mb-8">
                    <li>90% refund of franchise fee</li>
                    <li>10% administrative charge deducted</li>
                    <li>Written cancellation request required</li>
                    <li>Refund processed within 15-20 business days</li>
                  </ul>

                  <h3 className="text-xl font-bold mb-3 uppercase">After Training Completion</h3>
                  <p className="text-brand-gray-600 mb-4 font-medium">
                    Once training is completed and franchise is operational:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                    <li>No refund of franchise fee</li>
                    <li>Franchisee may terminate with 90-day notice</li>
                    <li>Outstanding commissions will be settled</li>
                    <li>All proprietary materials must be returned</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-brand-gray-50 p-3 rounded border border-brand-gray-200">
                    <XCircle className="w-6 h-6 text-brand-red" />
                  </div>
                  <h2 className="text-3xl font-extrabold m-0 uppercase text-brand-black">Non-Refundable Items</h2>
                </div>
                <div className="ml-16">
                  <p className="text-brand-gray-600 mb-4 font-medium">The following are non-refundable under any circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                    <li>Training fees (once training is completed)</li>
                    <li>Marketing materials provided</li>
                    <li>Technology setup and integration costs</li>
                    <li>Third-party service charges</li>
                    <li>Transaction processing fees</li>
                    <li>Custom branding or promotional materials</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-brand-gray-50 p-3 rounded border border-brand-gray-200">
                    <Clock className="w-6 h-6 text-brand-black" />
                  </div>
                  <h2 className="text-3xl font-extrabold m-0 uppercase text-brand-black">Service Transaction Refunds</h2>
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-bold mb-3 uppercase">Failed Transactions</h3>
                  <p className="text-brand-gray-600 mb-4 font-medium">
                    If a customer transaction fails but amount is debited:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium mb-8">
                    <li>Automatic refund within 5-7 business days</li>
                    <li>No manual intervention required</li>
                    <li>Customer notified via SMS and email</li>
                    <li>Transaction ID provided for reference</li>
                  </ul>

                  <h3 className="text-xl font-bold mb-3 uppercase">Wrong Recharge/Payment</h3>
                  <p className="text-brand-gray-600 mb-4 font-medium">
                    For incorrect mobile recharges or bill payments:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium mb-8">
                    <li>Refund subject to operator/biller policy</li>
                    <li>Refund request must be raised within 24 hours</li>
                    <li>Supporting documents may be required</li>
                    <li>Processing time: 7-15 business days</li>
                  </ul>

                  <h3 className="text-xl font-bold mb-3 uppercase">Service Quality Issues</h3>
                  <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                    <li>Report issues within 48 hours</li>
                    <li>Investigation period: 3-5 business days</li>
                    <li>Resolution based on investigation findings</li>
                    <li>Refund or service credit as applicable</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">Cancellation Policy</h2>

                <h3 className="text-xl font-bold mb-3 uppercase">Franchise Cancellation by Franchisee</h3>
                <div className="bg-brand-gray-50 rounded border border-brand-gray-200 p-6 mb-8">
                  <p className="text-brand-gray-600 mb-3 font-medium"><strong className="text-brand-black">Process:</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-brand-gray-600 font-medium">
                    <li>Submit written cancellation request</li>
                    <li>Serve 90-day notice period (after first year)</li>
                    <li>Complete all pending transactions</li>
                    <li>Return all proprietary materials</li>
                    <li>Settle all outstanding financial obligations</li>
                    <li>Cease use of brand name and trademarks</li>
                  </ol>
                </div>

                <h3 className="text-xl font-bold mb-3 uppercase">Cancellation by eLocal Store</h3>
                <p className="text-brand-gray-600 mb-4 font-medium">
                  We reserve the right to cancel franchise agreement for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                  <li>Material breach of agreement terms</li>
                  <li>Fraudulent activities</li>
                  <li>Consistently poor performance</li>
                  <li>Violation of brand guidelines</li>
                  <li>Non-compliance with legal requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">Refund Processing Timeline</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-brand-gray-50 border border-brand-gray-200 rounded">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1 uppercase tracking-wider text-sm text-brand-black">Franchise Application Rejection</p>
                      <p className="text-brand-gray-600 font-medium">10-15 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-brand-gray-50 border border-brand-gray-200 rounded">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1 uppercase tracking-wider text-sm text-brand-black">Cooling Off Period Cancellation</p>
                      <p className="text-brand-gray-600 font-medium">15-20 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-brand-gray-50 border border-brand-gray-200 rounded">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1 uppercase tracking-wider text-sm text-brand-black">Failed Transaction Refunds</p>
                      <p className="text-brand-gray-600 font-medium">5-7 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-brand-gray-50 border border-brand-gray-200 rounded">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-1 uppercase tracking-wider text-sm text-brand-black">Service-Related Refunds</p>
                      <p className="text-brand-gray-600 font-medium">7-15 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">How to Request a Refund</h2>
                <ol className="list-decimal list-inside space-y-3 text-brand-gray-600 font-medium">
                  <li>Contact our support team via email: <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-red hover:underline">{CONTACT_INFO.email}</a></li>
                  <li>Provide your franchise/transaction ID</li>
                  <li>Explain the reason for refund request</li>
                  <li>Attach relevant documents or proof</li>
                  <li>Our team will review within 48 hours</li>
                  <li>You'll receive confirmation and timeline via email</li>
                  <li>Refund processed as per applicable policy</li>
                </ol>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">Important Notes</h2>
                <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                  <li>All refunds are subject to verification and approval</li>
                  <li>Bank processing times may add 2-5 days to refund timeline</li>
                  <li>Refunds will be made to the original payment method only</li>
                  <li>GST will be refunded as per applicable regulations</li>
                  <li>We reserve the right to modify this policy with notice</li>
                </ul>
              </div>

              <div className="bg-brand-gray-50 border-l-4 border-brand-red p-6 rounded shadow-sm mt-12">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 m-0 uppercase text-brand-black">Need Help?</h3>
                    <p className="text-brand-gray-600 mb-2 m-0 font-medium">
                      For refund inquiries and support:
                    </p>
                    <p className="text-brand-gray-600 m-0 font-medium">
                      <strong className="text-brand-black">Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-red hover:underline">{CONTACT_INFO.email}</a><br />
                      <strong className="text-brand-black">Phone:</strong> <a href={`tel:+91${CONTACT_INFO.phone}`} className="text-brand-red hover:underline">+91-{CONTACT_INFO.phone}</a><br />
                      <strong className="text-brand-black">Hours:</strong> Mon-Sat, 9:00 AM - 7:00 PM IST
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
