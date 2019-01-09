/* 설치 순서
npm install react-router
npm install react-router-dom
npm install connected-react-router
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
