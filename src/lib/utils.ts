import { DATES, UNSTOP_REGISTRATION_URL } from './constants';

export const getCurrentPhase = (): 'registration' | 'shortlisting' | 'finals' => {
  const now = new Date();
  
  if (now < DATES.REGISTRATION_DEADLINE) {
    return 'registration';
  } else if (now < DATES.FINAL_EVENT_START) {
    return 'shortlisting';
  } else {
    return 'finals';
  }
};

export const getPhaseInfo = () => {
  const phase = getCurrentPhase();
  
  switch (phase) {
    case 'registration':
      return {
        phase,
        countdownTarget: DATES.FINAL_EVENT_START,
        ctaText: 'Register on Unstop',
        ctaUrl: 'https://unstop.com/hackathons/womenindev-20-tantrafiesta25-iiitn-1548921',
        heroTitle: 'WomenInDev 2.0 - Empowering Women in Technology',
        heroSubtitle: 'Join the premier hackathon for women in tech. Register now before the deadline!',
      };
    case 'shortlisting':
      return {
        phase,
        countdownTarget: DATES.FINAL_EVENT_START,
        ctaText: 'View Shortlisted Teams',
        ctaUrl: 'https://docs.google.com/spreadsheets/d/1WiYzS9EUEdQfxwIHna5_WgoRi-AJ5kKO_o6FOzu0dHc/edit?usp=sharing',
        heroTitle: 'Welcome to WomenInDev 2.0',
        heroSubtitle: 'Your gateway to innovation, collaboration, and excellence in technology.',
      };
    case 'finals':
      return {
        phase,
        countdownTarget: DATES.FINAL_EVENT_END,
        ctaText: 'View Live Updates',
        ctaUrl: '/dashboard',
        heroTitle: 'Hackathon in Progress!',
        heroSubtitle: 'The final 24-hour challenge is underway. May the best team win!',
      };
  }
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata',
  });
};