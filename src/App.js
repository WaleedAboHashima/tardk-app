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
import { useDispatch } from "react-redux";
import { RulesHandler } from "./apis/rules";
import { useEffect, useState } from "react";
import ChangeLogo from "./pages/Admin/ChangeLogo";
import Success from "./pages/Success";
import Search from "./pages/Search";
import Cancel from "./pages/Cancel";
import Socials from "./pages/Admin/Socials";
function App() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [newLogo, setNewLogo] = useState();
  useEffect(() => {
    // Fetch the rules from the backend
    dispatch(RulesHandler()).then((res) => {
      if (res.payload) {
        // Get the main logo URL from the rules
        const rules = res.payload.data.rules;
        const logoUrl = rules.find((rule) => rule.type === "main_logo")?.main_logo;

        // Update the newLogo state
        setNewLogo(logoUrl);
      }
    });
  }, [dispatch]);

  useEffect(() => {
    // Update the favicon URL when the newLogo state changes
    if (newLogo) {
      const favicon = document.querySelector("link[rel='icon']");
      favicon.href = newLogo + "?v=" +Date.now();
    }
  }, [newLogo]);
  // useEffect(() => {
  //   dispatch(RulesHandler()).then((res) => {
  //     if (res.payload) {
  //       const rules = res.payload.data.rules;
  //       const logoUrl = res.payload.data.rules.filter(
  //         (rule) => rule.type === "main_logo" && setNewLogo(rule.main_logo)
  //       );
  //       const faveicon = document.querySelector("link[rel='icon']");
  //       faveicon.href = newLogo + "?v=" + Date.now();
  //     }
  //   });
  // }, [dispatch]);
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/allPackages" element={<AllProducts />} />
        <Route path="/allDrivers" element={<AllDrivers />} />
        <Route path="/search/:input" element={<Search />} />
        {cookies.get("_auth_role") && cookies.get("_auth_token") ? (
          <>
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/addPackage" element={<AddPackage />} />
            <Route path="/canDeliver" element={<CanDeliver />} />
            <Route path="/message/:id" element={<DeliverMessage />} />
            <Route path="/message" element={<DeliverMessage />} />
            <Route path="/driverInfo/:id" element={<DriverInfo />} />
            <Route path="/packageInfo/:id" element={<PackageInfo />} />
          </>
        ) : (
          ""
        )}
        {cookies.get("_auth_role") === "651001091051101310" ? (
          <>
            <Route path="/admin/adminpanel" element={<AdminPanel />} />
            <Route path="/admin/socials" element={<Socials />} />
            <Route path="/admin/termsofuse" element={<TermsOfUse />} />
            <Route path="/admin/conditions" element={<Conditions />} />
            <Route path="/admin/taxes" element={<Taxes />} />
            <Route path="/admin/change/:type" element={<ChangeLogo />} />
          </>
        ) : (
          ""
        )}
      </Routes>
    </div>
  );
}

export default App;
