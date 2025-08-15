import React from 'react';

const Carto = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Carte interactive des accidents</h2>
      <iframe
        src="/accidents_carte_interactive (1).html"
        width="100%"
        height="600"
        style={{ border: 'none' }}
        title="Accidents Map"
      />
    </div>
  );
};

export default Carto;
