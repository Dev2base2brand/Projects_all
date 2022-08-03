import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Login = () => {
    const { login, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/';
    const signIn = () => {
        setIsLoading(true);
        login()
            .then(() => {
                history.push(redirectUri);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <section className="text-center py-5">
            <h2>Login</h2>
            <button type="button" className="btn btn-primary mx-auto" onClick={() => signIn()}>
                {' '}
                Sign In With Google
            </button>
        </section>
    );
};

export default Login;
