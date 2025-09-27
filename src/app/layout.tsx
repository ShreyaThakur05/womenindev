import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WomenInDev 2.0 - Empowering Women in Technology',
  description: 'Join the premier hackathon for women in tech. ₹40,000 prize pool, 24-hour challenge, and networking opportunities.',
  keywords: 'hackathon, women in tech, programming, coding competition, technology',
  authors: [{ name: 'WomenInDev Team' }],
  openGraph: {
    title: 'WomenInDev 2.0 - Empowering Women in Technology',
    description: 'Join the premier hackathon for women in tech. ₹40,000 prize pool, 24-hour challenge, and networking opportunities.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}