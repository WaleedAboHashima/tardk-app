import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
function Home() {
  const drivers = [
    {
      name: "السائق محمد أحمد",
      phone: "0101xxxx",
      price: "10$",
      city: "غذه",
      travelDate: "123",
      travelPlace: "رفح",
    },
    {
      name: "السائق محمد أحمد",
      phone: "0101xxxx",
      price: "10$",
      city: "غذه",
      travelDate: "123",
      travelPlace: "رفح",
    },
    {
      name: "السائق محمد أحمد",
      phone: "0101xxxx",
      price: "10$",
      city: "غذه",
      travelDate: "123",
      travelPlace: "رفح",
    },
    {
      name: "السائق محمد أحمد",
      phone: "0101xxxx",
      price: "10$",
      city: "غذه",
      travelDate: "123",
      travelPlace: "رفح",
    },
    {
      name: "السائق محمد أحمد",
      phone: "0101xxxx",
      price: "10$",
      city: "غذه",
      travelDate: "123",
      travelPlace: "رفح",
    },
  ];
  return (
    <motion.Box
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <TopBar />
      <Box
        display="flex"
        flexDirection={"column"}
        width="100%"
        sx={{ backgroundColor: "#F2F2F2", direction: "rtl" }}
      >
        <Box
          width={"100%"}
          height={"900px"}
          sx={{ backgroundColor: "#F2F2F2" }}
          display={"flex"}
        >
          <Box
            width={"50%"}
            display={"flex"}
            flexDirection={"column"}
            p={5}
            py={"200px"}
          >
            <Typography fontSize={"50px"} fontWeight={"bold"}>
              إذا كنت تبحث عن معلومات حول طرد معين ابحث هنا حول ما تريد
            </Typography>
            <TextField
              color="error"
              variant="standard"
              placeholder="ابحث عن ..."
              sx={{
                width: "60%",
                my: 10,
                border: "2px solid #454545",
                color: "blue",
                borderRadius: "0px",
                outline: "none",
                backgroundColor: "white",
              }}
              InputProps={{
                style: { fontSize: "25px", paddingRight: 10 },
                endAdornment: (
                  <IconButton
                    position="end"
                    sx={{
                      cursor: "pointer",
                      backgroundColor: "#454545",
                      color: "white",
                      height: "100%",
                      borderRadius: "0px",
                      width: "107px",
                      ":hover": { backgroundColor: "#454545" },
                    }}
                  >
                    <SearchIcon sx={{ height: "40px", width: "40px" }} />
                  </IconButton>
                ),
              }}
            />
          </Box>
          <Box width={"50%"}>
            <Box display={"flex"} gap={"65px"}>
              <Box
                width={"319px"}
                height={"572px"}
                border="2px solid #454545"
                borderRadius={99}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"50px"}
                fontWeight={"bold"}
                color={"white"}
                position={"relative"}
              >
                <img src="/assets/havePackage.png" alt="havepackage" />
                <Box
                  sx={{
                    backgroundColor: "#45454536",
                    borderRadius: 99,
                    transition: "0.2s ease",
                    ":hover": {
                      cursor: "pointer",
                      backgroundColor: "#ffffff17",
                      backdropFilter: "blur(2px)",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover .package": {
                      display: "none",
                    },
                    "&:hover Button": {
                      display: "flex",
                    },
                  }}
                  position={"absolute"}
                  width={"100%"}
                  height={"100%"}
                >
                  <Box className="package">لدي طرد</Box>
                  <Button
                    onClick={() => (window.location.pathname = "/addPackage")}
                    sx={{
                      display: "none",
                      backgroundColor: "tranparent",
                      border: "3px solid #454545",
                      width: "50%",
                      height: "10%",
                      borderRadius: 99,
                      fontSize: "30px",
                      fontWeight: "bold",
                      ":hover": {
                        backgroundColor: "#00000036",
                      },
                    }}
                  >
                    <ArrowBackIosIcon sx={{ color: "grey" }} />
                    <ArrowBackIosIcon sx={{ color: "#454545" }} />
                    <ArrowBackIosIcon sx={{ color: "#454545" }} />
                  </Button>
                </Box>
              </Box>
              <Box
                width={"319px"}
                height={"572px"}
                border="2px solid #454545"
                borderRadius={99}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"50px"}
                fontWeight={"bold"}
                color={"white"}
                position={"relative"}
                mt={"150px"}
              >
                <img src="/assets/deliverPackage.png" alt="deliverPackage" />
                <Box
                  sx={{
                    backgroundColor: "#45454536",
                    borderRadius: 99,
                    transition: "0.2s ease",
                    ":hover": {
                      cursor: "pointer",
                      backgroundColor: "#ffffff17",
                      backdropFilter: "blur(2px)",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover .package": {
                      display: "none",
                    },
                    "&:hover Button": {
                      display: "flex",
                    },
                  }}
                  position={"absolute"}
                  width={"100%"}
                  height={"100%"}
                >
                  <Box className="package" textAlign={"center"}>
                    بإمكاني التوصيل
                  </Box>
                  <Button
                    onClick={() => (window.location.pathname = "/canDeliver")}
                    sx={{
                      display: "none",
                      backgroundColor: "tranparent",
                      border: "3px solid #454545",
                      width: "50%",
                      height: "10%",
                      borderRadius: 99,
                      fontSize: "30px",
                      fontWeight: "bold",
                      ":hover": {
                        backgroundColor: "#00000036",
                      },
                    }}
                  >
                    <ArrowBackIosIcon sx={{ color: "grey" }} />
                    <ArrowBackIosIcon sx={{ color: "#454545" }} />
                    <ArrowBackIosIcon sx={{ color: "#454545" }} />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          width={"100%"}
          height={"600px"}
          sx={{
            background: "url(./assets/allPackages.jpg) no-repeat center center",
          }}
        >
          <Box
            p={4}
            fontWeight={"bold"}
            display={"flex"}
            justifyContent={"space-between"}
            color={"white"}
            fontSize={"50px"}
          >
            أحدث الطرود
            <Button
              onClick={() => (window.location.pathname = "/allPackages")}
              variant=""
              sx={{ fontSize: "30px", color: "#454545" }}
            >
              الكل
            </Button>
          </Box>
          <Carousel responsive={responsive} rtl itemClass="4">
            <Paper
              sx={{
                height: 369,
                width: 347,
                margin: 4,
                backgroundColor: "white",
                borderRadius: "45px",
                position: "relative",
                "&:hover div": {
                  height: "100%",
                  transform: "translate(-50%, -90%)",
                  borderRadius: "50px",
                },
                "&:hover div div": {
                  display: "none",
                },
                "&:hover div button": {
                  display: "flex",
                },
              }}
            >
              <img src="/assets/packages.png" />
              <Box
                position={"absolute"}
                top={"90%"}
                left={"50%"}
                sx={{
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#FFFFFF80",
                  backdropFilter: "blur(2px)",
                  width: "100%",
                  height: "20%",
                  borderRadius: "0px 0px 50px 50px",
                  transition: "transform 0.5s ease",
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box p={"0 20px"} width={"50%"}>
                  <Box color={"#454545"} fontSize={"23px"} fontWeight={"bold"}>
                    اسم الطرد
                  </Box>
                  <Box
                    color={"#454545"}
                    fontSize={"20px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={1}
                  >
                    المكان
                    <span style={{ fontSize: "14px" }}>المكان</span>
                  </Box>
                </Box>
                <Button
                  sx={{
                    display: "none",
                    width: "40%",
                    color: "#454545",
                    fontSize: "25px",
                    border: "2px solid",
                    borderRadius: "99px",
                  }}
                >
                  أذهب
                  <ArrowBackIosIcon />
                </Button>
                <Box width={"50%"}>
                  <Box>رقم التواصل</Box>
                  <Box>+970</Box>
                </Box>
              </Box>
            </Paper>
            <Paper
              sx={{
                height: 369,
                width: 347,
                margin: 4,
                backgroundColor: "white",
                borderRadius: "45px",
                position: "relative",
                "&:hover div": {
                  height: "100%",
                  transform: "translate(-50%, -90%)",
                  borderRadius: "50px",
                },
                "&:hover div div": {
                  display: "none",
                },
                "&:hover div button": {
                  display: "flex",
                },
              }}
            >
              <img src="/assets/packages.png" />
              <Box
                position={"absolute"}
                top={"90%"}
                left={"50%"}
                sx={{
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#FFFFFF80",
                  backdropFilter: "blur(2px)",
                  width: "100%",
                  height: "20%",
                  borderRadius: "0px 0px 50px 50px",
                  transition: "transform 0.5s ease",
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box p={"0 20px"} width={"50%"}>
                  <Box color={"#454545"} fontSize={"23px"} fontWeight={"bold"}>
                    اسم الطرد
                  </Box>
                  <Box
                    color={"#454545"}
                    fontSize={"20px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={1}
                  >
                    المكان
                    <span style={{ fontSize: "14px" }}>المكان</span>
                  </Box>
                </Box>
                <Button
                  sx={{
                    display: "none",
                    width: "40%",
                    color: "#454545",
                    fontSize: "25px",
                    border: "2px solid",
                    borderRadius: "99px",
                  }}
                >
                  أذهب
                  <ArrowBackIosIcon />
                </Button>
                <Box width={"50%"}>
                  <Box>رقم التواصل</Box>
                  <Box>+970</Box>
                </Box>
              </Box>
            </Paper>
            <Paper
              sx={{
                height: 369,
                width: 347,
                margin: 4,
                backgroundColor: "white",
                borderRadius: "45px",
                position: "relative",
                "&:hover div": {
                  height: "100%",
                  transform: "translate(-50%, -90%)",
                  borderRadius: "50px",
                },
                "&:hover div div": {
                  display: "none",
                },
                "&:hover div button": {
                  display: "flex",
                },
              }}
            >
              <img src="/assets/packages.png" />
              <Box
                position={"absolute"}
                top={"90%"}
                left={"50%"}
                sx={{
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#FFFFFF80",
                  backdropFilter: "blur(2px)",
                  width: "100%",
                  height: "20%",
                  borderRadius: "0px 0px 50px 50px",
                  transition: "transform 0.5s ease",
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box p={"0 20px"} width={"50%"}>
                  <Box color={"#454545"} fontSize={"23px"} fontWeight={"bold"}>
                    اسم الطرد
                  </Box>
                  <Box
                    color={"#454545"}
                    fontSize={"20px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={1}
                  >
                    المكان
                    <span style={{ fontSize: "14px" }}>المكان</span>
                  </Box>
                </Box>
                <Button
                  sx={{
                    display: "none",
                    width: "40%",
                    color: "#454545",
                    fontSize: "25px",
                    border: "2px solid",
                    borderRadius: "99px",
                  }}
                >
                  أذهب
                  <ArrowBackIosIcon />
                </Button>
                <Box width={"50%"}>
                  <Box>رقم التواصل</Box>
                  <Box>+970</Box>
                </Box>
              </Box>
            </Paper>
            <Paper
              sx={{
                height: 369,
                width: 347,
                margin: 4,
                backgroundColor: "white",
                borderRadius: "45px",
                position: "relative",
                "&:hover div": {
                  height: "100%",
                  transform: "translate(-50%, -90%)",
                  borderRadius: "50px",
                },
                "&:hover div div": {
                  display: "none",
                },
                "&:hover div button": {
                  display: "flex",
                },
              }}
            >
              <img src="/assets/packages.png" />
              <Box
                position={"absolute"}
                top={"90%"}
                left={"50%"}
                sx={{
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#FFFFFF80",
                  backdropFilter: "blur(2px)",
                  width: "100%",
                  height: "20%",
                  borderRadius: "0px 0px 50px 50px",
                  transition: "transform 0.5s ease",
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box p={"0 20px"} width={"50%"}>
                  <Box color={"#454545"} fontSize={"23px"} fontWeight={"bold"}>
                    اسم الطرد
                  </Box>
                  <Box
                    color={"#454545"}
                    fontSize={"20px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={1}
                  >
                    المكان
                    <span style={{ fontSize: "14px" }}>المكان</span>
                  </Box>
                </Box>
                <Button
                  sx={{
                    display: "none",
                    width: "40%",
                    color: "#454545",
                    fontSize: "25px",
                    border: "2px solid",
                    borderRadius: "99px",
                  }}
                >
                  أذهب
                  <ArrowBackIosIcon />
                </Button>
                <Box width={"50%"}>
                  <Box>رقم التواصل</Box>
                  <Box>+970</Box>
                </Box>
              </Box>
            </Paper>
            <Paper
              sx={{
                height: 369,
                width: 347,
                margin: 4,
                backgroundColor: "white",
                borderRadius: "45px",
                position: "relative",
                "&:hover div": {
                  height: "100%",
                  transform: "translate(-50%, -90%)",
                  borderRadius: "50px",
                },
                "&:hover div div": {
                  display: "none",
                },
                "&:hover div button": {
                  display: "flex",
                },
              }}
            >
              <img src="/assets/packages.png" />
              <Box
                position={"absolute"}
                top={"90%"}
                left={"50%"}
                sx={{
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#FFFFFF80",
                  backdropFilter: "blur(2px)",
                  width: "100%",
                  height: "20%",
                  borderRadius: "0px 0px 50px 50px",
                  transition: "transform 0.5s ease",
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box p={"0 20px"} width={"50%"}>
                  <Box color={"#454545"} fontSize={"23px"} fontWeight={"bold"}>
                    اسم الطرد
                  </Box>
                  <Box
                    color={"#454545"}
                    fontSize={"20px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={1}
                  >
                    المكان
                    <span style={{ fontSize: "14px" }}>المكان</span>
                  </Box>
                </Box>
                <Button
                  sx={{
                    display: "none",
                    width: "40%",
                    color: "#454545",
                    fontSize: "25px",
                    border: "2px solid",
                    borderRadius: "99px",
                  }}
                >
                  أذهب
                  <ArrowBackIosIcon />
                </Button>
                <Box width={"50%"}>
                  <Box>رقم التواصل</Box>
                  <Box>+970</Box>
                </Box>
              </Box>
            </Paper>
          </Carousel>
        </Box>
        <Box
          width={"100%"}
          height={"600px"}
          sx={{
            backgroundColor: "#F2F2F2",
          }}
        >
          <Box
            p={4}
            color={"#454545"}
            fontWeight={"bold"}
            display={"flex"}
            justifyContent={"space-between"}
            fontSize={"50px"}
          >
            أحدث السائقين
            <Button
              onClick={() => (window.location.pathname = "/allDrivers")}
              variant=""
              sx={{ fontSize: "30px", color: "#454545" }}
            >
              الكل
            </Button>
          </Box>
          <Carousel responsive={responsive} rtl itemClass="4">
            {drivers.map((driver) => (
              <Box height={"355px"}>
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
                    sx={{ transition: "0.2s ease" }}
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
                    <Box>{driver.name}</Box>
                    <Box className="number">{driver.phone}</Box>
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
                      الرقم:
                      {driver.phone}
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
                      السعر:
                      {driver.price}
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
                      مكان السكن:
                      {driver.city}
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
                      تاريخ السفر:
                      {driver.travelDate}
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
                      مكان السفر:
                      {driver.travelPlace}
                    </ListItem>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
      <Footer />
    </motion.Box>
  );
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1366 },
    items: 4,
  },
  anotherDesktop: {
    breakpoint: { max: 1366, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 932 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default Home;
