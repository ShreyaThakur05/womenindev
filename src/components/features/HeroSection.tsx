'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { getPhaseInfo } from '@/lib/utils';

export const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [phaseInfo, setPhaseInfo] = useState({
    heroTitle: 'Welcome to WomenInDev 2.0',
    heroSubtitle: 'Your gateway to innovation, collaboration, and excellence in technology.',
    ctaText: 'Learn More',
    ctaUrl: '/about',
    countdownTarget: new Date('2025-10-09'),
    phase: 'shortlisting'
  });

  useEffect(() => {
    setPhaseInfo(getPhaseInfo());
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to WomenInDev 2.0
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your gateway to innovation, collaboration, and excellence in technology.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-white/15 rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/5 transform rotate-45 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/5 w-24 h-1 bg-white/10 rotate-45 animate-pulse delay-700"></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-20 bg-white/10 animate-pulse delay-300"></div>
        <div className="absolute top-1/4 left-2/3 w-14 h-14 border-2 border-white/10 rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Main Content */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {phaseInfo.heroTitle}
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          {phaseInfo.heroSubtitle}
        </p>

        {/* Countdown Timer */}
        <div className="mb-12">
          <CountdownTimer 
            targetDate={phaseInfo.countdownTarget}
            title={phaseInfo.phase === 'registration' ? 'Event Starts In:' : 
                   phaseInfo.phase === 'shortlisting' ? 'Final Event Starts In:' : 
                   'Event Ends In:'}
          />
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {phaseInfo.ctaUrl.startsWith('http') ? (
            <a href={phaseInfo.ctaUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100 hover:scale-105">
                {phaseInfo.ctaText}
              </Button>
            </a>
          ) : (
            <Link href={phaseInfo.ctaUrl}>
              <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100 hover:scale-105">
                {phaseInfo.ctaText}
              </Button>
            </Link>
          )}
          
          <Link href="/about">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Prize Pool Highlight */}
        <div className="mt-12 p-10 bg-gradient-to-br from-yellow-400/30 via-orange-400/25 to-red-400/20 backdrop-blur-lg rounded-3xl border-2 border-yellow-300/40 shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400/30 rounded-full mb-4">
              <span className="text-4xl">🏆</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">₹40,000 Prize Pool</h3>
            <p className="text-xl md:text-2xl text-white/95 font-medium">Compete for exciting cash prizes and recognition in the tech community</p>
          </div>
        </div>
      </div>
    </section>
  );
};