import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect, Suspense } from 'react';

import './App.css';
import checkIfAuthenticated from './authFunctions/checkIfAuthenticated';
import WholeScreenLoader from './utils/WholeScreenLoader';

const Navbar = React.lazy(() => import('./components/Global/Navbar_logged_out'));
const NavbarLoggedIn = React.lazy(() => import('./components/Global/Navbar_logged_in'));
const MobileViewSidebar = React.lazy(() => import('./components/Global/MobileViewSidebar'));
const Auth = React.lazy(() => import('./pages/Auth'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Halls = React.lazy(() => import('./pages/Halls'));
const Home = React.lazy(() => import('./pages/Home'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Rooms = React.lazy(() => import('./pages/Rooms'));
const SingleHall = React.lazy(() => import('./pages/SingleHall'));
const SingleRoom = React.lazy(() => import('./pages/SingleRoom'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const RoomsV2 = React.lazy(() => import('./pages/RoomsV2'));
const HallsV2 = React.lazy(() => import('./pages/HallsV2'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function App() {
    const [showMobileSidebar, setShowMobileSidebar] = useState(null);

    const [loggedIn, setLoggedIn] = useState(null);

    const toggleMobileSidebar = () => {
        setShowMobileSidebar((prev) => !prev);
    };

    const InformAppJsThatUserIsLoggedIn = () => {
        setLoggedIn(true);
    };

    const InformAppJsThatUserIsLoggedOut = () => {
        setLoggedIn(null);
    };

    useEffect(() => {
        const authenticated = checkIfAuthenticated();
        if (authenticated) {
            setLoggedIn(true);
        } else {
            setLoggedIn(null);
        }
        return () => {};
    }, []);

    return (
        <Router>
            <div className="App">
                <Suspense fallback={<WholeScreenLoader />}>
                    {!loggedIn && (
                        <Navbar showMobileSidebar={showMobileSidebar} toggleMobileSidebar={toggleMobileSidebar} />
                    )}
                    {!!loggedIn && (
                        <NavbarLoggedIn
                            showMobileSidebar={showMobileSidebar}
                            toggleMobileSidebar={toggleMobileSidebar}
                            InformAppJsThatUserIsLoggedOut={InformAppJsThatUserIsLoggedOut}
                        />
                    )}
                    <MobileViewSidebar
                        showMobileSidebar={showMobileSidebar}
                        toggleMobileSidebar={toggleMobileSidebar}
                    />
                    <div className="pt-5 bg-light" style={{ minHeight: '100vh' }}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                path="/auth"
                                component={() => <Auth InformAppJsThatUserIsLoggedIn={InformAppJsThatUserIsLoggedIn} />}
                            />
                            <Route path="/cart" component={Cart} />
                            <Route path="/rooms" component={RoomsV2} />
                            <Route path="/rooms-legacy" component={Rooms} />
                            <Route path="/halls" component={HallsV2} />
                            <Route path="/halls-legacy" component={Halls} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/about-us" component={AboutUs} />
                            <Route path="/contact-us" component={ContactUs} />

                            <Route path="/single-hall-page/:hall_id" component={SingleHall} />
                            <Route path="/single-room-page/:room_id" component={SingleRoom} />
                            <Route path="/not-found" component={NotFoundPage} />
                            <Route path="/*" component={NotFoundPage} />
                        </Switch>
                    </div>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
