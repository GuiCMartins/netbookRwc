import React from 'react';
import ReactDOM from 'react-dom/client';
import SignUp from './pages/SignUp';
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialPageHeader from 'components/HtmlWrapped/InitialPageHeader';
import Footer from 'components/HtmlWrapped/Footer';
import SignIn from 'pages/SignIn';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>

  <Router>
    <Routes>
      <Route path="/" element={<InitialPageHeader />}>
        <Route index element={<SignIn />} />
      </Route>
      <Route path="/cadastro" element={<SignUp />} />
    </Routes>
    <Footer />
  </Router>

  //</React.StrictMode>
);
