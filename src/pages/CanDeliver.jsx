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
import { useNavigate } from "react-router-dom";
function CanDeliver() {
  const [conditions, setConditions] = useState(false);
  const [open, setOpen] = useState(false);
  const navigator = useNavigate();

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      navigator("/");
    }, 2000);
  };

  return (
    <motion.Box height={"100vh"} width={"100%"}>
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
                            العموله
                          </Box>
                        </IconButton>
                      ),
                    }}
                  />
                </Box>
                <Box display={"flex"} gap={"30px"}>
                  <TextField
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
                            style={{ width: 35, height: 35, color: "#454545" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
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
                      onClick={() => setConditions(!conditions)}
                      whileTap={{ scale: 1.1 }}
                      style={{ margin: "0 0 20px 5px", cursor: "pointer" }}
                      src={
                        conditions
                          ? "./assets/checkmarkEnabled.png"
                          : "./assets/checkmarkDisabled.png"
                      }
                    />
                    أتعهد وأقسم بالله اني سأقوم بدفع عمولة الموقع اذا تم التوصيل
                    وهي ١٠٪ ولن تبرأ ذمتي قبل الدفع.
                  </Box>
                </Box>
                <Box display={"flex"} justifyContent={"left"}>
                  <Button
                    onClick={handleOpen}
                    disabled={conditions ? false : true}
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
    </motion.Box>
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
