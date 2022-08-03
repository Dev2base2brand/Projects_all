import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddService from './Components/AddService/AddService';
import BookTour from './Components/BookTour/BookTour';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import MyOrders from './Components/MyOrders/MyOrders';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
    return (
        <div className="container-fluid">
            <AuthProvider>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <PrivateRoute path="/booktour/:id">
                            <BookTour />
                        </PrivateRoute>
                        <PrivateRoute path="/addservice">
                            <AddService />
                        </PrivateRoute>
                        <PrivateRoute path="/myorders">
                            <MyOrders />
                        </PrivateRoute>
                        <PrivateRoute path="/manageorders">
                            <ManageOrders />
                        </PrivateRoute>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
