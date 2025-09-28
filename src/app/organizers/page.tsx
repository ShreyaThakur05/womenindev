'use client';

import { Button } from '@/components/ui/Button';
import { ORGANIZERS } from '@/lib/constants';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function OrganizersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 py-16 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the Organizers
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            The passionate team behind WomenInDev 2.0, dedicated to empowering women in technology
          </p>
        </div>
      </section>

      {/* Organizers Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ORGANIZERS.map((organizer, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Profile Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary-500 to-secondary-500">
                  <img 
                    src={organizer.image} 
                    alt={organizer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center hidden">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-primary-500">
                      {organizer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {organizer.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {organizer.bio}
                  </p>

                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-4 h-4 mr-3 text-primary-500" />
                      <a 
                        href={`mailto:${organizer.email}`}
                        className="text-sm hover:text-primary-500 transition-colors"
                      >
                        {organizer.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-4 h-4 mr-3 text-primary-500" />
                      <a 
                        href={`tel:${organizer.phone}`}
                        className="text-sm hover:text-primary-500 transition-colors"
                      >
                        {organizer.phone}
                      </a>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="mt-6">
                    <a href={`mailto:${organizer.email}`}>
                      <Button size="sm" className="w-full">
                        Contact
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            A Message from the Team
          </h2>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <blockquote className="text-lg text-gray-600 italic mb-6">
              "We believe that diversity drives innovation, and women bring unique perspectives that are essential for solving tomorrow's challenges. WomenInDev 2.0 is our commitment to creating a platform where talented women can showcase their skills, learn from each other, and build lasting connections in the tech community."
            </blockquote>
            
            <p className="text-gray-900 font-semibold">
              - The WomenInDev 2.0 Organizing Team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Mail className="w-8 h-8 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">For general inquiries and support</p>
              <a 
                href="mailto:tantrafiesta.event@iiitn.ac.in"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                tantrafiesta.event@iiitn.ac.in
              </a>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Phone className="w-8 h-8 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">For urgent matters and support</p>
              <div className="space-y-1">
                <a 
                  href="tel:+91-8668806190"
                  className="text-primary-500 hover:text-primary-600 font-medium block"
                >
                  +91-8668806190
                </a>
                <a 
                  href="tel:+91-7303251330"
                  className="text-primary-500 hover:text-primary-600 font-medium block text-sm"
                >
                  Alt: +91-7303251330
                </a>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="w-8 h-8 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Join Community</h3>
              <p className="text-gray-600 mb-4">Connect with other participants</p>
              <a 
                href="https://chat.whatsapp.com/EkmOTArQIppJR7QOjSlqG4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                WhatsApp Group
              </a>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of an amazing community of women in technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://chat.whatsapp.com/EkmOTArQIppJR7QOjSlqG4" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary-500 hover:bg-gray-100">
                Join WhatsApp Group
              </Button>
            </a>
            <a href="mailto:info@womenindev.com">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-500">
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}