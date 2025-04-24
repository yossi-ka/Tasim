import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Archive from "./components/Archive.jsx";
import ProtectedPages from "./components/ProtectedPages.jsx";
import NewRent from "./components/NewRentForm.jsx";
import EditRentForm from "./components/EditRentForm.jsx";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedPages />}>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive/new" element={<NewRent />} />
          <Route path="/rentals/new" element={<NewRent />} />
          <Route path="/rentals/edit" element={<EditRentForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
