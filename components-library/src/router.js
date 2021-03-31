import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './home-page/home';
import LibraryPage from './library-page/library-page';
import Footer from './shared/footer';
import Header from './shared/header';

const RouterSetup = () => (
  <div className='container'>
    <Router>
      <Header />
      <Switch>
        <div style={{ paddingTop: '3.2rem' }}>
          <Route exact path='/' component={Home} />
          <Route exact path='/components-overview' component={LibraryPage} />
        </div>
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default RouterSetup;
