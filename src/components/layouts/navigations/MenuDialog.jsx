import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Drawer from "@mui/material/Drawer";
import WidgetsIcon from "@mui/icons-material/Widgets";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import HelpIcon from "@mui/icons-material/Help";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link } from "react-router-dom";
import StarsIcon from "@mui/icons-material/Stars";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LockIcon from "@mui/icons-material/Lock";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InfoIcon from "@mui/icons-material/Info";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';
import siteLogo from "../../../assets/images/logo.png";
import {privatePages} from '../../../routes/pages';
import {getLocalStorage} from '../../../utils/Storage';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import EmailIcon from '@mui/icons-material/Email';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

let mode = getLocalStorage('theme')?getLocalStorage('theme'): 'light';

const MenuDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    right: open,
  });
  let location = useLocation();
  let navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleClickOpen = () => {
    setOpen(true);
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

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    window.localStorage.removeItem("access");
    setTimeout(() => {
      navigate("/", {replace:true});
    }, 300);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          width: `100%`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "background.default",
          }}
        >
          <IconButton
            onClick={() => navigate("/couriers")}
            sx={{ borderRadius: 1, mt: 0, mb: 0 }}
          >
            {
              // SITE LOGO
            }
            <img src={siteLogo} style={{height:`50px`,width: `50px`}} alt='logo' />

          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon sx={{ fontSize: 19 }} color="primary.dark" />
          </IconButton>
        </Box>
        <Box
          sx={{
           
            width: `100%`,
          }}
        >
          <List onClick={toggleDrawer(anchor, false)}>
          
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
                    onClick={toggleDrawer(anchor, false)}
                    >
                    <ListItemIcon
                    sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    }}
                    onClick={() => navigate(`${p&&p.path}`)}
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
                    onClick={() => navigate(`${p&&p.path}`)}
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
                        mr: open ? 0 : "auto",
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
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <LogoutIcon
                    sx={{ml:1, fontSize: 23 }}
                    color='error'
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        color:'error.light',
                      }}
                    >
                     Logout{" "}
                    </Typography>
                  }
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
              <Divider sx={{ width: `100%` }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 2,
                  bottom: 0,
                }}
              >
                
              </Box>
              <Box
                sx={{
                  p: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
               
              </Box>
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
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
  return (
    <>
      <IconButton>
      <WidgetsIcon sx={{ fontSize: 23, mt:0, display: {xs: 'inline-flex', md: 'none'} }} onClick={handleClickOpen} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        backdropComponent={
          <Backdrop
            sx={{
              color: "secondary.main",
              zIndex: (theme) => theme.zIndex.drawer + 1,
              backgroundColor: "background.paper",
            }}
            invisible={true}
          >
            <CircularProgress color="primary" /> 
          </Backdrop>
        }
      >
        <AppBar>
          <Drawer
            variant="persistent"
            anchor={"right"}
            open={open}
            sx={{ bgcolor: "info.light" }}
          >
            {list("right")}
          </Drawer>
        </AppBar>
      </Dialog>
    </>
  );
};
export default MenuDialog;
