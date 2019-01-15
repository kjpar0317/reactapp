/* 설치 순서

npm install --save react react-dom
npm install --save-dev babel-core babel-loader babel-preset-react babel-preset-es2015 webpack webpack-dev-server

npm install @material-ui/core

npm install react-router
npm install react-router-dom
npm install connected-react-router

npm install react-big-calendar --save
npm install moment --save

개발 편이성
npm install eslint-config-airbnb 귀챠늠
npm install eslint-config-prettier
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from "routes/index.jsx";

ReactDOM.render(
    <Router>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />;
            })}
        </Switch>
    </Router>,
    document.getElementById("root")
);
