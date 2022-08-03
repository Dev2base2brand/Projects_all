import React from 'react';

const ContactUs = () => (
    <section className="container mx-auto pb-10">
        <h2 className="text-5xl w-full font-rubik font-bold text-custom-black text-center py-10 bg-breadcrumb bg-no-repeat bg-center bg-cover capitalize">
            Send a message, don&apos;t be shy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
            <img src="/images/doctors/fea.png" alt="" className="w-full md:w-3/4 md:mx-auto" />
            <form action="/test">
                <h2 className="text-4xl font-rubik font-bold text-custom-black text-left mb-5">
                    Let&apos;s <span className="text-custom-green">Talk Today!</span>
                </h2>
                <input
                    type="text"
                    name="name"
                    className="w-full border p-4 rounded text-lg mb-4"
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    className="w-full border p-4 rounded text-lg mb-4"
                />
                <textarea
                    name="message"
                    rows="5"
                    placeholder="Enter Your Message"
                    className="w-full border p-4 rounded text-lg mb-4"
                />
                <button
                    type="submit"
                    className="bg-custom-green text-white w-full text-center py-4 rounded-md"
                >
                    Send Now
                </button>
            </form>
        </div>
    </section>
);

export default ContactUs;
