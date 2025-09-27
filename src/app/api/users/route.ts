import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('womenindev');
    const users = await db.collection('managedUsers').find({}).toArray();
    return NextResponse.json({ success: true, users });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, teamName, username, password } = await request.json();
    
    const client = await clientPromise;
    const db = client.db('womenindev');
    
    const user = {
      name,
      teamName,
      username,
      password,
      role: 'participant',
      createdAt: new Date()
    };
    
    await db.collection('managedUsers').insertOne(user);
    
    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    
    const client = await clientPromise;
    const db = client.db('womenindev');
    
    await db.collection('managedUsers').deleteOne({ _id: new ObjectId(id) });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}