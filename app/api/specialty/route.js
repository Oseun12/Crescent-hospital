import dbConnect from '@/lib/mongodb'; 
import Specialty from '@/models/Specialty';

export async function GET() {
  await dbConnect(); 

  try {

    const specialty = await Specialty.find(); 

    return new Response(JSON.stringify(specialty), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to fetch specialists', error);
    return new Response('Error fetching specialty', { status: 500 });
  }
}

export async function POST(request) {
  await dbConnect();

    try {
  
      const { specialty } = await request.json(); 

      console.log('Received data:', { specialty });
  
      // Validate the input
      if (!specialty) {
        console.error('Invalid input:', { specialty });
        return new Response('Invalid input', { status: 400 });
      }

      // Create a new specialist
      const newSpecialty = new Specialty({ specialty });
      await newSpecialty.save();

      // Log the saved specialist
    console.log('New specialty created:', newSpecialty);
  
      return new Response(JSON.stringify(newSpecialty), {
        headers: { 'Content-Type': 'application/json' },
        status: 201,
      });
    } catch (error) {
      console.error('Failed to create specialty', error);
      return new Response('Error creating specialty', { status: 500 });
    }
  }
  