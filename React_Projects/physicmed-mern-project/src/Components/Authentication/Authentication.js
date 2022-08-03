import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Authentication = () => {
    const { register, handleSubmit } = useForm();

    const {
        loginWithGoogle,
        setIsLoading,
        registerWithEmailAndPassword,
        updateNameAndPhoto,
        loginWithEmailAndPassword,
        logout,
        setUser
    } = useAuth();
    const [isRegister, setIsRegister] = useState(false);
    const [foundError, setFoundError] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/';

    const onSubmit = (data) => {
        if (isRegister) {
            registerWithEmailAndPassword(data.email, data.password)
                .then(() => {
                    // setUser(userCredential.user);
                    updateNameAndPhoto(
                        data.name,
                        'https://narodny-tribunal.info/img/defaults/person.jpg'
                    );
                    logout();
                    setIsRegister(false);
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    setFoundError(true);
                });
        } else {
            loginWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    setUser(userCredential.user);
                    history.push(redirectUri);
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    setFoundError(true);
                });
        }
    };

    const handleGoogleLogin = () => {
        setIsLoading(true);
        loginWithGoogle()
            .then(() => {
                history.push(redirectUri);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <section className="container mx-auto pb-10">
            <h2 className="text-5xl w-full font-rubik font-bold text-custom-black text-center py-10 bg-breadcrumb bg-no-repeat bg-center bg-cover ">
                Authentication
            </h2>
            <section className="bg-gray-50">
                <main className="space-y-10 flex flex-col items-center justify-center bg-gray-50  py-6 px-4 sm:px-6 lg:px-8">
                    <div>
                        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            {isRegister ? 'Register' : 'Sign in to your account'}
                        </h1>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or
                            <a
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsRegister(!isRegister);
                                }}
                                className="font-medium text-indigo-600 border-b border-indigo-600"
                            >
                                {' '}
                                {isRegister
                                    ? 'Already have account? Sign in'
                                    : 'register your FREE account'}
                            </a>
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="max-w-md w-full mx-auto bg-white shadow rounded-lg p-7 space-y-6"
                    >
                        {isRegister && (
                            <div className="flex flex-col">
                                <label
                                    className="text-sm font-bold text-gray-600 mb-1"
                                    htmlFor="name"
                                >
                                    {' '}
                                    Name
                                </label>
                                <input
                                    className="border rounded-md bg-white px-3 py-2"
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    placeholder="Enter your name"
                                    {...register('name')}
                                />
                            </div>
                        )}
                        <div className="flex flex-col">
                            <label className="text-sm font-bold text-gray-600 mb-1" htmlFor="email">
                                {' '}
                                Email Address
                            </label>
                            <input
                                className="border rounded-md bg-white px-3 py-2"
                                type="text"
                                name="email"
                                required
                                id="email"
                                placeholder="Enter your Email Address"
                                {...register('email')}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                className="text-sm font-bold text-gray-600 mb-1"
                                htmlFor="password"
                            >
                                {' '}
                                Password
                            </label>
                            <input
                                className="border rounded-md bg-white px-3 py-2"
                                type="password"
                                name="password"
                                id="password"
                                required
                                placeholder="Enter your Password"
                                {...register('password')}
                            />
                        </div>
                        {foundError && (
                            <span className="text-red-500 text-center font-rubik my-10 block">
                                Wrong Email Address / Password
                            </span>
                        )}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white rounded-md p-2"
                            >
                                {isRegister ? 'Sign Up' : 'Sign in'}
                            </button>
                        </div>
                        <div className="relative pb-2">
                            <div className="absolute top-0 left-0 w-full border-b" />
                            <div className="absolute -top-3 left-0 w-full text-center">
                                <span className="bg-white px-3 text-sm">or continue via</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center text-xl">
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className="border-2 rounded-md p-3 text-center cursor-pointer hover:border-gray-600"
                            >
                                <i className="fab fa-google" />
                            </button>
                        </div>
                    </form>
                </main>
            </section>
        </section>
    );
};

export default Authentication;
