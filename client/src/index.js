import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyleRoot } from 'radium';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <StyleRoot>
        <App />
      </StyleRoot>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
