import React from 'react';
import BlogMapping from './blogPosts/blogmapping';
import ProductMapping from './product/productmapping';
import {Route,Switch} from 'react-router-dom';

const routes = (
        <Switch>
            <Route exact path="/" component={BlogMapping}/>
            <Route exact path="/blog/" component={BlogMapping}/>
            <Route path="/blog/:slug" component={BlogMapping}/>
            <Route exact path="/store/" component={ProductMapping}/>
            <Route path="/store/:slug" component={ProductMapping}/>
        </Switch>
);

export default routes;
