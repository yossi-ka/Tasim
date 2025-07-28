import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ManageHome from "./components/ManageHome.jsx";
import Archive from "./components/rent_comp/ArchiveRents.jsx";
import ProtectedPages from "./components/ProtectedPages.jsx";
import NewRent from "./components/rent_comp/NewRentForm.jsx";
import EditRentForm from "./components/rent_comp/EditRentForm.jsx";
import AccessNumbers from "./components/access_numbers_comp/AccessNumbers.jsx";
import ActiveRents from "./components/rent_comp/ActiveRents.jsx";
import SimActivation from "./components/sim_activation_comp/SimActivation.jsx";
import RcukRentals from "./components/sim_activation_comp/RcukRentals.jsx";
import ILnumbers from "./components/il_numbers_comp/ILnumbers.jsx";
import Login from "./components/Login.jsx";
import NotFound from "./components/NotFound.jsx";
import Home from "./components/Home.jsx";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/mng" element={<ProtectedPages />}>
          <Route index element={<ManageHome />} />
          <Route path="rentals" element={<ActiveRents />} />
          <Route path="rentals/new" element={<NewRent />} />
          <Route path="rentals/new" element={<NewRent />} />
          <Route path="rentals/rcuk" element={<RcukRentals />} />
          <Route path="archive" element={<Archive />} />
          <Route path="archive/new" element={<NewRent />} />
          <Route path="rentals/edit" element={<EditRentForm />} />
          <Route path="access-numbers" element={<AccessNumbers />} />
          <Route path="sim-activation" element={<SimActivation />} />
          <Route path="il-numbers" element={<ILnumbers />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
