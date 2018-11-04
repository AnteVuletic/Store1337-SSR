import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import Navbar from './components/navbar/navbar';
import routes from './components/routes';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Navbar/>
                        <div className="pt6">
                            {routes}
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );

    }

}

ReactDOM.render(<App />, document.getElementById('app'));
