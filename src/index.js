import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './css/main.css';

const container = document.getElementById('app');

if (!container) {
  throw new Error('Root container missing in index.html');
}

const root = createRoot(container);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
