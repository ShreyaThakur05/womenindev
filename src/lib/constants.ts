export const DATES = {
  REGISTRATION_DEADLINE: new Date('2025-09-25T23:59:59+05:30'),
  SHORTLISTING_ANNOUNCEMENT: new Date('2025-09-30T18:00:00+05:30'),
  FINAL_EVENT_START: new Date('2025-10-09T18:00:00+05:30'),
  FINAL_EVENT_END: new Date('2025-10-10T18:00:00+05:30'),
};

export const UNSTOP_REGISTRATION_URL = 'https://unstop.com/hackathons/womenindev-20-tantrafiesta25-iiitn-1548921';

export const JUDGES = [
  {
    name: 'Snehal Shinde',
    designation: 'Assistant Professor IIIT Nagpur',
    about: 'Expert in computer science education and research with focus on innovative teaching methodologies.',
    linkedin: 'https://www.linkedin.com/in/snehal-shinde-43619a122/',
    image: '/images/judge1.jpg'
  },
  {
    name: 'Saniya Imroze',
    designation: 'Senior Software Engineer at Persistent Systems | Organizer at Google Developer Groups Nagpur | WTM Ambassador',
    about: 'Experienced software engineer and community leader passionate about empowering women in technology.',
    linkedin: 'https://www.linkedin.com/in/saniya-imroze/',
    image: '/images/judge2.jpg'
  }
];

export const ORGANIZERS = [
  {
    name: 'Mudita Shukla',
    email: 'bt23eci026@iiitn.ac.in',
    phone: '+91-9652034682',
    image: '/images/mudita.jpg',
    bio: 'Organizer'
  },
  {
    name: 'Sidrah Aaishah',
    email: 'bt23cse211@iiitn.ac.in',
    phone: '+91-7974273415',
    image: '/images/sidrah.jpg',
    bio: 'Organizer'
  },
  {
    name: 'Shreya Thakur',
    email: 'bt23cse221@iiitn.ac.in',
    phone: '+91-8668806190',
    image: '/images/shreya.jpg',
    bio: 'Organizer'
  },
  {
    name: 'Aashi Yadav',
    email: 'bt23ece049@iiitn.ac.in',
    phone: '+91-7303251330',
    image: '/images/aashi.jpg',
    bio: 'Organizer'
  }
];

export const TIMELINE_STAGES = [
  {
    id: 'registration',
    title: 'Registration Open',
    description: 'Teams can register on Unstop',
    startDate: new Date('2025-08-15'),
    endDate: DATES.REGISTRATION_DEADLINE,
  },
  {
    id: 'evaluation',
    title: 'Preliminary Evaluation',
    description: 'Reviewing submissions and shortlisting teams',
    startDate: new Date('2025-09-26'),
    endDate: new Date('2025-09-29'),
  },
  {
    id: 'announcement',
    title: 'Shortlisting Announcement',
    description: 'Finalist teams announced',
    startDate: DATES.SHORTLISTING_ANNOUNCEMENT,
    endDate: DATES.SHORTLISTING_ANNOUNCEMENT,
  },
  {
    id: 'finals',
    title: 'Final Event',
    description: '24-hour hackathon for finalists',
    startDate: DATES.FINAL_EVENT_START,
    endDate: DATES.FINAL_EVENT_END,
  },
  {
    id: 'results',
    title: 'Results & Awards',
    description: 'Winner announcement and prize distribution',
    startDate: DATES.FINAL_EVENT_END,
    endDate: DATES.FINAL_EVENT_END,
  }
];