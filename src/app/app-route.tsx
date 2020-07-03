import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, DetailsPage, NotFound } from '../pages';

interface IAppRouteProps { }

export const AppRoute: FunctionComponent<IAppRouteProps> = () => {
  return (
    <Switch>
      <Route path={'/details/:id'} component={DetailsPage} />
      <Route path={'/search'} component={HomePage} />
      <Route path={'/'} component={NotFound} />
    </Switch>
  );
};
