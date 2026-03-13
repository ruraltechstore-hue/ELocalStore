import { RefreshCw, XCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function Refunds() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RefreshCw className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Refunds & Cancellations</h1>
          <p className="text-xl text-white/90">Last Updated: January 2024</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 m-0">
                  This policy outlines the terms and conditions for refunds and cancellations for eLocal Store franchise applications and services.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-xl">
                    <RefreshCw className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-3xl font-bold m-0">Franchise Application Refunds</h2>
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-semibold mb-3">Before Approval</h3>
                  <p className="text-gray-700 mb-4">
                    If your franchise application is rejected during the evaluation process:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>100% refund of franchise fee</li>
                    <li>Refund processed within 10-15 business days</li>
                    <li>Refund to original payment method</li>
                    <li>No questions asked policy</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">After Approval - Cooling Off Period</h3>
                  <p className="text-gray-700 mb-4">
                    Within 7 days of franchise approval (before training completion):
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>90% refund of franchise fee</li>
                    <li>10% administrative charge deducted</li>
                    <li>Written cancellation request required</li>
                    <li>Refund processed within 15-20 business days</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">After Training Completion</h3>
                  <p className="text-gray-700 mb-4">
                    Once training is completed and franchise is operational:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>No refund of franchise fee</li>
                    <li>Franchisee may terminate with 90-day notice</li>
                    <li>Outstanding commissions will be settled</li>
                    <li>All proprietary materials must be returned</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-red-100 p-3 rounded-xl">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold m-0">Non-Refundable Items</h2>
                </div>
                <div className="ml-16">
                  <p className="text-gray-700 mb-4">The following are non-refundable under any circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
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
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <h2 className="text-3xl font-bold m-0">Service Transaction Refunds</h2>
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-semibold mb-3">Failed Transactions</h3>
                  <p className="text-gray-700 mb-4">
                    If a customer transaction fails but amount is debited:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>Automatic refund within 5-7 business days</li>
                    <li>No manual intervention required</li>
                    <li>Customer notified via SMS and email</li>
                    <li>Transaction ID provided for reference</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Wrong Recharge/Payment</h3>
                  <p className="text-gray-700 mb-4">
                    For incorrect mobile recharges or bill payments:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>Refund subject to operator/biller policy</li>
                    <li>Refund request must be raised within 24 hours</li>
                    <li>Supporting documents may be required</li>
                    <li>Processing time: 7-15 business days</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Service Quality Issues</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Report issues within 48 hours</li>
                    <li>Investigation period: 3-5 business days</li>
                    <li>Resolution based on investigation findings</li>
                    <li>Refund or service credit as applicable</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Cancellation Policy</h2>

                <h3 className="text-xl font-semibold mb-3">Franchise Cancellation by Franchisee</h3>
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <p className="text-gray-700 mb-3"><strong>Process:</strong></p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Submit written cancellation request</li>
                    <li>Serve 90-day notice period (after first year)</li>
                    <li>Complete all pending transactions</li>
                    <li>Return all proprietary materials</li>
                    <li>Settle all outstanding financial obligations</li>
                    <li>Cease use of brand name and trademarks</li>
                  </ol>
                </div>

                <h3 className="text-xl font-semibold mb-3">Cancellation by eLocal Store</h3>
                <p className="text-gray-700 mb-4">
                  We reserve the right to cancel franchise agreement for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Material breach of agreement terms</li>
                  <li>Fraudulent activities</li>
                  <li>Consistently poor performance</li>
                  <li>Violation of brand guidelines</li>
                  <li>Non-compliance with legal requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Refund Processing Timeline</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Franchise Application Rejection</p>
                      <p className="text-gray-600">10-15 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Cooling Off Period Cancellation</p>
                      <p className="text-gray-600">15-20 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Failed Transaction Refunds</p>
                      <p className="text-gray-600">5-7 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Service-Related Refunds</p>
                      <p className="text-gray-600">7-15 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">How to Request a Refund</h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Contact our support team via email: helpdesk@elocalstore.com</li>
                  <li>Provide your franchise/transaction ID</li>
                  <li>Explain the reason for refund request</li>
                  <li>Attach relevant documents or proof</li>
                  <li>Our team will review within 48 hours</li>
                  <li>You'll receive confirmation and timeline via email</li>
                  <li>Refund processed as per applicable policy</li>
                </ol>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Important Notes</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>All refunds are subject to verification and approval</li>
                  <li>Bank processing times may add 2-5 days to refund timeline</li>
                  <li>Refunds will be made to the original payment method only</li>
                  <li>GST will be refunded as per applicable regulations</li>
                  <li>We reserve the right to modify this policy with notice</li>
                </ul>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 m-0">Need Help?</h3>
                    <p className="text-gray-700 mb-2 m-0">
                      For refund inquiries and support:
                    </p>
                    <p className="text-gray-700 m-0">
                      <strong>Email:</strong> helpdesk@elocalstore.com<br />
                      <strong>Phone:</strong> +91-9492036363<br />
                      <strong>Hours:</strong> Mon-Sat, 9:00 AM - 7:00 PM IST
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
