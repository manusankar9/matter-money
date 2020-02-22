
import React, { Component, useEffect } from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import Profile from './router/profile';
import Home from './router/home';
import Header from './header';
import Banner from './banner'
import Login from './login'
import Footer from './footer'

const UiRoute = () => {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/" component={Login} />
        <Footer/>
      </div>
    </BrowserRouter >
  )
}


class App extends Component {

  render() {
    return (
      <div className="jumbotron text-center">
        <UiRoute />
      </div>);
  }

}


render(<App />, document.getElementById('root'));
