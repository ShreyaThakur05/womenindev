# WomenInDev 2.0 - Hackathon Platform

A comprehensive web platform for the WomenInDev 2.0 hackathon, featuring dynamic phase-based content, participant management, and real-time communication.

## Features

### Public Features
- **Dynamic Homepage**: Phase-aware content that changes based on event timeline
- **Event Information**: Comprehensive about, rules, prizes, and organizer pages
- **Interactive Timeline**: Visual progress tracker with automatic updates
- **Shortlisted Teams**: Display of finalist and waitlisted teams
- **Responsive Design**: Mobile-first approach with modern UI

### Authenticated Features
- **Secure Login**: Role-based authentication for participants and admins
- **Personalized Dashboard**: Real-time announcements and updates
- **Problem Statement Portal**: Controlled access to hackathon challenges
- **Admin Controls**: Content management and user administration

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Utilities**: date-fns for date handling

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Demo Credentials

- **Admin**: admin@womenindev.com / admin123
- **Participant**: team@example.com / team123

## Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI elements
│   ├── layout/         # Layout components
│   └── features/       # Feature-specific components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and constants
└── types/              # TypeScript type definitions
```

## Key Dates

- **Registration Deadline**: September 25, 2025
- **Shortlisting Announcement**: September 30, 2025
- **Final Event**: October 9-10, 2025

## Phase-Based Behavior

The platform automatically adapts its content based on the current date:

1. **Registration Phase** (Until Sept 30): Drives traffic to Unstop registration
2. **Shortlisting Phase** (Oct 1 onwards): Shows finalist teams and preparation info
3. **Finals Phase** (During event): Real-time updates and problem access

## Development

- **Build**: `npm run build`
- **Type Check**: `npm run type-check`
- **Lint**: `npm run lint`

## License

© 2024 WomenInDev Team. All rights reserved.