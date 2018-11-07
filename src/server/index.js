import express from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import createStore  from '../store';
import { StaticRouter } from 'react-router-dom';
import App from '../index.js';
import React from 'react';
import rootReducer from '../reducers/rootReducer';

const PORT = 8079;
const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
    const context = {};
    const store = createStore(rootReducer);

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
                <App/>
            </StaticRouter>
        </Provider>
    );
    const reduxState = store.getState();
    const raw =`
  <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css">
        <title>Store 1337</title>
      </head>
      <body>
      <div id="app">${content}</div>
      <script>window.REDUX_DATA = ${JSON.stringify(reduxState)}</script>
      <script type="text/javascript" src="./index_bundle.js"></script>
      </body>
      </html>
  `;

    res.send(raw);
});

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));
