import {
  Box,
  Button,
  Paper,

} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { GetPackagesHandler } from "../apis/Packages/GetAll";
import Cookies from "universal-cookie";
function AllPackages() {
  const navigator = useNavigate();
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.GetPackages);
  useEffect(() => {
    dispatch(GetPackagesHandler());
  }, []);
  return (
    <motion.Box
      height={"100vh"}
      width={"100%"}
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
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
            <Box>جميع الطرود</Box>
            {/* <Box width={"10%"}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter}
                  placeholder="Filter"
                  defaultValue={0}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <MenuItem dir="rtl" value={0}>
                    ازالة الفلتر
                  </MenuItem>
                  <MenuItem dir="rtl" value={10}>
                    الاحدث
                  </MenuItem>
                  <MenuItem dir="rtl" value={20}>
                    الاقدم
                  </MenuItem>
                  <TextField
                    value={30}
                    placeholder="المدينه"
                    dir="rtl"
                  ></TextField>
                </Select>
              </FormControl>
            </Box> */}
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
          >
            {cookies.get("_auth_token") && cookies.get("_auth_role") ? (
              <>
                {state.loading ? (
                  <Box
                    height={"100vh"}
                    width={"100vw"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <CircularProgress color="success" />
                  </Box>
                ) : (
                  state.data.orders &&
                  state.data.orders.map((order) => (
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
                      <img src="/assets/packages.png" alt="packaage" />
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
                          <Box
                            color={"#454545"}
                            fontSize={"23px"}
                            fontWeight={"bold"}
                          >
                            {order.eviction_name}
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
                            <span style={{ fontSize: "14px" }}>
                              {order.source_location}
                            </span>
                          </Box>
                        </Box>
                        <Button
                          onClick={() => navigator(`/packageInfo/${order._id}`)}
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
                          <Box>{order.phone}</Box>
                        </Box>
                      </Box>
                    </Paper>
                  ))
                )}
              </>
            ) : (
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100vw"}
                height={"100vh"}
                fontSize={"35px"}
                fontWeight={"bold"}
                color="red"
              >
                برجاء تسجيل الدخول
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </motion.Box>
  );
}

export default AllPackages;
