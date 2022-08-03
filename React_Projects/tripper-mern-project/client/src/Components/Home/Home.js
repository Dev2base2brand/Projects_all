import React from 'react';
import useTours from '../../hooks/useTours';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Tour from '../Tour/Tour';

const Home = () => {
    const { tours } = useTours();
    return (
        <>
            <section
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://triper.dexignlab.com/react/static/media/slide2.40595120.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://triper.dexignlab.com/react/static/media/slide1.a89b8f05.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </section>
            <section className="container">
                <h2 className="my-4 text-center">Book Your Destination</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {tours.map((tour) => (
                        <Tour key={tour._id} tour={tour} />
                    ))}
                </div>
            </section>
            <Gallery />
            <Contact />
        </>
    );
};

export default Home;
