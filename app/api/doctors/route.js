import dbConnect from "@/lib/mongodb";
import Doctor from "@/models/Doctor";
import Specialty from "@/models/Specialty";

// Helper function to send JSON response
async function sendJSONResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
        status
    });
}

// Input validation
function validateDoctorInput({ name, email, patients, years_of_experience, about, phone_number, imageUrl, specialty, location, appointments }) {
    return name && email && patients && years_of_experience && about && phone_number && imageUrl && specialty && location && appointments;
}

// GET doctors route to handle all doctors or filtered by specialty
export async function GET(request) {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const specialty = searchParams.get('specialty'); 

    try {
        if (specialty) {
            // If the `specialty` parameter is provided, find doctors with that specialty
            const specialtyDoc = await Specialty.findOne({ specialty }).exec();
            
            if (!specialtyDoc) {
                return new Response('Specialty not found', { status: 404 });
            }

            // Fetch all doctors whose specialty matches the specialty's ObjectId
            const doctors = await Doctor.find({ specialty: specialtyDoc._id }).populate('specialty');
            return sendJSONResponse(doctors);
        } else {
            // If no specialty is provided, fetch all doctors
            const doctors = await Doctor.find().populate('specialty');
            return sendJSONResponse(doctors);
        }
    } catch (error) {
        console.error('Failed to get doctors', error);
        return new Response('Error fetching doctors', { status: 500 });
    }
}

// Create a new doctor
export async function POST(request) {
    await dbConnect();

    try {
        const data = await request.json();

        if (!validateDoctorInput(data)) {
            console.log('Error:', error)
            return new Response('Invalid input', { status: 400 });
        }

        const newDoctor = new Doctor(data);
        await newDoctor.save();
        return sendJSONResponse(newDoctor, 201);
        
    } catch (error) {
        console.error('Failed to create doctor', error);
        return new Response('Error creating doctor', { status: 500 });
    }
}

