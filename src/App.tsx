import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { EnergyBillLibraryPage } from "./pages/EnergyBillLibrary/EnergyBillLibraryPage";
import { NotFound } from "./pages/NotFound/NotFound";
import Navbar from "./components/NavBar/NavBar";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Navbar />

      <Container sx={{ height: "100%", mt: "100px", pb: "1em" }}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/bills-library" element={<EnergyBillLibraryPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </HashRouter>
  );
};

export default App;
