import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Archive from "./components/rent_comp/ArchiveRents.jsx";
import ProtectedPages from "./components/ProtectedPages.jsx";
import NewRent from "./components/rent_comp/NewRentForm.jsx";
import EditRentForm from "./components/rent_comp/EditRentForm.jsx";
import AccessNumbers from "./components/access_numbers_comp/AccessNumbers.jsx";
import ActiveRents from "./components/rent_comp/ActiveRents.jsx";
import SimActivation from "./components/SimActivation.jsx";
import RcukRentals from "./components/RcukRentals.jsx";
import ILnumbers from "./components/il_numbers_comp/ILnumbers.jsx";

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
