// lib/mongodb.js
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI; 

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env');
}

let cachedClient = null;

async function dbConnect() {
  if (cachedClient) {
    return cachedClient;
  }

  try {
    
    cachedClient = await mongoose.connect(process.env.MONGO_URI, {
    
      serverSelectionTimeoutMS: 30000,
    });
    
    console.log('MongoDB connected:', mongoose.connection.readyState === 1);
    return cachedClient;
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw new Error('Failed to connect to MongoDB');
  }
}

export default dbConnect;
