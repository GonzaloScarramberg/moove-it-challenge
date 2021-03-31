import React from 'react';
import { Link } from 'react-router-dom';
// import Menu from './menu/menu';

const headerStyles = {
  backgroundColor: '#0C0A3E',
  padding: '1rem',
  position: 'fixed',
  width: '100%',
  display: 'flex',
  top: '0',
  zIndex: '1001',
};

const navbarStyles = {
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  justifyContent: 'space-evenly',
};

// const logoStyles = {
//   display: 'flex',
//   alignItems: 'center',
//   color: 'white',
//   justifyContent: 'space-evenly',
// };

const Header = () => (
  <div style={headerStyles}>
    <div style={navbarStyles}>
      <Link to='/'>
        <span style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>Logo</span>
      </Link>
      <Link to='/components-overview'>
        <span style={{ paddingLeft: '2rem', paddingRight: '1rem' }}>
          Components
        </span>
      </Link>
      <span style={{ paddingLeft: '1rem' }}>Guides</span>
    </div>
  </div>
);

export default Header;
