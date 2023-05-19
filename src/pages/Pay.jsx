import {
  Box,
  Button,
  Dialog,
  DialogContent,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { Formik } from "formik";
import LockIcon from "@mui/icons-material/Lock";
import * as yup from "yup";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
function Pay() {
  const navigator = useNavigate();
  const [open, setOpen] = React.useState(false);
  const styless = {
    input: {
      borderRadius: "40px",
    },
  };

  const handleSubmit = () => {
    setOpen(true);
    setTimeout(() => {
      navigator("/");
    }, 2000);
  };
  return (
    <Box height={"100vh"} width={"100%"}>
      <TopBar />
      <Box
        sx={{ backgroundColor: "#F2F2F2" }}
        height={"90%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          p={2}
          sx={{ backgroundColor: "white" }}
          height={"90%"}
          width={"80%"}
          display={"flex"}
        >
          <Box
            p={2}
            display={"flex"}
            gap={2}
            width={"100%"}
            height={"80%"}
            sx={{ direction: "rtl" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              height={"326px"}
              width={"537px"}
              flexDirection={"column"}
              gap={2}
            >
              <Box fontSize={"25px"} fontWeight={"bold"}>
                كلمة المرور
              </Box>
              <Box fontSize={"15px"} fontWeight={"bold"} color={"#45454580"}>
                أدخل كلمة مرور حسابك للتأكيد
              </Box>
              <Box display={"flex"} height={"100%"}>
                <Formik
                  validationSchema={validSchema}
                  initialValues={{ password: "" }}
                  onSubmit={handleSubmit}
                >
                  {({
                    values,
                    touched,
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                  }) => (
                    <form
                      onSubmit={handleSubmit}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 31,
                      }}
                    >
                      <TextField
                        name="password"
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        fullWidth
                        type="password"
                        InputProps={{
                          style: styless.input,
                          startAdornment: (
                            <InputAdornment position="start">
                              <img
                                style={{ marginLeft: "10px" }}
                                width={"25px"}
                                height={"25px"}
                                src="./assets/lockIcon.png"
                                alt="lock"
                              />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <img
                                src="./assets/successTick.png"
                                alt="success"
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <Box
                        width={"100%"}
                        height={"150px"}
                        position={"relative"}
                        sx={{ backgroundColor: "brown" }}
                      >
                        <img src="./assets/pay.png" alt="pay" />
                        <Box
                          position={"absolute"}
                          top={"50%"}
                          left={"50%"}
                          sx={{ transform: "translate(-50%, -50%)" }}
                          width={"100%"}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          flexDirection={"column"}
                        >
                          <Box
                            fontSize={"30px"}
                            color={"white"}
                            fontWeight={"bold"}
                          >
                            عمولة الموقع 50%
                          </Box>
                          <Box
                            fontWeight={"bold"}
                            fontSize={"20px"}
                            color={"#FFFFFF90"}
                          >
                            سيتم خصم هده العمولة من بطاقتك المصرفية
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Button
                          type="submit"
                          sx={{
                            fontSize: "25px",
                            backgroundColor: "#454545",
                            ":hover": {
                              backgroundColor: "white",
                              color: "#454545",
                            },
                            width: "40%",
                            borderRadius: "20px",
                          }}
                          variant="contained"
                        >
                          <CheckIcon sx={{ width: "35px", height: "35px" }} />
                          إدفع العمولة
                        </Button>
                      </Box>
                    </form>
                  )}
                </Formik>
                <Dialog
                  open={open}
                  close={() => setOpen(!open)}
                  sx={{ backdropFilter: "blur(5px)" }}
                >
                  <DialogContent
                    sx={{
                      width: "507px",
                      height: "227px",
                      display: "flex",
                      backgroundColor: "#454545",
                      fontSize: "35px",
                      fontWeight: "bold",
                      color: "white",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    تم الدفع بنجاح
                    <img
                      width={"68px"}
                      height={"68px"}
                      src="/assets/markWhiteBig.png"
                      alt="check"
                    />
                  </DialogContent>
                </Dialog>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

const validSchema = yup.object({
  password: yup.string().required("مطلوب*"),
});

export default Pay;