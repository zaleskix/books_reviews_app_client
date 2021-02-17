import "./App.css";
import React, { Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Ranking from "./containers/Ranking/Ranking";

const Homepage = React.lazy(() => import("./containers/Homepage/Homepage"));
const Categories = React.lazy(() =>
  import("./containers/Categories/Categories")
);
const Favourites = React.lazy(() =>import("./containers/Favourites/Favourites"));
const Profile = React.lazy(() =>import("./containers/Profile/Profile"));
const AddAuthor = React.lazy(() =>import("./containers/AddAuthor/AddAuthor"));

function App() {
  let routes = (
    <Switch>
      <Route
        path="/books/ranking"
        exact
        component={(props) => <Ranking isBookRanking {...props} />}
      />
      <Route
        path="/authors/ranking"
        exact
        component={(props) => <Ranking {...props} />}
      />
      <Route path="/categories" exact component={Categories} />
      <Route path="/favourite" exact component={Favourites} />
      <Route path="/profile/:id" exact component={(props) => <Profile {...props} /> } />
      <Route path="/authors/new" exact component={AddAuthor} />
      <Route path="/" exact component={Homepage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>
  );
}

export default withRouter(App);
