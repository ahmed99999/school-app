import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './components/login';
import NotFound from './components/common/notfound';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
