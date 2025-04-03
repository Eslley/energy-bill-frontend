// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Dashboard } from './src/pages/Dashboard/Dashboard';
import { EnergyBillLibrary } from './src/pages/EnergyBillLibrary/EnergyBillLibrary';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/bills-library">Biblioteca de Contas</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bills-library" element={<EnergyBillLibrary />} />
      </Routes>
    </Router>
  );
};

export default App;
