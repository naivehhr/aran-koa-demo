import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { browserHistory, Switch } from "react-router";
// import Users from './Users'
// import Home from './Home'
// import Users from './Users'

// const Index = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;
// const Users = () => <h2>Users</h2>;

const Index = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Users = lazy(() => import("./Users"));

const AppRouter = () => (
  <Router history={browserHistory}>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </Switch>
      </Suspense>
    </div>
  </Router>
);

export default AppRouter;
