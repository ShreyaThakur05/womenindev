import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Trophy, Medal, Award, Gift } from 'lucide-react';

export default function PrizesPage() {
  const prizes = [
    {
      position: 'Winner',
      amount: '₹20,000',
      icon: <Trophy className="w-12 h-12" />,
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'Cash prize of ₹20,000',
        'Winner certificate',
        'LinkedIn feature',
        'Networking opportunities',
        'Community recognition',
        'Goodies'
      ]
    },
    {
      position: '1st Runner-up',
      amount: '₹12,000',
      icon: <Medal className="w-12 h-12" />,
      color: 'from-gray-300 to-gray-500',
      benefits: [
        'Cash prize of ₹12,000',
        'Runner-up certificate',
        'LinkedIn feature',
        'Goodies',
        'Networking opportunities',
        'Community recognition'
      ]
    },
    {
      position: '2nd Runner-up',
      amount: '₹8,000',
      icon: <Award className="w-12 h-12" />,
      color: 'from-amber-600 to-amber-800',
      benefits: [
        'Cash prize of ₹8,000',
        'Runner-up certificate',
        'LinkedIn feature',
        'Goodies',
        'Community recognition'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-16 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prizes & Recognition
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Compete for exciting prizes and recognition in the tech community
          </p>
          <div className="text-3xl md:text-4xl font-bold text-white">
            Total Prize Pool: ₹40,000
          </div>
        </div>
      </section>

      {/* Prize Breakdown */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Prize Breakdown</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Recognition and rewards for top performers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <div key={index} className="relative">
                {/* Winner Badge */}
                {index === 0 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                      🏆 WINNER
                    </div>
                  </div>
                )}

                <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${prize.color} text-white rounded-full mb-6`}>
                    {prize.icon}
                  </div>

                  {/* Position */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {prize.position}
                  </h3>

                  {/* Amount */}
                  <div className="text-3xl font-bold text-primary-500 mb-6">
                    {prize.amount}
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-3 text-gray-600">
                    {prize.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Additional Benefits</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Every participant gains valuable experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Participation Certificates',
                description: 'All participants receive official certificates'
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: 'Goodies',
                description: 'Exclusive merchandise and tech accessories'
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: 'Portfolio Enhancement',
                description: 'Showcase your project in your professional portfolio'
              },
              {
                icon: <Medal className="w-8 h-8" />,
                title: 'Networking Opportunities',
                description: 'Connect with industry professionals and peers'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Prize Distribution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prize Distribution</h2>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Results Announcement</h3>
                  <p className="text-gray-600">Winners will be announced on October 10, 2025, at 6:00 PM IST during the closing ceremony.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Prize Distribution</h3>
                  <p className="text-gray-600">Winners will receive an email and message within 7 days with the details.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Certificates & Goodies</h3>
                  <p className="text-gray-600">Winner teams will receive certificates at the event conclusion and other participants will receive it on Unstop.</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Win Big?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join WomenInDev 2.0 and compete for amazing prizes and recognition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rules">
              <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100">
                View Rules
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}