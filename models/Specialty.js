import mongoose from 'mongoose';

const SpecialtySchema = new mongoose.Schema({
  specialty: { type: String, required: true }
 
});

const Specialty = mongoose.models.Specialty || mongoose.model('Specialty', SpecialtySchema);

export default Specialty;
