import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Backdrop,
  Select,
} from "@mui/material";
import { Formik } from "formik";
import React, { useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import LockIcon from "@mui/icons-material/Lock";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RegisterHandler } from "../../apis/Auth/Register";
import CircularProgress from "@mui/material/CircularProgress";
function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState();
  const [phone, setPhone] = React.useState();
  const [email, setEmail] = React.useState();
  const [location, setLocation] = React.useState();
  const [code, setCode] = React.useState();
  const [error, setError] = React.useState();
  const [password, setPassword] = React.useState();
  const state = useSelector((state) => state.Register);
  //Functions

  const handleStateChange = () => {
    if (state.status) {
      switch (state.status) {
        case 201:
          window.location.pathname = "/login";
          break;
        case 400:
          setError("يوجد مستخدم بهذا الرقم");
          break;
        case 500:
          setError("يوجد خطأ في السيرفر.");
          break;
        default:
          setError("");
          break;
      }
    }
  };

  const handleFormSubmit = () => {
    dispatch(
      RegisterHandler({
        username: username,
        phone: phone.startsWith("0") && code.endsWith("0") ? code + phone.slice(1) : code + phone,
        email: email,
        location: location,
        password: password,
      })
    ).then(() => handleStateChange());
  };

  useEffect(() => {
    handleStateChange();
  }, [state.status]);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.loading ? true : false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        width={"100vw"}
        height={"100vh"}
        sx={{
          backgroundImage: "url(./assets/authBackground.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          display={"flex"}
          height={"100%"}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ backdropFilter: "blur(10px)", backgroundColor: "#FF000000" }}
        >
          <Box
            width={"693px"}
            height={{ lg: "100%", xl: "841px" }}
            sx={{
              backgroundColor: "#FFFFFF20",
              backdropFilter: "blur(15px)",
              direction: "rtl",
            }}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box width={"100%"}>
              <Box
                height={"60%"}
                m={6}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={{ lg: "10px", xl: "20px" }}
              >
                <Box fontSize={"50px"} color={"white"}>
                  تسجيل
                </Box>
                <Box fontSize={"20px"} color={"#FFFFFF80"}>
                  كن واحد من مجتمعنا وقم بالتسجيل
                </Box>
              </Box>
            </Box>
            <Box width={"100%"} height={"66.6%"}>
              <Formik
                initialValues={initialState}
                validationSchema={validateSchema}
                onSubmit={handleFormSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                }) => (
                  <form
                    style={{
                      height: "95%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      margin: 5,
                      gap: 35,
                    }}
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      name="username"
                      placeholder="اسم المستخدم"
                      value={values.username}
                      error={!!touched.username && !!errors.username}
                      helperText={touched.username && errors.username}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      onChangeCapture={(e) => setUsername(e.target.value)}
                      variant="standard"
                      sx={{ width: "70%" }}
                      InputProps={{
                        style: { fontSize: "20px", color: "white" },
                        classes: {
                          underline: "white-underline",
                          focused: "white-focused",
                        },
                        startAdornment: (
                          <InputAdornment position="start" sx={{ ml: 1 }}>
                            <PersonIcon
                              sx={
                                errors.username && touched.username
                                  ? { color: "red", fontSize: "30px" }
                                  : { color: "white", fontSize: "30px" }
                              }
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      name="location"
                      placeholder="مكان السكن"
                      value={values.location}
                      error={!!touched.location && !!errors.location}
                      helperText={touched.location && errors.location}
                      onBlur={handleBlur}
                      onChangeCapture={(e) => setLocation(e.target.value)}
                      onChange={handleChange}
                      variant="standard"
                      sx={{ width: "70%" }}
                      InputProps={{
                        style: { fontSize: "20px", color: "white" },
                        classes: {
                          underline: "white-underline",
                          focused: "white-focused",
                        },
                        startAdornment: (
                          <InputAdornment position="start" sx={{ ml: 1 }}>
                            <RoomIcon
                              sx={
                                errors.location && touched.location
                                  ? { color: "red", fontSize: "30px" }
                                  : { color: "white", fontSize: "30px" }
                              }
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      name="phone"
                      placeholder="رقم الهاتف"
                      value={values.phone}
                      error={!!touched.phone && !!errors.phone}
                      helperText={touched.phone && errors.phone}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      onChangeCapture={(e) => setPhone(e.target.value)}
                      variant="standard"
                      sx={{ width: "70%" }}
                      InputProps={{
                        style: { fontSize: "20px", color: "white" },
                        classes: {
                          underline: "white-underline",
                          focused: "white-focused",
                        },
                        startAdornment: (
                          <InputAdornment position="start" sx={{ ml: 1 }}>
                            <PhoneIcon
                              sx={
                                errors.phone && touched.phone
                                  ? { color: "red", fontSize: "30px" }
                                  : { color: "white", fontSize: "30px" }
                              }
                            />
                            <TextField
                              name="code"
                              value={values.code}
                              onChange={handleChange}
                              onChangeCapture={(e) => setCode(e.target.value) }
                              sx={{width: '80px'}}
                              placeholder="كود الدوله"
                              variant="standard"
                              InputProps={{
                                style: { fontSize: "20px", color: "white" },
                                classes: {
                                  underline: "white-underline",
                                  focused: "white-focused",
                                },
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      name="email"
                      placeholder="البريد الالكتروني"
                      value={values.email}
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      onChangeCapture={(e) => setEmail(e.target.value)}
                      variant="standard"
                      sx={{ width: "70%" }}
                      InputProps={{
                        style: { fontSize: "20px", color: "white" },
                        classes: {
                          underline: "white-underline",
                          focused: "white-focused",
                        },
                        startAdornment: (
                          <InputAdornment position="start" sx={{ ml: 1 }}>
                            <EmailIcon
                              sx={
                                errors.email && touched.email
                                  ? { color: "red", fontSize: "30px" }
                                  : { color: "white", fontSize: "30px" }
                              }
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      name="password"
                      type="password"
                      placeholder="كلمه المرور"
                      value={values.password}
                      error={!!touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      onChangeCapture={(e) => setPassword(e.target.value)}
                      variant="standard"
                      sx={{ width: "70%" }}
                      InputProps={{
                        style: { fontSize: "20px", color: "white" },
                        classes: {
                          underline: "white-underline",
                          focused: "white-focused",
                        },
                        startAdornment: (
                          <InputAdornment position="start" sx={{ ml: 1 }}>
                            <LockIcon
                              sx={
                                errors.password && touched.password
                                  ? { color: "red", fontSize: "30px" }
                                  : { color: "white", fontSize: "30px" }
                              }
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Box color={"red"}>{error}</Box>
                    <Button
                      type="submit"
                      sx={{
                        position: "fixed",
                        bottom: { lg: 1, xs: -80 },
                        height: "15%",
                        backgroundColor: { lg: "#FFCFA182", xs: "#CFA182" },
                        ":hover": { background: "#CFA182" },
                        fontSize: "40px",
                        color: "#454545",
                      }}
                      fullWidth
                      variant="contained"
                    >
                      تسجيل
                    </Button>
                  </form>
                )}
              </Formik>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

const initialState = {
  username: "",
  location: "",
  email: "",
  code: "",
  phone: "",
  password: "",
};
const validateSchema = yup.object({
  username: yup.string().required("اسم المستخدم مطلوب*"),
  location: yup.string().required("العنوان مطلوب*"),
  phone: yup.number().required("الهاتف مطلوب*"),
  email: yup.string().required("البريد مطلوب*"),
  password: yup.string().min(6, "لا تقل عن 6").required("كلمه المرور مطلوبه*"),
});
export default Register;
