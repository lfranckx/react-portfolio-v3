import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './styles/App.scss';
import './styles/Utils.scss';

import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import About from "./components/pages/About";

function App() {
  return (
      <>
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/portfolio/" render={() => <Redirect to={'/home'} />} />
              <Route path='/portfolio/home' exact component={Home} />
              <Route path='/portfolio/portfolio' component={Portfolio} />
              <Route path='/portfolio/resume' component={Resume} />
              <Route path='/portfolio/contact' component={Contact} />
              <Route path={'/portfolio/about'} component={About}/>
            </Switch>
        </Router>
      </>
  );
}

export default App;
