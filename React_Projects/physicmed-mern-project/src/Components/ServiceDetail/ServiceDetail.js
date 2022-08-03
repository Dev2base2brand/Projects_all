import React from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const ServiceDetail = () => {
    const [services] = useServices();
    const { id } = useParams();
    const service = services[id - 1];
    return (
        <section className="container mx-auto overflow-hidden bg-gray-50 pb-10 my-10 rounded-md">
            <h2 className="text-5xl w-full font-rubik font-bold text-custom-black text-center py-10 bg-breadcrumb bg-no-repeat bg-center bg-cover mb-10">
                {service?.name}
            </h2>
            <img src={service?.image} alt={service?.name} className="mx-auto rounded-md mb-10" />
            <p className="font-roboto tracking-wider px-10 text-2xl my-10 font-black text-center">
                Estimated Cost: {service?.price}
            </p>
            <p className="font-roboto tracking-wider px-10 text-xl text-center">
                {service?.description}
            </p>
        </section>
    );
};

export default ServiceDetail;
