import { HeroSection } from '@/components/features/HeroSection';
import { Timeline } from '@/components/features/Timeline';
import { JudgesSection } from '@/components/features/JudgesSection';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Trophy, Users, Code, Award } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: '₹40,000 Prize Pool',
      description: 'Compete for exciting cash prizes and recognition in the tech community.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Networking Opportunities',
      description: 'Connect with like-minded women in technology and industry professionals.',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: '24-Hour Challenge',
      description: 'Push your limits in an intensive coding marathon with real-world problems.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certificates & Recognition',
      description: 'All participants receive certificates and winners get special recognition.',
    },
  ];

  return (
    <>
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join WomenInDev 2.0?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the ultimate hackathon designed specifically for women in technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const colors = [
                'from-yellow-300 to-orange-400',
                'from-blue-300 to-purple-400', 
                'from-green-300 to-teal-400',
                'from-pink-300 to-red-400'
              ];
              return (
                <div key={index} className={`text-center p-8 rounded-2xl bg-gradient-to-br ${colors[index]} text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm text-white rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/90">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatedSection animation="fadeInLeft">
        <Timeline />
      </AnimatedSection>
      
      <AnimatedSection animation="fadeInRight">
        <JudgesSection />
      </AnimatedSection>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make Your Mark?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of talented women developers in this exciting challenge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100">
                Learn More
              </Button>
            </Link>
            <Link href="/rules">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
                View Rules
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}