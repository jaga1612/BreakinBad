import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore,applyMiddleware,compose } from "redux";
import Reducers from "./Reducers";
import thunk from "redux-thunk";



const root = ReactDOM.createRoot(document.querySelector("#root"))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

root.render(
    <Provider store={createStore(Reducers,composeEnhancers(applyMiddleware(thunk)))}>
        <App/>
    </Provider>

)