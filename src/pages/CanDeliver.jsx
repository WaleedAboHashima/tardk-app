import {
  Box,
  TextField,
  InputAdornment,
  Divider,
  Button,
  ImageList,
  ImageListItem,
  IconButton,
  Dialog,
  Backdrop,
  DialogContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "./components/Footer";
import { Formik } from "formik";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { useDispatch, useSelector } from "react-redux";
import PhoneIcon from "@mui/icons-material/Phone";
import { RulesHandler } from "../apis/rules";
import { AddDriverHandler } from "./../apis/Drivers/AddDriver";
function CanDeliver() {
  const [conditions, setConditions] = useState(false);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState();
  const [source_location, setSource_Location] = useState();
  const [dis_location, setDis_Location] = useState();
  const [price, setPrice] = useState();
  const [packageSize, setPackageSize] = useState();
  const dispatch = useDispatch();
  const [commission, setCommission] = useState();
  const [error, setError] = useState();
  const state = useSelector((state) => state.AddDelivery);

  const handleSubmit = () => {
    dispatch(
      AddDriverHandler({
        username: username,
        source_location: source_location,
        dis_location: dis_location,
        price: price,
        eviction_size: packageSize,
      })
    );
  };
  const handleStatus = () => {
    if (state.status) {
      switch (state.status) {
        case 201:
          setOpen(true);
          setTimeout(() => {
            window.location.pathname = "/";
          }, 2000);
          break;
        case 400:
          setError("خطا في البيانات");
          break;
        case 500:
          setError("الحد الاقصي لاجمالي السعر الادني من 10");
        default:
          break;
      }
    }
  };

  useEffect(() => {
    handleStatus();
    dispatch(RulesHandler()).then((res) => {
      if (res.payload.data) {
        const conditions = res.payload.data.rules.filter(
          (rules) => rules.type === "commission"
        );
        setCommission(conditions[0].commission);
      }
    });
  }, [state.status]);

  return (
    <motion.div
      style={{ height: "100vh", width: "100%" }}
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <TopBar />
      <Box
        display={"flex"}
        sx={{
          backgroundColor: "#F2F2F2",
          direction: "rtl",
          overflowX: { xs: "scroll", lg: "unset" },
        }}
      >
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={state.loading ? true : false}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Box
          width={{ lg: "40%", xl: "50%" }}
          p={5}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box fontSize={"35px"}>يرجى تعبئة البيانات التالية (أضافه طرد)</Box>
          <Formik onSubmit={handleSubmit} initialValues={initialState}>
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <Box width={"100%"}>
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    gap: 30,
                    margin: 10,
                  }}
                >
                  <Box
                    display={"flex"}
                    gap={"30px"}
                    flexDirection={{ xs: "column", lg: "row" }}
                  >
                    <TextField
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      onChangeCapture={(e) => setUsername(e.target.value)}
                      error={!!errors.username && !!touched.username}
                      helperText={errors.username && touched.username}
                      placeholder="اسم الشخص"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          border: "2px solid black",
                          width: "369px",
                          borderRadius: 99,
                          fontSize: "25px",
                          height: "50px",
                          color: "black",
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon
                              sx={{ width: 35, height: 35, color: "#454545" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      name="source_location"
                      value={source_location}
                      onChange={handleChange}
                      onChangeCapture={(e) =>
                        setSource_Location(e.target.value)
                      }
                      error={
                        !!errors.source_location && !!touched.source_location
                      }
                      helperText={
                        errors.source_location && touched.source_location
                      }
                      placeholder="مكان السكن"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          border: "2px solid black",
                          width: "369px",
                          borderRadius: 99,
                          fontSize: "25px",
                          height: "50px",
                          color: "black",
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnIcon
                              sx={{ width: 35, height: 35, color: "#454545" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"30px"}
                    flexDirection={{ xs: "column", lg: "row" }}
                  >
                    <TextField
                      name="dis_location"
                      value={values.dis_location}
                      onChange={handleChange}
                      onChangeCapture={(e) => setDis_Location(e.target.value)}
                      error={!!errors.dis_location && !!touched.dis_location}
                      helperText={errors.dis_location && touched.dis_location}
                      placeholder="مكان السفر"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          border: "2px solid black",
                          width: "369px",
                          borderRadius: 99,
                          fontSize: "25px",
                          height: "50px",
                          color: "black",
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnIcon
                              sx={{ width: 35, height: 35, color: "#454545" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                      onChangeCapture={(e) => setPrice(e.target.value)}
                      error={!!errors.price && !!touched.price}
                      helperText={errors.price && touched.price}
                      placeholder="سعر التوصيل/ ك"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          border: "2px solid black",
                          width: "369px",
                          borderRadius: 99,
                          fontSize: "25px",
                          height: "50px",
                          color: "black",
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyExchangeIcon
                              sx={{
                                width: 35,
                                height: 35,
                                color: "#454545",
                                pl: 1,
                              }}
                            />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <IconButton
                            position="end"
                            sx={{
                              cursor: "pointer",
                              backgroundColor: "#454545",
                              color: "white",
                              height: "100%",
                              borderRadius: "99px",
                              width: "107px",
                              ":hover": { backgroundColor: "#454545" },
                            }}
                          >
                            <Box
                              fontSize={"20px"}
                              display={"flex"}
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              {commission && price
                                ? Math.round(price * commission) / 100
                                : 0}
                            </Box>
                          </IconButton>
                        ),
                      }}
                    />
                  </Box>
                  <Box
                    display={"flex"}
                    gap={"30px"}
                    flexDirection={{ xs: "column", lg: "row" }}
                  >
                    <TextField
                      name="packageSize"
                      value={values.packageSize}
                      onChange={handleChange}
                      onChangeCapture={(e) => setPackageSize(e.target.value)}
                      error={!!errors.packageSize && !!touched.packageSize}
                      helperText={errors.packageSize && touched.packageSize}
                      placeholder="حجم الاعلي الطرد"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          border: "2px solid black",
                          width: "237px",
                          borderRadius: 99,
                          fontSize: "25px",
                          height: "50px",
                          color: "black",
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <img
                              src="./assets/inputPackage.png"
                              alt="packageinput"
                              style={{
                                width: 35,
                                height: 35,
                                color: "#454545",
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={20}
                    color={"red"}
                    fontWeight={"bold"}
                  >
                    {error}
                  </Box>
                  <Divider sx={{ borderWidth: 2 }} />
                  <Box height={"140px"}>
                    <Box
                      display={"flex"}
                      fontSize={{ lg: "25px", xs: "15px" }}
                      fontWeight={"bold"}
                      color={"#454545"}
                    >
                      <motion.img
                        onClick={() => setConditions(!conditions)}
                        whileTap={{ scale: 1.1 }}
                        style={{ margin: "0 0 20px 5px", cursor: "pointer" }}
                        src={
                          conditions
                            ? "./assets/checkmarkEnabled.png"
                            : "./assets/checkmarkDisabled.png"
                        }
                      />
                      أتعهد وأقسم بالله اني سأقوم بدفع عمولة الموقع اذا تم
                      التوصيل وهي ١٠٪ ولن تبرأ ذمتي قبل الدفع.
                    </Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"left"}>
                    <Button
                      type="submit"
                      disabled={
                        conditions &&
                        username &&
                        packageSize &&
                        dis_location &&
                        source_location &&
                        price
                          ? false
                          : true
                      }
                      sx={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        display: "flex",
                        gap: 2,
                        backgroundColor: "#454545",
                        ":hover": { backgroundColor: "#454545" },
                      }}
                      variant="contained"
                    >
                      <img src="/assets/checkMarkWhite.png" alt="checkmark" />
                      توصيل{" "}
                    </Button>
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
                        تم الإضافة بنجاح
                        <img
                          width={"68px"}
                          height={"68px"}
                          src="./assets/markWhiteBig.png"
                          alt="check"
                        />
                      </DialogContent>
                    </Dialog>
                  </Box>
                </form>
              </Box>
            )}
          </Formik>
        </Box>
        <Box
          display={{ lg: "initial", xs: "none" }}
          width={{ lg: "60%", xl: "50%" }}
          sx={{ direction: "ltr" }}
          p={5}
        >
          <ImageList sx={{ width: { lg: 400, xl: 500 } }} cols={7}>
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
      <Footer />
    </motion.div>
  );
}

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const initialState = {
  username: "",
  dis_location: "",
  price: "",
  packageSize: "",
  source_location: "",
};

const itemData = [
  {
    img: "/assets/canDeliver.png",
    title: "Breakfast",
    rows: 2,
    cols: 5,
  },
  {
    img: "/assets/canDeliver2.png",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "/assets/canDeliver3.png",
    title: "Breakfast",
    rows: 3,
    cols: 4,
  },
  {
    img: "/assets/canDeliver4.png",
    title: "Breakfast",
    rows: 3,
    cols: 3,
  },
];

export default CanDeliver;
