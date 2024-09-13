import dbConnect from "@/lib/mongodb";
import Doctor from "@/models/Doctor";
import mongoose from "mongoose";

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

// Get all doctors
export async function GET() {
    await dbConnect();

    try {
        const doctors = await Doctor.find().populate('specialty');
        return sendJSONResponse(doctors);
    } catch (error) {
        console.error('Failed to get doctors', error);
        return new Response('Error finding doctors', { status: 500 });
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

