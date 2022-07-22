import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './pages/SignUp';
import 'primeicons/primeicons.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
  <SignUp />
  //</React.StrictMode>
);
