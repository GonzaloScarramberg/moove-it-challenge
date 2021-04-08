import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'styled-components/macro';
import Home from './home-page/home';
import DocumentationPage from './documentation-page/documentation-page';
import LibraryPage from './library-page/library-page';
import Footer from './shared/footer/footer';
import Header from './shared/header/header';

const RouterSetup = () => (
  <Router>
    <div
      css={`
        padding-top: 3.2rem;
        @media (max-width: 700px) {
          padding-top: 5.5rem;
        }
      `}
    >
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/components-overview' component={LibraryPage} />
        <Route exact path='/guides-overview' component={DocumentationPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default RouterSetup;
