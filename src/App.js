import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import Loader from './components/loader/loader.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component.jsx';
import Home from './pages/home/home.component';
import Kickstarter from './pages/kickstarter/kickstarter.component';
import Media from './pages/media/media.component';
import WhoWeAre from './pages/who-we-are/who-we-are.component';
import ContactUs from './pages/contact-us/contact-us.component';

// TODO: lazy load components

import './App.css';

function App() {
  return (
    <div className='w-screen'>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center'><Loader/></div>}>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/kickstarter' component={Kickstarter} />
              <Route path='/media' component={Media} />
              <Route path='/who-we-are' component={WhoWeAre} />
              <Route path='/contact-us' component={ContactUs}/>
              <Redirect to='/' />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
