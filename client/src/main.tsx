import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../../js-solution/css/layout.css';
import '../../js-solution/css/reset.css';
import '../../js-solution/css/styles.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
