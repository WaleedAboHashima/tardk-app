import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  MenuList,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import Cookies from "universal-cookie";
const pages = [
  { id: "1", name: "الرئيسية", to: "/" },
  { id: "2", name: "دفع عمولة", to: "/pay" },
  { id: "3", name: "جميع الطرود", to: "/allPackages" },
  { id: "4", name: "جميع السائقين", to: "/allDrivers" },
];

const messagess = [
  {
    id: 1,
    name: "السائق محمد احمد",
    time: "30د",
    message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير...",
  },
  {
    id: 2,
    name: "السائق محمد احمد",
    time: "30د",
    message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير...",
  },
  {
    id: 3,
    name: "السائق محمد احمد",
    time: "30د",
    message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير...",
  },
  {
    id: 4,
    name: "السائق محمد احمد",
    time: "30د",
    message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير...",
  },
  {
    id: 5,
    name: "السائق محمد احمد",
    time: "30د",
    message: "السلام عليكم أخي أسعد الله أوقاتك بكل خير...",
  },
];

function TopBar() {
  ////////////////////////
  const navigator = useNavigate();
  const cookies = new Cookies();
  const [anchorEl, setanchorEl] = React.useState(null);
  const [messages, setMessages] = React.useState(null);
  const [settings, setSettings] = React.useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(messages);
  const openSettings = Boolean(settings);
  const [state, setState] = React.useState({
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
        <img src="/assets/personLogo.png" alt="logoperson" />
        <Typography
          variant="h2"
          fontSize="17px"
          pt={2}
          fontWeight="bold"
          color="white"
        >
          اسم السائق
        </Typography>
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

  ///////////////////////////
  const location = useLocation();

  return (
    <Box
      position="sticky"
      zIndex={99}
      sx={{
        backgroundColor: "#F2F2F2",
        color: "black",
        direction: "rtl",
        padding: "0 20px",
        boxShadow: "none",
      }}
    >
      <Box
        flex
        justifyContent="space-between"
        sx={{ width: "100%", display: "flex" }}
      >
        <Toolbar disableGutters sx={{ width: "100%" }}>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
            <React.Fragment>
              <SwipeableDrawer
                sx={{ backdropFilter: "blur(3px)" }}
                onOpen={() => console.log("open")}
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </SwipeableDrawer>
            </React.Fragment>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              margin: "0 10%",
            }}
          >
            TARDK
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 4,
            }}
          >
            {pages.map((page) => (
              <Link
                to={page.to}
                key={page.id}
                className={location.pathname === page.to ? "active nav" : "nav"}
                style={
                  location.pathname === page.to
                    ? { color: "black" }
                    : { color: "#454545" }
                }
                underline="none"
              >
                {page.name}
              </Link>
            ))}
            <Link
              aria-controls={open2 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onMouseEnter={(e) => setMessages(e.currentTarget)}
              className={"nav"}
              style={{ color: "#454545" }}
              underline="none"
            >
              رسائلي
            </Link>
            <Menu
              elevation={0}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              id="basic-menu"
              anchorEl={messages}
              open={open2}
              onClose={() => setMessages(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuList
                dense
                sx={{ width: 378.5, height: 482, direction: "rtl" }}
              >
                {messagess.map((message, index) => (
                  <Box key={message.id}>
                    <MenuItem
                      onClick={() => navigator(`/message/${message.id}`)}
                      style={menuItemStyle}
                      key={message.id}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "101.5px",
                        gap: "20px",
                      }}
                    >
                      <Box
                        fontSize={"15px"}
                        fontWeight={"bold"}
                        color={"#454545"}
                        justifyContent={"space-between"}
                        sx={{
                          width: "100%",
                          display: "flex",
                        }}
                      >
                        <Box width={"100%"} display={"flex"}>
                          <img
                            width={"43px"}
                            height={"43px"}
                            src="/assets/personLogo.png"
                            alt="personLogo"
                          />
                          {message.name}
                        </Box>
                        <span
                          style={{ fontSize: "11px", fontWeight: "normal" }}
                        >
                          {message.time}
                        </span>
                      </Box>
                      <Box fontSize={"17px"} width={"100%"}>
                        {message.message}
                      </Box>
                    </MenuItem>
                    <Divider
                      sx={{ borderWidth: "2px", borderColor: "#454545" }}
                    />
                  </Box>
                ))}
              </MenuList>
            </Menu>
            <Link
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onMouseEnter={(e) => setanchorEl(e.currentTarget)}
              className={"nav"}
              style={{ color: "#454545" }}
              underline="none"
            >
              اضف عمل
            </Link>
            <Menu
              elevation={0}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => setanchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuList dense sx={{ width: 200, direction: "rtl" }}>
                <MenuItem onClick={() => navigator("/addPackage")}>
                  <Box fontSize={"25px"} color={"#454545"}>
                    لدي طرد
                  </Box>
                </MenuItem>
                <Divider sx={{ backgroundColor: "black" }} />
                <MenuItem onClick={() => navigator("/canDeliver")}>
                  <Box fontSize={"25px"} color={"#454545"}>
                    بإمكاني التوصيل
                  </Box>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
        {cookies.get("_auth_token") ? (
          <Box
            sx={{
              flexGrow: 0,
              width: "69px",
              display: { xs: "none", md: "block" },
            }}
            p={2}
          >
            <Tooltip title="الاعدادات">
              <IconButton
                aria-controls={openSettings ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openSettings ? "true" : undefined}
                onClick={(e) => setSettings(e.currentTarget)}
                sx={{ p: 0 }}
              >
                <img
                  width={"69px"}
                  height={"69px"}
                  alt="Remy Sharp"
                  src="/assets/personLogo.png"
                />
              </IconButton>
            </Tooltip>
            <Menu
              elevation={0}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              id="basic-menu"
              anchorEl={settings}
              open={openSettings}
              onClose={() => setSettings(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuList dense sx={{ width: 200, direction: "rtl" }}>
                {cookies.get("_auth_role") === "admin" ? (
                  <>
                    <MenuItem onClick={() => cookies.get('_auth_role') === 'admin' ? navigator('/admin/adminpanel') : null}>
                      <Box fontSize={"25px"} color={"#454545"}>
                        لوحه التحكم
                      </Box>
                    </MenuItem>
                    <Divider sx={{ backgroundColor: "black" }} />
                  </>
                ) : undefined}
                <MenuItem
                  onClick={() => {
                    cookies.remove("_auth_token");
                    window.location.reload();
                  }}
                >
                  <Box fontSize={"25px"} color={"#454545"}>
                    تسجيل الخروج
                  </Box>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        ) : (
          <Box
            sx={{
              width: "400px",
              display: { xs: "none", md: "flex" },
              gap: "40px",
              height: "2%",
            }}
            p={1}
          >
            <Box
              onClick={() => navigator("/login")}
              display="flex"
              width="200px"
              fontWeight={"bold"}
              fontSize={30}
              justifyContent="center"
              alignItems="center"
              sx={{ cursor: "pointer" }}
            >
              تسجيل الدخول
            </Box>
            <Box
              onClick={() => navigator("/register")}
              width="150px"
              fontWeight={"bold"}
              fontSize={30}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              p={1}
              sx={{
                backgroundColor: "#454545",
                color: "white",
                transition: "0.2s ease-in-out",
                ":hover": {
                  backgroundColor: "transparent",
                  border: "2px black solid",
                  cursor: "pointer",
                  color: "black",
                },
              }}
            >
              تسجيل
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

const menuItemStyle = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
};
export default TopBar;
