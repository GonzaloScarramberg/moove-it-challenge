import React from 'react';

const textStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: '2',
};

const Home = () => (
  <div>
    <div style={{ height: '100%', display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          flex: '1',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span>logo</span>
      </div>
      <div style={textStyles}>
        <h1 style={{ fontSize: '4rem', color: '#0C0A3E', fontWeight: '400' }}>
          GS Designs
        </h1>
        <h2 style={{ color: '#0C0A3E', fontWeight: '300' }}>
          React components for your application
        </h2>
      </div>
    </div>
    <div style={{ height: '100%', display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          flex: '1',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span>logo</span>
      </div>
      <div style={textStyles}>
        <h1 style={{ fontSize: '4rem', color: '#0C0A3E', fontWeight: '400' }}>
          GS Designs
        </h1>
        <h2 style={{ color: '#0C0A3E', fontWeight: '300' }}>
          React components for your application
        </h2>
      </div>
    </div>
    <div style={{ height: '100%', display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          flex: '1',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span>logo</span>
      </div>
      <div style={textStyles}>
        <h1 style={{ fontSize: '4rem', color: '#0C0A3E', fontWeight: '400' }}>
          GS Designs
        </h1>
        <h2 style={{ color: '#0C0A3E', fontWeight: '300' }}>
          React components for your application
        </h2>
      </div>
    </div>
  </div>
);

export default Home;
