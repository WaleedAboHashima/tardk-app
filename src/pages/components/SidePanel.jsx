import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import Cookies from "universal-cookie";

const Item = ({ title, to, selected, setSelected }) => {
  return (
    <MenuItem
      active={window.location.pathname === to ? (selected = title) : null}
      style={{
        color: "white",
        fontSize: "25px",
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
        fontWeight: "bold",
      }}
      onClick={() =>
        window.location.pathname === to ? setSelected(title) : setSelected(null)
      }
      dir="rtl"
    >
      <Typography textAlign="right" sx={{          fontSize: "25px",
          fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif`,
          fontWeight: 'bold'}}>
        {title}
      </Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SidePanel = () => {
  // //Variables

  const navigator = useNavigate();
  const cookies = new Cookies();
  const [selected, setSelected] = useState(window.location.pathname);
  return (
    <Box
      sx={{
        height: "100vh",
        width: "475px",
        "& .pro-sidebar-inner": {
          background: `#454545 !important`,
        },
        "& .pro-icon-wrapper": { backgroundColor: "transparent !important" },
        "& .pro-inner-item": {
          padding: "10px 35px 10px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: `#454545 !important`,
          backgroundColor: "white",
        },
        "& .pro-menu-item.active": {
          color: "#454545 !important",
          backgroundColor: "white",
        },
      }}
    >
      <ProSidebar width={"100%"}>
        <Menu>
          <Box mb="25px">
            <Box
              display="flex"
              flexDirection={"column"}
              fontSize={"35px"}
              color={"white"}
              justifyContent="center"
              alignItems="center"
            >
              <img
                src="/assets/personLogox2.png"
                alt="profile-user"
                width="100px"
                height="100px"
                style={{ cursor: "pointer", borderRadius: "50%" }}
                onClick={() => navigator("/")}
              />
              اسم الادمن
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color="green"
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                {cookies.get("_auth_verify")}
              </Typography>
            </Box>
          </Box>
          {/* Menu Items */}
          <Box display={"flex"} flexDirection={"column"} gap={5}>
            <Item
              title="التحكم بالصور"
              to="/admin/adminpanel"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="التحكم في سياسة الاستخدام"
              to="/admin/termsofuse"
              icon={<CreditCardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="التحكم في الخصوصية"
              to="/admin/conditions"
              icon={<CreditCardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="التحكم في العمولة والسداد"
              to="/admin/taxes"
              icon={<CreditCardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SidePanel;
