import "./App.css";
import React, { Suspense } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Ranking from "./containers/Ranking/Ranking";
import * as actions from "./store/actions";
import { connect } from "react-redux";

const Homepage = React.lazy(() => import("./containers/Homepage/Homepage"));
const Categories = React.lazy(() =>
  import("./containers/Categories/Categories")
);
const Favourites = React.lazy(() =>
  import("./containers/Favourites/Favourites")
);
const Auth = React.lazy(() => import("./containers/Auth/Auth"));
const Profile = React.lazy(() => import("./containers/Profile/Profile"));
const AddAuthor = React.lazy(() => import("./containers/AddAuthor/AddAuthor"));
const EditAuthor = React.lazy(() => import("./containers/EditAuthor/EditAuthor"));
const AddBook = React.lazy(() => import("./containers/AddBook/AddBook"));
const EditBook = React.lazy(() => import("./containers/EditBook/EditBook"));
const EditCategory = React.lazy(() => import("./containers/EditCategory/EditCategory"));
const AddCategory = React.lazy(() => import("./containers/AddCategory/AddCategory"));
const BookDetails = React.lazy(() =>
  import("./containers/BookDetails/BookDetails")
);
const AuthorDetails = React.lazy(() =>
  import("./containers/AuthorDetails/AuthorDetails")
);
const CategoryDetails = React.lazy(() =>
  import("./containers/CategoryDetails/CategoryDetails")
);
const Settings = React.lazy(() => import("./containers/Settings/Settings"));
const Logout = React.lazy(() => import("./containers/Auth/Logout/Logout"));

const App = (props) => {
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
            <Route path="/favourite" exact component={(props) => <Favourites {...props} />}/>
            <Route path="/user/:id" exact component={(props) => <Profile {...props} />}/>
            <Route path="/authors/new" exact component={(props) => <AddAuthor {...props} />}/>
            <Route path="/authors/:id/edit" exact component={(props) => <EditAuthor {...props} />}/>
            <Route path="/authors/:id" exact component={(props) => <AuthorDetails {...props} />}/>
            <Route path="/books/new" exact component={(props) => <AddBook {...props} />}/>
            <Route path="/books/:id" exact component={(props) => <BookDetails {...props} />}/>
            <Route path="/books/:id/edit" exact component={(props) => <EditBook {...props} />}/>
            <Route path="/categories" exact component={(props) => <Categories {...props} />}/>
            <Route path="/categories/new" exact component={(props) => <AddCategory {...props} />}/>
            <Route path="/categories/:id" exact component={(props) => <CategoryDetails {...props} />}/>
            <Route path="/categories/:id/edit" exact component={(props) => <EditCategory {...props} />}/>
            <Route path="/settings" exact component={(props) => <Settings {...props} />}/>
            <Route path="/login" exact component={(props) => <Auth {...props} />}/>
            <Route path="/logout" exact component={(props) => <Logout {...props} /> }/>
            <Route path="/" exact component={(props) => <Homepage {...props} />}/>
            <Redirect to="/"/>
        </Switch>
    );


    return (
    <Layout isAuth={props.isAuthenticated}>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
    onLogin: () => dispatch(actions.login()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
