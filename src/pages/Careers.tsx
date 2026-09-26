import { useState } from 'react';
import { Briefcase, Target, Users, Languages, GraduationCap, Building2, Send, Upload, CheckCircle } from 'lucide-react';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    resume: null as File | null
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const roles = [
    {
      title: "Business Development Associate",
      overview: "We are looking for an energetic Business Development Associate to drive our franchise expansion, focusing on generating leads, onboarding new partners, and supporting existing operations within designated territories.",
      responsibilities: [
        "Identify and reach out to potential franchise partners in target markets.",
        "Conduct initial meetings and presentations to explain our business model.",
        "Assist in the onboarding process for new franchise partners.",
        "Build and maintain strong local networks to generate leads.",
        "Support regional sales targets and organizational expansion goals."
      ],
      skills: [
        "Strong communication, interpersonal, and negotiation skills.",
        "Proactive, self-motivated, and target-driven mindset.",
        "Good relationship-building capabilities.",
        "Basic understanding of sales processes and local market dynamics."
      ],
      qualifications: "Bachelor's degree in Business, Marketing, or a related field. 0-2 years of relevant experience in sales or business development.",
      languages: "Proficiency in English and the regional language of the target territory."
    },
    {
      title: "Business Development Executive",
      overview: "The Business Development Executive will lead regional franchise growth, strategize sales initiatives, manage associate teams, and ensure the successful execution of our aggressive expansion plans.",
      responsibilities: [
        "Formulate and implement effective business development strategies.",
        "Oversee the end-to-end franchise partner acquisition process.",
        "Manage, mentor, and guide Business Development Associates to achieve targets.",
        "Analyze market trends, competitor activities, and identify new growth opportunities.",
        "Maintain strong, long-term relationships with key franchise partners."
      ],
      skills: [
        "Proven leadership and strategic planning skills.",
        "Excellent presentation and high-level communication abilities.",
        "Strong analytical, problem-solving, and decision-making skills.",
        "Highly target-oriented and capable of working in a fast-paced environment."
      ],
      qualifications: "Bachelor's or Master's degree in Business Administration or a related field. 3-5 years of proven experience in business development, sales, or franchise management.",
      languages: "Proficiency in English and regional languages; knowing additional regional languages is a strong advantage."
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-brand-white">
      {/* Hero Section */}
      <section className="bg-brand-black text-brand-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h4 className="text-brand-red font-bold tracking-widest uppercase mb-4">Join Our Team</h4>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 uppercase leading-tight">
            Build Your Career With <br />
            <span className="text-brand-red">eLocal Store</span>
          </h1>
          <p className="text-xl text-brand-gray-300 font-medium max-w-3xl mx-auto">
            We are on a mission to revolutionize local service delivery across India. Join us and be a part of a dynamic, fast-growing network empowering entrepreneurs.
          </p>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 text-brand-black">Open Positions</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto"></div>
          </div>

          <div className="space-y-12">
            {roles.map((role, index) => (
              <div key={index} className="bg-brand-white p-8 md:p-10 rounded border border-brand-gray-200 shadow-sm hover:border-brand-red transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-8 border-b border-brand-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="bg-brand-red/10 p-4 rounded-full">
                      <Briefcase className="w-8 h-8 text-brand-red" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-brand-black">{role.title}</h3>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-bold uppercase text-brand-black mb-3">Role Overview</h4>
                  <p className="text-brand-gray-600 font-medium leading-relaxed">{role.overview}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  {/* Key Responsibilities */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Target className="w-6 h-6 text-brand-red" />
                      <h4 className="text-lg font-bold uppercase text-brand-black">Key Responsibilities</h4>
                    </div>
                    <ul className="space-y-3">
                      {role.responsibilities.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-brand-red mr-2 font-bold">•</span>
                          <span className="text-brand-gray-600 font-medium text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills & Requirements */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <Users className="w-6 h-6 text-brand-red" />
                        <h4 className="text-lg font-bold uppercase text-brand-black">Required Skills</h4>
                      </div>
                      <ul className="space-y-3">
                        {role.skills.map((skill, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-brand-red mr-2 font-bold">•</span>
                            <span className="text-brand-gray-600 font-medium text-sm">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <GraduationCap className="w-6 h-6 text-brand-red" />
                        <h4 className="text-lg font-bold uppercase text-brand-black">Qualifications</h4>
                      </div>
                      <p className="text-brand-gray-600 font-medium text-sm ml-9">{role.qualifications}</p>
                    </div>

                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <Languages className="w-6 h-6 text-brand-red" />
                        <h4 className="text-lg font-bold uppercase text-brand-black">Language Preference</h4>
                      </div>
                      <p className="text-brand-gray-600 font-medium text-sm ml-9">{role.languages}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-brand-white border-t border-brand-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-4 text-brand-black">Apply Now</h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mb-6"></div>
            <p className="text-brand-gray-600 font-medium">Ready to join? Submit your details and resume below.</p>
          </div>

          {submitted ? (
            <div className="bg-brand-gray-50 p-10 rounded border border-brand-gray-200 text-center shadow-sm">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold uppercase text-brand-black mb-2">Application Received</h3>
              <p className="text-brand-gray-600 font-medium">Thank you for applying. Our team will review your profile and get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-brand-gray-50 p-8 rounded border border-brand-gray-200 shadow-sm space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase text-brand-black mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-brand-gray-300 rounded focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-bold uppercase text-brand-black mb-2">Mobile Number *</label>
                <input
                  type="tel"
                  id="mobile"
                  required
                  pattern="[0-9]{10}"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-3 border border-brand-gray-300 rounded focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-colors"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase text-brand-black mb-2">Resume (PDF/DOC) *</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-brand-gray-300 border-dashed rounded relative hover:border-brand-red transition-colors bg-brand-white">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-brand-gray-400" />
                    <div className="flex text-sm text-brand-gray-600 justify-center mt-2">
                      <label htmlFor="resume-upload" className="relative cursor-pointer rounded-md font-medium text-brand-red hover:text-brand-black focus-within:outline-none">
                        <span>Upload a file</span>
                        <input
                          id="resume-upload"
                          name="resume-upload"
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    <p className="text-xs text-brand-gray-500 mt-2">
                      {formData.resume ? formData.resume.name : "PDF, DOC up to 5MB"}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-red text-brand-white py-4 rounded font-bold uppercase tracking-widest hover:bg-brand-black transition-colors flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {loading ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Corporate Info Footer Section */}
      <section className="py-24 bg-brand-gray-50 border-t border-brand-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-16 h-16 text-brand-black mx-auto mb-6 opacity-20" />
          <h2 className="text-3xl font-extrabold uppercase mb-6 text-brand-black">Join a Growing Enterprise</h2>
          <p className="text-xl text-brand-gray-600 font-medium max-w-2xl mx-auto">
            At eLocal Store, we value innovation, leadership, and a strong drive to succeed. Grow with us as we expand our network across the nation.
          </p>
        </div>
      </section>
    </div>
  );
}
