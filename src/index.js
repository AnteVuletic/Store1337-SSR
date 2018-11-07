import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import Navbar from './components/navbar/navbar';
import routes from './components/routes';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './store';

const store = createStore(( typeof window !== "undefined" && window && window.REDUX_DATA));

class App extends React.Component {
    render(){
        return(
                    <div>
                        <Navbar/>
                        <div className="pt6">
                            {routes}
                        </div>
                    </div>
        );
    }

}
if(typeof window !== "undefined" && window ) {
    ReactDOM.hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
        , document.getElementById('app'));
}
export default App;
