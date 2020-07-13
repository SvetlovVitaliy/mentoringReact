import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, DetailsPage, NotFound, NotFoundPage } from '../pages';

export const AppRoute: FunctionComponent<{}> = () => {
  return (
    <Switch>
      <Route path={'/details/:id/'} component={DetailsPage} />
      <Route path={'/search'} component={HomePage} />
      <Route exact path={'/'} component={NotFound} />
      <Route path={'*'} component={NotFoundPage} />
    </Switch>
  );
};
