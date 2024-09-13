
import dbConnect from "@/lib/mongodb";
import DoctorList from "./_components/DoctorList";
import Doctors from "./_components/Doctors";
import Hero from "./_components/Hero";
import Search from "./_components/Search";
import Footer from "./_components/Footer";

export default function Home() {

  return (
    <div className="">
    <Search/>

      {/* Hero section */}
     <Hero/>
     <Doctors/>
     <DoctorList/>
     
    </div>
  );
}
