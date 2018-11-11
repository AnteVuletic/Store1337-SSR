import appRoot from '../app-root';
import BlogMapping from './blogPosts/blogmapping';
import ProductMapping from './product/productmapping';

const routes = [
    {   component: appRoot,
        routes:[
            {
                path: '/',
                exact: true,
                component: BlogMapping
            },{
              path: '/blog',
              exact: true,
              component: BlogMapping
            },{
                path: '/blog/:slug',
                component: BlogMapping
            },{
                path: '/store',
                component: ProductMapping
            },{
                path: '/store/:slug',
                component: ProductMapping
            }
        ]
    }
];

export default routes;
