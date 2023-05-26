import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { GetPackagesHandler } from "../apis/Packages/GetAll";

function PackageInfo() {
  const navigator = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [order, setOrder] = useState();
  const [firstImage, setFirstImage] = useState();
  useEffect(() => {
    dispatch(GetPackagesHandler()).then((res) => {
      if (res.payload.data) {
        const filteredOrder = res.payload.data.orders.filter(
          (order) => order._id === params.id
        );
        setOrder(filteredOrder[0]);
        setFirstImage(filteredOrder[0].eviction_imgs[0]);
      }
    });
  }, [params.id]);
  return (
    <motion.Box
      height={"100vh"}
      width={"100%"}
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <TopBar />
      <Box
        height={"80%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "#F2F2F2", direction: "rtl", overflowX: {xs: 'scroll', lg: 'unset'} }}
        flexDirection={{ xs: "column", lg: "row" }}
        

        p={5}
      >
        <Box
          sx={{ backgroundColor: "white" }}
          width={{lg: "1555px", xs: '100vw'}}
          height={{lg: "763px", xs: 'auto'}}
          display={"flex"}
          flexDirection={{ xs: "column", lg: "row" }}
          gap={{xs: 10, lg: ''}}
          p={5}
        >
          <Box
            width={{lg: "50%", xs: '100%'}}
            borderLeft={{ lg: "2px solid #454545", xs: "" }}
            borderBottom={{lg: '', xs: '2px solide #454545'}}
            display={"flex"}
            flexDirection={"column"}
          >
            <Box fontSize={{lg:"30px", xs: '15px'}} px={{lg: '', xs: 2}} color={"#454545"}>
              اسم الطرد( معلومات حول الطرد )
              <ul>
                <li>اسم صاحب الطرد: {order ? order.username : ""}</li>
                <li>اسم الطرد: {order ? order.eviction_name : ""}</li>
                <li>مكان صاحب الطرد: {order ? order.source_location : ""}</li>
                <li>مكان التوصيل: {order ? order.dis_location : ""}</li>
                <li>سعر الخدمة: {order ? order.price : ""}</li>
                <li>موعد الاستلام: {order ? order.arrival_time : ""}</li>
                <li>صور الطرد:</li>
              </ul>
              <Box
                width={"100%"}
                display={"flex"}
                gap={"19px"}
                justifyContent={"center"}
              >
                {order
                  ? order.eviction_imgs.map((img, index) => {
                    return (
                      <Box sx={{ cursor: "pointer" }} key={index++}>
                        <img
                          onClick={() => setFirstImage(img)}
                          width={"171px"}
                          height={"171px"}
                          style={{ borderRadius: 10 }}
                          src={img}
                          alt="لا يوجد صور لهذا الطرد"
                        />
                      </Box>
                    )
                  })
                  : ""}
              </Box>
            </Box>
          </Box>
          <Box
            width={{lg:"50%", xs: '100%'}}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={"50px"}
          >
            <img
              style={{ textAlign: "center" }}
              width={"80%"}
              src={firstImage}
              alt="لا يوجد صور لهذا الطرد"
            />
            <Box
              onClick={() => navigator(`/message/${order.user._id}`)}
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
