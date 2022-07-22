import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './pages/SignUp';
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>

  <Router>
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
  </Router>

  //</React.StrictMode>
);
