import React from 'react'

function Testing() {
  return (
    <div>
       {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {specialties &&
                                specialties.map((item, index) => (
                                <Link
                                    key={index}
                                    className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                    href={'/search/'+item.specialty}
                                >
                                    <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    {/* Medical-themed SVG */}
                                    <svg
                                        className="h-6 w-6 text-gray-700"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M18.364 5.636a9 9 0 11-12.728 0M12 8v4m0 4h.01"
                                        />
                                    </svg>
                                    </span>

                                    <h2 className="mt-2 font-bold">{item.specialty}</h2>

                                    {/* Specialty description or additional information */}
                                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    {"Available 24/7"}
                                    </p>
                                </Link>
                                ))}
                            </div>
    </div>
  )
}

export default Testing