import ReactDOM from 'react-dom/client';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InitialPageHeader from 'components/HtmlWrapped/InitialPageHeader';
import Footer from 'components/HtmlWrapped/Footer';
import SignIn from 'pages/SignIn';
import { Rotas } from 'constants/Rotas';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from 'pages/HomePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>

  <Router>
    <Routes>
      <Route path="/" element={<InitialPageHeader />}>
        <Route index element={<SignIn />} />
        <Route path={Rotas.SIGNUP.path} element={<SignUp />} />
        <Route path={Rotas.HOME_PAGE.path} element={<HomePage />} />
      </Route>
    </Routes>
    <Footer />
  </Router>

  //</React.StrictMode>
);
