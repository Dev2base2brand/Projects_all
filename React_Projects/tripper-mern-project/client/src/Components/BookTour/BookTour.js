import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import useBookings from '../../hooks/useBookings';

const BookTour = () => {
    const { user } = useAuth();
    const address = useRef();
    const history = useHistory();
    const date = useRef();
    const numberOfPersons = useRef();
    const { id } = useParams();
    const [tour, setTour] = useState({});
    const { bookTour } = useBookings();
    useEffect(() => {
        fetch(`https://tripper-server.herokuapp.com/tours/${id}`)
            .then((res) => res.json())
            .then((data) => setTour(data));
    }, [id]);

    useEffect(() => {
        let today = new Date();
        // add a day
        today = new Date(today.getTime() + 24 * 60 * 60 * 1000);
        let dd = today.getDate();
        let mm = today.getMonth() + 1; // January is 0!
        const yyyy = today.getFullYear();
        if (dd < 10) {
            dd = `0${dd}`;
        }
        if (mm < 10) {
            mm = `0${mm}`;
        }

        today = `${yyyy}-${mm}-${dd}`;
        document.getElementById('date').setAttribute('min', today);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            user: user.email,
            destination: tour.title,
            price: tour.price,
            address: address.current.value,
            date: date.current.value,
            numberOfPersons: numberOfPersons.current.value,
            approved: false
        };
        bookTour(data);
        history.push('/myorders');
        e.target.reset();
    };
    return (
        <section className="py-5">
            <h2 className="display-4 text-capitalize text-center">
                Visit {tour.title} at ${tour.price}
            </h2>

            <figure className="figure text-center">
                <img src={tour.image} className="figure-img img-fluid rounded" alt={tour.name} />
                <figcaption className="figure-caption fs-4 ">{tour.description}</figcaption>
            </figure>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name{' '}
                    </label>
                    <input
                        type="text"
                        defaultValue={user.displayName}
                        disabled
                        className="form-control"
                        id="name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email{' '}
                    </label>
                    <input
                        type="text"
                        defaultValue={user.email}
                        disabled
                        className="form-control"
                        id="email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address{' '}
                    </label>
                    <input type="text" ref={address} className="form-control" id="address" />
                </div>
                <div className="mb-3">
                    <label htmlFor="persons" className="form-label">
                        Number Of Persons{' '}
                    </label>
                    <input
                        type="number"
                        ref={numberOfPersons}
                        max="5"
                        min="1"
                        className="form-control"
                        id="persons"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                        Date{' '}
                    </label>
                    <input type="date" ref={date} className="form-control" id="date" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>
    );
};

export default BookTour;
