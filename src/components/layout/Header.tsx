'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/rules', label: 'Rules' },
    { href: '/prizes', label: 'Prizes' },
    { href: '/organizers', label: 'Organizers' },
    { href: '/faq', label: 'FAQ' },
    { href: 'https://docs.google.com/spreadsheets/d/1WiYzS9EUEdQfxwIHna5_WgoRi-AJ5kKO_o6FOzu0dHc/edit?usp=sharing', label: 'Shortlisted Teams' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-800 to-pink-700 shadow-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-white">
              WomenInDev 2.0
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('http') ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-200 transition-colors duration-200 font-semibold"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-pink-200 transition-colors duration-200 font-semibold"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href={typeof window !== 'undefined' && localStorage.getItem('user') ? '/dashboard' : '/login'}>
              <Button size="sm" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold">Dashboard</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.href.startsWith('http') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-200 transition-colors duration-200 font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-pink-200 transition-colors duration-200 font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full">Dashboard</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};