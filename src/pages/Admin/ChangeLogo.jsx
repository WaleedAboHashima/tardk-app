import React, { useState } from "react";
import SidePanel from "../components/SidePanel";
import { Box, TextField, Button, Backdrop } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import { LogoHandler } from "../../apis/Admin/ChangeLogo";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { IconHandler } from "../../apis/Admin/ChangeIcon";
function ChangeIcon() {
  const params = useParams();
  const navigator = useNavigate();
  const [files, setFiles] = useState();
  const [error, setError] = useState();
  const state = useSelector((state) => state.ChangeLogo);
  const stateIcon = useSelector((state) => state.ChangeIcon);
  const dispatch = useDispatch();

  const handleLogoChange = () => {
    const formData = new FormData();
    formData.append("img", files[0]);
    dispatch(LogoHandler(formData)).then((res) => {
      if (res.payload.status === 200) {
        setError("تمت العمليه بنجاح");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setError("فشلت العمليه");
      }
    });
  };

  const handleIconChange = () => {
    const formData = new FormData();
    formData.append("img", files[0]);
    dispatch(IconHandler(formData)).then((res) => {
      if (res.payload.status === 200) {
        setError("تمت العمليه بنجاح");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setError("فشلت العمليه");
      }
    });
  };

  return (
    <Box sx={{ direction: "rtl" }} display={"flex"}>
      <SidePanel />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.loading ? true : false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        display={"flex"}
        width={"100%"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#F2F2F2" }}
      >
        {params.type === "logo" ? (
          <Box
            sx={{ backgroundColor: "white" }}
            width={"1257px"}
            height={"682px"}
            display={"flex"}
          >
            <Formik onSubmit={handleLogoChange} initialValues={{ webIcon: "" }}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 30,
                  }}
                >
                  <TextField
                    name="webIcon"
                    value={values.webIcon}
                    onChange={handleChange}
                    onChangeCapture={(e) => setFiles(e.target.files)}
                    type="file"
                    placeholder="صوره الموقع"
                  />
                  <Button
                    type="submit"
                    sx={{ width: "30%" }}
                    variant="contained"
                  >
                    تغيير
                  </Button>
                  <Box>{error}</Box>
                </form>
              )}
            </Formik>
          </Box>
        ) : (
          <>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={stateIcon.loading ? true : false}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <Box
              sx={{ backgroundColor: "white" }}
              width={"1257px"}
              height={"682px"}
              display={"flex"}
            >
              <Formik
                onSubmit={handleIconChange}
                initialValues={{ webIcon: "" }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 30,
                    }}
                  >
                    <TextField
                      name="webIcon"
                      value={values.webIcon}
                      onChange={handleChange}
                      onChangeCapture={(e) => setFiles(e.target.files)}
                      type="file"
                      placeholder="صوره الموقع"
                    />
                    <Button
                      type="submit"
                      sx={{ width: "30%" }}
                      variant="contained"
                    >
                      تغيير
                    </Button>
                    <Box>{error}</Box>
                  </form>
                )}
              </Formik>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ChangeIcon;
