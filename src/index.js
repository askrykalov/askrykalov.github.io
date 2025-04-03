import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

if (window.Telegram?.WebApi) {
    window.Telegram.WebApi.ready();
    window.Telegram.WebApi.expand();
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

