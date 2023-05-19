import { Box } from "@mui/material";
import React from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

function DriverInfo() {
  const navigator = useNavigate();
  return (
    <Box height={"100vh"} width={"100%"}>
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
            <Box display={"flex"} width={"100%"} my={5}>
              <Box width={"50%"} display={"flex"} flexDirection={"column"}>
                <Box fontSize={"35px"} fontWeight={"bold"}>
                  السائق محمد أحمد
                </Box>
                <Box fontSize={"20px"} fontWeight={"bold"}>
                  تاريخ الإنضمام: 14 Apr, 2023
                </Box>
              </Box>
              <Box width={"50%"} display={"flex"} flexDirection={"column"}>
                <Box fontSize={"25px"} fontWeight={"bold"}>
                  سعر الخدمة: $10
                </Box>
                <Box fontSize={"20px"} fontWeight={"bold"}>
                  رقم التواصل: 123123
                </Box>
              </Box>
            </Box>
            <Box fontSize={"30px"} color={"#454545"}>
              الخدمات التي قام بها
              <ul>
                <li>نقل الطرد:</li>
                <li>نقل الطرد:</li>
                <li>نقل الطرد:</li>
                <li>نقل الطرد:</li>
                <li>نقل الطرد:</li>
              </ul>
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
            <img src="/assets/personXXL.png" alt="logo" />
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
    </Box>
  );
}

export default DriverInfo;
