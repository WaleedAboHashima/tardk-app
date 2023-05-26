import {
  Backdrop,
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { Formik } from "formik";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import * as yup from "yup";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { PayTaxesHandler } from "../apis/Payment/PayTaxes";
import Cookies from "universal-cookie";
import { RulesHandler } from "../apis/rules";
function Pay() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState();
  const [amount, setAmount] = useState();
  const [error, setError] = useState();
  const [commission, setCommission] = useState();
  const [type, setType] = useState('paypal');
  const [IBAN, setIBAN] = useState();
  const state = useSelector((state) => state.PayTaxes);
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const styless = {
    input: {
      borderRadius: "40px",
    },
  };
  const handleStateChange = () => {
    if (state.status) {
      switch (state.status) {
        case 200:
          localStorage.setItem("amount", amount);
          window.open(state.data.approvalUrl, "_blank");
          break;
        case 400:
          setError("كلمه المرور غير صحيحه");
          break;
        case 401:
          setError("برجاء تسجيل الدخول");
          break;
        default:
          break;
      }
    }
  };
  const handleSubmit = () => {
    dispatch(PayTaxesHandler({ password: password, amount: amount })).then(() =>
      handleStateChange()
    );
  };

  useEffect(() => {
    handleStateChange();
    dispatch(RulesHandler()).then((res) => {
      if (res.payload) {
        setCommission(
          res.payload.data.rules.filter(
            (r) => r.type === "commission" && r.commission
          )
        );
          res.payload.data.rules.filter((r) => r.type === "Bank" && setIBAN(r.IBAN))
      }
    });
  }, [state.status]);

  return (
    <motion.Box
      height={"100vh"}
      width={"100%"}
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.loading ? true : false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <TopBar />
      <Box
        sx={{ backgroundColor: "#F2F2F2" }}
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {cookies.get("_auth_token") && cookies.get("_auth_role") ? (
          <Box
            p={2}
            sx={{ backgroundColor: "white" }}
            height={"80%"}
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
                height={{ lg: "450px", xs: "100%" }}
                width={{ lg: "537px", xs: "100%" }}
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
                    initialValues={{ password: "", amount: "", IBAN: "" }}
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
                          width: "100%",
                        }}
                      >
                        <FormControl
                          sx={{
                            direction: "rtl",
                            svg: { left: "7px", right: "unset" },
                          }}
                        >
                          <Select
                            fullWidth
                            defaultValue={type}
                            name="type_eviction"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => {
                              setType(e.target.value);
                            }}
                            sx={{
                              backgroundColor: "white",
                              borderRadius: 99,
                            }}
                          >
                            <MenuItem disabled dir="rtl" value={0}>
                              طريقه الدفع
                            </MenuItem>
                            <MenuItem dir="rtl" value={"paypal"}>
                              PayPal
                            </MenuItem>
                            <MenuItem dir="rtl" value={"bank"}>
                              حساب بنكي
                            </MenuItem>
                          </Select>
                        </FormControl>
                        {type === "paypal" ? (
                          <TextField
                            name="amount"
                            value={values.amount}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            onChangeCapture={(e) => setAmount(e.target.value)}
                            error={!!touched.amount && !!errors.amount}
                            helperText={touched.amount && errors.amount}
                            fullWidth
                            type="text"
                            InputProps={{
                              style: styless.input,
                              startAdornment: (
                                <InputAdornment position="start">
                                  <CurrencyPoundIcon sx={{ color: "black" }} />
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
                        ) : (
                          <TextField
                            name="IBAN"
                            value={IBAN}
                            onBlur={handleBlur}
                            fullWidth
                            type="text"
                            InputProps={{
                              style: styless.input,
                              startAdornment: (
                                <InputAdornment position="start">
                                  <AccountBalanceIcon sx={{ color: "black" }} />
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
                        )}
                        <TextField
                          name="password"
                          value={values.password}
                          onBlur={handleBlur}
                          sx={type === "paypal" ? {display: 'block' } : {display: 'none'}}
                          onChange={handleChange}
                          onChangeCapture={(e) => setPassword(e.target.value)}
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
                        <Box color={"red"}>{error}</Box>
                        <Box
                          width={"100%"}
                          height={"150px"}
                          position={"relative"}
                          sx={{ backgroundColor: "brown" }}
                        >
                          <img
                            width={"100%"}
                            height={"100%"}
                            src="./assets/pay.png"
                            alt="pay"
                          />
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
                              {commission
                                ? `عمولة الموقع ${commission[0].commission}%`
                                : "عموله الموقع "}
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
                            sx={type === "paypal" ? {
                              fontSize: "25px",
                              backgroundColor: "#454545",
                              ":hover": {
                                backgroundColor: "white",
                                color: "#454545",
                              },
                              width: { lg: "40%", xs: "100%" },
                              borderRadius: "20px",
                            }: {display: 'none'}}
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
        ) : (
          <Box
            p={2}
            sx={{ backgroundColor: "white" }}
            height={"80%"}
            width={"80%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"35px"}
            color={"red"}
            fontWeight={"bold"}
          >
            برجاء تسجيل الدخول
          </Box>
        )}
      </Box>
      <Footer />
    </motion.Box>
  );
}
const validSchema = yup.object({
  amount: yup.string().required("مطلوب*"),
  password: yup.string().required("مطلوب*"),
});

export default Pay;
