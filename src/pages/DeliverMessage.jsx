import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ReplyIcon from "@mui/icons-material/Reply";
import { GetMessagesHandler } from "../apis/User/GetMessage";
import Cookies from "universal-cookie";
import CircularProgress from "@mui/material/CircularProgress";
import { io } from "socket.io-client";

function DeliverMessage() {
  const cookies = new Cookies();
  const params = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [messages, setMessages] = useState([]);
  const state = useSelector((state) => state.Messages);
  const socket = io(`https://tardq.onrender.com?id=${cookies.get("_auth_id")}`);
  const [allMessages, setAllMessages] = useState([]);
  const [privateMessage, setPrivateMessage] = useState();
  const [socketChange, setSocketChange] = useState(false);
  const containerRef = useRef(null);
  const input = useRef();
  const handleSocket = () => {
    socket.emit("newMessage", {
      sender: cookies.get("_auth_id"),
      receiver: params.id,
      message: privateMessage,
    });
    setPrivateMessage("");
    input.current.value = "";
    setSocketChange(!socketChange);
  };

  function scrollToBottom() {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }

  useEffect(() => {
    scrollToBottom();
  }, [allMessages]);

  useEffect(() => {
    dispatch(GetMessagesHandler()).then((res) => {
      if (res.payload.data) {
        const lastMessages = [];
        for (const conversation of Object.values(
          res.payload.data.allConversations
        )) {
          const userId = Object.keys(conversation)[0];
          const messages = conversation[userId];
          lastMessages.push(messages);
        }
        setMessages(lastMessages);
        Object.values(res.payload.data.allConversations).map(
          (c)  => {
            const userId = Object.keys(c)[0];
            if (userId === params.id) {
              const message = c[userId];
              setAllMessages(message);
            }
          }
        );
      }
    });
  }, [params.id, socketChange]);
  return (
    <Box width={"100%"} height={"100vh"}>
      <TopBar />
      <Box
        p={3}
        sx={{ backgroundColor: "#F2F2F2" }}
        display={"flex"}
        height={{ lg: "100vh", sx: "auto" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{ direction: "rtl" }}
          width={{ lg: "1234px", xs: "100%" }}
          height={{ lg: "763px", xs: "auto" }}
          display={"flex"}
          flexDirection={{ xs: "column", lg: "row" }}
        >
          <Box
            sx={{ backgroundColor: "white", overflowY: "auto" }}
            width={{ lg: "30%", xs: "100%" }}
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
                    params.id === message[message.length - 1].from._id ||
                    params.id === message[message.length - 1].to._id
                      ? "#F2F2F2"
                      : "#454545",
                }}
                borderRadius={3}
              >
                <Box>
                  <Box key={index++}>
                    <Box
                      textOverflow={"ellipsis"}
                      height={"166px"}
                      onClick={() =>
                        navigator(
                          `/message/${
                            cookies.get("_auth_id") !==
                            message[message.length - 1].from._id
                              ? message[message.length - 1].from._id
                              : message[message.length - 1].to._id
                          }`
                        )
                      }
                      key={message[message.length - 1]._id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        color:
                          params.id === message[message.length - 1].from._id ||
                          params.id === message[message.length - 1].to._id
                            ? "#454545"
                            : "white",
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
                        color={
                          params.id === message[message.length - 1].from._id ||
                          params.id === message[message.length - 1].to._id
                            ? "#454545"
                            : "white"
                        }
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
                              السائق:{" "}
                              {message[message.length - 1].from.username}
                            </span>
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
                          {message[message.length - 1].time}
                        </span>
                      </Box>
                      <Box
                        fontSize={"17px"}
                        overflow={"hidden"}
                        textOverflow={"ellipsis"}
                        height={"20%"}
                        width={"100%"}
                      >
                        {message[message.length - 1].message}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          {state.loading ? (
            <Box
              width={"100%"}
              sx={{ background: "white" }}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Box
                sx={{
                  backgroundColor: "white",
                  boxShadow: "rgba(0, 0.2, 0, 0) 0px 19px 38px",
                }}
                width={{ lg: "70%", xs: "100%" }}
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
                          {messages
                            ? messages.map(
                                (message, index) =>
                                  message[index].from._id === params.id &&
                                  message[message.length - 1].from.username
                              )
                            : ""}
                        </span>
                        <span>متصل</span>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ borderColor: "#454545" }} />
                <Box
                  sx={{ height: { lg: "70%", xs: "auto" } }}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Box
                    width={"100%"}
                    height={"100%"}
                    sx={{ overflowY: "auto", overflowX: "hidden" }}
                    ref={containerRef}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={2}
                  >
                    {/* Box */}
                    {allMessages.map((m) => (
                      <>
                        {m.from._id === params.id ? (
                          <Box
                            maxWidth={"320px"}
                            p={3}
                            sx={{
                              backgroundColor: "#E6E6E6",
                              borderRadius: "20px 20px 0 20px",
                              direction: "rtl",
                            }}
                          >
                            {m.message}
                          </Box>
                        ) : (
                          <Box
                            p={3}
                            py={1}
                            height={"auto"}
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
                              height={"auto"}
                              width={{lg: "320px", xs: '200px'}}
                              borderRadius={9}
                              wordWrap="break-word"
                              p={2}
                              sx={{
                                backgroundColor: "#E6E6E6",
                                direction: "rtl",
                              }}
                            >
                              <Typography sx={{ wordWrap: "break-word" }}>
                                {m.message}
                              </Typography>
                            </Box>
                          </Box>
                        )}
                      </>
                    ))}

                    {/* Box */}
                  </Box>
                </Box>
                <TextField
                  multiline
                  maxRows={3}
                  value={privateMessage}
                  ref={input}
                  onChange={(e) => setPrivateMessage(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <Button
                        onClick={handleSocket}
                        variant="contained"
                        sx={{ height: "100%", backgroundColor: "#454545" }}
                      >
                        <ReplyIcon />
                      </Button>
                    ),
                  }}
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default DeliverMessage;
