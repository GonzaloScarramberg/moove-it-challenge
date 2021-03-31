import React from 'react';
import MenuButton from './menu-button';

const openMenuStyles = {
  width: '220px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '#0C0A3E',
  transform: 'translateX(0)',
  height: '100vh',
  textAlign: 'left',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  position: 'absolute',
  top: '0',
  left: '0',
  transition: 'transform 0.3s ease-in-out',
};

const closedMenuStyles = {
  width: '220px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '#0C0A3E',
  transform: 'translateX(-100%)',
  height: '100vh',
  textAlign: 'left',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  position: 'absolute',
  top: '0',
  left: '0',
  transition: 'transform 0.3s ease-in-out',
};

const Menu = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <MenuButton open={open} setOpen={setOpen} />
      <div style={open ? openMenuStyles : closedMenuStyles}>
        <button type='button' onClick={() => setOpen(false)}>
          cerrar
        </button>
      </div>
    </>
  );
};

export default Menu;
