import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'animate.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import{Helmet, HelmetProvider} from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <HelmetProvider>
      
    <App />
    </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
