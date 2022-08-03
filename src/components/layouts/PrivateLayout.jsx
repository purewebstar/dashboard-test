/*!
Data Created On: Wednesday, August 3, 2022 [1:36 PM]
=========================================================
* Default Dashboard Test Template - v1.0.0
=========================================================

* Copyright 2022
* Licensed under MIT (https://github.com/abriilo/dashboard-test-template/blob/master/LICENSE.md)
* Coded by:  Abraham Mitiku

=========================================================

*
*/


import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Outlet, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import getDesignTokens from "../../constants/theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import {setLocalStorage, getLocalStorage} from '../../utils/Storage';
import { red, teal } from "@mui/material/colors";
import config from "../../config/config";
import NotificationsIcon from "@mui/icons-material/Notifications";
import siteLogo from "../../assets/images/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import $ from 'jquery';
//Add Navigation Pages and/or Edit on this directory
import {privatePages} from '../../routes/pages';
import AccountMenu from "./navigations/AccountMenu";
import NotificationMenu from "./navigations/NotificationMenu";
import MenuDialog from './navigations/MenuDialog';


let siteName = `Admin`;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  backgroundColor: 'secondary',
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const PrivateLayout = (props) => {
  
  const [open, setOpen] = React.useState(false);
  let location = useLocation();
  let navigate = useNavigate();

  const [mode, setMode] = React.useState(
    getLocalStorage("theme") ? getLocalStorage("theme") : "light"
  );

  React.useEffect(()=>{
    //
   $(window).scrollTop(0,0);
   $('title').html(`${location.pathname.split('/')[1]?location.pathname.split('/')[1].charAt(0).toUpperCase() + location.pathname.split('/')[1].slice(1): `Home`} | ${siteName}`)
  },[location]);

  const colorMode = () => {
    setMode((prevMode) =>
      prevMode === "light"
        ? setLocalStorage("theme", "dark")
        : setLocalStorage("theme", "light")
    );
    // setLocalStorage("theme", mode);
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    let themeMode = getLocalStorage("theme");
    let t = themeMode ? themeMode : "light";
    setMode(t);
  }, [mode]);

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleLogout = async (e) => {
    e.preventDefault();

    window.localStorage.removeItem("access");
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 300);
  };

  // for icon components

  const IconsList = (props) =>{
    let {icon, ...rest} = props;
   
    return (
        <>
           <IconButton {...rest}>
           {icon}
           </IconButton>
        </>
    )
  }

  const userData = getLocalStorage("user");
  let profile = userData ? userData : "";


  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const [openNotification, setOpenNotification] = React.useState(false);
  const [anchorElNotification, setAnchorElNotification] = React.useState(null);
  const [notifiCount, setNotifiCount] = React.useState(2);

  const handleOpenNotification = (event) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setAnchorElNotification(null);
  };

  const handleNotificationCount = (count) => {
    setNotifiCount(count);
  };

  const NOTIFICATIONS = [];

  const unReadNotification = [];


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", bgcolor: "background.default" }}>
        <CssBaseline />
        <AppBar open={open}>
          <Toolbar sx={{ bgcolor: "background.paper" }}>
            <IconButton
              color="primary"
              aria-label="open drawer"
              className="menu-icon"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon sx={{ fontSize: 23 }} className={`menu-icon`} />
            </IconButton>
            <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  ml: 0,
                  cursor: "pointer",
                  mt: {xs:1, md:0},
                }}
                onClick={() => navigate(`/user`)}

              >
               {
                /**
                *  Your company Logo
                 */
               }
                <img src={siteLogo} style={{height:`50px`,width: `50px`}} alt='logo' />
              </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              {mode === "light" ? (
                <>
                  <IconButton
                    color="inherit"
                    sx={{ mr: 0 }}
                    onClick={colorMode}
                  >
                    <DarkModeIcon
                      sx={{ fontSize: 23, color: `primary.light` }}
                    />
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton
                    color="inherit"
                    sx={{ mr: 0 }}
                    onClick={colorMode}
                  >
                    <LightModeIcon
                      sx={{ fontSize: 23, color: `primary.light` }}
                    />
                  </IconButton>
                </>
              )}
              
              <IconButton
                size="large"
                aria-label="show notifications"
                color="inherit"
                onClick={handleOpenNotification}
                aria-controls={openNotification ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openNotification ? "true" : undefined}
              >
                <Badge
                  badgeContent={unReadNotification && unReadNotification.length}
                  color="error"
                >
                  <NotificationsIcon sx={{ fontSize: 23 }} />
                </Badge>
              </IconButton>
              <NotificationMenu
                openNotification={openNotification}
                handleClose={handleCloseNotification}
                anchorEl={anchorElNotification}
                handleCount={handleNotificationCount}
                data={NOTIFICATIONS}
              />
              <Tooltip title="Account Setting" className={``}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 1 }}>
                  <Stack direction="row" spacing={2}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      variant="dot"
                    >
                      <Avatar
                        sx={{
                          width: 30,
                          height: 30,
                          bgcolor: teal[400],
                          color: `#fff`,
                        }}
                      >
                      A</Avatar>
                    </StyledBadge>
                  </Stack>
                </IconButton>
              </Tooltip>
              <AccountMenu
                handleCloseUserMenu={handleCloseUserMenu}
                anchorElUser={anchorElUser}
                profile={profile && profile}
              />

              <MenuDialog/>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          ModalProps={{
            keepMounted: true,
        }}
          sx={{ display: { xs: "none", md: "block" }, backgroundColor: '#dcdcdc' }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon sx={{ fontSize: 23 }} />
              ) : (
                <ChevronLeftIcon sx={{ fontSize: 23 }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider sx={{mb:1}}/>
          <List>
            {
                /** your private pages */

                privatePages&&privatePages.slice(0,3).map((p,i)=> (
                    <React.Fragment key={p&&p._id}>
                    <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        bgcolor: 
                                location.pathname === `${p&&p.path}`
                                ? (mode==='light')?`#ddd`:`#262626`
                                : `inherit`,
                    }}
                    onClick={() => navigate(`${p&&p.path}`)}
                    >
                    <ListItemIcon
                        sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        }}
                    >
                        <IconsList 
                        
                        icon={React.cloneElement(p&&p.icon, null)}
                        sx={{ fontSize: 29 }} 
                        color={
                            location.pathname === `${p&&p.path}` ? `secondary` : `primary`
                        }
                          />
                                          
                    </ListItemIcon>
                    <ListItemText
                        primary={
                        <Typography
                            variant="h6"
                            className="other-text"
                            sx={{
                            fontWeight: 400,
                            color:
                                location.pathname === `${p&&p.path}`
                                ? `secondary.light`
                                : `primary.light`,
                            }}
                        >
                            {p&&p.name}
                        </Typography>
                        }
                        sx={{ opacity: open ? 1 : 0 }}
                    />
                    </ListItemButton>
                    </React.Fragment>
                ))
            }
            
          </List>
          <Box
            sx={{
              width: `100%`,
            }}
            className="support"
          >
            <List className="bottom-navbar">
            {
                /** your private pages */

                privatePages&&privatePages.slice(3).map((p,i)=> (
                    <React.Fragment key={p&&p._id}>
                    <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        bgcolor: 
                                location.pathname === `${p&&p.path}`
                                ? (mode==='light')?`#ddd`:`#262626`
                                : `inherit`,
                    }}
                    onClick={() => navigate(`${p&&p.path}`)}
                    >
                    <ListItemIcon
                        sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        }}
                    >
                        <IconsList 
                        
                        icon={React.cloneElement(p&&p.icon, null)}
                        sx={{ fontSize: 29 }} 
                        color={
                            location.pathname === `${p&&p.path}` ? `secondary` : `primary`
                        }
                          />
                                          
                    </ListItemIcon>
                    <ListItemText
                        primary={
                        <Typography
                            variant="h6"
                            className="other-text"
                            sx={{
                            fontWeight: 400,
                            color:
                                location.pathname === `${p&&p.path}`
                                ? `secondary.light`
                                : `primary.light`,
                            }}
                        >
                            {p&&p.name}
                        </Typography>
                        }
                        sx={{ opacity: open ? 1 : 0 }}
                    />
                    </ListItemButton>
                    </React.Fragment>
                ))
            }
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  mb: 2,
                }}
                onClick={handleLogout}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 4 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LogoutIcon sx={{ml:1, fontSize:23}} color="error" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        color: `error.light`,

                      }}
                    >
                      Logout{" "}
                    </Typography>
                  }
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              {open ? (
                <>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 2,
                    }}
                  ></Box>
                  <Box
                    sx={{
                      p: 1,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      p: 1,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography className="other-text">
                      © Copyright 2022 
                    </Typography>
                  </Box>
                </>
              ) : (
                <></>
              )}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <DrawerHeader />
          {
          /**
              VIEW PAGES WILL RENDER IN OUTLET
            */
          }
          <Box
          sx={{
            bgcolor: (mode==='light')?`#ddd`:`background.default`,
          }}
          >
          <Outlet />
          </Box>

        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PrivateLayout;
