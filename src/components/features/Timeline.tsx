'use client';

import React, { useState, useEffect } from 'react';
import { TIMELINE_STAGES } from '@/lib/constants';
import { Check, Clock, Calendar } from 'lucide-react';

export const Timeline: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setNow(new Date());
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Track the progress of WomenInDev 2.0
            </p>
          </div>
        </div>
      </section>
    );
  }

  const getStageStatus = (stage: typeof TIMELINE_STAGES[0]) => {
    if (now > stage.endDate) return 'completed';
    if (now >= stage.startDate && now <= stage.endDate) return 'current';
    return 'upcoming';
  };

  const StatusIcon: React.FC<{ status: string }> = ({ status }) => {
    switch (status) {
      case 'completed':
        return <Check className="w-6 h-6 text-green-500" />;
      case 'current':
        return <Clock className="w-6 h-6 text-primary-500 animate-pulse" />;
      default:
        return <Calendar className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Event Timeline
          </h2>
          <p className="text-xl text-gray-600">
            Track the progress of WomenInDev 2.0
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {TIMELINE_STAGES.map((stage, index) => {
              const status = getStageStatus(stage);
              
              return (
                <div key={stage.id} className="relative flex items-start">
                  {/* Icon */}
                  <div className={`
                    flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border-4 bg-white z-10
                    ${status === 'completed' ? 'border-green-500 bg-green-100' : 
                      status === 'current' ? 'border-primary-500 bg-primary-100' : 'border-gray-300 bg-gray-100'}
                  `}>
                    <StatusIcon status={status} />
                  </div>

                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <div className={`
                      p-6 rounded-lg shadow-sm border-l-4
                      ${status === 'completed' ? 'bg-green-50 border-green-500 shadow-green-200' : 
                        status === 'current' ? 'bg-primary-50 border-primary-500 shadow-primary-200' : 'bg-white border-gray-300'}
                    `}>
                      <h3 className={`
                        text-xl font-semibold mb-2
                        ${status === 'completed' ? 'text-green-800' : 
                          status === 'current' ? 'text-primary-700' : 'text-gray-700'}
                      `}>
                        {stage.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-3">
                        {stage.description}
                      </p>
                      
                      <div className="text-sm text-gray-500">
                        {stage.startDate.toDateString() === stage.endDate.toDateString() ? (
                          <span>{stage.startDate.toLocaleDateString('en-IN', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        ) : (
                          <span>
                            {stage.startDate.toLocaleDateString('en-IN', { 
                              month: 'short', 
                              day: 'numeric' 
                            })} - {stage.endDate.toLocaleDateString('en-IN', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};