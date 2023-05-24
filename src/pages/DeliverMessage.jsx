import React, { useEffect, useState } from "react";
import { Box, Button, Divider, IconButton } from "@mui/material";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { useDispatch } from "react-redux";
import { GetMessagesHandler } from "../apis/User/GetMessage";
import Cookies from "universal-cookie";
function DeliverMessage() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const cookies = new Cookies();
  // const messages = [
  //   {
  //     id: "1",
  //     name: "السائق محمد أحمد",
  //     time: "منذ 30د",
  //     status: "متصل",
  //     message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير",
  //   },
  //   {
  //     id: "2",
  //     name: "السائق محمد أحمد",
  //     time: "منذ 30د",
  //     status: "متصل",
  //     message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير",
  //   },
  //   {
  //     id: "3",
  //     name: "السائق محمد أحمد",
  //     time: "منذ 30د",
  //     status: "متصل",
  //     message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير",
  //   },
  //   {
  //     id: "4",
  //     name: "السائق محمد أحمد",
  //     time: "منذ 30د",
  //     status: "متصل",
  //     message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير",
  //   },
  //   {
  //     id: "5",
  //     name: "السائق محمد أحمد",
  //     time: "منذ 30د",
  //     status: "متصل",
  //     message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير",
  //   },
  // ];
  const [messages, setMessages] = useState([]);
  const info = [
    {
      id: "1",
      name: "السائق محمد أحمد",
      time: "منذ 30د",
      status: "متصل",
      message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير",
    },
  ];
  const [filterMessage, setFilterMessage] = useState();
  useEffect(() => {
    dispatch(GetMessagesHandler()).then((res) => {
      if (res.payload.data) {
        setMessages(res.payload.data.allConversations[0]);
        setFilterMessage(
          res.payload.data.allConversations[0].filter(
            (message) => message._id === params.id
          )
        );
      }
    });
  }, [params.id]);
  return (
    <Box width={"100%"} height={"100vh"}>
      <TopBar />
      <Box
        p={3}
        sx={{ backgroundColor: "#F2F2F2" }}
        display={"flex"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{ direction: "rtl" }}
          width={"1234px"}
          height={"763px"}
          display={"flex"}
        >
          <Box
            sx={{ backgroundColor: "white", overflowY: "scroll" }}
            width={"30%"}
            p={2}
            display={"flex"}
            flexDirection={"column"}
            gap={"30px"}
          >
            {messages.map((message, index) => (
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{
                  backgroundColor:
                    params.id === message._id ? "#F2F2F2" : "#454545",
                }}
                borderRadius={3}
              >
                <Box>
                  <Box key={index++}>
                    <Box
                      textOverflow={"ellipsis"}
                      height={"166px"}
                      onClick={() => navigator(`/message/${message._id}`)}
                      key={message._id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        color: params.id === message._id ? "#454545" : "white",
                        cursor: "pointer",
                        ":hover": {
                          backgroundColor: "#FFFFFF20",
                          transition: "0.2s ease",
                        },
                      }}
                      px={2}
                    >
                      <Box
                        fontSize={"15px"}
                        fontWeight={"bold"}
                        color={params.id === message._id ? "#454545" : "white"}
                        justifyContent={"space-between"}
                        sx={{
                          width: "100%",
                          display: "flex",
                        }}
                      >
                        <Box width={"100%"} display={"flex"} p={2}>
                          <img
                            width={"69px"}
                            height={"69px"}
                            src="/assets/personLogo.png"
                            alt="personLogo"
                          />
                          <Box p={2} display={"flex"} flexDirection={"column"}>
                            <span>السائق: {message.from.username}</span>
                            <span>متصل</span>
                          </Box>
                        </Box>
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: "normal",
                            paddingTop: "30px",
                          }}
                        >
                          {message.time}
                        </span>
                      </Box>
                      <Box
                        fontSize={"17px"}
                        overflow={"hidden"}
                        textOverflow={"ellipsis"}
                        height={"20%"}
                        width={"100%"}
                      >
                        {message.message}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: "rgba(0, 0.2, 0, 0) 0px 19px 38px",
            }}
            width={"70%"}
            p={2}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            <Box sx={{ height: "15%" }}>
              <Box
                fontSize={"15px"}
                fontWeight={"bold"}
                justifyContent={"space-between"}
                sx={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <Box width={"100%"} display={"flex"} p={2}>
                  <img
                    width={"69px"}
                    height={"69px"}
                    src="/assets/personLogo.png"
                    alt="personLogo"
                  />
                  <Box p={2} display={"flex"} flexDirection={"column"}>
                    <span>
                      {filterMessage
                        ? filterMessage[0].from.username
                        : "أسم السائق"}
                    </span>
                    <span>متصل</span>
                  </Box>
                </Box>
                <IconButton
                  onClick={() =>
                    navigator(`/driverInfo/${filterMessage[0].from._id}`)
                  }
                  sx={{ width: "30px", height: "30px", mt: 3 }}
                >
                  <InfoIcon
                    sx={{ color: "#454545", width: "30px", height: "30px" }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Divider sx={{ borderColor: "#454545" }} />
            <Box
              sx={{ height: "80%" }}
              display={"flex"}
              flexDirection={"column"}
            >
              <Box
                width={"100%"}
                height={"50%"}
                display={"flex"}
                flexDirection={"column"}
                gap={2}
              >
                <Box
                  maxWidth={"320px"}
                  p={3}
                  sx={{
                    backgroundColor: "#E6E6E6",
                    borderRadius: "20px 20px 0 20px",
                    direction: "rtl",
                  }}
                >
                  {filterMessage ? filterMessage[0].message : "الرساله"}
                </Box>
                <Box
                  maxWidth={"320px"}
                  p={3}
                  sx={{
                    backgroundColor: "#E6E6E6",
                    borderRadius: "20px 0 0 20px",
                    direction: "rtl",
                  }}
                >
                  لدي استفسار معين
                </Box>
                <Box
                  maxWidth={"320px"}
                  p={3}
                  sx={{
                    backgroundColor: "#E6E6E6",
                    borderRadius: "20px 0 20px 20px",
                    direction: "rtl",
                  }}
                >
                  هل بإمكانك مساعدتي
                </Box>
              </Box>
              <Box
                width={"100%"}
                height={"50%"}
                sx={{ direction: "ltr" }}
                display={"flex"}
              >
                <img
                  width={"47px"}
                  height={"47px"}
                  src="/assets/personLogox2.png"
                  alt="logoo"
                />
                <Box
                  maxHeight={"20px"}
                  maxWidth={"320px"}
                  borderRadius={9}
                  p={2}
                  sx={{
                    backgroundColor: "#E6E6E6",
                    direction: "rtl",
                  }}
                >
                  وعليكم السلام، تفضل أخي
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default DeliverMessage;
