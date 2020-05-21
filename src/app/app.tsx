import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { World } from '../components/world';
import { ErrorBoundary } from '../services';
import rootReducer from '../services/app/reducer';

const logger = (store: any) => (next: any) => (action: any) => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const todoApp = combineReducers(rootReducer)
const store = createStore(
  todoApp,
  applyMiddleware(
    logger,
  )
)

interface IAppProps { }

export const App: FunctionComponent<IAppProps> = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <World />
      </Provider>
    </ErrorBoundary>
  );
}
