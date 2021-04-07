import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RouterSetup from './router';
import reducers from './state-management/reducers';
import GlobalStyle from './Styles/globalStyles';

const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <RouterSetup />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
