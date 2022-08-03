import React from 'react';
import useDoctors from '../../Hooks/useDoctors';

const AboutUs = () => {
    const [doctors] = useDoctors();
    return (
        <section className="container mx-auto pb-10">
            <h2 className="text-5xl w-full font-rubik font-bold text-custom-black text-center py-10 bg-breadcrumb bg-no-repeat bg-center bg-cover capitalize">
                Quality Helthcare Starts With{' '}
                <span className="text-custom-green">Quality Doctors</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 bg-gray-50 rounded-lg gap-10 p-10">
                {doctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="rounded-3xl overflow-hidden bg-white pb-10 shadow-md"
                    >
                        <img src={doctor.image} alt={doctor.name} className="w-full" />
                        <h4 className="text-center text-2xl py-4 text-rubik font-semibold">
                            {doctor.name}
                        </h4>
                        <p className="font-roboto text-center leading-relaxed  font-normal text-lg">
                            {doctor.profession}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;
