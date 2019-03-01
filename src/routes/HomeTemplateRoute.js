import React from 'react';

import { Route } from 'react-router-dom';

import HomeTemplate from '../container/HomeTemplate';

const HomeTemplateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props => (
        <HomeTemplate>
          <Component {...props} />
        </HomeTemplate>
      )}
  >

  </Route>
);

export default HomeTemplateRoute;
