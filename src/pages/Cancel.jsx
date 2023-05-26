import React, { useEffect } from "react";
import { Box } from "@mui/material";

function Cancel() {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = 'http://localhost:3000/'
        }, 3000);
    }, [])
  return (
    <Box
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <img
          width={"810px"}
          height={"450px"}
          src="/assets/PaymentFailure.png"
          alt="PaymentFailure"
        />
      </Box>
    </Box>
  );
}

export default Cancel;
