import React from 'react';
import { useHistory } from 'react-router-dom';

const Service = ({ data: { id, name, image, price, shortdesc } }) => {
    const history = useHistory();
    return (
        <section className="rounded-md overflow-hidden pb-10 bg-green-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer">
            <img src={image} alt={name} className="w-full h-60" />
            <h2 className="text-2xl my-5 font-semibold font-rubik">{name}</h2>
            <h4 className="font-semibold mb-2 font-roboto">Expected Cost: {price}</h4>
            <p className=" h-20 px-5 font-roboto capitalize leading-relaxed tracking-wide">
                {shortdesc}
            </p>
            <button
                onClick={() => history.push(`/servicedetail/${id}`)}
                type="button"
                className="p-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
                Learn More
            </button>
        </section>
    );
};

export default Service;
