import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Watchlist from './pages/Watchlist';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Text from './pages/Text';
import low from './pages/low';
import momentum from './pages/momentum';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/Watchlist' component={Watchlist} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/Text' component={Text} />
        <Route path='/low' component={low} />
        <Route path='/momentum' component={momentum} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
