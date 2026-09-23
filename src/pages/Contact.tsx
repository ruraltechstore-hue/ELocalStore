import { useState } from 'react';
import { Mail, Phone, Globe, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../config/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-32 min-h-screen bg-brand-white">
      {/* Hero Section */}
      <section className="bg-brand-black text-brand-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">Let's Connect</h1>
          <p className="text-xl text-brand-gray-300 font-medium max-w-2xl mx-auto">
            Have questions about eLocal Store or the franchise opportunity? We're here to help you start your journey.
          </p>
        </div>
      </section>

      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-brand-gray-50 p-8 rounded border border-brand-gray-200 text-center hover:border-brand-red transition-colors shadow-sm">
                <div className="bg-brand-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Phone className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-extrabold uppercase text-brand-black mb-2">Call Us</h3>
                <a href={`tel:+91${CONTACT_INFO.phone}`} className="text-brand-gray-600 font-bold hover:text-brand-red transition-colors">
                  +91 {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="bg-brand-gray-50 p-8 rounded border border-brand-gray-200 text-center hover:border-brand-red transition-colors shadow-sm">
                <div className="bg-brand-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Mail className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-extrabold uppercase text-brand-black mb-2">Email Us</h3>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-gray-600 font-bold hover:text-brand-red transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="bg-brand-gray-50 p-8 rounded border border-brand-gray-200 text-center hover:border-brand-red transition-colors shadow-sm">
                <div className="bg-brand-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Globe className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-extrabold uppercase text-brand-black mb-2">Website</h3>
                <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noreferrer" className="text-brand-gray-600 font-bold hover:text-brand-red transition-colors">
                  {CONTACT_INFO.website}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-brand-white border-2 border-brand-gray-200 p-8 md:p-12 rounded shadow-lg relative">
                <h2 className="text-3xl font-extrabold uppercase text-brand-black mb-8">Send a Message</h2>

                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded p-8 text-center animate-fade-up">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 uppercase mb-2">Thank you!</h3>
                    <p className="text-green-700 font-medium">Your message has been received. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-gray-600 uppercase tracking-wider mb-2">
                          Full Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded border-2 border-brand-gray-200 focus:outline-none focus:border-brand-red text-brand-black font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-brand-gray-600 uppercase tracking-wider mb-2">
                          Mobile Number <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                          pattern="[0-9]{10}"
                          className="w-full px-4 py-3 rounded border-2 border-brand-gray-200 focus:outline-none focus:border-brand-red text-brand-black font-medium"
                          placeholder="10-digit number"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-brand-gray-600 uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded border-2 border-brand-gray-200 focus:outline-none focus:border-brand-red text-brand-black font-medium"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-brand-gray-600 uppercase tracking-wider mb-2">
                          Subject <span className="text-brand-red">*</span>
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange as any}
                          required
                          className="w-full px-4 py-3 rounded border-2 border-brand-gray-200 focus:outline-none focus:border-brand-red text-brand-black font-medium bg-white"
                        >
                          <option value="">Select a Subject</option>
                          <option value="Franchise Inquiry">Franchise Inquiry</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Support">Support</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-brand-gray-600 uppercase tracking-wider mb-2">
                        Message <span className="text-brand-red">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded border-2 border-brand-gray-200 focus:outline-none focus:border-brand-red text-brand-black font-medium resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="bg-brand-red text-brand-white px-8 py-4 rounded font-bold hover:bg-brand-black transition-colors disabled:opacity-50 uppercase tracking-widest flex items-center justify-center w-full md:w-auto"
                    >
                      {status === 'submitting' ? (
                        <span className="flex items-center">
                          <Send className="w-5 h-5 mr-2 animate-bounce" /> Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="w-5 h-5 mr-2" /> Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-brand-gray-50 border-t border-brand-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold uppercase mb-4 text-brand-black">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-brand-white border border-brand-gray-200 p-6 rounded shadow-sm">
              <h4 className="font-bold text-brand-black uppercase mb-2">How long does the application process take?</h4>
              <p className="text-brand-gray-600 font-medium text-sm">Once you submit your application and preferred pincode, our team will review it within 24-48 hours. If approved, the onboarding process typically takes 1-2 weeks.</p>
            </div>
            <div className="bg-brand-white border border-brand-gray-200 p-6 rounded shadow-sm">
              <h4 className="font-bold text-brand-black uppercase mb-2">Do I need prior experience?</h4>
              <p className="text-brand-gray-600 font-medium text-sm">While prior business experience is helpful, it is not strictly required. We provide full training on our digital dashboard and operational procedures.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
