import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/login/login'
import MainLayout from './layout/MainLayout'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}>
        </Route>
        <Route exact path="/">
          <MainLayout>
            <Route exact path="/" component={Home}>
            </Route>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
