import React, { useState } from "react";
import SidePanel from "../components/SidePanel";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";
import { ChangeSocialHandler } from "./../../apis/Admin/Socials";

function Socials() {
  const dispatch = useDispatch();
  const [whatsapp, setWhatsapp] = useState();
  const [facebook, setFacebook] = useState();
  const [instagram, setinstgram] = useState();
  const state = useSelector((state) => state.Socials);
  const handleSubmit = (type) => {
    dispatch(
      ChangeSocialHandler({
        type: type,
        data:
          type === "facebook"
            ? facebook
            : type === "instagram"
            ? instagram
            : whatsapp,
      })
    );
  };

  return (
    <Box sx={{ direction: "rtl" }} display={"flex"}>
      <SidePanel />
      <Box
        display={"flex"}
        width={"100%"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#F2F2F2" }}
      >
        <Box width={{xl: "1257px", md: '80%'}} display={"flex"}>
          <Box
            sx={{ backgroundColor: "white" }}
            p={5}
            display={"flex"}
            flexWrap={"wrap"}
            gap={5}
            width={"100%"}
            flexDirection={"column"}
          >
            <Typography
              fontFamily={`-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`}
              variant="h4"
              color={"#454545"}
              fontWeight={"bold"}
            >
              تغيير مواقع التواصل
            </Typography>
            <Formik initialValues={initialState}>
              {({ values, errors, touched, handleBlur, handleChange }) => (
                <form
                  style={{
                    display: "flex",
                    gap: 25,
                    flexDirection: "column",
                    justifyContent: "left",
                  }}
                >
                  <TextField
                    name="Whatsapp"
                    type="number"
                    onChangeCapture={(e) => setWhatsapp(e.target.value)}
                    error={!!touched.Whatsapp && !!errors.Whatsapp}
                    helperText={touched.Whatsapp && errors.Whatsapp}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Whatsapp}
                    multiline
                    sx={{ width: "100%", direction: "rtl" }}
                    dir="rtl"
                    placeholder="برجاء ادخال رقم الواتس اب بكود البلد"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={() => handleSubmit("whatsapp")}
                          >
                            <CheckIcon />
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    name="FaceBook"
                    onChangeCapture={(e) => setFacebook(e.target.value)}
                    error={!!touched.FaceBook && !!errors.FaceBook}
                    helperText={touched.FaceBook && errors.FaceBook}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.FaceBook}
                    multiline
                    sx={{ width: "100%", direction: "rtl" }}
                    dir="rtl"
                    placeholder="برجاء ادخال رابط الفيسبوك الخاص بك"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            variant="contained"
                            onClick={() => handleSubmit("facebook")}
                          >
                            <CheckIcon />
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    name="Insta"
                    onChangeCapture={(e) => setinstgram(e.target.value)}
                    error={!!touched.Insta && !!errors.Insta}
                    helperText={touched.Insta && errors.Insta}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Insta}
                    multiline
                    sx={{ width: "100%", direction: "rtl" }}
                    dir="rtl"
                    placeholder="برجاء ادخال رابط الانساتجرام الخاص بك"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            variant="contained"
                            onClick={() => handleSubmit("instagram")}
                          >
                            <CheckIcon />
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Box
                    width={"100%"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                    p={2}
                    color={"red"}
                  >
                    {state.status === 200
                      ? "تمت العمليه بنجاح"
                      : state.status === 400
                      ? "فشل في العمليه"
                      : ""}
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const initialState = {
  Whatsapp: "",
  FaceBook: "",
  Insta: "",
};

export default Socials;
