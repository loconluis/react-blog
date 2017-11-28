import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// reducers import
import blogReducer from '../reducers/blog';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      blog: blogReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // to connect with redux dev tool if thunk not exist
  );

  return store;
};