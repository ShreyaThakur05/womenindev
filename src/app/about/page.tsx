import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-16 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About WomenInDev 2.0
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Empowering the next generation of women leaders in technology through innovation, collaboration, and excellence.
          </p>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Event Overview</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              WomenInDev 2.0 is a premier hackathon designed exclusively for women in technology. Building on the success of our inaugural event, this year's competition promises to be bigger, better, and more impactful than ever before.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
              Our mission is to create a supportive environment where women can showcase their technical skills, collaborate on innovative solutions, and connect with like-minded professionals in the tech industry. We believe that diversity drives innovation, and this event is our contribution to fostering that diversity.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
              Over 24 intensive hours, participants will work in teams to solve real-world challenges, guided by industry experts and supported by a community of peers. Whether you're a seasoned developer or just starting your tech journey, WomenInDev 2.0 offers something valuable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Event Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Structure</h2>
            <p className="text-xl text-gray-600">A carefully designed two-phase competition</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Phase 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Preliminary Round</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• <strong>Registration:</strong> August 15 - September 25, 2025</li>
                <li>• <strong>Format:</strong> Online application via Unstop</li>
                <li>• <strong>Requirements:</strong> Team formation and project proposal</li>
                <li>• <strong>Evaluation:</strong> Based on innovation potential and team composition</li>
                <li>• <strong>Results:</strong> 15 finalist teams + 5 waitlisted teams announced on September 30</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Final Event</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>• <strong>Date:</strong> October 9-10, 2025</li>
                <li>• <strong>Duration:</strong> 24 hours of intensive coding</li>
                <li>• <strong>Format:</strong> In-person hackathon</li>
                <li>• <strong>Support:</strong> Mentorship, meals, and technical assistance</li>
                <li>• <strong>Judging:</strong> Live presentations to industry experts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us to create this platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Excellence',
                description: 'Striving for the highest standards in everything we do'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Inclusion',
                description: 'Creating a welcoming space for all women in tech'
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: 'Innovation',
                description: 'Encouraging creative solutions to real-world problems'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Recognition',
                description: 'Celebrating achievements and fostering growth'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of a community that's shaping the future of technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rules">
              <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100">
                View Rules & Guidelines
              </Button>
            </Link>
            <Link href="/prizes">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
                See Prizes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}