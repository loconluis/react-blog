import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// Components
import DashboardPage from '../components/DashboardPage';
import AddPost from "../components/AddPost";
import EditPost from '../components/EditPost';
import Error404 from '../components/Error404';
import PrivateReader from '../components/PrivateReader';
import PublicReader  from '../components/PublicReader';
import LoginPage from '../components/LoginPage';
import PublicList from '../components/PublicList';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={DashboardPage} exact />
        <PrivateRoute path="/create" component={AddPost} exact />
        <PrivateRoute path="/edit/:id" component={EditPost} exact />
        <PrivateRoute path="/me/:id" component={PrivateReader} exact />
        <PublicRoute path="/:username/:id" component={PublicReader} />
        <PublicRoute path="/:username" component={PublicList} exact />
        <PublicRoute component={Error404} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;