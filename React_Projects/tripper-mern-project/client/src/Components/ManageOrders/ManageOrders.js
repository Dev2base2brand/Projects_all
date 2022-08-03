import React from 'react';
import useBookings from '../../hooks/useBookings';

const ManageOrders = () => {
    const { bookings, handleApproval, handleDelete } = useBookings();
    return (
        <section>
            <h1 className="text-center py-5"> Manage Orders </h1>
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
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td>{booking.destination}</td>
                                <td>{booking.date}</td>
                                <td>${booking.price}</td>
                                <td>{booking.numberOfPersons}</td>
                                <td>{booking.date}</td>
                                <td>{booking.approved ? 'Approved' : 'Pending'}</td>
                                <td>
                                    {booking.approved || (
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={() => handleApproval(booking._id)}
                                        >
                                            Approve
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        className="btn btn-danger ml-2"
                                        onClick={() => handleDelete(booking._id)}
                                    >
                                        Delete
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

export default ManageOrders;
