import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Sidebar from './Global/Sidebar';
import Auth from './pages/Auth';
import Bookings from './pages/Bookings';
import Dashboard from './pages/Dashboard';
import Halls from './pages/Halls';
import NotFoundPage from './pages/NotFoundPage';
import Rooms from './pages/Rooms';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="row m-0">
                    <div className="col-0 d-none d-md-block col-md-3 col-lg-2 p-3 sidebar shadow-lg">
                        <Sidebar />
                    </div>
                    <div className="col-12 col-md-9 col-lg-10 bg-light workspace">
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
