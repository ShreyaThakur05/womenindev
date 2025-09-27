import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('womenindev');
    const announcements = await db.collection('announcements').find({}).sort({ timestamp: -1 }).toArray();
    return NextResponse.json({ success: true, announcements });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { message, author } = await request.json();
    
    const client = await clientPromise;
    const db = client.db('womenindev');
    
    const announcement = {
      message,
      author,
      timestamp: new Date(),
      priority: 'important'
    };
    
    const result = await db.collection('announcements').insertOne(announcement);
    
    return NextResponse.json({ success: true, announcement: { ...announcement, _id: result.insertedId } });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    
    const client = await clientPromise;
    const db = client.db('womenindev');
    
    await db.collection('announcements').deleteOne({ _id: new ObjectId(id) });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}