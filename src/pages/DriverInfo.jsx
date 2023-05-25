import { Box, Backdrop } from "@mui/material";
import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { GetDriversHandler } from "../apis/Drivers/GetAllDrivers";
import CircularProgress from "@mui/material/CircularProgress";
function DriverInfo() {
  const navigator = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [driver, setDriver] = useState();
  const state = useSelector((state) => state.GetDriver);
  useEffect(() => {
    dispatch(GetDriversHandler()).then((res) => {
      if (res.payload.data) {
        const filteredDriver = res.payload.data.delivery.filter(
          (driver) => driver._id === params.id
        );
        setDriver(filteredDriver[0]);
      }
    });
  }, [params.id]);
  return (
    <motion.Box
      height={"100vh"}
      width={"100%"}
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <TopBar />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.loading ? true : false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        height={"80%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#F2F2F2",
          direction: "rtl",
          overflowX: { xs: "scroll", lg: "unset" },
        }}
        p={5}
      >
        <Box
          sx={{ backgroundColor: "white" }}
          width={{ lg: "1555px", xs: "100vw" }}
          height={{ lg: "763px", xs: "auto" }}
          display={"flex"}
          flexDirection={{ xs: "column-reverse", lg: "row" }}
          p={5}
        >
          {driver ? (
            <>
              <Box
                width={{ lg: "50%", sx: "100%" }}
                borderLeft={{ lg: "2px solid #454545", xs: "" }}
                borderTop={{ lg: "", xs: "2px solide #454545" }}
                display={"flex"}
                flexDirection={"column"}
              >
                <Box display={"flex"} width={"100%"} my={5}>
                  <Box width={"50%"} display={"flex"} flexDirection={"column"}>
                    <Box fontSize={{lg: "35px", xs: '20px'}} fontWeight={"bold"}>
                      {driver ? driver.username : "اسم السائق"}
                    </Box>
                  </Box>
                  <Box width={{lg: "50%", xs: '100%'}} display={"flex"} flexDirection={"column"}>
                    <Box
                      fontSize={{ lg: "20px", xs: "20px" }}
                      fontWeight={{ lg: "bold", xs: ''}}
                    >
                      رقم التواصل: {driver ? driver.user.phone : ""}
                    </Box>
                  </Box>
                </Box>
                <Box fontSize={{lg: "30px", xs: '20px'}} color={"#454545"}>
                  <ul>
                    <li>مكان السكن: {driver ? driver.source_location : ""}</li>
                    <li>مكان السفر: {driver ? driver.dis_location : ""}</li>
                    <li>السعر: {driver ? driver.price : ""}</li>
                    <li>حجم الطرد: {driver ? driver.eviction_size : ""}</li>
                  </ul>
                </Box>
              </Box>
              <Box
                width={{ lg: "50%", sx: "100%" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                gap={"20px"}
              >
                <img
                  width={"auto"}
                  height={"auto"}
                  src="/assets/personXXL.png"
                  alt="logo"
                />
                <Box
                  onClick={() => navigator(`/message/${driver._id}`)}
                  display={"flex"}
                  gap={2}
                  fontSize={"19px"}
                  fontWeight={"bold"}
                  color={"#454545"}
                  sx={{ cursor: "pointer" }}
                >
                  تواصل عبر الموقع
                  <img src="/assets/messengerIcon.png" alt="messegerlolo" />
                </Box>
              </Box>
            </>
          ) : (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
            >
              لا يوجد سائق
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
    </motion.Box>
  );
}

export default DriverInfo;
