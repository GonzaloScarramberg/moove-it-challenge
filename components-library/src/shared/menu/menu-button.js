import React from 'react';
import PropTypes from 'prop-types';

const menuButtonStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '2rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '0',
};

const divButtonStyle = {
  width: '1rem',
  height: '0.20rem',
  borderRadius: '10px',
  transition: 'all 0.3s linear',
  position: 'relative',
  transformOrigin: '1px',
  backgroundColor: '#ffffff',
};

const MenuButton = ({ open, setOpen }) => (
  <button style={menuButtonStyles} type='button' onClick={() => setOpen(!open)}>
    <div style={divButtonStyle} />
    <div style={divButtonStyle} />
    <div style={divButtonStyle} />
  </button>
);

MenuButton.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default MenuButton;
