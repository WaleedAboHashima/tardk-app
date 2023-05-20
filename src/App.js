import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Cookies from "universal-cookie";
import Pay from "./pages/Pay";
import AllProducts from "./pages/AllPackages";
import AllDrivers from "./pages/AllDrivers";
import AddPackage from "./pages/AddPackage";
import CanDeliver from "./pages/CanDeliver";
import DeliverMessage from "./pages/DeliverMessage";
import DriverInfo from "./pages/DriverInfo";
import PackageInfo from "./pages/PackageInfo";
import AdminPanel from "./pages/Admin/AdminPanel";
import TermsOfUse from "./pages/Admin/Termsofuse";
import Conditions from "./pages/Admin/Conditions";
import Taxes from "./pages/Admin/Taxes";
function App() {
  const cookies = new Cookies();
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/allPackages" element={<AllProducts />} />
        <Route path="/allDrivers" element={<AllDrivers />} />
        <Route path="/addPackage" element={<AddPackage />} />
        <Route path="/canDeliver" element={<CanDeliver />} />
        <Route path="/message/:id" element={<DeliverMessage />} />
        <Route path="/driverInfo/:id" element={<DriverInfo />} />
        <Route path="/packageInfo/:id" element={<PackageInfo />} />
        {cookies.get("_auth_role") === "admin" ? (
          <>
            <Route path="/admin/adminpanel" element={<AdminPanel />} />
            <Route path="/admin/termsofuse" element={<TermsOfUse />} />
            <Route path="/admin/conditions" element={<Conditions />} />
            <Route path="/admin/taxes" element={<Taxes />} />
          </>
        ) : (
          ""
        )}
      </Routes>
    </div>
  );
}

export default App;
