import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Router
import AppRouter, { history } from './routers/AppRouter';
// Store from redux
import configureStore from './store/configStore';
// Styles 
import 'normalize.css/normalize.css'; // normalizing styles for all browsers
import './styles/App.css';
// React-Dates
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
// component
import LoadingPage from './components/LoadingPage';

// FirebaseDB
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

// This help us to know the state of auth!
firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    // Here is login
    store.dispatch(login(user.uid));
    renderApp();
    if(history.location.pathname === '/') {
      history.push('/dashboard');
    };
  } else {
    // Here is logout
    store.dispatch(logout())
    renderApp();
    history.push('/');
  }
});
