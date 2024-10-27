import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Assuming you have this file
import App from './App';  // Your main App component
import reportWebVitals from './reportWebVitals';  // This line imports your new file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Call reportWebVitals function
reportWebVitals();
