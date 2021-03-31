import React from 'react';
import Sidebar from '../shared/sidebar/sidebar';
import ComponentOverview from './components-overview/component-overview';

const libraryStyles = {
  display: 'flex',
  flexDirection: 'row',
};

const LibraryPage = () => (
  <div style={libraryStyles}>
    <div style={{ flex: '1' }}>
      <Sidebar />
    </div>
    <div style={{ flex: '3' }}>
      <ComponentOverview />
    </div>
    <div style={{ flex: '1' }} />
  </div>
);

export default LibraryPage;
