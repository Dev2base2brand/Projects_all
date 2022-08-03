import React from 'react';

const Hero = () => (
    <div className="w-full bg-hero-bg py-16 lg:pb-0 lg:pt-16 relative">
        <div className="container mx-auto lg:bg-slider-img lg:bg-no-repeat lg:bg-contain lg:bg-right-bottom lg:h-96 ">
            <div className="w-full text-center lg:w-1/2 lg:text-left flex flex-col justify-center items-start">
                <h1 className="text-6xl font-rubik font-extrabold text-custom-black">
                    <span className="text-custom-green">We Take Care</span> Your Healthy Life
                </h1>
                <p className="block py-5 font-roboto tracking-wide leading-loose text-justify">
                    PhysicMed has all the characteristics of a world-class hospital with wide range
                    of services and specialists, equipments and technology, ambience and service
                    quality.
                </p>
                <div className="inline-flex mx-auto lg:ml-0">
                    <button
                        type="button"
                        className="bg-custom-green text-white rounded font-rubik px-6 py-3 font-medium transition hover:bg-transparent hover:text-custom-green hover:border-custom-green border"
                    >
                        Get A Doctor
                    </button>
                    <button
                        type="button"
                        className="ml-4 hover:bg-custom-black text-custom-black rounded font-rubik px-6 py-3 font-medium transition bg-transparent hover:text-white border-custom-black border"
                    >
                        Contact Now
                    </button>
                </div>
            </div>
        </div>
        <img src="/images/heart.png" alt="" className="absolute top-10 right-20  animate-ping" />
        <img src="/images/med.png" alt="" className="absolute right-10 bottom-5 animate-bounce" />
    </div>
);

export default Hero;
