import {
  Box,
  ListItem,
  ListItemIcon,
  Paper,
  Select,
  FormControl,
  MenuItem,
  TextField
} from "@mui/material";
import React from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

function AllDrivers() {
  const navigator = useNavigate();
  const [filter, setFilter] = React.useState();
  return (
    <motion.Box height={"100vh"} width={"100%"}       initial={{ opacity: 0, transition: { duration: 0.5 } }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}>
      <TopBar />
      <Box sx={{ direction: "rtl", backgroundColor: "#F2F2F2" }}>
        <Box display={"flex"} flexDirection={"column"} p={5} height={"100%"}>
          <Box
            width={"100%"}
            fontSize={"35px"}
            fontWeight={"bold"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box>جميع السائقين</Box>
            <Box width={'10%'} sx={{direction: 'rtl'}}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter}
                  placeholder="Filter"
                  defaultValue={0}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <MenuItem dir="rtl" value={0}>ازالة الفلتر</MenuItem>
                  <MenuItem dir="rtl" value={10}>الاحدث</MenuItem>
                  <MenuItem dir="rtl" value={20}>الاقدم</MenuItem>
                  <TextField value={30} placeholder="المدينه" dir="rtl"></TextField>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
            border={'3px dashed grey'}
            m={1}

          >
            <Paper
              onClick= {() => navigator('/driverinfo/1')}
              border="2px solid #454545"
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
              sx={{
                cursor: 'pointer',
                position: "relative",
                backgroundColor: "transparent",
                m: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "232px",
                borderRadius: 30,
                width: "355px",
                ":hover": {
                  height: "396px",
                  my: 2,
                  borderRadius: 20,
                },
                "&:hover .driverContainer": {
                  borderRadius: 20,
                  height: "396px",
                  backgroundColor: "#45454580",
                  backdropFilter: "blur(2px)",
                  transition: "5s ease-in-out",
                },
                ":hover img": {
                  height: "100%",
                  width: "100%",
                },
                ":hover div img": {
                  height: "95px",
                  width: "95px",
                },
                "&:hover .driverDetails": {
                  display: "flex",
                },
                "&:hover .number": {
                  display: "none",
                },
                transition: "500ms ease",
              }}
              m={8}
            >
              <img
                src="/assets/driver.png"
                alt="driver"
                style={{ borderRadius: 80 }}
              />
              <Box
                className="driverContainer"
                sx={{ backgroundColor: "#45454546", transition: "0.5s ease" }}
                borderRadius={20}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                width={"100%"}
                position={"absolute"}
                flexDirection={"column"}
                color={"white"}
                fontSize={"26px"}
                fontWeight={"bold"}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="/assets/personLogox2.png"
                  style={{ transition: "0.2s ease" }}
                  alt="personlogox"
                />
                <Box>السائق محمد أحمد</Box>
                <Box className="number">رقم التواصل : 0101xxxx</Box>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  رقم التواصل: 0101xxxx
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  سعر الخدمه 10$
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السكن: غذه
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  تاريخ السفر: 123
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السفر: رفح
                </ListItem>
              </Box>
            </Paper>
            <Paper
              border="2px solid #454545"
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
              sx={{
                position: "relative",
                backgroundColor: "transparent",
                m: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "232px",
                borderRadius: 30,
                width: "355px",
                ":hover": {
                  height: "396px",
                  my: 2,
                  borderRadius: 20,
                },
                "&:hover .driverContainer": {
                  borderRadius: 20,
                  height: "396px",
                  backgroundColor: "#45454580",
                  backdropFilter: "blur(2px)",
                  transition: "5s ease-in-out",
                },
                ":hover img": {
                  height: "100%",
                  width: "100%",
                },
                ":hover div img": {
                  height: "95px",
                  width: "95px",
                },
                "&:hover .driverDetails": {
                  display: "flex",
                },
                "&:hover .number": {
                  display: "none",
                },
                transition: "500ms ease",
              }}
              m={8}
            >
              <img
                src="/assets/driver.png"
                alt="driver"
                style={{ borderRadius: 80 }}
              />
              <Box
                className="driverContainer"
                sx={{ backgroundColor: "#45454546", transition: "0.5s ease" }}
                borderRadius={20}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                width={"100%"}
                position={"absolute"}
                flexDirection={"column"}
                color={"white"}
                fontSize={"26px"}
                fontWeight={"bold"}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="/assets/personLogox2.png"
                  style={{ transition: "0.2s ease" }}
                />
                <Box>السائق محمد أحمد</Box>
                <Box className="number">رقم التواصل : 0101xxxx</Box>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  رقم التواصل: 0101xxxx
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  سعر الخدمه 10$
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السكن: غذه
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  تاريخ السفر: 123
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السفر: رفح
                </ListItem>
              </Box>
            </Paper>
            <Paper
              border="2px solid #454545"
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
              sx={{
                position: "relative",
                backgroundColor: "transparent",
                m: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "232px",
                borderRadius: 30,
                width: "355px",
                ":hover": {
                  height: "396px",
                  my: 2,
                  borderRadius: 20,
                },
                "&:hover .driverContainer": {
                  borderRadius: 20,
                  height: "396px",
                  backgroundColor: "#45454580",
                  backdropFilter: "blur(2px)",
                  transition: "5s ease-in-out",
                },
                ":hover img": {
                  height: "100%",
                  width: "100%",
                },
                ":hover div img": {
                  height: "95px",
                  width: "95px",
                },
                "&:hover .driverDetails": {
                  display: "flex",
                },
                "&:hover .number": {
                  display: "none",
                },
                transition: "500ms ease",
              }}
              m={8}
            >
              <img
                src="/assets/driver.png"
                alt="driver"
                style={{ borderRadius: 80 }}
              />
              <Box
                className="driverContainer"
                sx={{ backgroundColor: "#45454546", transition: "0.5s ease" }}
                borderRadius={20}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                width={"100%"}
                position={"absolute"}
                flexDirection={"column"}
                color={"white"}
                fontSize={"26px"}
                fontWeight={"bold"}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="/assets/personLogox2.png"
                  style={{ transition: "0.2s ease" }}
                />
                <Box>السائق محمد أحمد</Box>
                <Box className="number">رقم التواصل : 0101xxxx</Box>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  رقم التواصل: 0101xxxx
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  سعر الخدمه 10$
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السكن: غذه
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  تاريخ السفر: 123
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السفر: رفح
                </ListItem>
              </Box>
            </Paper>
            <Paper
              border="2px solid #454545"
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
              sx={{
                position: "relative",
                backgroundColor: "transparent",
                m: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "232px",
                borderRadius: 30,
                width: "355px",
                ":hover": {
                  height: "396px",
                  my: 2,
                  borderRadius: 20,
                },
                "&:hover .driverContainer": {
                  borderRadius: 20,
                  height: "396px",
                  backgroundColor: "#45454580",
                  backdropFilter: "blur(2px)",
                  transition: "5s ease-in-out",
                },
                ":hover img": {
                  height: "100%",
                  width: "100%",
                },
                ":hover div img": {
                  height: "95px",
                  width: "95px",
                },
                "&:hover .driverDetails": {
                  display: "flex",
                },
                "&:hover .number": {
                  display: "none",
                },
                transition: "500ms ease",
              }}
              m={8}
            >
              <img
                src="/assets/driver.png"
                alt="driver"
                style={{ borderRadius: 80 }}
              />
              <Box
                className="driverContainer"
                sx={{ backgroundColor: "#45454546", transition: "0.5s ease" }}
                borderRadius={20}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                width={"100%"}
                position={"absolute"}
                flexDirection={"column"}
                color={"white"}
                fontSize={"26px"}
                fontWeight={"bold"}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="./assets/personLogox2.png"
                  style={{ transition: "0.2s ease" }}
                />
                <Box>السائق محمد أحمد</Box>
                <Box className="number">رقم التواصل : 0101xxxx</Box>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  رقم التواصل: 0101xxxx
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  سعر الخدمه 10$
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السكن: غذه
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  تاريخ السفر: 123
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السفر: رفح
                </ListItem>
              </Box>
            </Paper>
            <Paper
              border="2px solid #454545"
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
              sx={{
                position: "relative",
                backgroundColor: "transparent",
                m: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "232px",
                borderRadius: 30,
                width: "355px",
                ":hover": {
                  height: "396px",
                  my: 2,
                  borderRadius: 20,
                },
                "&:hover .driverContainer": {
                  borderRadius: 20,
                  height: "396px",
                  backgroundColor: "#45454580",
                  backdropFilter: "blur(2px)",
                  transition: "5s ease-in-out",
                },
                ":hover img": {
                  height: "100%",
                  width: "100%",
                },
                ":hover div img": {
                  height: "95px",
                  width: "95px",
                },
                "&:hover .driverDetails": {
                  display: "flex",
                },
                "&:hover .number": {
                  display: "none",
                },
                transition: "500ms ease",
              }}
              m={8}
            >
              <img
                src="./assets/driver.png"
                alt="driver"
                style={{ borderRadius: 80 }}
              />
              <Box
                className="driverContainer"
                sx={{ backgroundColor: "#45454546", transition: "0.5s ease" }}
                borderRadius={20}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                width={"100%"}
                position={"absolute"}
                flexDirection={"column"}
                color={"white"}
                fontSize={"26px"}
                fontWeight={"bold"}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="./assets/personLogox2.png"
                  style={{ transition: "0.2s ease" }}
                />
                <Box>السائق محمد أحمد</Box>
                <Box className="number">رقم التواصل : 0101xxxx</Box>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  رقم التواصل: 0101xxxx
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  سعر الخدمه 10$
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السكن: غذه
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  تاريخ السفر: 123
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السفر: رفح
                </ListItem>
              </Box>
            </Paper>
            <Paper
              border="2px solid #454545"
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
              sx={{
                position: "relative",
                backgroundColor: "transparent",
                m: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "232px",
                borderRadius: 30,
                width: "355px",
                ":hover": {
                  height: "396px",
                  my: 2,
                  borderRadius: 20,
                },
                "&:hover .driverContainer": {
                  borderRadius: 20,
                  height: "396px",
                  backgroundColor: "#45454580",
                  backdropFilter: "blur(2px)",
                  transition: "5s ease-in-out",
                },
                ":hover img": {
                  height: "100%",
                  width: "100%",
                },
                ":hover div img": {
                  height: "95px",
                  width: "95px",
                },
                "&:hover .driverDetails": {
                  display: "flex",
                },
                "&:hover .number": {
                  display: "none",
                },
                transition: "500ms ease",
              }}
              m={8}
            >
              <img
                src="./assets/driver.png"
                alt="driver"
                style={{ borderRadius: 80 }}
              />
              <Box
                className="driverContainer"
                sx={{ backgroundColor: "#45454546", transition: "0.5s ease" }}
                borderRadius={20}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                width={"100%"}
                position={"absolute"}
                flexDirection={"column"}
                color={"white"}
                fontSize={"26px"}
                fontWeight={"bold"}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="./assets/personLogox2.png"
                  style={{ transition: "0.2s ease" }}
                />
                <Box>السائق محمد أحمد</Box>
                <Box className="number">رقم التواصل : 0101xxxx</Box>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  رقم التواصل: 0101xxxx
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  سعر الخدمه 10$
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السكن: غذه
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  تاريخ السفر: 123
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السفر: رفح
                </ListItem>
              </Box>
            </Paper>
            <Paper
              border="2px solid #454545"
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
              sx={{
                position: "relative",
                backgroundColor: "transparent",
                m: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "232px",
                borderRadius: 30,
                width: "355px",
                ":hover": {
                  height: "396px",
                  my: 2,
                  borderRadius: 20,
                },
                "&:hover .driverContainer": {
                  borderRadius: 20,
                  height: "396px",
                  backgroundColor: "#45454580",
                  backdropFilter: "blur(2px)",
                  transition: "5s ease-in-out",
                },
                ":hover img": {
                  height: "100%",
                  width: "100%",
                },
                ":hover div img": {
                  height: "95px",
                  width: "95px",
                },
                "&:hover .driverDetails": {
                  display: "flex",
                },
                "&:hover .number": {
                  display: "none",
                },
                transition: "500ms ease",
              }}
              m={8}
            >
              <img
                src="./assets/driver.png"
                alt="driver"
                style={{ borderRadius: 80 }}
              />
              <Box
                className="driverContainer"
                sx={{ backgroundColor: "#45454546", transition: "0.5s ease" }}
                borderRadius={20}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                width={"100%"}
                position={"absolute"}
                flexDirection={"column"}
                color={"white"}
                fontSize={"26px"}
                fontWeight={"bold"}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="./assets/personLogox2.png"
                  style={{ transition: "0.2s ease" }}
                />
                <Box>السائق محمد أحمد</Box>
                <Box className="number">رقم التواصل : 0101xxxx</Box>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  رقم التواصل: 0101xxxx
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  سعر الخدمه 10$
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السكن: غذه
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  تاريخ السفر: 123
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السفر: رفح
                </ListItem>
              </Box>
            </Paper>
            <Paper
              border="2px solid #454545"
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
              sx={{
                position: "relative",
                backgroundColor: "transparent",
                m: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "232px",
                borderRadius: 30,
                width: "355px",
                ":hover": {
                  height: "396px",
                  my: 2,
                  borderRadius: 20,
                },
                "&:hover .driverContainer": {
                  borderRadius: 20,
                  height: "396px",
                  backgroundColor: "#45454580",
                  backdropFilter: "blur(2px)",
                  transition: "5s ease-in-out",
                },
                ":hover img": {
                  height: "100%",
                  width: "100%",
                },
                ":hover div img": {
                  height: "95px",
                  width: "95px",
                },
                "&:hover .driverDetails": {
                  display: "flex",
                },
                "&:hover .number": {
                  display: "none",
                },
                transition: "500ms ease",
              }}
              m={8}
            >
              <img
                src="./assets/driver.png"
                alt="driver"
                style={{ borderRadius: 80 }}
              />
              <Box
                className="driverContainer"
                sx={{ backgroundColor: "#45454546", transition: "0.5s ease" }}
                borderRadius={20}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                width={"100%"}
                position={"absolute"}
                flexDirection={"column"}
                color={"white"}
                fontSize={"26px"}
                fontWeight={"bold"}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="./assets/personLogox2.png"
                  style={{ transition: "0.2s ease" }}
                />
                <Box>السائق محمد أحمد</Box>
                <Box className="number">رقم التواصل : 0101xxxx</Box>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  رقم التواصل: 0101xxxx
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  سعر الخدمه 10$
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السكن: غذه
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  تاريخ السفر: 123
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السفر: رفح
                </ListItem>
              </Box>
            </Paper>
            <Paper
              border="2px solid #454545"
              fontSize={"50px"}
              fontWeight={"bold"}
              color={"white"}
              sx={{
                position: "relative",
                backgroundColor: "transparent",
                m: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "232px",
                borderRadius: 30,
                width: "355px",
                ":hover": {
                  height: "396px",
                  my: 2,
                  borderRadius: 20,
                },
                "&:hover .driverContainer": {
                  borderRadius: 20,
                  height: "396px",
                  backgroundColor: "#45454580",
                  backdropFilter: "blur(2px)",
                  transition: "5s ease-in-out",
                },
                ":hover img": {
                  height: "100%",
                  width: "100%",
                },
                ":hover div img": {
                  height: "95px",
                  width: "95px",
                },
                "&:hover .driverDetails": {
                  display: "flex",
                },
                "&:hover .number": {
                  display: "none",
                },
                transition: "500ms ease",
              }}
              m={8}
            >
              <img
                src="./assets/driver.png"
                alt="driver"
                style={{ borderRadius: 80 }}
              />
              <Box
                className="driverContainer"
                sx={{ backgroundColor: "#45454546", transition: "0.5s ease" }}
                borderRadius={20}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
                width={"100%"}
                position={"absolute"}
                flexDirection={"column"}
                color={"white"}
                fontSize={"26px"}
                fontWeight={"bold"}
              >
                <img
                  width={"95px"}
                  height={"95px"}
                  src="./assets/personLogox2.png"
                  style={{ transition: "0.2s ease" }}
                />
                <Box>السائق محمد أحمد</Box>
                <Box className="number">رقم التواصل : 0101xxxx</Box>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  رقم التواصل: 0101xxxx
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  سعر الخدمه 10$
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السكن: غذه
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  تاريخ السفر: 123
                </ListItem>
                <ListItem
                  className="driverDetails"
                  disableGutters
                  sx={{
                    display: "none",
                    justifyContent: "right",
                    marginRight: 10,
                  }}
                  dir="rtl"
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <div
                      style={{
                        width: "0.5em",
                        height: "0.5em",
                        textAlign: "right",
                        borderRadius: "50%",
                        backgroundColor: "white",
                      }}
                    />
                  </ListItemIcon>
                  مكان السفر: رفح
                </ListItem>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
      <Footer />
    </motion.Box>
  );
}

export default AllDrivers;
