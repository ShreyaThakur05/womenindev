import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    
    const client = await clientPromise;
    const db = client.db('womenindev');
    
    // Check hardcoded admin credentials
    const adminCredentials = {
      'Mudita Shukla': 'organizer',
      'Sidrah Aaishah': 'organizer', 
      'Shreya Thakur': 'organizer',
      'Aashi Yadav': 'organizer'
    };
    
    if (adminCredentials[email as keyof typeof adminCredentials] && password === adminCredentials[email as keyof typeof adminCredentials]) {
      // Save admin login to database
      await db.collection('users').updateOne(
        { email },
        { 
          $set: { 
            email, 
            name: email,
            role: 'admin', 
            lastLogin: new Date() 
          } 
        },
        { upsert: true }
      );
      
      return NextResponse.json({ 
        success: true, 
        user: { email, name: email, role: 'admin' } 
      });
    }
    
    // Check hardcoded user credential
    if (email === 'bt23cse221@iiitn.ac.in' && password === '05032005') {
      await db.collection('users').updateOne(
        { email },
        { 
          $set: { 
            email, 
            name: 'Team Alpha',
            role: 'participant', 
            lastLogin: new Date() 
          } 
        },
        { upsert: true }
      );
      
      return NextResponse.json({ 
        success: true, 
        user: { email, name: 'Team Alpha', role: 'participant' } 
      });
    }
    
    // Check managed users from database
    const managedUser = await db.collection('managedUsers').findOne({ username: email, password });
    
    if (managedUser) {
      await db.collection('users').updateOne(
        { email },
        { 
          $set: { 
            email, 
            name: managedUser.name,
            role: 'participant', 
            lastLogin: new Date() 
          } 
        },
        { upsert: true }
      );
      
      return NextResponse.json({ 
        success: true, 
        user: { email, name: managedUser.name, role: 'participant' } 
      });
    }
    
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}