import React from 'react';
import './App.css';

import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Portfolio from './pages/Portfolio';
import Watchlist from './pages/Watchlist';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Text from './pages/Text';
import low from './pages/low';
import high from './pages/high';
import momentum from './pages/momentum';
import about from './pages/about';
import watchlist1 from './pages/watchlist1';
import watchlist2 from './pages/watchlist2';
import watchlist3 from './pages/watchlist3';
import watchlist4 from './pages/watchlist4';
import MostActive from './pages/MostActive';
import value from './pages/value';
import  Volume from './pages/Volume';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
       
        <Route path='/Portfolio' component={Portfolio} />
        <Route path='/Watchlist' component={Watchlist} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/Text' component={Text} />
        <Route path='/low' component={low} />
        <Route path='/high' component={high} />
        <Route path='/momentum' component={momentum} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/about' component={about} />
        <Route path='/watchlist1' component={watchlist1} />
        <Route path='/watchlist2' component={watchlist2} />
        <Route path='/watchlist3' component={watchlist3} />
        <Route path='/watchlist4' component={watchlist4} />
        <Route path='/MostActive' component={MostActive} />
        <Route path='/value' component={value} />
        <Route path='/Volume' component={Volume} />
      </Switch>
      
    </Router>
  );
}

export default App;
