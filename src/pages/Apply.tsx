import { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, Upload, User, Briefcase, MapPin, FileText, CheckCircle, Loader } from 'lucide-react';

export default function Apply() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    franchiseType: '',
    experience: '',
    locationPreference: '',
    investmentReady: false,
    aadhaar: null as File | null,
    pan: null as File | null,
    photo: null as File | null
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const steps = [
    { number: 1, title: 'Personal Details', icon: User },
    { number: 2, title: 'Franchise Type', icon: Briefcase },
    { number: 3, title: 'Business Details', icon: MapPin },
    { number: 4, title: 'Investment', icon: FileText },
    { number: 5, title: 'Documents', icon: Upload }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, [field]: file });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'franchise',
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          pincode: formData.pincode,
          franchiseType: formData.franchiseType,
          experience: formData.experience,
          locationPreference: formData.locationPreference,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit application');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Failed to submit application. Please try again or contact us at helpdesk@elocalstore.com');
      console.error('Application submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Application Submitted!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your interest in eLocal Store franchise. Our team will contact you within 24-48 hours.
            </p>
            <div className="bg-indigo-50 rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-2">Your application details have been sent to our WhatsApp support team.</p>
              <p className="font-semibold text-indigo-600 mb-4">Application ID: ELS{Date.now().toString().slice(-6)}</p>
              <p className="text-gray-700 mb-4">Complete your payment to activate your franchise:</p>
              <a
                href="https://rzp.io/rzp/2h9roex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Proceed to Payment
              </a>
            </div>
            <a
              href="/"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Franchise Application</h1>
          <p className="text-xl text-gray-600">Complete the form to start your journey with eLocal Store</p>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      currentStep >= step.number
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                  </div>
                  <span className={`text-xs mt-2 hidden md:block ${currentStep >= step.number ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>
                    {step.title}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 ${currentStep > step.number ? 'bg-indigo-600' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {error && (
            <div className="mb-6 bg-red-100 border-2 border-red-500 rounded-xl p-4 text-red-800">
              {error}
            </div>
          )}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter your complete address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter 6-digit pincode"
                  maxLength={6}
                  required
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Choose Franchise Type</h2>
              <div className="space-y-4">
                {[
                  { value: 'agent', name: 'Agent Franchise', price: '₹82,600', desc: '5 Riders, 1 Pincode' },
                  { value: 'distributor', name: 'Distributor Franchise', price: '₹1,18,000', desc: '15 Riders, 5 Pincodes', popular: true },
                  { value: 'super', name: 'Super Distributor', price: '₹2,36,000', desc: 'Unlimited Riders, Entire City' }
                ].map((franchise) => (
                  <label
                    key={franchise.value}
                    className={`block p-6 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.franchiseType === franchise.value
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300'
                    } ${franchise.popular ? 'ring-2 ring-purple-500' : ''}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <input
                          type="radio"
                          name="franchiseType"
                          value={franchise.value}
                          checked={formData.franchiseType === franchise.value}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-indigo-600"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-lg font-bold">{franchise.name}</h3>
                            {franchise.popular && (
                              <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                            )}
                          </div>
                          <p className="text-gray-600">{franchise.desc}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-indigo-600">{franchise.price}</div>
                        <div className="text-sm text-gray-500">Total Investment</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Business Details</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Business Experience</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                  required
                >
                  <option value="">Select your experience</option>
                  <option value="no-experience">No Prior Experience</option>
                  <option value="0-2">0-2 Years</option>
                  <option value="2-5">2-5 Years</option>
                  <option value="5+">5+ Years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Location *</label>
                <input
                  type="text"
                  name="locationPreference"
                  value={formData.locationPreference}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter city/area preference"
                  required
                />
              </div>
              <div className="bg-indigo-50 rounded-xl p-6">
                <h3 className="font-semibold mb-3">Why Choose eLocal Store?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>65+ services under one platform</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Comprehensive training and support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Quick ROI within 5-12 months</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Proven business model</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Investment Confirmation</h2>
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Your Selected Plan</h3>
                <div className="space-y-2">
                  <p className="text-lg">
                    {formData.franchiseType === 'agent' && 'Agent Franchise - ₹82,600'}
                    {formData.franchiseType === 'distributor' && 'Distributor Franchise - ₹1,18,000'}
                    {formData.franchiseType === 'super' && 'Super Distributor - ₹2,36,000'}
                    {!formData.franchiseType && 'Please select a franchise type'}
                  </p>
                  <p className="text-white/80">Includes 18% GST</p>
                </div>
              </div>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                <h4 className="font-semibold text-yellow-800 mb-3">Payment Information</h4>
                <p className="text-sm text-gray-700 mb-4">
                  Payment details will be shared by our team after document verification. You'll receive complete payment instructions via email and WhatsApp.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Secure payment gateway</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Multiple payment options available</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Instant franchise activation after payment</span>
                  </li>
                </ul>
              </div>
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="investmentReady"
                  checked={formData.investmentReady}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-indigo-600"
                  required
                />
                <span className="text-gray-700">
                  I confirm that I am ready to make the investment and understand the payment terms and conditions.
                </span>
              </label>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Upload Documents</h2>
              <p className="text-gray-600 mb-6">Please upload the following documents for verification</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Aadhaar Card *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-500 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, 'aadhaar')}
                      accept="image/*,.pdf"
                      className="hidden"
                      id="aadhaar"
                    />
                    <label htmlFor="aadhaar" className="cursor-pointer text-indigo-600 hover:text-indigo-700">
                      {formData.aadhaar ? formData.aadhaar.name : 'Click to upload Aadhaar Card'}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">PAN Card *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-500 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, 'pan')}
                      accept="image/*,.pdf"
                      className="hidden"
                      id="pan"
                    />
                    <label htmlFor="pan" className="cursor-pointer text-indigo-600 hover:text-indigo-700">
                      {formData.pan ? formData.pan.name : 'Click to upload PAN Card'}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Passport Size Photo *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-indigo-500 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, 'photo')}
                      accept="image/*"
                      className="hidden"
                      id="photo"
                    />
                    <label htmlFor="photo" className="cursor-pointer text-indigo-600 hover:text-indigo-700">
                      {formData.photo ? formData.photo.name : 'Click to upload Photo'}
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-2">Document Guidelines</h4>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>• Documents should be clear and readable</li>
                  <li>• Accepted formats: JPG, PNG, PDF</li>
                  <li>• Maximum file size: 5MB per document</li>
                  <li>• All documents are securely encrypted</li>
                </ul>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 rounded-full font-semibold hover:border-indigo-500 hover:text-indigo-600 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>
            )}
            {currentStep < 5 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="ml-auto flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                <span>Next Step</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="ml-auto flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Check className="w-5 h-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
