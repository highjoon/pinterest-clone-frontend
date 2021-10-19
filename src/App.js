import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore.js";
import { PinDetail } from "./pages";

function App() {
    return (
        <React.Fragment>
            <ConnectedRouter history={history}>
                <Route path="/detail/:id" component={PinDetail} />
            </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
