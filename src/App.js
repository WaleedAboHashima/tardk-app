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
function App() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [websiteIconUrl, setWebsiteIconUrl] = useState('/favicon.ico');

  useEffect(() => {
    dispatch(RulesHandler())
      .then((response) => {
        if (response.payload.data.rules) {
          const logo = response.payload.data.rules.filter(f => f.type === "main_logo")
          setWebsiteIconUrl(logo[0].main_logo);
          updateLinkTag(`https://tardq.onrender.com/${logo[0].main_logo}`);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  function updateLinkTag(newHref) {
    const linkTag = document.querySelector('link[rel="icon"]');
    if (linkTag) {
      linkTag.href = newHref;
    } else {
      const newLinkTag = document.createElement('link');
      newLinkTag.rel = 'icon';
      newLinkTag.href = newHref;
      document.head.appendChild(newLinkTag);
    }
  }
  return (
    <div className="App" style={{overflowX:"hidden"}}>
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
        <Route path="/success" element={<Success />} />
        {cookies.get("_auth_role") === "651001091051101310" ? (
          <>
            <Route path="/admin/adminpanel" element={<AdminPanel />} />
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
