import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-foo-vec bg-no-repeat bg-right-top pt-10 bg-contain bg-gray-100">
        <div className="container mx-auto">
            <div className="p-5 lg:p-10 mb-10 text-blue-50 w-full lg:w-10/12 mx-auto bg-footer-blue rounded-xl capitalize font-rubik flex flex-col lg:flex-row justify-center items-center bg-subs-vec bg-no-repeat bg-right-top bg-contain">
                <h4 className="text-5xl mb-10 lg:mb-0 font-bold w-full text-center lg:text-left lg:w-1/2">
                    Subscribe to our newsletter
                </h4>
                <form
                    action="#"
                    className="w-full lg:w-1/2 flex flex-col lg:flex-row"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="w-full mb-5 lg:mb-0 lg:w-3/4 p-4 text-lg rounded lg:rounded-r-none lg:rounded-l-xl"
                    />
                    <button
                        type="submit"
                        className="w-full lg:w-1/4 rounded lg:rounded-l-none lg:rounded-r-xl bg-custom-green inline-block p-4 text-lg"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
                <div className="font-rubik flex flex-col justify-between items-start">
                    <img src="/images/logo.png" alt="" />
                    <p>Outsource your HR functions to industry specialized experts</p>
                    <ul className="">
                        <li className="float-left mr-4">
                            <i className="fab fa-facebook-f bg-white py-2 px-3 rounded hover:bg-custom-green hover:text-white cursor-pointer shadow-lg" />
                        </li>
                        <li className="float-left mr-4">
                            <i className="fab fa-twitter bg-white py-2 px-3 rounded hover:bg-custom-green hover:text-white cursor-pointer shadow-lg" />
                        </li>
                        <li className="float-left mr-4">
                            <i className="fab fa-instagram bg-white py-2 px-3 rounded hover:bg-custom-green hover:text-white cursor-pointer shadow-lg" />
                        </li>
                        <li className="float-left mr-4">
                            <i className="fab fa-pinterest-p bg-white py-2 px-3 rounded hover:bg-custom-green hover:text-white cursor-pointer shadow-lg" />
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-rubik text-xl font-medium mb-5">Usefull Links</h4>
                    <ul className="font-roboto">
                        <li className="mb-2">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/Services">Services</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/faq">FAQs</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/doctors">Doctors</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-rubik text-xl font-medium mb-5">Our Services</h4>
                    <ul className="font-roboto">
                        <li className="mb-2">Dental Surgery</li>
                        <li className="mb-2">Orthopaedic</li>
                        <li className="mb-2">General Surgery</li>
                        <li className="mb-2">Neurology</li>
                        <li className="mb-2">Women&apos;s care</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-rubik text-xl font-medium mb-5">Get In Touch</h4>
                    <ul className="font-roboto">
                        <li className="mb-2">
                            <i className="fas fa-phone-alt" /> +8801818000000
                        </li>
                        <li className="mb-2">
                            <i className="fas fa-envelope" /> support@physicmed.com
                        </li>
                        <li className="mb-2">
                            <i className="fas fa-map-marker-alt" /> Banani, Dhaka-1200, Bangladesh
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <h4 className="text-base font-roboto capitalize text-blue-50 bg-footer-blue py-6 text-center">
            &copy; Copyright By <span className="text-green-400 font-semibold">PhysicMed</span> 2021
        </h4>
    </footer>
);

export default Footer;
