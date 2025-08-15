import React from 'react';
import CollapsiblePanel from '../components/CollapsiblePanel';
import '../styles/Weather.css';

const Weather = () => {
  const weatherMetrics = [
    {
      id: 'weather-conditions',
      title: "Top 10 Weather Conditions During Accidents",
      src: "/filename.html"
    },
    {
      id: 'temperature-distribution',
      title: "Severity and weather correlation",
      src: "Severity_weather_correlation.html"
    },
    {
      id: 'visibility-distribution',
      title: "Average Temperature During Severe Accidents Over Time",
      src: "/severe_accidents_temp_trend.html"
    },
    {
      id: 'severe_vs_nonsevere_weather',
      title: "severe vs nonsevere weather",
      src: "/severe_vs_nonsevere_weather.html"
    },
    {
      id: 'weather_correlation_matrix',
      title: "weather_correlation_matrix",
      src: "/weather_correlation_matrix.html"
    }
  ];

  return (
    <div className="weather-container">
      <div className="page-header">
        <h1>Weather Metrics Dashboard</h1>
        <p>Analysis of weather conditions and their impact on accident frequency</p>
      </div>
      
      <div className="metrics-container">
        {weatherMetrics.map((metric) => (
          <CollapsiblePanel 
            key={metric.id} 
            title={metric.title}
            className="weather-metric"
          >
            <div className="iframe-container">
              <iframe
                src={metric.src}
                width="100%"
                height="500px"
                title={metric.title}
              />
            </div>
          </CollapsiblePanel>
        ))}
      </div>
    </div>
  );
};

export default Weather;