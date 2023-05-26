import React, { useEffect, useState } from "react";
import SidePanel from "../components/SidePanel";
import {
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CommisionHandler } from "../../apis/Admin/Commision";
import { Formik } from "formik";
import { PayPalSecretHandler } from "../../apis/Admin/AddPaypal";
import { RulesHandler } from "./../../apis/rules";
import { PaypalActivateHandler } from "./../../apis/Admin/ActivatePaypal";
import { ChangeIBANhandler } from './../../apis/Admin/ChangeIBAN';

function Taxes() {
  const [commission, setCommission] = useState();
  const dispatch = useDispatch();
  const [type, setType] = useState();
  const [paypalType, setPaypalType] = useState();
  const [clientId, setClientId] = useState();
  const [clientSecret, setClientSecret] = useState();
  const [error, setError] = useState();
  const [IBAN, setIBAN] = useState();
  const [payment_id, setPaymentId] = useState();
  const [ibanMessage, setibanMessage] = useState();
  const state = useSelector((state) => state.Rules);

  const handleActive = () => {
    if (state.data.rules) {
      const filter = state.data.rules.filter(
        (rule) => rule.mode === paypalType
      );
      setPaymentId(filter[0]._id);
      if (payment_id) {
        dispatch(PaypalActivateHandler({ payment_id }));
      }
    }
  };

  const handleIban = () => {
    dispatch(ChangeIBANhandler({ IBAN: IBAN })).then((res) => {
      if (res.payload) {
        switch (res.payload.status) {
          case 200:
            setibanMessage('تمت العمليه بنجاح')
            break;
          case 400:
            setibanMessage('حدث خطأ')
            break;
          default:
            break;
        }
      }
    } )
  }

  useEffect(() => {
    handleActive();
  }, [paypalType]);

  const handleSubmit = () => {
    dispatch(
      PayPalSecretHandler({
        type: type,
        clientId: clientId,
        clientSecret: clientSecret,
      })
    ).then((res) => {
      if (res.payload.data) {
        switch (res.payload.status) {
          case 201:
            setError("تمت العمليه بنجاح");
            setTimeout(() => {
              window.location.reload();
            }, 2000);
            break;
          case 401:
            setError("فشلت العمليه");
            break;
          default:
            break;
        }
      }
    });
  };

  useEffect(() => {
    dispatch(CommisionHandler({ commission: commission }));
    dispatch(RulesHandler());
  }, [commission, dispatch]);
  return (
    <Box
      sx={{ direction: "rtl" }}
      display={"flex"}
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <SidePanel />
      <Box
        display={"flex"}
        width={"100%"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#F2F2F2" }}
      >
        <Box width={"1257px"} height={"682px"} display={"flex"}>
          <Box
            sx={{ backgroundColor: "white" }}
            p={5}
            display={"flex"}
            width={"100%"}
          >
            <Box
              width={"50%"}
              color={"#454545"}
              sx={{ borderLeft: "2px solid #454545" }}
            >
              <Box my={"20%"} display={"flex"} flexDirection={"column"} gap={5}>
                <Box fontSize={"35px"} fontWeight={"bold"}>
                  عموله الموقع
                </Box>
                <Box fontSize={"25px"} color={"#45454580"}>
                  تحديد عمولة الموقع لكل عملية استلام أو تسليم طرد
                </Box>
                <Box fontSize={"25px"} color={"#454545"}>
                  العمولة:
                  <TextField
                    disabled
                    placeholder="لكل $5"
                    sx={{ pr: "10px" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Select
                            disableTyping={true}
                            onChange={(e) => {
                              setCommission(e.target.value);
                            }}
                            defaultValue={0}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={{
                              backgroundColor: "#454545",
                              border: "2px solid #454545",
                              borderRadius: 99,
                              color: "white",
                              width: "111px",
                              height: "57px",
                              svg: {
                                right: "unset",
                                left: "7px",
                                color: "white",
                              },
                            }}
                          >
                            <MenuItem dir="rtl" value={"0"}>
                              0$
                            </MenuItem>
                            <MenuItem dir="rtl" value={"10"}>
                              10$
                            </MenuItem>
                            <MenuItem dir="rtl" value={"20"}>
                              20$
                            </MenuItem>
                            <MenuItem dir="rtl" value={"30"}>
                              30$
                            </MenuItem>
                            <MenuItem dir="rtl" value={"40"}>
                              40$
                            </MenuItem>
                            <MenuItem dir="rtl" value={"50"}>
                              50$
                            </MenuItem>
                            <MenuItem dir="rtl" value={"60"}>
                              60$
                            </MenuItem>
                          </Select>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box display={"flex"}>
                  تفعيل وضعيه البايبال :
                  <FormControl>
                    <RadioGroup
                      row
                      defaultValue={"sandbox"}
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        onChange={handleActive}
                        onChangeCapture={(e) => setPaypalType(e.target.value)}
                        value="sandbox"
                        control={<Radio />}
                        label="Live"
                      />
                      <FormControlLabel
                        onChange={handleActive}
                        onChangeCapture={(e) => setPaypalType(e.target.value)}
                        value="live"
                        control={<Radio />}
                        label="Sandbox"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
            </Box>
            <Box pr={5} width={"50%"} color={"#454545"}>
              <Box display={"flex"} flexDirection={"column"} gap={3}>
                <Box fontSize={"25px"} color={"#45454580"}>
                  ادخال روابط بايبال
                </Box>
                <Box display={"flex"} justifyContent={"center"} gap={5}>
                  <Formik
                    onSubmit={handleSubmit}
                    initialValues={{ type: "", clientId: "", clientSecret: "" }}
                  >
                    {({ values, handleChange, handleSubmit }) => (
                      <form
                        onSubmit={handleSubmit}
                        dir="ltr"
                        style={{
                          display: "flex",
                          gap: 20,
                          flexDirection: "column",
                          width: "80%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel
                              value="sandbox"
                              onChange={handleChange}
                              onChangeCapture={(e) => setType(e.target.value)}
                              control={<Radio />}
                              label="Sandbox"
                            />
                            <FormControlLabel
                              onChange={handleChange}
                              onChangeCapture={(e) => setType(e.target.value)}
                              value="live"
                              control={<Radio />}
                              label="Live"
                            />
                          </RadioGroup>
                        </FormControl>
                        <TextField
                          name="clientId"
                          onChange={handleChange}
                          value={values.clientId}
                          onChangeCapture={(e) => setClientId(e.target.value)}
                          label="PayPal Client Id"
                          fullWidth
                        />
                        <TextField
                          name="clientSecret"
                          onChange={handleChange}
                          value={values.clientSecret}
                          onChangeCapture={(e) =>
                            setClientSecret(e.target.value)
                          }
                          label="PayPal Client Secret"
                          fullWidth
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            width: "100%",
                            backgroundColor: "#454545",
                            ":hover": {
                              backgroundColor: "#EEE",
                              color: "black",
                            },
                          }}
                        >
                          Submit
                        </Button>
                        <Box color={"red"} fontWeight={"bold"}>
                          {error}
                        </Box>
                      </form>
                    )}
                  </Formik>
                </Box>
                <Box fontSize={"25px"} color={"#45454580"}>
                  ادخال رقم الحساب البنكي
                </Box>
                <Box display={"flex"} justifyContent={"center"} gap={5}>
                  <Formik onSubmit={handleIban} initialValues={{ IBAN: "" }}>
                    {({ values, handleChange, handleSubmit }) => (
                      <form
                        onSubmit={handleSubmit}
                        dir="ltr"
                        style={{
                          display: "flex",
                          gap: 20,
                          flexDirection: "column",
                          width: "80%",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <TextField
                          name="IBAN"
                          onChange={handleChange}
                          value={values.IBAN}
                          onChangeCapture={(e) => setIBAN(e.target.value)}
                          label="Bank IBAN"
                          fullWidth
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            width: "100%",
                            backgroundColor: "#454545",
                            ":hover": {
                              backgroundColor: "#EEE",
                              color: "black",
                            },
                          }}
                        >
                          Submit
                        </Button>
                        <Box color={"red"} fontWeight={"bold"}>
                          {ibanMessage}
                        </Box>
                      </form>
                    )}
                  </Formik>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const initialState = {
  commision: "",
};

export default Taxes;
