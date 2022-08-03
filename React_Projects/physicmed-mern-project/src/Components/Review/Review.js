import React from 'react';

const Review = () => (
    <section className="container mx-auto pb-10 relative">
        <h2 className="text-5xl w-full font-rubik font-bold text-custom-black text-center py-10 bg-breadcrumb bg-no-repeat bg-center bg-cover capitalize rounded-lg">
            What Our Patients are <span className="text-custom-green">Saying</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
            <div className="flex p-10 rounded-2xl justify-center items-center bg-white shadow-lg">
                <img src="/images/patient01.png" alt="" />
                <div className="ml-5">
                    <p className="text-2xl leading-tight tracking-wide font-medium font-roboto">
                        Thanks to PhysicMed&apos;s awesome women care. Your services are really up
                        to the mark..
                    </p>
                    <h5 className="mt-5 font-rubik text-xl font-medium text-gray-600">
                        Williams Lily
                    </h5>
                    <h6 className="font-rubik text-base font-medium text-gray-500">
                        Women Care Patient
                    </h6>
                </div>
            </div>
            <div className="flex p-10 rounded-2xl justify-center items-center bg-white shadow-lg">
                <img src="/images/patient02.png" alt="" />
                <div className="ml-5">
                    <p className="text-2xl leading-tight tracking-wide font-medium font-roboto">
                        Thanks to PhysicMed&apos;s for fixing my aching teeth..
                    </p>
                    <h5 className="mt-5 font-rubik text-xl font-medium text-gray-600">
                        Jessica Brown
                    </h5>
                    <h6 className="font-rubik text-base font-medium text-gray-500">
                        Dental Patient
                    </h6>
                </div>
            </div>
        </div>
    </section>
);

export default Review;
