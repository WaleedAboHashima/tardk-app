import React from "react";
import SidePanel from "../components/SidePanel";
import { Box } from "@mui/material";

function AdminPanel() {
  return (
    <Box sx={{ direction: "rtl" }} display={"flex"}>
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
            flexWrap={"wrap"}
            gap={5}
          >
            <Box
              width={"355px"}
              height={"232px"}
              borderRadius={99}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
                borderRadius={99}
                fontSize={"26px"}
                fontWeight={"bold"}
                color={"white"}
                top={"50%"}
                left={"50%"}
                position={"absolute"}
                sx={{
                  transform: "translate(-50%, -50%)",
                  background: "url('/assets/driver.png')",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="/assets/personLogox2.png"
                  alt="driver"
                />
                صور السائقين
              </Box>
            </Box>
            <Box
              width={"355px"}
              height={"232px"}
              borderRadius={99}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
                borderRadius={99}
                fontSize={"26px"}
                fontWeight={"bold"}
                color={"white"}
                top={"50%"}
                left={"50%"}
                position={"absolute"}
                sx={{
                  transform: "translate(-50%, -50%)",
                  background: "url('/assets/driver.png')",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="/assets/packagePic3.png"
                  alt="driver"
                />
                صور الطرود
              </Box>
            </Box>
            <Box
              width={"355px"}
              height={"232px"}
              borderRadius={99}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
                borderRadius={99}
                fontSize={"26px"}
                fontWeight={"bold"}
                color={"white"}
                top={"50%"}
                left={"50%"}
                position={"absolute"}
                sx={{
                  transform: "translate(-50%, -50%)",
                  background: "url('/assets/driver.png')",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="/assets/packagePic3.png"
                  alt="driver"
                />
                اللوجو
              </Box>
            </Box>
            <Box
              width={"355px"}
              height={"232px"}
              borderRadius={99}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
                borderRadius={99}
                fontSize={"26px"}
                fontWeight={"bold"}
                color={"white"}
                top={"50%"}
                left={"50%"}
                position={"absolute"}
                sx={{
                  transform: "translate(-50%, -50%)",
                  background: "url('/assets/driver.png')",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="/assets/personLogox2.png"
                  alt="driver"
                />
                الأيقونات
              </Box>
            </Box>
            <Box
              width={"355px"}
              height={"232px"}
              borderRadius={99}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                alignItems={"center"}
                borderRadius={99}
                fontSize={"26px"}
                fontWeight={"bold"}
                color={"white"}
                top={"50%"}
                left={"50%"}
                position={"absolute"}
                sx={{
                  transform: "translate(-50%, -50%)",
                  background: "url('/assets/driver.png')",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="/assets/personLogox2.png"
                  alt="driver"
                />
                الصور الأخرى
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminPanel;
