import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: { 
    type: String, 
    required: true 
},
  password: { 
    type: String, 
    required: true 
}
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);


// import connectToDatabase from '@/lib/mongoose';
// import User from '@/models/User';