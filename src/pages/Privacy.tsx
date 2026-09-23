import { Shield, Lock, Eye, UserCheck, FileText, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../config/constants';

export default function Privacy() {
  return (
    <div className="pt-32 min-h-screen bg-brand-white">
      <section className="bg-brand-black text-brand-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Shield className="w-16 h-16 mx-auto mb-6 text-brand-red" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase">Privacy Policy</h1>
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
                  At eLocal Store, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.
                </p>
              </div>
            </div>

            <div className="space-y-16">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-brand-gray-50 p-3 rounded border border-brand-gray-200">
                    <FileText className="w-6 h-6 text-brand-black" />
                  </div>
                  <h2 className="text-3xl font-extrabold m-0 uppercase text-brand-black">Information We Collect</h2>
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-bold mb-3 uppercase">Personal Information</h3>
                  <p className="text-brand-gray-600 mb-4 font-medium">
                    When you apply for a franchise or use our services, we collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                    <li>Full name, email address, and phone number</li>
                    <li>Physical address and pincode</li>
                    <li>Identity documents (Aadhaar, PAN Card)</li>
                    <li>Business experience and financial information</li>
                    <li>Photographs for identification</li>
                  </ul>

                  <h3 className="text-xl font-bold mb-3 mt-8 uppercase">Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                    <li>IP address and browser information</li>
                    <li>Device information and operating system</li>
                    <li>Usage data and analytics</li>
                    <li>Cookies and tracking technologies</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-brand-gray-50 p-3 rounded border border-brand-gray-200">
                    <Eye className="w-6 h-6 text-brand-black" />
                  </div>
                  <h2 className="text-3xl font-extrabold m-0 uppercase text-brand-black">How We Use Your Information</h2>
                </div>
                <div className="ml-16">
                  <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
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
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-brand-gray-50 p-3 rounded border border-brand-gray-200">
                    <Lock className="w-6 h-6 text-brand-black" />
                  </div>
                  <h2 className="text-3xl font-extrabold m-0 uppercase text-brand-black">Data Security</h2>
                </div>
                <div className="ml-16">
                  <p className="text-brand-gray-600 mb-4 font-medium">
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                    <li>256-bit SSL encryption for all data transmission</li>
                    <li>Secure servers with regular security audits</li>
                    <li>Restricted access to personal information</li>
                    <li>Regular backup and disaster recovery procedures</li>
                    <li>Compliance with Indian data protection laws</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-brand-gray-50 p-3 rounded border border-brand-gray-200">
                    <UserCheck className="w-6 h-6 text-brand-black" />
                  </div>
                  <h2 className="text-3xl font-extrabold m-0 uppercase text-brand-black">Your Rights</h2>
                </div>
                <div className="ml-16">
                  <p className="text-brand-gray-600 mb-4 font-medium">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
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
                <h2 className="text-3xl font-extrabold mb-4 uppercase text-brand-black">Information Sharing</h2>
                <p className="text-brand-gray-600 mb-4 font-medium">
                  We do not sell your personal information. We may share data with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                  <li>Service providers who assist our operations</li>
                  <li>Partner delivery platforms (with your consent)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners for franchise operations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-4 uppercase text-brand-black">Cookies Policy</h2>
                <p className="text-brand-gray-600 mb-4 font-medium">
                  We use cookies to enhance your experience. You can control cookies through your browser settings. Our cookies help us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-brand-gray-600 font-medium">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve website performance and functionality</li>
                  <li>Provide relevant content and advertisements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-4 uppercase text-brand-black">Data Retention</h2>
                <p className="text-brand-gray-600 font-medium">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Franchise partner data is retained for the duration of the partnership and 7 years thereafter for legal compliance.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-4 uppercase text-brand-black">Changes to Privacy Policy</h2>
                <p className="text-brand-gray-600 font-medium">
                  We may update this privacy policy from time to time. We will notify you of significant changes via email or prominent notice on our website. Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-extrabold mb-6 uppercase text-brand-black">Contact Us</h2>
                <p className="text-brand-gray-600 mb-6 font-medium">
                  For questions about this privacy policy or to exercise your rights, contact us:
                </p>
                <div className="bg-brand-gray-50 border border-brand-gray-200 rounded p-6 shadow-sm">
                  <p className="text-brand-gray-600 mb-2 font-medium"><strong className="text-brand-black">Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-red hover:underline">{CONTACT_INFO.email}</a></p>
                  <p className="text-brand-gray-600 mb-2 font-medium"><strong className="text-brand-black">Phone:</strong> <a href={`tel:+91${CONTACT_INFO.phone}`} className="text-brand-red hover:underline">+91-{CONTACT_INFO.phone}</a></p>
                  <p className="text-brand-gray-600 font-medium"><strong className="text-brand-black">Address:</strong> {CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
