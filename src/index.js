import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/main.css';
import Initialize from './Initialize';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './utils/context/authContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Initialize />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
