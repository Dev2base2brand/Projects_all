import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Authentication from './Components/Authentication/Authentication';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import AuthProvider from './Context/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <PrivateRoute path="/about">
                        <AboutUs />
                    </PrivateRoute>
                    <PrivateRoute path="/contact">
                        <ContactUs />
                    </PrivateRoute>
                    <Route path="/authentication">
                        <Authentication />
                    </Route>
                    <PrivateRoute path="/servicedetail/:id">
                        <ServiceDetail />
                    </PrivateRoute>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
