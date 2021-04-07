import React from 'react';
import FooterDiv from './footer-styles';
import image from '../../assets/images/GitHub-Mark-Light-32px.png';

const Footer = () => (
  <FooterDiv>
    <div>GS UI Library</div>
    <div>
      <a href='https://github.com/GonzaloScarramberg/components-library-mooveit-challenge'>
        <img src={image} alt='' />
      </a>
    </div>
  </FooterDiv>
);

export default Footer;
