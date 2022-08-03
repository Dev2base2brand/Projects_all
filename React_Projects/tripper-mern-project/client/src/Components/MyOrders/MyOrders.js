import React from 'react';
import useBookings from '../../hooks/useBookings';

const MyOrders = () => {
    const { userBookings, handleDelete } = useBookings();

    return (
        <section>
            <h1 className="text-center py-5">My Orders</h1>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="table-light">
                        <tr>
                            <th>Destination</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Number of Persons</th>
                            <th>Date</th>
                            <th>Approval</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userBookings.map((booking) => (
                            <tr key={booking._id}>
                                <td>{booking.destination}</td>
                                <td>{booking.date}</td>
                                <td>${booking.price}</td>
                                <td>{booking.numberOfPersons}</td>
                                <td>{booking.date}</td>
                                <td>{booking.approved ? 'Approved' : 'Pending'}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(booking._id)}
                                    >
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyOrders;
