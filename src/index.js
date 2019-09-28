import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss";
import {I18nextProvider} from "react-i18next";
import Index from "views/Home/home.jsx";
import Landing from "views/dagdi/Pages/Landing.jsx";
import Login from "views/pages/Login.jsx";
import Profile from "views/pages/Profile.jsx";
import Register from "views/pages/Register.jsx";
import Prediction from "views/dagdi/Pages/Prediction.jsx";
import i18n from "./i18n";

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={props => <Index {...props} />}/>
                <Route
                    path="/landing-page"
                    exact
                    render={props => <Landing {...props} />} x
                />
                <Route path="/" exact render={props => <Index {...props} />}/>
                <Route
                    path="/prediction-page"
                    exact
                    render={props => <Prediction {...props} />} x
                />
                <Route path="/login-page" exact render={props => <Login {...props} />}/>
                <Route
                    path="/profile-page"
                    exact
                    render={props => <Profile {...props} />}
                />
                <Route
                    path="/register-page"
                    exact
                    render={props => <Register {...props} />}
                />
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter></I18nextProvider>,
    document.getElementById("root")
);
