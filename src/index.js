import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./redux/configureStore";
import theme from "./elements/theme";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
