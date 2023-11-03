import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Header from './pages/Header';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Header />
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
