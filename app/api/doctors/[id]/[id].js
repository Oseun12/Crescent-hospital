import dbConnect from "@/lib/mongodb";
import Doctor from "@/models/Doctor";

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

// Get doctor by ID
export async function GET(request, { params }) {
    console.log("Received ID:", params.id);
    try {
        await dbConnect();
        const { id } = params;
        const doctor = await Doctor.findById(id);
        if (!doctor) {
            console.log("Doctor not found");
            return new Response('Doctor not found', { status: 404 });
        }
        return sendJSONResponse(doctor, 200);
    } catch (error) {
        console.error('Failed to get doctor', error);
        return new Response('Error finding doctor', { status: 500 });
    }
}


// Update doctor by ID
export async function PUT(request, { params }) {
    try {
        await dbConnect();
        const data = await request.json();  // Get data from the request
        const { id } = params;  // Extract ID from params

        if (!validateDoctorInput(data)) {
            return new Response('Invalid input', { status: 400 });
        }

        const updatedDoctor = await Doctor.findByIdAndUpdate(id, data, { new: true });
        if (!updatedDoctor) {
            return new Response('Doctor not found', { status: 404 });
        }
        return sendJSONResponse(updatedDoctor, 200);
    } catch (error) {
        console.error('Failed to update doctor', error);
        return new Response('Error updating doctor', { status: 500 });
    }
}

// Delete doctor by ID
export async function DELETE(request, { params }) {
    try {
        await dbConnect();
        const { id } = params;

        const deletedDoctor = await Doctor.findByIdAndDelete(id);
        if (!deletedDoctor) {
            return new Response('Doctor not found', { status: 404 });
        }

        return new Response('Doctor deleted successfully', { status: 200 });
    } catch (error) {
        console.error('Failed to delete doctor', error);
        return new Response('Error deleting doctor', { status: 500 });
    }
}
