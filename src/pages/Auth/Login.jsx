import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import * as yup from "yup";
import Cookies from "universal-cookie";
function Login() {
  const cookies = new Cookies();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = () => {
    if (email === "admin@gmail.com" && password === "admin") {
      cookies.set("_auth_token", "token");
      cookies.set("_auth_role", "admin");
      window.location.pathname = "/";
    } else {
      cookies.set("_auth_token", "token");
      window.location.pathname = "/";
    }
  };
  return (
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
  );
}

const initialState = {
  email: "",
  password: "",
};
const validateSchema = yup.object({
  email: yup.string().required("البريد مطلوب*"),
  password: yup.string().required("كلمه المرور مطلوبه*"),
});
export default Login;
