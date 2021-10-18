import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore.js";

function App() {
    return (
        <React.Fragment>
            <ConnectedRouter history={history}>
                <div></div>
            </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
