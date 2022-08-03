import { Redirect, Route } from 'react-router';
import useAuth from '../../Context/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="mb-10 flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
            </div>
        );
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect to={{ pathname: '/authentication', state: { from: location } }} />
                )
            }
        />
    );
};

export default PrivateRoute;
