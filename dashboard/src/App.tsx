import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <main className="main-content">
          <AppRoutes />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;