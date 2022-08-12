import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IndexedDB from 'localforage';

IndexedDB.config({
  driver: IndexedDB.INDEXEDDB,
  name: 'cad-ar',
  version: 1.0,
  storeName: 'cad_db',
  description: 'here we have all data related to models and markers'
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
