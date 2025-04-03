// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./src/pages/Dashboard/Dashboard";
import { EnergyBillLibrary } from "./src/pages/EnergyBillLibrary/EnergyBillLibrary";
import { Container } from "@mui/material";
import { NotFound } from "./src/pages/NotFound/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Container sx={{ height: "100%", mt: "100px", pb: "1em" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bills-library" element={<EnergyBillLibrary />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
