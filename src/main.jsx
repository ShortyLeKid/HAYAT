import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { inject } from '@vercel/analytics';

inject();

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // </React.StrictMode>,
)

