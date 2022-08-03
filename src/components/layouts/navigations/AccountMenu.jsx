
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import SettingsPowerRoundedIcon from "@mui/icons-material/SettingsPowerRounded";
import ListItemIcon from "@mui/material/ListItemIcon";
import {removeLocalStorage} from '../../../utils/Storage';
import {deleteCookie} from '../../../utils/Cookies';
import { useNavigate } from "react-router-dom";
import {teal} from "@mui/material/colors";

const AccountMenu = (props) => {
  let navigate = useNavigate();

  // handling logout
  const handleLogout = async (e) => {
    e.preventDefault();
    // removing access token
    removeLocalStorage('access');
    // removing renew token
    deleteCookie('refresh');
    setTimeout(() => {
      navigate("/", {replace:true});
    }, 300);
  };
  return (
    <Menu
      sx={{ mt: "35px" }}
      id="menu-appbar"
      anchorEl={props.anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(props.anchorElUser)}
      onClose={props.handleCloseUserMenu}
    >
      <Paper
        sx={{
          width: 240,
          maxWidth: "100%",
          mt: -3,
          mb: -1,
          bgcolor: `background.paper`,
        }}
        className='other-text'
      >
        <MenuList>
          <MenuItem>
            <Box
              sx={{
                mx: "auto",
                width: 200,
                p: 1,
                mb: -2,
                textAlign: "center",
                fontWeight: "700",
              }}
            >
             <Avatar 
                sx={{
                  width: 50,
                  height: 50,
                  p: 0,
                  mb: 1,
                  mt: 1,
                  left: "35%",
                  bgcolor: teal[400],
                  color: "#fff",
                }}
              >A</Avatar>
              <Typography
                variant="h5"
                noWrap
                component="div"
                color="secondary"
                className='other-text'
                sx={{ fontWeight: 400, mb: 1, mt: 2 }}
              >
                {'admin'}
               
              </Typography>
            </Box>
          </MenuItem>
          <Divider />
          <MenuItem sx={{mb:1}} onClick={handleLogout}>           
            <ListItemIcon>
              <SettingsPowerRoundedIcon sx={{ fontSize: 22 }} />
            </ListItemIcon>
            <Typography
              variant="h5"
              noWrap
              component="div"
              id="nav-logout"
              className='other-text'
              sx={{ color: `danger.text`, fontWeight: 400 }}
            >
            Logout
            </Typography>         
          </MenuItem>
        </MenuList>
      </Paper>
    </Menu>
  );
};

export default AccountMenu;
