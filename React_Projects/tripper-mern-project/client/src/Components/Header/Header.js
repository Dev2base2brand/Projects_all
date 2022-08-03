import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    TRIPPER
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        {user && (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/myorders">
                                        My Orders
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/manageorders">
                                        Manage All Orders
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/addservice">
                                        Add A New Service
                                    </NavLink>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            {user ? (
                                <>
                                    <span className="text-white text-uppercase">
                                        {user.displayName}
                                    </span>
                                    <button
                                        type="button"
                                        className="nav-link btn btn-danger text-white text-uppercase"
                                        onClick={() => logout()}
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <NavLink
                                    className="nav-link btn btn-success text-white text-uppercase"
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
