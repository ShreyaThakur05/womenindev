'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Bell, FileText, Users, LogOut, Settings, Clock } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [user, setUser] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        return {
          name: userData.name || userData.email || 'User',
          role: userData.role
        };
      }
    }
    return { name: 'Guest', role: 'participant' };
  });
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('/api/announcements');
        if (response.ok) {
          const data = await response.json();
          setAnnouncements(data.announcements);
        }
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };
    fetchAnnouncements();
  }, []);
  const [problemsReleased, setProblemsReleased] = useState(false);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [announcementText, setAnnouncementText] = useState('');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('/api/settings');
        if (response.ok) {
          const data = await response.json();
          setProblemsReleased(data.settings.problemsReleased || false);
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };
    fetchSettings();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const isAdmin = user.role === 'admin';



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">


      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12 py-8 pt-20">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
              Dashboard
            </h1>
            <p className="text-gray-600">Welcome back, <span className="font-semibold text-primary-600">{user.name}</span>!</p>
          </div>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleLogout} 
            className="bg-gradient-to-r from-red-500 to-pink-600 text-white border-none hover:from-red-600 hover:to-pink-700 px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Live Announcements */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-4">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Live Announcements</h2>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {announcements.map((announcement) => (
                  <div key={announcement._id} className={`p-4 rounded-lg border-l-4 relative ${
                    announcement.priority === 'urgent' ? 'bg-red-50 border-red-500' :
                    announcement.priority === 'important' ? 'bg-yellow-50 border-yellow-500' :
                    'bg-blue-50 border-blue-500'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">Announcement</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">{new Date(announcement.timestamp).toLocaleString()}</span>
                        {isAdmin && (
                          <button
                            onClick={async () => {
                              try {
                                const response = await fetch('/api/announcements', {
                                  method: 'DELETE',
                                  headers: { 'Content-Type': 'application/json' },
                                  body: JSON.stringify({ id: announcement._id })
                                });
                                if (response.ok) {
                                  setAnnouncements(announcements.filter(a => a._id !== announcement._id));
                                }
                              } catch (error) {
                                console.error('Error deleting announcement:', error);
                              }
                            }}
                            className="text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600">{announcement.message}</p>
                    <p className="text-xs text-gray-500 mt-2">By {announcement.author}</p>
                  </div>
                ))}
                {announcements.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    No announcements yet.
                  </div>
                )}
              </div>
            </div>

            {/* Problem Statements */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Problem Statements</h2>
              </div>
              
              {problemsReleased ? (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Problem Statement Released</h3>
                  <p className="text-green-700 mb-3">
                    The hackathon problem statement is now available. Click below to access the detailed document.
                  </p>
                  <a href="https://drive.google.com/file/d/1Pk2Wqf1VJVIZQR2QKS2ZlzWrcBPZyaLP/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button size="sm">View Problem Statement</Button>
                  </a>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Problem Statements Coming Soon
                  </h3>
                  <p className="text-gray-600">
                    Challenges will be revealed on October 9, 2025, at 6:00 PM IST
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                {!isAdmin && (
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvwzhJgk88HYV6le5zPPikYqROZmvJJitDk5OzT2rjXezDhA/viewform?usp=sharing&ouid=117420978708519661914" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full mb-3" size="sm">
                      Submit Project
                    </Button>
                  </a>
                )}
                <Link href="/rules">
                  <Button variant="outline" className="w-full mb-3" size="sm">
                    View Rules
                  </Button>
                </Link>
                <Link href="/organizers">
                  <Button variant="outline" className="w-full mb-3" size="sm">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>

            {/* Event Info */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Event Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Event Date:</span>
                  <span className="font-medium">Oct 9-10, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Prize Pool:</span>
                  <span className="font-medium">₹40,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Teams:</span>
                  <span className="font-medium">15 Finalists</span>
                </div>
              </div>
            </div>

            {/* Admin Panel */}
            {isAdmin && (
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200 rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-700">Admin Controls</h3>
                </div>
                <div className="space-y-3">
                  <Button 
                    className="w-full mb-3" 
                    size="sm"
                    onClick={async () => {
                      try {
                        const response = await fetch('/api/settings', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ problemsReleased: !problemsReleased })
                        });
                        if (response.ok) {
                          setProblemsReleased(!problemsReleased);
                        }
                      } catch (error) {
                        console.error('Error updating settings:', error);
                      }
                    }}
                  >
                    {problemsReleased ? 'Hide' : 'Release'} Problems
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full mb-3" 
                    size="sm"
                    onClick={() => setShowAnnouncementModal(true)}
                  >
                    Post Announcement
                  </Button>
                  <Link href="/dashboard/manage-users">
                    <Button variant="outline" className="w-full mb-3" size="sm">
                      Manage Users
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Announcement Modal */}
      {showAnnouncementModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Post Announcement</h3>
            <textarea
              value={announcementText}
              onChange={(e) => setAnnouncementText(e.target.value)}
              placeholder="Enter your announcement message..."
              className="w-full p-3 border border-gray-300 rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <div className="flex space-x-3 mt-6">
              <Button
                onClick={async () => {
                  if (announcementText.trim()) {
                    try {
                      const response = await fetch('/api/announcements', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ message: announcementText, author: user.name })
                      });
                      if (response.ok) {
                        const data = await response.json();
                        setAnnouncements([data.announcement, ...announcements]);
                        setAnnouncementText('');
                        setShowAnnouncementModal(false);
                      }
                    } catch (error) {
                      console.error('Error posting announcement:', error);
                    }
                  }
                }}
                className="flex-1"
              >
                Post
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setAnnouncementText('');
                  setShowAnnouncementModal(false);
                }}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}