import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const initialState = {};

const middleware= [thunk];

const composeEnhancers = (typeof window !== "undefined" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ )|| compose;

export default () => createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(...middleware)));
