// src/services/mongoService.ts
import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  try {
    const uri = import.meta.env.VITE_MONGO_URI;
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

export { connectToMongoDB };
