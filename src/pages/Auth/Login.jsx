import { Box, Button, InputAdornment, TextField, Backdrop } from "@mui/material";
import { Formik } from "formik";
import React, { useEffect } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import * as yup from "yup";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { LoginHandler } from "../../apis/Auth/Login";
import CircularProgress from '@mui/material/CircularProgress';
function Login() {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Login);
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = () => {
    dispatch(LoginHandler({ phone: phone, password: password })).then(() =>
      handleStateChange()
    );
  };
  const handleStateChange = () => {
    if (state.status) {
      switch (state.status) {
        case 200:
          if (state.data.user.role === "admin") {
            cookies.set("_auth_token", state.data.token);
            cookies.set("_auth_role", "651001091051101310");
            window.location.pathname = "/";
          } else {
            cookies.set("_auth_token", state.data.token);
            cookies.set("_auth_role", "67108105101110116");
            window.location.pathname = "/";
          }
          break;
        case 404:
          setError("لا يوجد مستخدم بهذا الرقم");
          break;
        case 400:
          setError("كلمه المرور غير صحيحه");
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
            height={"761px"}
            sx={{
              backgroundColor: "#FFFFFF20",
              backdropFilter: "blur(15px)",
              direction: "rtl",
            }}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box width={"100%"} height={"33.3%"}>
              <Box
                height={"60%"}
                m={5}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={"20px"}
              >
                <Box fontSize={"50px"} color={"white"}>
                  تسجيل الدخول
                </Box>
                <Box fontSize={"20px"} color={"#FFFFFF80"}>
                  أدخل البريد الإلكتروني وكلمة المرور الخاصة بك
                </Box>
              </Box>
            </Box>
            <Box width={"100%"} height={"66.6%"}>
              <Formik
                initialValues={initialState}
                validationSchema={validateSchema}
                onSubmit={handleSubmit}
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
                      gap: "45px",
                    }}
                    onSubmit={handleSubmit}
                  >
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
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      type="password"
                      name="password"
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
                        bottom: 1,
                        height: "20%",
                        backgroundColor: "#FFCFA182",
                        ":hover": { background: "#CFA182" },
                        fontSize: "40px",
                        color: "#454545",
                      }}
                      fullWidth
                      variant="contained"
                    >
                      دخول
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
  phone: "",
  password: "",
};
const validateSchema = yup.object({
  phone: yup.string().required("رقم الهاتف مطلوب*"),
  password: yup
    .string()
    .min(6, "كلمه المرور لا تقل عن 6 ارقام")
    .required("كلمه المرور مطلوبه*"),
});
export default Login;
