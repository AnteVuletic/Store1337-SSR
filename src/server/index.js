import express from 'express';

import React from 'react';
import {renderToString} from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes, renderRoutes } from 'react-router-config';

import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import routes from '../components/routes';
import rootReducer from '../reducers/rootReducer';

const PORT = 8080;
const app = express();

const store = createStore(rootReducer,applyMiddleware(thunk));

app.use('/public', express.static('dist/public'));

app.get('*',(req,res) =>{
  const branch = matchRoutes(routes,req.url);
  const promises = branch.map(({route})=>{
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  });
  return Promise.all(promises).then((data)=>{
    let context = {};
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    );
    res.send(`
               <!DOCTYPE html>
           <html lang="en">
           <head>
               <meta charset="UTF-8">
                       <title>Store 1337</title>
           </head>
           <body>
           <div id="app">${content}</div>
           <script>window.REDUX_DATA = ${JSON.stringify(store.getState())}</script>
           <script type="text/javascript" src="public/bundle.js" defer></script>
           </body>
           </html>
           `
      );
  });
});

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));
