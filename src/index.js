import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

import { BrowserRouter,Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './components/routes';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';


let store = createStore(rootReducer, window.REDUX_DATA || {} ,applyMiddleware(thunk));

const App = () =>{
    return(
        <div className="pt6">
            <BrowserRouter>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </BrowserRouter>
        </div>
    );
};
if(typeof window !== "undefined" && window ) {
    ReactDOM.hydrate(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('app'));
}
