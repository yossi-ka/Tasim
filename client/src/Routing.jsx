import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Archive from "./components/Archive.jsx";
import ProtectedPages from "./components/ProtectedPages.jsx";
import ActiveRents from "./components/ActiveRents.jsx";
import NewArch from "./components/NewRentForm.jsx";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedPages />}>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive/new" element={<NewArch />} />
          <Route path="/rents" element={<ActiveRents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
