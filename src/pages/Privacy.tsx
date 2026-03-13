import { Shield, Lock, Eye, UserCheck, FileText, AlertCircle } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
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
                  At eLocal Store, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-xl">
                    <FileText className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-3xl font-bold m-0">Information We Collect</h2>
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                  <p className="text-gray-700 mb-4">
                    When you apply for a franchise or use our services, we collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Full name, email address, and phone number</li>
                    <li>Physical address and pincode</li>
                    <li>Identity documents (Aadhaar, PAN Card)</li>
                    <li>Business experience and financial information</li>
                    <li>Photographs for identification</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>IP address and browser information</li>
                    <li>Device information and operating system</li>
                    <li>Usage data and analytics</li>
                    <li>Cookies and tracking technologies</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold m-0">How We Use Your Information</h2>
                </div>
                <div className="ml-16">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Process and evaluate franchise applications</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Send important updates about your application or franchise</li>
                    <li>Improve our services and user experience</li>
                    <li>Comply with legal obligations and prevent fraud</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Conduct business analytics and research</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Lock className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold m-0">Data Security</h2>
                </div>
                <div className="ml-16">
                  <p className="text-gray-700 mb-4">
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>256-bit SSL encryption for all data transmission</li>
                    <li>Secure servers with regular security audits</li>
                    <li>Restricted access to personal information</li>
                    <li>Regular backup and disaster recovery procedures</li>
                    <li>Compliance with Indian data protection laws</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-amber-100 p-3 rounded-xl">
                    <UserCheck className="w-6 h-6 text-amber-600" />
                  </div>
                  <h2 className="text-3xl font-bold m-0">Your Rights</h2>
                </div>
                <div className="ml-16">
                  <p className="text-gray-700 mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Access your personal information we hold</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data (subject to legal requirements)</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Lodge a complaint with relevant authorities</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell your personal information. We may share data with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Service providers who assist our operations</li>
                  <li>Partner delivery platforms (with your consent)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners for franchise operations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Cookies Policy</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies to enhance your experience. You can control cookies through your browser settings. Our cookies help us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve website performance and functionality</li>
                  <li>Provide relevant content and advertisements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Data Retention</h2>
                <p className="text-gray-700">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Franchise partner data is retained for the duration of the partnership and 7 years thereafter for legal compliance.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Changes to Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update this privacy policy from time to time. We will notify you of significant changes via email or prominent notice on our website. Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  For questions about this privacy policy or to exercise your rights, contact us:
                </p>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> helpdesk@elocalstore.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91-9492036363</p>
                  <p className="text-gray-700"><strong>Address:</strong> 14th Floor, Manjeera Trinity Corporate Building, KPHB Road, Kukatpally, Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
