import { useEffect, useState } from 'react';
import useAuth from '../Context/useAuth';

const useBookings = () => {
    const [userBookings, setUserBookings] = useState([]);
    const [bookings, setBookings] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        fetch('https://tripper-server.herokuapp.com/bookings')
            .then((res) => res.json())
            .then((data) => {
                setBookings(data);
            });
    }, []);

    useEffect(() => {
        setUserBookings(bookings.filter((booking) => booking.user === user.email));
    }, [bookings, user.email]);

    const bookTour = (data) => {
        fetch(`https://tripper-server.herokuapp.com/book`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((result) => {
                setBookings([...bookings, { _id: result.insertedId, ...data }]);
            });
    };

    const handleDelete = (id) => {
        const check = window.confirm('Are you sure you want to delete this booking?');
        if (check) {
            fetch(`https://tripper-server.herokuapp.com/bookings/${id}`, {
                method: 'DELETE'
            })
                .then((res) => res.json())
                .then(() => {
                    setBookings(bookings.filter((booking) => booking._id !== id));
                });
        }
    };

    const handleApproval = (id) => {
        const booking = bookings.find((b) => b._id === id);
        booking.approved = true;
        fetch(`https://tripper-server.herokuapp.com/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        });
        bookings.splice(bookings.indexOf(booking), 1);
        setBookings([booking, ...bookings]);
    };

    return { userBookings, setUserBookings, bookTour, bookings, handleDelete, handleApproval };
};

export default useBookings;
