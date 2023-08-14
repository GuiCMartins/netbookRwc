import { Copyright, FooterHtml } from './styles';

const Footer = () => {
  return (
    <FooterHtml className="position-absolute vw-100">
      <Copyright className="d-flex justify-content-center align-items-center h-100">
        Copyright &copy; NetBook. All Rights Reserved
      </Copyright>
    </FooterHtml>
  );
};

export default Footer;
