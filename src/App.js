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
function App() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [websiteIconUrl, setWebsiteIconUrl] = useState("");
  useEffect(() => {
    dispatch(RulesHandler())
      .then((response) => {
        if (response.payload) {
          if (response.payload.data) {
            const logo = response.payload.data.rules.filter(
              (f) => f.type === "main_logo"
            );
            setWebsiteIconUrl(logo[0].main_logo);
            const manifestLink = document.querySelector('link[rel="manifest"]');
            if (manifestLink) {
              const manifestUrl = manifestLink.getAttribute("href");
              fetch(manifestUrl)
                .then((response) => response.json())
                .then((manifest) => {
                  const newManifest = {
                    ...manifest,
                    icons: [
                      {
                        src: websiteIconUrl,
                        sizes: "192x192",
                        type: "image/png",
                      },
                      {
                        src: websiteIconUrl,
                        sizes: "512x512",
                        type: "image/png",
                      },
                    ],
                  };
                  manifestLink.setAttribute(
                    "href",
                    URL.createObjectURL(
                      new Blob([JSON.stringify(newManifest)], {
                        type: "application/json",
                      })
                    )
                  );
                });
            }
          }
        }
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App" style={{ overflowX: "hidden"}}>
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
