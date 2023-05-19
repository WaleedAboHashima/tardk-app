import React from "react";
import { Box } from "@mui/material";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
function SidePanel() {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar
        rtl="true"
        backgroundColor="#454545"
        style={{ color: "white", fontSize: "", height: "100vh" , width: '475px'}}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          fontSize={"35px"}
          fontWeight={'bold'}
          py={2}
          alignItems={'center'}
        >
          <img style={{height: '139px' , width: '139px'}} src="/assets/personLogox2.png" alt="personlogo" />
          اسم الآدمن
        </Box>
        <Menu>
          <MenuItem>التحكم بالصور</MenuItem>
          <MenuItem>التحكم بالصور</MenuItem>
          <MenuItem>التحكم بالصور</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SidePanel;
