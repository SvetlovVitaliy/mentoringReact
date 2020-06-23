import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '../services';
import { store } from '../services/app/store-config';
import { AppRoute } from './app-route';

import './app.scss';

interface IAppProps { }

export const App: FunctionComponent<IAppProps> = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <AppRoute />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
