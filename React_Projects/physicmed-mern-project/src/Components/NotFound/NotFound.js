import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
    <section className="pb-10">
        <h2 className="text-5xl w-full font-rubik font-bold text-custom-black text-center py-10 bg-breadcrumb bg-no-repeat bg-center bg-cover ">
            Oops... Page Not Found
        </h2>
        <div className="container mx-auto flex flex-col justify-center items-center">
            <img src="/images/404.png" className="py-10 block w-full sm:w-4/5 lg:w-3/6" alt="" />
            <NavLink
                to="/"
                className="bg-custom-green text-white rounded-md text-center inline-block mx-auto font-rubik px-6 py-3 font-medium text-lg transition hover:bg-transparent hover:text-custom-green hover:border-custom-green border uppercase"
            >
                Back TO Home
            </NavLink>
        </div>
    </section>
);

export default NotFound;
