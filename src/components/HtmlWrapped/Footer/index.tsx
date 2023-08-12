import { Copyright, FooterHtml } from './styles';

const Footer = () => {
  return (
    <FooterHtml className="position-fixed vw-100 bottom-0">
      <Copyright className="d-flex justify-content-center align-items-center h-100">
        Copyright &copy; NetBook. All Rights Reserved
      </Copyright>
    </FooterHtml>
  );
};

export default Footer;
