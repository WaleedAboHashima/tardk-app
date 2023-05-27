import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  ListItem,
  ListItemIcon,
  List,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { GetPackagesHandler } from "./../apis/Packages/GetAll";
import { GetDriversHandler } from "./../apis/Drivers/GetAllDrivers";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
function Home() {
  const [allOrders, setallOrders] = useState();
  const [drivers, setDrivers] = useState();
  const navigator = useNavigate();
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(GetPackagesHandler()).then((res) => {
      if (res.payload.data) {
        const orders = res.payload.data.orders.map((order) => order);
        setallOrders(orders);
      }
    });
    dispatch(GetDriversHandler()).then((res) => {
      if (res.payload.data) {
        const drivers = res.payload.data.delivery.map((driver) => driver);
        setDrivers(drivers);
      }
    });
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <TopBar />
      <Box
        overflow={"hidden"}
        display="flex"
        flexDirection={"column"}
        width="auto"
        sx={{ backgroundColor: "#F2F2F2", direction: "rtl" }}
      >
        <Box
          width={{ xl: "100%", lg: "90%" }}
          height={{ lg: "900px", xs: "auto" }}
          sx={{
            backgroundColor: "#F2F2F2",
          }}
          display={"flex"}
          flexDirection={{ xs: "column-reverse", lg: "row" }}
          justifyContent={{ xs: "center", lg: "" }}
          alignItems={{ xs: "center", lg: "" }}
        >
          <Box
            width={{ lg: "50%", xs: "100%" }}
            display={"flex"}
            flexDirection={"column"}
            p={{ lg: 5, xs: 2 }}
            py={{ lg: "200px", xs: "30px" }}
          >
            <Typography
              fontSize={{ lg: "50px", xs: "22px" }}
              fontWeight={"bold"}
              mx={{ xs: "20px", lg: "" }}
            >
              إذا كنت تبحث عن معلومات حول طرد معين ابحث هنا حول ما تريد
            </Typography>
            <TextField
              color="error"
              onChange={(e) => setSearch(e.target.value)}
              variant="standard"
              placeholder="ابحث عن ..."
              sx={{
                width: { lg: "80%" },
                my: 10,
                mx: { xs: 2, lg: "" },
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
                    onClick={() =>
                      (window.location.pathname = `/search/${search}`)
                    }
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
          <Box display={"flex"} gap={{ lg: "65px", xs: "25px" }}>
            <Box
              width={{ lg: "319px", xs: "auto" }}
              height={{ lg: "572px", xs: "294px" }}
              border="2px solid #454545"
              borderRadius={99}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={{ lg: "50px", xs: "25px" }}
              fontWeight={"bold"}
              color={"white"}
              position={"relative"}
            >
              <img
                width={"auto"}
                height={"100%"}
                src="/assets/havePackage.png"
                alt="havepackage"
              />
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
                  onClick={() =>
                    cookies.get("_auth_token")
                      ? (window.location.pathname = "/addPackage")
                      : (window.location.pathname = "/login")
                  }
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
              width={{ lg: "319px", xs: "auto" }}
              height={{ lg: "572px", xs: "294px" }}
              border="2px solid #454545"
              borderRadius={99}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={{ lg: "50px", xs: "25px" }}
              fontWeight={"bold"}
              color={"white"}
              position={"relative"}
              mt={"150px"}
            >
              <img
                width={"auto"}
                height={"100%"}
                src="/assets/deliverPackage.png"
                alt="deliverPackage"
              />
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
                  onClick={() =>
                    cookies.get("_auth_token")
                      ? (window.location.pathname = "/canDeliver")
                      : (window.location.pathname = "/login")
                  }
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
        <Box
          width={"100%"}
          height={{ lg: "600px", xs: "auto" }}
          sx={{
            background: "url(./assets/allPackages.jpg) no-repeat center center",
          }}
        >
          <Box
            p={{ lg: 4, xs: 2 }}
            fontWeight={"bold"}
            display={"flex"}
            justifyContent={"space-between"}
            color={"white"}
            fontSize={{ lg: "50px", xs: "19px" }}
          >
            أحدث الطرود
            <Button
              onClick={() => (window.location.pathname = "/allPackages")}
              variant=""
              sx={{ fontSize: { lg: "30px", xs: "15px" }, color: "#454545" }}
            >
              الكل
            </Button>
          </Box>
          <Carousel responsive={responsive} rtl itemClass="4">
            {allOrders ? (
              allOrders.map((order) => (
                <Paper
                  key={order._id}
                  sx={{
                    height: { lg: 369, xs: 150 },
                    width: { lg: 347, xs: 140 },
                    margin: { lg: 4, xs: 2 },
                    backgroundColor: "white",
                    borderRadius: { lg: "45px", xs: "20px" },
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
                  <img
                    width={"auto"}
                    height={"100%"}
                    src="/assets/packages.png"
                    alt="packageImage"
                  />
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
                    <Box p={{ lg: "0 20px", xs: "0 10px" }} width={"50%"}>
                      <Box
                        color={"#454545"}
                        fontSize={{ lg: "23px", xs: "10px" }}
                        fontWeight={"bold"}
                      >
                        {order.eviction_name}
                      </Box>
                      <Box
                        color={"#454545"}
                        fontSize={{ lg: "23px", xs: "10px" }}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={1}
                      >
                        {order.source_location}
                        <span style={{ fontSize: "14px" }}>المكان</span>
                      </Box>
                    </Box>
                    <Button
                      onClick={() => {
                        cookies.get("_auth_token")
                          ? navigator(`/packageInfo/${order._id}`)
                          : navigator("/login");
                      }}
                      sx={{
                        display: "none",
                        width: "40%",
                        color: "#454545",
                        fontSize: { lg: "23px", xs: "15" },
                        border: "2px solid",
                        borderRadius: "99px",
                      }}
                    >
                      أذهب
                      <ArrowBackIosIcon />
                    </Button>
                    <Box width={"50%"} fontSize={{ xs: "10px", lg: "" }}>
                      <Box>رقم التواصل</Box>
                      <Box>{order.phone}</Box>
                    </Box>
                  </Box>
                </Paper>
              ))
            ) : (
              <Paper
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                هناك خطا
              </Paper>
            )}
          </Carousel>
        </Box>
        <Box
          width={"100%"}
          height={{ lg: "600px", xs: "auto" }}
          sx={{
            backgroundColor: "#F2F2F2",
          }}
        >
          <Box
            p={{ lg: 4, xs: 2 }}
            color={"#454545"}
            fontWeight={"bold"}
            display={"flex"}
            justifyContent={"space-between"}
            fontSize={{ lg: "50px", xs: "19px" }}
          >
            أحدث السائقين
            <Button
              onClick={() => (window.location.pathname = "/allDrivers")}
              variant=""
              sx={{ fontSize: { lg: "30px", xs: "15px" }, color: "#454545" }}
            >
              الكل
            </Button>
          </Box>
          <Carousel responsive={responsive} rtl itemClass="4">
            {drivers ? (
              drivers.map((driver) => (
                <Box height={"355px"} key={driver._id}>
                  <Paper
                    key={driver.username}
                    onClick={() => {
                      cookies.get("_auth_token")
                        ? (window.location.pathname = `/driverinfo/${driver._id}`)
                        : (window.location.pathname = "/login");
                    }}
                    border="2px solid #454545"
                    fontSize={"50px"}
                    fontWeight={"bold"}
                    color={"white"}
                    sx={{
                      cursor: "pointer",
                      position: "relative",
                      backgroundColor: "transparent",
                      height: { lg: "auto", xs: 116 },
                      width: { lg: 355, xs: 177 },
                      margin: { lg: 4, xs: 2 },
                      marginTop: { xs: 30, lg: 0 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 30,
                      ":hover": {
                        height: { lg: "396px", xs: "100%" },
                        my: 2,
                        borderRadius: 20,
                      },
                      "&:hover .driverContainer": {
                        borderRadius: 20,
                        height: { lg: "396px", xs: "100%" },
                        backgroundColor: "#45454580",
                        backdropFilter: "blur(2px)",
                      },
                      ":hover img": {
                        height: { lg: "100%", xs: "100%" },
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
                  >
                    <img
                      width={"100%"}
                      height={"auto"}
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
                      fontSize={{ lg: "26px", xs: "13px" }}
                      fontWeight={"bold"}
                    >
                      <img
                        width={"95px"}
                        height={"95px"}
                        src="/assets/personLogox2.png"
                        style={{ transition: "0.2s ease" }}
                        alt="driver"
                      />
                      <Box>{driver.username}</Box>
                      <Box className="number">{driver.phone}</Box>
                      <List>
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
                          {driver.user.phone}
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
                          {driver.source_location}
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
                          {driver.dis_location}
                        </ListItem>
                      </List>
                    </Box>
                  </Paper>
                </Box>
              ))
            ) : (
              <Paper
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                هناك خطا
              </Paper>
            )}
          </Carousel>
        </Box>
        <Footer />
      </Box>
    </motion.div>
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
    items: 2,
  },
};

export default Home;
