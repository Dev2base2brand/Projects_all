import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <span className="spinner-border text-primary mx-auto" role="status">
                <span className="visually-hidden">Loading...</span>
            </span>
        );
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: location } }} />
                )
            }
        />
    );
};

export default PrivateRoute;
