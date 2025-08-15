import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Carto from '../pages/Carto';
import Weather from '../pages/Weather';
import DataEX from '../pages/DataEX';
import DataVIS from '../pages/DataVIS';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Carto" element={<Carto />} />
      <Route path="/Weather" element={<Weather />} />
      <Route path="/DataEX" element={<DataEX />} />
      <Route path="/DataVIS" element={<DataVIS />} />
      <Route path="/" element={<Carto />} />
    </Routes>
  );
};

export default AppRoutes;