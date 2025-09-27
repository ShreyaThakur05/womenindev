'use client';

import React, { useState, useEffect } from 'react';
import { JUDGES } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';

export const JudgesSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Judges
            </h2>
            <p className="text-xl text-gray-600">
              Industry experts who will evaluate your innovative solutions
            </p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Judges
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry experts who will evaluate your innovative solutions
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
          {JUDGES.map((judge, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
              {/* Profile Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary-500 to-secondary-500">
                <img 
                  src={judge.image} 
                  alt={judge.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center hidden">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-primary-500">
                    {judge.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {judge.name}
                  </h3>
                  
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-medium rounded-full mb-4">
                    Judge
                  </div>
                </div>
                
                <p className="text-primary-600 font-semibold mb-4 text-center">
                  {judge.designation}
                </p>

                <p className="text-gray-600 mb-8 leading-relaxed text-center">
                  {judge.about}
                </p>

                {/* LinkedIn Link */}
                <div className="text-center">
                  <a 
                    href={judge.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};