import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import { HomePage } from '../pages';
import { ErrorBoundary } from '../services';
import rootReducer from '../services/app/reducer';

const logger = createLogger({ diff: true });

const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
  )
)

interface IAppProps { }

export const App: FunctionComponent<IAppProps> = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </ErrorBoundary>
  );
}
