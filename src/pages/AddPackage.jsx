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
} from "@mui/material";
import React, { useState } from "react";
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
function AddPackage() {
  const [files, setFiles] = useState([]);
  const [packageType, setPackageType] = useState();
  const [taxes, setTaxes] = useState(false);
  const [conditions, setConditions] = useState(false);
  const [open, setOpen] = useState(false);
  const navigator = useNavigate();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const updatedFiles = files.map((file, index) => ({
      id: index++,
      data: file,
    }));
    setFiles(updatedFiles);
  };

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      navigator('/');
    }, 2000);
  };

  return (
    <Box height={"100vh"} width={"100%"}>
      <TopBar />
      <Box
        display={"flex"}
        sx={{ backgroundColor: "#F2F2F2", direction: "rtl" }}
      >
        <Box width={"50%"} p={5} display={"flex"} flexDirection={"column"}>
          <Box fontSize={"35px"}>يرجى تعبئة البيانات التالية (أضافه طرد)</Box>
          <Formik onSubmit={() => console.log("done")}>
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
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  gap: 30,
                  margin: 10,
                }}
              >
                <Box display={"flex"} gap={"30px"}>
                  <TextField
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
                <Box display={"flex"} gap={"30px"}>
                  <TextField
                    placeholder="مكان التوصيل"
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
                    placeholder="سعر الخدمة"
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
                            العموله
                          </Box>
                        </IconButton>
                      ),
                    }}
                  />
                  <TextField
                    placeholder="موعد وصول الطرد للمستلم"
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
                          <TimerIcon
                            sx={{ width: 35, height: 35, color: "#454545" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box display={"flex"} gap={"30px"}>
                  <FormControl
                    sx={{
                      width: "237px",
                      direction: "rtl",
                      svg: { left: "7px", right: "unset" },
                    }}
                  >
                    <Select
                      defaultValue={0}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={packageType}
                      onChange={handleChange}
                      sx={{
                        backgroundColor: "white",
                        border: "2px solid #454545",
                        borderRadius: 99,
                      }}
                    >
                      <MenuItem disabled dir="rtl" value={0}>
                        نوع الطرد
                      </MenuItem>
                      <MenuItem dir="rtl" value={10}>
                        نوع
                      </MenuItem>
                      <MenuItem dir="rtl" value={20}>
                        نوع
                      </MenuItem>
                      <MenuItem dir="rtl" value={30}>
                        نوع
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    placeholder="رقم التواصل (اختياري)"
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
                            style={{ width: 35, height: 35, color: "#454545" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box>
                  <TextField
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
                            style={{ width: 35, height: 35, color: "#454545" }}
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end" sx={{ height: "100%" }}>
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
                    files.map((file) => (
                      <Box>
                        {file.data.name}
                        <IconButton
                          onClick={() =>
                            setFiles(files.filter((f) => f.id !== file.id))
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
                    fontSize={"25px"}
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
                    أتعهد وأقسم بالله اني سأقوم بدفع عمولة الموقع اذا تم التوصيل
                    وهي ١٠٪ ولن تبرأ ذمتي قبل الدفع.
                  </Box>
                  <Box
                    display={"flex"}
                    fontSize={"25px"}
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
                <Box display={"flex"} justifyContent={"left"}>
                  <Button
                    onClick={handleOpen}
                    disabled={conditions && taxes ? false : true}
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
                  <Dialog open={open} close={() => setOpen(!open)} sx={{backdropFilter: "blur(5px)"}}>
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
            )}
          </Formik>
        </Box>
        <Box width={"50%"} sx={{ direction: "ltr" }} p={5}>
          <ImageList sx={{ width: 500 }} cols={7}>
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
    </Box>
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

export default AddPackage;
