// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./src/pages/Dashboard/DashboardPage";
import { EnergyBillLibraryPage } from "./src/pages/EnergyBillLibrary/EnergyBillLibraryPage";
import { Container } from "@mui/material";
import { NotFound } from "./src/pages/NotFound/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Container sx={{ height: "100%", mt: "100px", pb: "1em" }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/bills-library" element={<EnergyBillLibraryPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
