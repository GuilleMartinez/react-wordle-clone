import React from 'react';
import ReactDOM from 'react-dom/client';
import Wordle from './components/Wordle';

import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wordle />
  </React.StrictMode>
);
