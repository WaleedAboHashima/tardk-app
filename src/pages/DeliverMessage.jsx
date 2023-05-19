import React from "react";
import { Box, Button, Divider, IconButton } from "@mui/material";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
function DeliverMessage() {
  const params = useParams();
  const navigator = useNavigate();
  const messages = [
    {
      id: "1",
      name: "السائق محمد أحمد",
      time: "منذ 30د",
      status: "متصل",
      message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير",
    },
    {
      id: "2",
      name: "السائق محمد أحمد",
      time: "منذ 30د",
      status: "متصل",
      message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير",
    },
    {
      id: "3",
      name: "السائق محمد أحمد",
      time: "منذ 30د",
      status: "متصل",
      message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير",
    },
    {
      id: "4",
      name: "السائق محمد أحمد",
      time: "منذ 30د",
      status: "متصل",
      message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير",
    },
    {
      id: "5",
      name: "السائق محمد أحمد",
      time: "منذ 30د",
      status: "متصل",
      message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير",
    },
  ];
  const info = [
    {
      id: "1",
      name: "السائق محمد أحمد",
      time: "منذ 30د",
      status: "متصل",
      message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير",
    },
  ];
  return (
    <Box width={"100%"} height={"100vh"}>
      <TopBar />
      <Box
        p={3}
        sx={{ backgroundColor: "#F3F3F3" }}
        display={"flex"}
        height={"80%"}
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
                    params.id === message.id ? "#F2F2F2" : "#454545",
                }}
                borderRadius={3}
              >
                <Box>
                  <Box key={index++}>
                    <Box
                      textOverflow={"ellipsis"}
                      height={"166px"}
                      onClick={() => navigator(`/message/${message.id}`)}
                      key={message.id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        color: params.id === message.id ? "#454545" : "white",
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
                        color={params.id === message.id ? "#454545" : "white"}
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
                            <span>{message.name}</span>
                            <span>{message.status}</span>
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
                // color={params.id === message.id ? "#454545" : "white"}
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
                    <span>{info[0].name}</span>
                    <span>{info[0].status}</span>
                  </Box>
                </Box>
                <IconButton onClick={() => navigator('/driverInfo/1')} sx={{ width: "30px", height: "30px", mt: 3 }}>
                  <InfoIcon
                    sx={{ color: "#454545", width: "30px", height: "30px" }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Divider sx={{ borderColor: "#454545" }} />
            <Box sx={{ backgroundColor: "blue", height: "80%" }}></Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default DeliverMessage;
