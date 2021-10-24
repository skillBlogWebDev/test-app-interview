import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { rootReducer } from './redux/reducers/rootReducer';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
  <Provider store={store}>
  <App />
</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
