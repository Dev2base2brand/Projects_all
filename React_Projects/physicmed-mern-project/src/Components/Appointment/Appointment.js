import React from 'react';

const Appointment = () => (
    <section className="bg-footer-blue py-10 lg:pb-0 mb-10 relative bg-appnt-vec1 bg-no-repeat bg-left-top">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
            <div className="text-center lg:text-left text-white">
                <h2 className="font-rubik text-4xl mb-5 font-medium capitalize">Need A Doctor? </h2>
                <h3 className="font-rubik text-6xl font-bold mb-5 capitalize">
                    Just Make an appointment
                </h3>
                <button
                    className="bg-custom-green p-4 font-medium font-rubik tracking-wider text-base rounded-xl"
                    type="button"
                >
                    {' '}
                    Get An Appointment
                </button>
            </div>
            <img src="/images/appnt-img.png" className="w-4/12 hidden lg:inline-block" alt="" />
        </div>
    </section>
);

export default Appointment;
