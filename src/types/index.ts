export interface User {
  id: string;
  email: string;
  role: 'admin' | 'participant';
  teamName?: string;
  teamMembers?: string[];
  isShortlisted: boolean;
  isWaitlisted: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'normal' | 'important' | 'urgent';
  targetAudience: 'all' | 'finalists' | 'specific';
  createdAt: string;
  isActive: boolean;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Team {
  id: string;
  name: string;
  members: string[];
  isShortlisted: boolean;
  isWaitlisted: boolean;
}

export interface SystemSettings {
  problemStatementsReleased: boolean;
  currentPhase: 'registration' | 'shortlisting' | 'finals';
  registrationDeadline: string;
  finalEventStart: string;
}