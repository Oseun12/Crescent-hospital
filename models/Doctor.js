const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  patients: {
    type: Number,
    required: false
  },
  years_of_experience: {
    type: Number,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  phone_number: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  specialty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Specialty'
  },
  location: {
    type: String,
    required: true,
  },
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
      required: false
    },
  ],
}, { timestamps: true });

// console.log(mongoose.models) 
// console.log(DoctorSchema); 
// console.log(mongoose.models.Doctor); 

module.exports = mongoose.models.Doctor || mongoose.model('Doctor', DoctorSchema);
