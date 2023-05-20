import React, { useState } from "react";
import SidePanel from "../components/SidePanel";
import {
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import Paypal from "../components/Paypal";
import { motion } from "framer-motion";

function Taxes() {
  return (
    <Box sx={{ direction: "rtl" }} display={"flex"}       initial={{ opacity: 0, transition: { duration: 0.5 } }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}>
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
            width={"100%"}
          >
            <Box
              width={"50%"}
              color={"#454545"}
              sx={{ borderLeft: "2px solid #454545" }}
            >
              <Box my={"20%"} display={"flex"} flexDirection={"column"} gap={2}>
                <Box fontSize={"35px"} fontWeight={"bold"}>
                  عموله الموقع
                </Box>
                <Box fontSize={"25px"} color={"#45454580"}>
                  تحديد عمولة الموقع لكل عملية استلام أو تسليم طرد
                </Box>
                <Box fontSize={"25px"} color={"#454545"}>
                  العمولة:
                  <TextField
                    placeholder="$5 لكل"
                    sx={{ pr: "10px" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Select
                            defaultValue={0}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={{
                              backgroundColor: "#454545",
                              border: "2px solid #454545",
                              borderRadius: 99,
                              color: "white",
                              width: "111px",
                              height: "57px",
                              svg: {
                                right: "unset",
                                left: "7px",
                                color: "white",
                              },
                            }}
                          >
                            <MenuItem dir="rtl" value={0}>
                              0$
                            </MenuItem>
                            <MenuItem dir="rtl" value={10}>
                              10$
                            </MenuItem>
                            <MenuItem dir="rtl" value={20}>
                              20$
                            </MenuItem>
                            <MenuItem dir="rtl" value={30}>
                              30$
                            </MenuItem>
                          </Select>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box pr={5} width={"50%"} color={"#454545"}>
              <Box my={"20%"} display={"flex"} flexDirection={"column"} gap={2}>
                <Box fontSize={"35px"} fontWeight={"bold"}>
                  طرق السداد
                </Box>
                <Box fontSize={"25px"} color={"#45454580"}>
                  تحديد طرق سداد عمولة الموقع
                </Box>
                <Paypal />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const initialState = {
  message: "",
};

export default Taxes;
