import React from 'react';
import CollapsiblePanel from '../components/CollapsiblePanel';
import '../styles/DataVIS.css';

const DataVIS = () => {
  const graphs = [
    { id: 'severity', title: "Severity Count", src: "/Severity Count.html", type: "html" },
    { id: 'hour-distribution', title: "Accidents Distribution by Hour", src: "/accidents_by_hour.html", type: "html" },
    { id: 'top-states', title: "Top 10 States with Most Accidents", src: "/top_10_states_accidents.html", type: "html" },
    { id: 'custom-graph', title: "Accident Time Distribution", src: "/graph4.png", type: "html" },
    { id: 'severity-map', title: "Accident Locations Colored by Severity", src: "/graph5.png", type: "image" },
  ];

  return (
    <div className="datavis-container">
      <div className="page-header">
        <h1>Data Visualization</h1>
        <p>Visual insights into accident patterns and trends</p>
      </div>
      
      <div className="graph-gallery">
        {graphs.map((graph) => (
          <CollapsiblePanel 
            key={graph.id} 
            title={graph.title}
            className="graph-item"
          >
            <div className="graph-container">
              {graph.type === 'html' ? (
                <iframe
                  src={graph.src}
                  title={graph.title}
                  className="graph-iframe"
                  width="100%"
                  height="600px"
                  style={{ border: 'none' }}
                ></iframe>
              ) : (
                <img 
                  src={graph.src}
                  alt={graph.title}
                  className="graph-image"
                />
              )}
            </div>
          </CollapsiblePanel>
        ))}
      </div>
    </div>
  );
};

export default DataVIS;
