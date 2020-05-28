import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages';
import { DetailsPage } from '../pages/details/details';

interface IAppRouteProps { }

export const AppRoute: FunctionComponent<IAppRouteProps> = () => {
  return (
    <Switch>
      <Route path="/details">
        <DetailsPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
