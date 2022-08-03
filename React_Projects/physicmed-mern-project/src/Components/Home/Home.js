import React from 'react';
import Appointment from '../Appointment/Appointment';
import Hero from '../Hero/Hero';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => (
    <>
        <Hero />
        <Services />
        <Appointment />
        <Review />
    </>
);

export default Home;
