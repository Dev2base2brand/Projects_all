import React from 'react';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div className="container mx-auto py-12">
            <h2 className="text-5xl font-rubik font-bold text-custom-black text-center">
                Special Services For <span className="text-custom-green">Patients</span>
            </h2>

            <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
                    {services.map((service) => (
                        <Service data={service} key={service.id} />
                    ))}
                </section>
            </section>
        </div>
    );
};

export default Services;
