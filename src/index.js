import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import Navbar from './components/navbar/navbar';
import routes from './components/routes';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Navbar/>
                    <div className="pt6">
                        {routes}
                    </div>
                </div>
            </BrowserRouter>
        );

    }

}

ReactDOM.render(<App />, document.getElementById('app'));
