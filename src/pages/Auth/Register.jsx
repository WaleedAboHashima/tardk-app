import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import LockIcon from "@mui/icons-material/Lock";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import * as yup from "yup";
function Register() {
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
          height={"841px"}
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
              gap={"20px"}
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
              onSubmit={() => console.log("Done!")}
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
                    name="email"
                    placeholder="البريد الالكتروني"
                    value={values.email}
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    onBlur={handleBlur}
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
                    placeholder="كلمه المرور"
                    value={values.password}
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    onBlur={handleBlur}
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
                      height: "15%",
                      backgroundColor: "#FFCFA182",
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
  );
}

const initialState = {
  username: "",
  location: "",
  email: "",
  phone: "",
  password: "",
};
const validateSchema = yup.object({
  username: yup.string().required("اسم المستخدم مطلوب*"),
  location: yup.string().required("العنوان مطلوب*"),
  phone: yup.number().required("الهاتف مطلوب*"),
  email: yup.string().required("البريد مطلوب*"),
  password: yup.string().required("كلمه المرور مطلوبه*"),
});
export default Register;
