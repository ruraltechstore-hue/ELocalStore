import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Check, Upload, User, Briefcase, MapPin, FileText, CheckCircle, Loader, Plus, X } from 'lucide-react';
import { franchisePlans } from '../config/constants';

export default function Apply() {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
    franchiseType: '',
    experience: '',
    pincodes: [] as string[],
    investmentReady: false,
    aadhaar: null as File | null,
    pan: null as File | null,
    photo: null as File | null
  });

  useEffect(() => {
    if (location.state && location.state.pincode) {
      setFormData(prev => ({
        ...prev,
        pincodes: [location.state.pincode]
      }));
    }
  }, [location.state]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const steps = [
    { number: 1, title: 'Personal Details', icon: User },
    { number: 2, title: 'Franchise Plan', icon: Briefcase },
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
          pincodes: formData.pincodes,
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
      <div className="pt-16 min-h-screen bg-brand-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-brand-gray-50 rounded border border-brand-gray-200 shadow-sm p-12">
            <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4 uppercase">Application Submitted!</h2>
            <p className="text-xl text-brand-gray-600 mb-8">
              Thank you for your interest in eLocal Store franchise. Our team will contact you within 24-48 hours.
            </p>
            <div className="bg-brand-white rounded p-6 mb-8 border-2 border-brand-black">
              <p className="text-brand-gray-900 font-bold mb-2">Your application details have been saved.</p>
              <p className="font-semibold text-brand-red mb-4">Application ID: ELS{Date.now().toString().slice(-6)}</p>
              <p className="text-brand-gray-600 mb-4 font-medium">To reserve your pincode, please complete your advance payment:</p>
              <a
                href="https://rzp.io/rzp/2h9roex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-red text-brand-white px-8 py-3 rounded font-bold uppercase hover:bg-brand-black transition-colors"
              >
                Pay Advance to Reserve
              </a>
            </div>
            <a
              href="/"
              className="inline-block border-2 border-brand-black text-brand-black px-8 py-4 rounded font-bold uppercase hover:bg-brand-black hover:text-brand-white transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-12 min-h-screen bg-brand-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase text-brand-black">Franchise Application</h1>
          <p className="text-xl text-brand-gray-600 font-medium">Complete the form to reserve your pincode and start your journey</p>
        </div>

        <div className="mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      currentStep >= step.number
                        ? 'bg-brand-black text-brand-white'
                        : 'bg-brand-gray-100 text-brand-gray-500'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                  </div>
                  <span className={`text-xs mt-2 hidden md:block uppercase font-bold tracking-wider ${currentStep >= step.number ? 'text-brand-black' : 'text-brand-gray-500'}`}>
                    {step.title}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 ${currentStep > step.number ? 'bg-brand-black' : 'bg-brand-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-gray-50 rounded border border-brand-gray-200 shadow-sm p-8 md:p-12">
          {error && (
            <div className="mb-6 bg-red-50 border-2 border-brand-red rounded p-4 text-red-800 font-bold">
              {error}
            </div>
          )}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold mb-6 uppercase">Personal Details</h2>
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2 uppercase">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-brand-gray-200 rounded focus:border-brand-black focus:outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2 uppercase">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-brand-gray-200 rounded focus:border-brand-black focus:outline-none"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2 uppercase">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-brand-gray-200 rounded focus:border-brand-black focus:outline-none"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2 uppercase">Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-brand-gray-200 rounded focus:border-brand-black focus:outline-none"
                  placeholder="Enter your complete address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2 uppercase">Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-brand-gray-200 rounded focus:border-brand-black focus:outline-none"
                  placeholder="Enter 6-digit pincode"
                  maxLength={6}
                  required
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold mb-6 uppercase">Choose Franchise Plan</h2>
              <div className="space-y-4">
                {franchisePlans.map((franchise) => (
                  <label
                    key={franchise.id}
                    className={`block p-6 border-2 rounded cursor-pointer transition-all ${
                      formData.franchiseType === franchise.id
                        ? 'border-brand-black bg-brand-white shadow-md'
                        : 'border-brand-gray-200 hover:border-brand-red bg-brand-white'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <input
                          type="radio"
                          name="franchiseType"
                          value={franchise.id}
                          checked={formData.franchiseType === franchise.id}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 text-brand-black"
                        />
                        <div>
                          <h3 className="text-lg font-extrabold uppercase">{franchise.name}</h3>
                          <p className="text-brand-gray-600 font-medium mt-1">{franchise.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-brand-black">₹{franchise.basePrice.toLocaleString()}</div>
                        <div className="text-sm text-brand-gray-500 font-bold">+ 18% GST</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold mb-6 uppercase">Business Details</h2>
              <div>
                <label className="block text-sm font-bold text-brand-black mb-2 uppercase">Business Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-brand-gray-200 rounded focus:border-brand-black focus:outline-none font-medium bg-white"
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
                <div className="flex justify-between items-end mb-2">
                  <label className="block text-sm font-bold text-brand-black uppercase">
                    Preferred Pincodes *
                  </label>
                  <span className="text-xs font-bold text-brand-gray-500 uppercase tracking-wider bg-brand-gray-100 px-2 py-1 rounded">
                    {formData.pincodes.length} / {formData.franchiseType === 'single-pincode' ? 1 : formData.franchiseType === 'multi-pincode' ? 5 : 0} Selected
                  </span>
                </div>
                
                {formData.pincodes.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {formData.pincodes.map((pin, i) => (
                      <div key={i} className="flex items-center bg-brand-red text-brand-white px-3 py-1 rounded font-bold text-sm tracking-wider">
                        {pin}
                        <button 
                          type="button" 
                          onClick={() => setFormData(prev => ({ ...prev, pincodes: prev.pincodes.filter((_, idx) => idx !== i) }))}
                          className="ml-2 text-brand-white/70 hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {(!formData.franchiseType || (formData.franchiseType === 'single-pincode' && formData.pincodes.length < 1) || (formData.franchiseType === 'multi-pincode' && formData.pincodes.length < 5)) && (
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      id="pincodeInput"
                      className="flex-1 px-4 py-3 border-2 border-brand-gray-200 rounded focus:border-brand-black focus:outline-none text-brand-black tracking-widest font-bold"
                      placeholder="Enter 6-digit pincode"
                      maxLength={6}
                      pattern="[0-9]{6}"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const input = document.getElementById('pincodeInput') as HTMLInputElement;
                        if (input && input.value.length === 6 && !formData.pincodes.includes(input.value)) {
                          setFormData(prev => ({ ...prev, pincodes: [...prev.pincodes, input.value] }));
                          input.value = '';
                        }
                      }}
                      className="bg-brand-black text-brand-white px-6 py-3 rounded font-bold hover:bg-brand-red transition-colors flex items-center"
                    >
                      <Plus className="w-5 h-5 mr-1" /> Add
                    </button>
                  </div>
                )}
                {!formData.franchiseType && (
                  <p className="text-xs text-brand-red font-bold mt-2">Please select a franchise plan in Step 2 to add pincodes.</p>
                )}
              </div>

              <div className="bg-brand-white border border-brand-gray-200 rounded p-6 shadow-sm mt-8">
                <h3 className="font-extrabold uppercase mb-3 text-brand-black">Why Choose eLocal Store?</h3>
                <ul className="space-y-3 text-sm text-brand-gray-600 font-medium">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span>Multiple services under one platform</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span>Comprehensive training and support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span>Digital dashboard and management tools</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span>Proven business model and operations</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold mb-6 uppercase">Investment Confirmation</h2>
              <div className="bg-brand-black text-brand-white rounded p-8 border-l-4 border-brand-red">
                <h3 className="text-2xl font-black mb-4 uppercase">Your Selected Plan</h3>
                <div className="space-y-2">
                  <p className="text-xl font-bold">
                    {formData.franchiseType === 'single-pincode' && 'Single Pincode Plan - ₹1,50,000'}
                    {formData.franchiseType === 'multi-pincode' && 'Multi-Pincode Plan - ₹2,00,000'}
                    {!formData.franchiseType && 'Please select a franchise plan'}
                  </p>
                  <p className="text-brand-gray-300 font-medium">+ 18% GST applicable</p>
                </div>
              </div>
              <div className="bg-brand-white border border-brand-gray-200 rounded p-6 shadow-sm">
                <h4 className="font-extrabold text-brand-black mb-3 uppercase">Payment Information</h4>
                <p className="text-sm text-brand-gray-600 mb-4 font-medium">
                  To reserve your pincode, an advance payment is required. The remaining amount must be paid within 5-8 days from the booking date.
                </p>
                <ul className="space-y-2 text-sm text-brand-gray-600 font-medium mb-6">
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
                    <span>Activation subject to final approval</span>
                  </li>
                </ul>
                <label className="flex items-start space-x-3 cursor-pointer bg-brand-gray-50 p-4 border border-brand-gray-200 rounded">
                  <input
                    type="checkbox"
                    name="investmentReady"
                    checked={formData.investmentReady}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-brand-red"
                    required
                  />
                  <span className="text-brand-black font-bold text-sm">
                    I confirm that I understand the payment terms and conditions, and I am ready to pay the advance amount to reserve the pincode.
                  </span>
                </label>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold mb-6 uppercase">Upload Documents</h2>
              <p className="text-brand-gray-600 mb-6 font-medium">Please upload the following documents for verification (Optional at this stage)</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-brand-black mb-2 uppercase">Aadhaar Card</label>
                  <div className="bg-brand-white border-2 border-dashed border-brand-gray-300 rounded p-6 text-center hover:border-brand-red transition-colors">
                    <Upload className="w-8 h-8 text-brand-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, 'aadhaar')}
                      accept="image/*,.pdf"
                      className="hidden"
                      id="aadhaar"
                    />
                    <label htmlFor="aadhaar" className="cursor-pointer text-brand-red font-bold hover:text-brand-black transition-colors">
                      {formData.aadhaar ? formData.aadhaar.name : 'Click to upload Aadhaar Card'}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-black mb-2 uppercase">PAN Card</label>
                  <div className="bg-brand-white border-2 border-dashed border-brand-gray-300 rounded p-6 text-center hover:border-brand-red transition-colors">
                    <Upload className="w-8 h-8 text-brand-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, 'pan')}
                      accept="image/*,.pdf"
                      className="hidden"
                      id="pan"
                    />
                    <label htmlFor="pan" className="cursor-pointer text-brand-red font-bold hover:text-brand-black transition-colors">
                      {formData.pan ? formData.pan.name : 'Click to upload PAN Card'}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-black mb-2 uppercase">Passport Size Photo</label>
                  <div className="bg-brand-white border-2 border-dashed border-brand-gray-300 rounded p-6 text-center hover:border-brand-red transition-colors">
                    <Upload className="w-8 h-8 text-brand-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, 'photo')}
                      accept="image/*"
                      className="hidden"
                      id="photo"
                    />
                    <label htmlFor="photo" className="cursor-pointer text-brand-red font-bold hover:text-brand-black transition-colors">
                      {formData.photo ? formData.photo.name : 'Click to upload Photo'}
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-brand-white border border-brand-gray-200 rounded p-6 shadow-sm">
                <h4 className="font-extrabold text-brand-black mb-2 uppercase">Document Guidelines</h4>
                <ul className="space-y-1 text-sm text-brand-gray-600 font-medium">
                  <li>• Documents should be clear and readable</li>
                  <li>• Accepted formats: JPG, PNG, PDF</li>
                  <li>• Maximum file size: 5MB per document</li>
                  <li>• You can also submit these documents later via email or WhatsApp</li>
                </ul>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-brand-gray-200">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex items-center space-x-2 px-6 py-3 border-2 border-brand-black rounded font-bold uppercase hover:bg-brand-black hover:text-brand-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>
            )}
            {currentStep < 5 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="ml-auto flex items-center space-x-2 px-8 py-3 bg-brand-red text-brand-white rounded font-bold uppercase hover:bg-brand-black transition-colors"
              >
                <span>Next Step</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="ml-auto flex items-center space-x-2 px-8 py-3 bg-brand-red text-brand-white rounded font-bold uppercase hover:bg-brand-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Pay Advance</span>
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
