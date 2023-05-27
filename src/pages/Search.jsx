import { Box, Button, Paper } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { SearchHandler } from "./../apis/Search";
function Search() {
  const navigator = useNavigate();
  const cookies = new Cookies();
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Search);
  const [results, setResults] = useState([]);
  useEffect(() => {
    dispatch(SearchHandler({ search: params.input })).then((res) => {
      if (res.payload) {
        setResults(res.payload.data);
      }
    });
  }, []);
  return (
    <motion.div
    style={{height: '100vh', width: '100%'}}
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
            <Box>نتائج البحث</Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
          >
            {results ? (
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
                ) : results.evictions.length > 0 ? (
                  results.evictions.map((res) => (
                    <Paper
                      key={res._id}
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
                            {res.eviction_name}
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
                              {res.source_location}
                            </span>
                          </Box>
                        </Box>
                        <Button
                          onClick={() => navigator(`/packageInfo/${res._id}`)}
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
                          <Box>{res.phone}</Box>
                        </Box>
                      </Box>
                    </Paper>
                  ))
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
                    لا يوجد نتائج لبحثك.
                  </Box>
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
                لا يوجد نتائج لبحثك.
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </motion.div>
  );
}

export default Search;
