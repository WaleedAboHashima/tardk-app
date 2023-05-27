import {
  Box,
  TextField,
  InputAdornment,
  Divider,
  Button,
  ImageList,
  ImageListItem,
  IconButton,
  FormControl,
  MenuItem,
  Select,
  Dialog,
  DialogContent,
  Backdrop,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { Formik } from "formik";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TimerIcon from "@mui/icons-material/Timer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddPackageHandler } from "../apis/Packages/AddPackage";
import CircularProgress from "@mui/material/CircularProgress";
import { RulesHandler } from "./../apis/rules";
function AddPackage() {
  const [files, setFiles] = useState([]);
  const [taxes, setTaxes] = useState(false);
  const [conditions, setConditions] = useState(false);
  const [open, setOpen] = useState(false);
  const [arrival_time, setArrivalTime] = useState();
  const [eviction_name, setEvictionName] = useState();
  const [username, setUsername] = useState();
  const [source_location, setSourceLocation] = useState();
  const [type_eviction, setTypeEviction] = useState();
  const [price, setPrice] = useState();
  const [phone, setPhone] = useState();
  const [eviction_size, setEvictionSize] = useState();
  const [dis_location, setDisLocation] = useState();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [commission, setCommission] = useState();
  const state = useSelector((state) => state.AddPackage);
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const updatedFiles = files.map((file, index) => ({
      key: index++,
      data: file,
    }));
    setFiles(updatedFiles);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("arrival_time", arrival_time);
    formData.append("eviction_name", eviction_name);
    formData.append("source_location", source_location);
    formData.append("type_eviction", type_eviction);
    formData.append("dis_location", dis_location);
    formData.append("price", price);
    formData.append("phone", phone);
    formData.append("eviction_size", eviction_size);
    files.map(file => {
      formData.append("order_photo", file.data)
    })
    dispatch(AddPackageHandler(formData)).then(() => handleStatus());
    
  };
  const handleStatus = () => {
    if (state.status) {
      switch (state.status) {
        case 201:
          setOpen(true);
          setTimeout(() => {
            window.location.pathname = "/";
          }, 3000);
          break;
        default:
          setOpen(false);
          break;
      }
    }
  };
  useEffect(() => {
    handleStatus();
    dispatch(RulesHandler()).then((res) => {
      if (res.payload.data) {
        const filteredType = res.payload.data.rules.filter(
          (rules) => rules.type === "commission"
        );
        setCommission(filteredType);
      }
    });
  }, [state.status]);

  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      style={{ height: "100vh", width: "100%" }}
    >
      <TopBar />
      <Box
        display={"flex"}
        width={{ xs: "100vw", lg: "100%" }}
        sx={{
          backgroundColor: "#F2F2F2",
          direction: "rtl",
          overflowX: "scroll",
        }}
      >
        <Box
          width={{ lg: "60%", xl: "70%", md: "50%", xs: "100%" }}
          p={{ xs: 0, lg: 5 }}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box fontSize={"35px"} px={{ xs: 2, lg: 0 }}>
            يرجى تعبئة البيانات التالية (أضافه طرد)
          </Box>
          <Formik initialValues={initialState} onSubmit={handleSubmit}>
            {({ values, handleChange, handleSubmit, setFieldValue }) => (
              <Box width={"100%"}>
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    gap: 30,
                    margin: 10,
                    width: "100%",
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
                      sx={{
                        width: { lg: "300px", xl: "369px" },
                      }}
                      placeholder="اسم الشخص"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          border: "2px solid black",
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
                      value={values.source_location}
                      onChange={handleChange}
                      onChangeCapture={(e) => setSourceLocation(e.target.value)}
                      sx={{
                        width: { lg: "300px", xl: "369px" },
                      }}
                      placeholder="مكان السكن"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          border: "2px solid black",
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
                      name="eviction_name"
                      value={values.eviction_name}
                      onChange={handleChange}
                      onChangeCapture={(e) => setEvictionName(e.target.value)}
                      sx={{
                        width: { lg: "240px", xl: "369px" },
                      }}
                      placeholder="أسم الطرد"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          border: "2px solid black",
                          borderRadius: 99,
                          fontSize: "25px",
                          height: "50px",
                          color: "black",
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <img
                              src="/assets/inputPackage.png"
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
                    gap={"30px"}
                    flexDirection={{ xs: "column", lg: "row" }}
                  >
                    <TextField
                      name="dis_location"
                      value={values.dis_location}
                      onChange={handleChange}
                      onChangeCapture={(e) => setDisLocation(e.target.value)}
                      sx={{
                        width: { lg: "300px", xl: "369px" },
                      }}
                      placeholder="مكان التوصيل"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          border: "2px solid black",
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
                      sx={{
                        width: { lg: "300px", xl: "369px" },
                      }}
                      placeholder="سعر الخدمة"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          border: "2px solid black",
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
                              width: "110px",
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
                                ? (price * commission[0].commission) / 100
                                : "0"}
                            </Box>
                          </IconButton>
                        ),
                      }}
                    />
                    <TextField
                      name="arrival_time"
                      value={values.arrival_time}
                      onChange={handleChange}
                      onChangeCapture={(e) => setArrivalTime(e.target.value)}
                      sx={{
                        width: { lg: "240px", xl: "369px" },
                      }}
                      placeholder="موعد وصول الطرد للمستلم"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          border: "2px solid black",
                          borderRadius: 99,
                          fontSize: "25px",
                          height: "50px",
                          color: "black",
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <TimerIcon
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
                    <FormControl
                      sx={{
                        width: "237px",
                        direction: "rtl",
                        svg: { left: "7px", right: "unset" },
                      }}
                    >
                      <Select
                        name="type_eviction"
                        value={values.type_eviction}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => {
                          setTypeEviction(e.target.value);
                          setFieldValue("type_eviction", e.target.value);
                        }}
                        sx={{
                          backgroundColor: "white",
                          border: "2px solid #454545",
                          borderRadius: 99,
                        }}
                      >
                        <MenuItem disabled dir="rtl" value={0}>
                          نوع الطرد
                        </MenuItem>
                        <MenuItem dir="rtl" value={"بلاستيك"}>
                          بلاستيك
                        </MenuItem>
                        <MenuItem dir="rtl" value={"معدن"}>
                          معدن
                        </MenuItem>
                        <MenuItem dir="rtl" value={"قابل للكسر"}>
                          قابل للكسر
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onChangeCapture={(e) => setPhone(e.target.value)}
                      placeholder="رقم التواصل"
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
                            <LocalPhoneIcon
                              sx={{ width: 35, height: 35, color: "#454545" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      name="eviction_size"
                      value={values.eviction_size}
                      onChange={handleChange}
                      onChangeCapture={(e) => setEvictionSize(e.target.value)}
                      placeholder="حجم الطرد"
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
                              src="/assets/inputPackage.png"
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
                  <Box>
                    <TextField
                      value={values.order_photo}
                      onChange={handleChange}
                      type="file"
                      placeholder="صوره الطرد"
                      InputProps={{
                        style: {
                          backgroundColor: "white",
                          border: "2px solid black",
                          width: "188px",
                          borderRadius: 99,
                          fontSize: "25px",
                          height: "50px",
                          color: "black",
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <img
                              src="/assets/inputPackageImg.png"
                              alt="packageimginput"
                              style={{
                                width: 35,
                                height: 35,
                                color: "#454545",
                              }}
                            />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{ height: "100%" }}
                          >
                            <Button
                              variant="contained"
                              component="label"
                              htmlFor="file-input"
                              fullWidth
                              sx={{
                                backgroundColor: "transparent",
                                border: "none",
                                boxShadow: "none",
                                color: "black",
                                fontSize: "18px",
                                height: "100%",
                                ":hover": {
                                  backgroundColor: "white",
                                  boxShadow: "none",
                                },
                              }}
                            >
                              اضف صوره
                              <input
                                multiple
                                type="file"
                                style={{ display: "none" }}
                                id="file-input"
                                onChange={handleFileChange}
                              />
                            </Button>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"}>
                    {files ? (
                      files.map((file, index) => (
                        <Box key={index++}>
                          {file.data.name}
                          <IconButton
                            onClick={() =>
                              setFiles(files.filter((f) => f.key !== file.key))
                            }
                          >
                            <CloseIcon color="error" />
                          </IconButton>
                        </Box>
                      ))
                    ) : (
                      <Box>Select File</Box>
                    )}
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
                        onClick={() => setTaxes(!taxes)}
                        whileTap={{ scale: 1.1 }}
                        style={{ margin: "0 0 20px 5px", cursor: "pointer" }}
                        src={
                          taxes
                            ? "/assets/checkmarkEnabled.png"
                            : "/assets/checkmarkDisabled.png"
                        }
                      />
                      أتعهد وأقسم بالله اني سأقوم بدفع عمولة الموقع اذا تم
                      التوصيل وهي ١٠٪ ولن تبرأ ذمتي قبل الدفع.
                    </Box>
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
                            ? "/assets/checkmarkEnabled.png"
                            : "/assets/checkmarkDisabled.png"
                        }
                      />
                      اتعهد بعدم وجود ممنوعات داخل الطرد واتحمل مسئولية الطرد
                      الموجود في الصوره.
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={{ lg: "left", xs: "center" }}
                  >
                    <Button
                      type="submit"
                      disabled={
                        conditions &&
                        taxes &&
                        username &&
                        eviction_name &&
                        eviction_size &&
                        arrival_time &&
                        source_location &&
                        dis_location &&
                        type_eviction &&
                        price &&
                        files.length > 0
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
                      اضف الطرد
                    </Button>
                    <Backdrop
                      sx={{
                        color: "#fff",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                      }}
                      open={state.loading ? true : false}
                    >
                      <CircularProgress color="inherit" />
                    </Backdrop>
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
                          src="/assets/markWhiteBig.png"
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
          width={{ lg: "40%", xl: "50%" }}
          sx={{ direction: "ltr" }}
          p={5}
        >
          <ImageList sx={{ width: { lg: 350, xl: 500 } }} cols={7}>
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

const itemData = [
  {
    img: "/assets/addPackagePic1.png",
    title: "Breakfast",
    rows: 2,
    cols: 4,
  },
  {
    img: "/assets/addPackagePic2.png",
    title: "Breakfast",
    rows: 2,
    cols: 3,
  },
  {
    img: "/assets/addPackagePic3.png",
    title: "Breakfast",
    rows: 3,
    cols: 4,
  },
  {
    img: "/assets/addPackagePic4.png",
    title: "Breakfast",
    rows: 3,
    cols: 3,
  },
];

const initialState = {
  arrival_time: "",
  eviction_name: "",
  username: "",
  source_location: "",
  dis_location: "",
  type_eviction: 0,
  price: "",
  phone: "",
  eviction_size: "",
  order_photo: "",
};

export default AddPackage;
