import { Fragment, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import MenuIcon from "@mui/icons-material/Menu";

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
      <Typography
        textAlign="right"
        sx={{
          fontSize: "25px",
          fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif`,
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SidePanel = () => {
  const location = useLocation();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{
        backgroundColor: "#454545",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
          textAlign: "center",
          padding: "25px",
        }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <>
          <img src="/assets/personLogo.png" alt="logoperson" />
          <Typography
            variant="h2"
            fontSize="17px"
            pt={2}
            fontWeight="bold"
            color="white"
          >
            {cookies.get("_auth_username")}
          </Typography>
        </>
      </Box>

      <Box>
        <List sx={{ direction: "rtl" }}>
          <ListItem
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "right",
              justifyContent: "right",
            }}
            disablePadding
          >
            {pages.map((page) => (
              <ListItemButton
                onClick={() => navigator(`${page.to}`)}
                key={page.id}
                sx={
                  location.pathname === page.to
                    ? {
                        width: "100%",
                        background: "white",
                        color: "#454545",
                        transition: "cubic-bezier(0.4, 0, 0.2, 1)",
                        transitionDelay: "100ms",
                        ":hover": {
                          backgroundColor: "white",
                        },
                        fontWeight: "bold",
                      }
                    : {
                        width: "100%",
                        ":hover": {
                          backgroundColor: "white",
                          color: "#454545",
                          transitionDelay: "100ms",
                        },
                        fontWeight: "bold",
                      }
                }
              >
                {page.name}
              </ListItemButton>
            ))}
          </ListItem>
        </List>
      </Box>
    </Box>
  );
  const pages = [
    { id: "1", name: "الرئيسية", to: "/" },
    { id: "2", name: "التحكم بالصور", to: "/admin/adminpanel" },
    { id: "3", name: "التحكم في سياسة الاستخدام", to: "/admin/termsofuse" },
    { id: "4", name: "التحكم في الخصوصية", to: "/admin/conditions" },
    { id: "5", name: "التحكم في العمولة والسداد", to: "/admin/taxes" },
    { id: "6", name: "سوشيال ميديا", to: "/admin/socials" },
  ];
  const navigator = useNavigate();
  const cookies = new Cookies();
  const [selected, setSelected] = useState(window.location.pathname);
  return (
    <Box
      sx={{
        backgroundColor: "#F2F2F2",
        height: "100vh",
        width: { xl: "475px", lg: "350px" },
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
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", lg: "none" },
          backgroundColor: "transparent",
          position: "fixed",
          top: 0,
          width: "100%",
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer("right", true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Fragment>
          <SwipeableDrawer
            sx={{ backdropFilter: "blur(3px)" }}
            anchor={"right"}
            onOpen={toggleDrawer("right", true)}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </SwipeableDrawer>
        </Fragment>
      </Box>
      <Box height={"100vh"} display={{ xs: "none", lg: "flex" }}>
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
                title="الرئيسيه"
                to="/"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="التحكم بالصور"
                to="/admin/adminpanel"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="التحكم في سياسة الاستخدام"
                to="/admin/termsofuse"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="التحكم في الخصوصية"
                to="/admin/conditions"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="مواقع التواصل"
                to="/admin/socials"
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="التحكم في العمولة والسداد"
                to="/admin/taxes"
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </Box>
  );
};

export default SidePanel;
