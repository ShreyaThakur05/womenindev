import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('womenindev');
    const settings = await db.collection('settings').findOne({ key: 'app_settings' });
    return NextResponse.json({ success: true, settings: settings || { problemsReleased: false } });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { problemsReleased } = await request.json();
    
    const client = await clientPromise;
    const db = client.db('womenindev');
    
    await db.collection('settings').updateOne(
      { key: 'app_settings' },
      { $set: { problemsReleased, updatedAt: new Date() } },
      { upsert: true }
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}