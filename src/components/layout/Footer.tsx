import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
              WomenInDev 2.0
            </div>
            <p className="text-gray-300 mb-4">
              Empowering women in technology through innovation, collaboration, and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/group" className="text-gray-300 hover:text-white transition-colors">
                WhatsApp Community
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/rules" className="text-gray-300 hover:text-white transition-colors">Rules</Link></li>
              <li><Link href="/prizes" className="text-gray-300 hover:text-white transition-colors">Prizes</Link></li>
              <li><Link href="/organizers" className="text-gray-300 hover:text-white transition-colors">Organizers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: tantrafiesta.event@iiitn.ac.in</li>
              <li>Phone: +91-8668806190</li>
              <li>Alt Phone: +91-7303251330</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 WomenInDev 2.0. All rights reserved. | Made by Shreya Thakur</p>
        </div>
      </div>
    </footer>
  );
};