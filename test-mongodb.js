const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://womenindev:womenindev@cluster0.iitvdwm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function testConnection() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas!');
    
    const db = client.db('womenindev');
    
    // Test insert
    const testUser = {
      name: 'Test User',
      teamName: 'Test Team',
      username: 'test@test.com',
      password: 'test123',
      createdAt: new Date()
    };
    
    const result = await db.collection('managedUsers').insertOne(testUser);
    console.log('✅ Test user inserted:', result.insertedId);
    
    // Test read
    const users = await db.collection('managedUsers').find({}).toArray();
    console.log('✅ Users found:', users.length);
    
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  } finally {
    await client.close();
  }
}

testConnection();