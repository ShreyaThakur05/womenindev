'use client';

import React from 'react';
import { useCountdown } from '@/hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: Date;
  title: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, title }) => {
  const timeLeft = useCountdown(targetDate);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-xl p-4 min-w-[80px] shadow-lg border border-white/30">
      <div className="text-2xl md:text-4xl font-bold text-white mb-1 font-mono">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm text-white/90 uppercase tracking-wide font-semibold">{label}</div>
    </div>
  );

  return (
    <div className="text-center">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-wide">{title}</h2>
      <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};