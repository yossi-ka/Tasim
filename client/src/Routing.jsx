import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Archive from "./components/Archive.jsx";
import ProtectedPages from "./components/ProtectedPages.jsx";
import NewRent from "./components/NewRentForm.jsx";
import EditRentForm from "./components/EditRentForm.jsx";
import AccessNumbers from "./components/AccessNumbers.jsx";
import ActiveRents from "./components/ActiveRents.jsx";
import SimActivation from "./components/SimActivation.jsx";
import RcukRentals from "./components/RcukRentals.jsx";
import ILnumbers from "./components/ILnumbers.jsx";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedPages />}>
          <Route path="/" element={<Home />} />
          <Route path="/rentals" element={<ActiveRents />} />
          <Route path="/rentals/new" element={<NewRent />} />
          <Route path="/rentals/rcuk" element={<RcukRentals />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive/new" element={<NewRent />} />
          <Route path="/rentals/edit" element={<EditRentForm />} />
          <Route path="/access-numbers" element={<AccessNumbers />} />
          <Route path="/sim-activation" element={<SimActivation />} />
          <Route path="/il-numbers" element={<ILnumbers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
