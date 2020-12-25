import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Global/Navbar';
import Sidebar from './Global/Sidebar';
import Auth from './pages/Auth';
import Bookings from './pages/Bookings';
import Dashboard from './pages/Dashboard';
import Halls from './pages/Halls';
import NotFoundPage from './pages/NotFoundPage';
import Rooms from './pages/Rooms';

function App() {
    const [showMobileViewSidebar, setShowMobileViewSidebar] = React.useState(true);
    const toggleMobileSidebar = () => {
        setShowMobileViewSidebar((prev) => !prev);
    };

    return (
        <Router>
            <div className="App">
                <div className="row m-0">
                    <div
                        className={
                            showMobileViewSidebar
                                ? 'col-0 col-md-3 col-lg-2 p-3 sidebar mobile-show shadow-lg'
                                : 'col-0 col-md-3 col-lg-2 p-3 sidebar mobile-hide shadow-lg'
                        }
                    >
                        <Sidebar toggleMobileSidebar={toggleMobileSidebar} />
                    </div>
                    <div className="col-12 col-md-9 col-lg-10 bg-light workspace">
                        <Navbar toggleMobileSidebar={toggleMobileSidebar} />
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/auth" component={Auth} />
                            <Route path="/halls" component={Halls} />
                            <Route path="/rooms" component={Rooms} />
                            <Route path="/bookings" component={Bookings} />
                            <Route path="/*" component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
