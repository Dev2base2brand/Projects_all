import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Header = () => {
    const history = useHistory();
    const { user, logout } = useAuth();

    return (
        <header className="font-rubik">
            <div className="container mx-auto flex flex-wrap  py-5 flex-col md:flex-row items-center">
                <NavLink
                    to="/"
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                >
                    <img src="/images/logo.png" alt="" />
                </NavLink>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap flex-col md:flex-row items-center text-base justify-center">
                    <NavLink
                        to="/"
                        className=" py-2 px-4 text-base font-medium text-custom-black hover:text-white hover:bg-green-500 rounded-md transition "
                    >
                        Home{' '}
                    </NavLink>

                    <NavLink
                        to="/about"
                        className=" py-2 px-4 text-base font-medium text-custom-black hover:text-white hover:bg-green-500 rounded-md transition "
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className=" py-2 px-4 text-base font-medium text-custom-black hover:text-white hover:bg-green-500 rounded-md transition "
                    >
                        Contact Us
                    </NavLink>
                </nav>
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    {user && (
                        <div className="flex flex-col items-center justify-center mr-0 lg:mr-4">
                            {user && (
                                <>
                                    <img
                                        src={user.photoURL}
                                        className="rounded-full h-10 w-10 ml-2 mb-0 md:mb-2"
                                        alt=""
                                    />
                                    <span className="text-custom-black font-rubik font-medium uppercase mt-2 md:mt-0">
                                        {user.displayName}
                                    </span>
                                </>
                            )}
                        </div>
                    )}
                    {user ? (
                        <button
                            onClick={logout}
                            type="button"
                            className="inline-flex justify-between items-center uppercase bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded text-white text-base font-medium mt-2 md:mt-0"
                        >
                            Log Out <i className="ml-2 fas fa-sign-out-alt" />
                        </button>
                    ) : (
                        <button
                            onClick={() => history.push('/authentication')}
                            type="button"
                            className="inline-flex justify-between items-center uppercase bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-700 rounded text-white text-base font-medium mt-4 md:mt-0"
                        >
                            Login <i className="ml-2 fas fa-sign-in-alt" />
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
