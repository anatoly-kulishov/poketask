import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage, PokePage } from './pages';

import './assets/styles/bootstrap-grid.min.css';
import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path={`/:id`} element={<PokePage />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
