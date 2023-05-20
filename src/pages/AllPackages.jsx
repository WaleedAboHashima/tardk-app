import {
  Box,
  Button,
  Paper,
  Select,
  FormControl,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function AllPackages() {
  const [filter, setFilter] = React.useState();
  const navigator = useNavigate();
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
            <Box>جميع الطرود</Box>
            <Box width={"10%"}>
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
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
          >
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
                  onClick={() => navigator("/packageInfo/1")}
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
              <img src="./assets/packages.png" />
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
              <img src="./assets/packages.png" />
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
              <img src="./assets/packages.png" />
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
              <img src="./assets/packages.png" />
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
              <img src="./assets/packages.png" />
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
              <img src="./assets/packages.png" />
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
              <img src="./assets/packages.png" />
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
              <img src="./assets/packages.png" />
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
              <img src="./assets/packages.png" />
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
              <img src="./assets/packages.png" />
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
              <img src="./assets/packages.png" />
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
          </Box>
        </Box>
      </Box>
      <Footer />
    </motion.Box>
  );
}

export default AllPackages;
