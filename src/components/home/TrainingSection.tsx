import { Settings, Briefcase, Monitor, HeartHandshake } from 'lucide-react';

export default function TrainingSection() {
  return (
    <section className="py-24 bg-brand-gray-50 border-y border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4 uppercase">
            Guidance & Training
          </h2>
          <p className="text-lg text-brand-gray-600 font-medium">
            Get the guidance and training you need to start, manage and grow your eLocal Store franchise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              id: 1,
              title: 'Franchise Setup',
              desc: 'Step-by-step onboarding',
              icon: Settings
            },
            {
              id: 2,
              title: 'Business Training',
              desc: 'Learn daily operations',
              icon: Briefcase
            },
            {
              id: 3,
              title: 'Digital Platform Training',
              desc: 'Learn how to use the digital tools',
              icon: Monitor
            },
            {
              id: 4,
              title: 'Ongoing Guidance',
              desc: 'Support throughout your franchise journey',
              icon: HeartHandshake
            }
          ].map((item) => (
            <div key={item.id} className="bg-brand-white p-8 rounded border border-brand-gray-200 shadow-sm hover:shadow-md transition-shadow text-center group">
              <div className="w-16 h-16 mx-auto bg-brand-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                <item.icon className="w-8 h-8 text-brand-red group-hover:text-brand-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-2 uppercase">{item.title}</h3>
              <p className="text-brand-gray-600 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
