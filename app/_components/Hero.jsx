import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div>
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Move the image to the left on large screens */}
                    <div className="carousel w-full rounded-3xl">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                        src="/images/doctors2.webp"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                        src="/images/doctors4.jpg"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                        src="/images/doctors3.webp"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                        src="/images/doctors.jpg"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    </div>
                    {/* Move the text to the right on large screens */}
                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Welcome to <span className=''> A-Crescent </span>  Medical Center </h2>

                        <p className="mt-4 text-gray-600">
                       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffffffffffff
                       ffffffffffffffffffffffffffffffffffffffffffffffffffffff.
                        </p>

                        <Button className='mt-10 bg-cyan-900'>
                        Begin your Journey
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                
                    <h2 className='text-4xl font-bold items-center flex justify-center mb-10'>
                        Why A-Crescent?
                    </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-extralight'>
                    <div className=' border p-4 rounded-3xl bg-slate-100 hover:bg-slate-200 hover:scale-95 transition-all ease-in-out'>
                        <h2 className='font-bold text-lg'>Primary Care</h2>
                        <h4>General check-ups and preventive care
                            Management of chronic conditions (e.g., diabetes, hypertension)
                            Vaccinations and health screenings
                        </h4>
                    </div>
                    <div className=' border p-4 rounded-3xl bg-slate-50 hover:bg-slate-200 hover:scale-95 transition-all ease-in-out'>
                        <h2 className='font-bold text-lg'>Specialty Care</h2>
                        <h4>
                            <span className='font-semibold'>Cardiology:</span> Heart disease diagnosis, treatment, and management
                            <span className='font-semibold'>Orthopedics:</span> Bone, joint, and muscle care
                            <span className='font-semibold'>Neurology:</span> Treatment for neurological disorders
                            <span className='font-semibold'>Gastroenterology:</span> Digestive system care
                        </h4>
                    </div>
                    <div className=' border p-4 rounded-3xl bg-slate-100 hover:bg-slate-200 hover:scale-95 transition-all ease-in-out'>
                        <h2 className='font-bold text-lg'>Emergency Services</h2>
                        <h4>24/7 emergency care for acute medical conditions.
                            Trauma and critical care

                        </h4>
                    </div>
                    <div className=' border p-4 rounded-3xl bg-slate-50 hover:bg-slate-200 hover:scale-95 transition-all ease-in-out'>
                        <h2 className='font-bold text-lg'>Surgical Services</h2>
                        <h4>
                            <span className='font-semibold'>General Surgery:</span> Various surgical procedures.
                            <span className='font-semibold'>Orthopedic Surgery:</span> Joint replacements, fracture repairs.
                            <span className='font-semibold'>Minimally Invasive Surgery:</span> Procedures with smaller incisions
                        </h4>
                    </div>
                    <div className=' border p-4 rounded-3xl bg-slate-100 hover:bg-slate-200 hover:scale-95 transition-all ease-in-out'>
                        <h2 className='font-bold text-lg'>Diagnostic Services</h2>
                        <h4>
                            <span className='font-semibold'>Imaging:</span> X-rays, MRIs, CT scans, ultrasounds.
                            <span className='font-semibold'>Laboratory Services:</span> Blood tests, urinalysis, and other diagnostic tests
                        </h4>
                    </div>
                    <div className=' border p-4 rounded-3xl bg-slate-50 hover:bg-slate-200 hover:scale-95 transition-all ease-in-out'>
                        <h2 className='font-bold text-lg'>Maternal and Child Health</h2>
                        <h4>
                            <span className='font-semibold'>Obstetrics:</span> Prenatal and postnatal care.
                            <span className='font-semibold'>Pediatrics:</span> Health care for children and adolescents
                        </h4>
                    </div>
                    <div className=' border p-4 rounded-3xl bg-slate-100 hover:bg-slate-200 hover:scale-95 transition-all ease-in-out'>
                        <h2 className='font-bold text-lg'>Pharmacy Services</h2>
                        <h4>In-house pharmacy for prescription and over-the-counter medications,
                        Medication management and counseling
                        </h4>
                    </div>
                    <div className=' border p-4 rounded-3xl bg-slate-50 hover:bg-slate-200 hover:scale-95 transition-all ease-in-out '>
                        <h2 className='font-bold text-lg'>Other Services</h2>
                        <h4>
                            <span className='font-semibold'>Nutritional Counseling:</span> Dietary advice and planning.
                            <span className='font-semibold'>Social Services:</span> Assistance with healthcare-related social needs
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
