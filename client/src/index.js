import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import { StyleRoot } from 'radium';
import './index.css';

ReactDOM.render(
  <Router>
    <StyleRoot>
      <App />
    </StyleRoot>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
