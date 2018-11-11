import React from 'react';
import Route from 'react-router-dom/Route';
import { renderRoutes } from 'react-router-config';
import Navbar from './components/navbar/navbar';

class AppRoot extends React.Component{
    render() {
        return (
            <div>
                <Navbar/>
                <main>
                    {renderRoutes(this.props.route.routes)}
                </main>
            </div>
        );
    }
}
export default AppRoot;
