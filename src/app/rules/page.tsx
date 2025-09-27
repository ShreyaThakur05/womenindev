import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { CheckCircle, XCircle, Users, Code, FileText, Trophy } from 'lucide-react';

export default function RulesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-16 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Rules & Guidelines
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Everything you need to know to participate in WomenInDev 2.0
          </p>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-primary-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Eligibility Requirements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Who Can Participate
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• Female students currently enrolled in any educational institution</li>
                <li>• All skill levels welcome (beginner to advanced)</li>
                <li>• Any field of study (not limited to computer science)</li>
                <li>• Age 18+ at the time of registration</li>
                <li>• Valid student ID required for verification</li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                <XCircle className="w-5 h-5 mr-2" />
                Restrictions
              </h3>
              <ul className="space-y-2 text-red-700">
                <li>• Anyone who is not currently enrolled in college</li>
                <li>• Previous WomenInDev 1.0 winners</li>
                <li>• Event organizers and their immediate family</li>
                <li>• Teams with more than 4 members</li>
                <li>• Participants without valid student status</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Formation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-primary-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Team Formation Guidelines</h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Size</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Minimum:</strong> 1 member</li>
                  <li>• <strong>Maximum:</strong> 4 members</li>
                  <li>• <strong>Recommended:</strong> 3-4 members for optimal collaboration</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Composition</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• All team members must be female</li>
                  <li>• All members must meet eligibility criteria</li>
                  <li>• Mixed skill levels encouraged</li>
                  <li>• Cross-institutional teams allowed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Code className="w-8 h-8 text-primary-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Technology Stack Rules</h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Allowed Technologies</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Any programming language</li>
                  <li>• Open-source frameworks and libraries</li>
                  <li>• Free APIs and services</li>
                  <li>• Cloud platforms (free tiers)</li>
                  <li>• Database systems</li>
                  <li>• Development tools and IDEs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Restrictions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• No pre-written code from previous projects</li>
                  <li>• No paid services or premium APIs</li>
                  <li>• No proprietary software requiring licenses</li>
                  <li>• All code must be written during the event</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-primary-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Submission Requirements</h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Required Deliverables</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">1. Working Application</h4>
                <p className="text-gray-600">A functional prototype or application that addresses the given problem statement.</p>
              </div>

              <div className="border-l-4 border-primary-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">2. Source Code</h4>
                <p className="text-gray-600">Complete source code hosted on GitHub with proper documentation and README file.</p>
              </div>

              <div className="border-l-4 border-primary-500 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">3. Submission Form</h4>
                <p className="text-gray-600">Complete the Google Form available on your dashboard with all project details and GitHub repository link.</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800">
                  <strong>Deadline:</strong> All submissions must be completed by October 10, 2025, 6:00 PM IST. Late submissions will not be accepted.
                </p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <ul className="text-blue-800 space-y-1">
                  <li>• Entries submitted after the contest is closed, will not be considered.</li>
                  <li>• No registration fee required.</li>
                  <li>• Multiple IDs of user leads to disqualification from the contest.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Trophy className="w-8 h-8 text-primary-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Evaluation Criteria</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Innovation & Creativity',
                weight: '25%',
                description: 'Originality of the idea and creative approach to problem-solving'
              },
              {
                title: 'Technical Implementation',
                weight: '25%',
                description: 'Code quality, architecture, and technical complexity'
              },
              {
                title: 'Impact & Usefulness',
                weight: '25%',
                description: 'Potential real-world impact and practical applicability'
              },
              {
                title: 'Presentation & Demo',
                weight: '25%',
                description: 'Clarity of presentation and effectiveness of demonstration'
              }
            ].map((criteria, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{criteria.title}</h3>
                  <span className="text-primary-500 font-bold">{criteria.weight}</span>
                </div>
                <p className="text-gray-600">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Code of Conduct</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-4 text-gray-600">
              <p>All participants are expected to:</p>
              <ul className="space-y-2 ml-6">
                <li>• Treat all participants, mentors, and organizers with respect</li>
                <li>• Maintain a professional and inclusive environment</li>
                <li>• Respect intellectual property and avoid plagiarism</li>
                <li>• Follow all venue rules and safety guidelines</li>
                <li>• Report any inappropriate behavior to organizers</li>
                <li>• Collaborate fairly and avoid any form of cheating</li>
              </ul>
              
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">
                  <strong>Violation of the code of conduct may result in immediate disqualification from the event.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Compete?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Make sure you understand all the rules before registering
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prizes">
              <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100">
                View Prizes
              </Button>
            </Link>
            <Link href="/organizers">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
                Contact Organizers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}