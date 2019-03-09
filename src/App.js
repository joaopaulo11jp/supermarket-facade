import React, { Component } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';

import HomeTemplateRoute from './routes/HomeTemplateRoute';

import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <HomeTemplateRoute path="/" exact component={Home}></HomeTemplateRoute>
          <HomeTemplateRoute path="/second" component={SecondPage}></HomeTemplateRoute>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
