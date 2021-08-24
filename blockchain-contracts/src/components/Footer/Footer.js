import React from 'react';
import FooterCSS from './Footer.module.css';
const Footer = () => {
  return (
    <React.Fragment>
      <div className={FooterCSS.footer}>
        <p>&#169; 2021 Cryptonate | Tech For Good Inc.</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
