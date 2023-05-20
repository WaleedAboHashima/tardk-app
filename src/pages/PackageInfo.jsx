import { Box } from "@mui/material";
import React from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

function PackageInfo() {
  const navigator = useNavigate();
  return (
    <motion.Box height={"100vh"} width={"100%"}       initial={{ opacity: 0, transition: { duration: 0.5 } }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      <TopBar />
      <Box
        height={"80%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#F2F2F2", direction: "rtl" }}
        p={5}
      >
        <Box
          sx={{ backgroundColor: "white" }}
          width={"1555px"}
          height={"763px"}
          display={"flex"}
          p={5}
        >
          <Box
            width={"50%"}
            borderLeft={"2px solid #454545"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box fontSize={"30px"} color={"#454545"}>
              اسم الطرد( معلومات حول الطرد )
              <ul>
                <li>اسم الطرد:</li>
                <li>مكان صاحب الطرد:</li>
                <li>مكان التوصيل:</li>
                <li>سعر الخدمة:</li>
                <li>موعد الاستلام:</li>
                <li>صور الطرد:</li>
              </ul>
              <Box width={"100%"} display={'flex'} gap={'19px'} justifyContent={'center'}>
                <Box><img src="/assets/packagePic1.png" alt="packagepics1" /></Box>
                <Box><img src="/assets/packagePic2.png" alt="packagepics1" /></Box>
                <Box><img src="/assets/packagePic3.png" alt="packagepics1" /></Box>
              </Box>
            </Box>
          </Box>
          <Box
            width={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={"20px"}
          >
            <img src="/assets/packageInfo.png" alt="logo" />
            <Box
              onClick={() => navigator("/message/1")}
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
        </Box>
      </Box>
      <Footer />
    </motion.Box>
  );
}

export default PackageInfo;
