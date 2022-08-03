import * as React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { teal, purple, blue, green, red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {timeSince} from '../../../utils/timeSince'
import { NotificationSkeleton } from './Skeletons';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';


const NotificationMenu = (props) => {
  
  

  return (
    <Menu
      sx={{ mt: "35px" }}
      id="menu-appbar"
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(props.anchorEl)}
      onClose={props.handleClose}
    >
      <Paper
        sx={{
          width: 350,
          maxWidth: "100%",
          height: 470,
          mt: -1,
          mb: -1,
          bcolor: `background.default`,
        }}
      >
        <MenuList dense>
          <MenuItem sx={{ justifyContent: "center" }}>
            <Typography
              variant="h4"
              noWrap
              className='other-text'
              sx={{ fontWeight: 700, color: `primary.text`,mb:2 }}
            >
              {`NOTIFICATIONS`}
            </Typography>
          </MenuItem>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 2,
              mt: -1,
              mb: -1,
            }}
          >
            <div style={{ display: "flex" }}>
              <CircleNotificationsRoundedIcon
                sx={{ fontSize: 20 }}
                color="secondary"
              />
              &nbsp;
              <Typography
                variant="h6"
                className='other-text'
                sx={{ fontWeight: 500, color: `primary.text` }}
              >
                {`MOST RECENT`}
              </Typography>
            </div>
            <Link to='/user/notification'  onClick={props.handleClose} >
                <Typography
                variant="h6"
                className='other-text'
                color="secondary"
                >
                {`View All`}
                </Typography>
            </Link>
          </Box>
          <Divider/>
          {
            props.data&&props.data.length>0?
            (
              props.data &&
            props.data.map((n, index) => {
              let notDate = (new Date(n.createdAt).getTime())
              let since  = timeSince(notDate);
              return (
                <React.Fragment key={index.toString()}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignContent: "flex-start",
                      p: 1,
                      height: 85,
                      borderRadius: 1,
                      backgroundColor:
                        n && n.read && n.read
                          ? `background.paper`
                          : `background.default`,
                    }}
                  >
                    <IconButton sx={{ mr: 1, mt: 1 }}>
                      <Avatar
                        alt={n && n.avatar && n.avatar}
                        src={n && n.avatar && n.avatar}
                        sx={{
                          mt: -5,
                          width: 30,
                          height: 30,
                          bgcolor: n && n.avatar ? "" : purple[500],
                        }}
                      />
                    </IconButton>
                    <Box>
                      <Typography
                        variant="h6"
                        color="primary.text"
                        className='other-text'
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {n &&
                          n.userObj.displayName &&
                          n.userObj.displayName.charAt(0).toUpperCase()}
                        {n && n.userObj.displayName && n.userObj.displayName.slice(1)}
                      </Typography>
                      <Typography
                      className='other-text'
                        sx={{
                          color: `primary.light`,
                          mt: 1,
                          fontWeight: 300,
                          fontSize: 11,
                        }}
                      >
                        {n && n.content && n.content.substr(0, 40)} ...
                      </Typography>
                      <Box>
                        <Typography
                        className='other-text'
                          sx={{
                            fontWeigt: 600,
                          }}
                         
                        >
                          {since && since}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          mt: -2,
                          ml: -7,
                        }}
                      >
                        <Typography sx={{ flexGrow: 1 }}></Typography>

                        <Tooltip title={n && n.read ? `` : `Mark As Read`}>
                          {n && n.read ? (
                            <>
                              <IconButton>
                                <MarkEmailReadRoundedIcon
                                  onClick={props.handleClose}
                                  sx={{
                                    fontSize: 20,
                                    color: blue[500],
                                  }}
                                />
                              </IconButton>
                            </>
                          ) : (
                            <>
                              <IconButton>
                                <MailRoundedIcon
                                  id={n && n._id}
                                  sx={{
                                    fontSize: 18,
                                    color: blue[500],
                                  }}
                                />
                              </IconButton>
                            </>
                          )}
                        </Tooltip>
                      </Box>
                    </Box>
                  </Box>
                  <Divider  />
                </React.Fragment>
              );
            })

            ):

            <>
            <Box
              sx={{
                mt:5,
                p:3,
                display: 'flex',
                justifyContent: 'center',
              }}
              >
                <NotificationsNoneSharpIcon color='primary' sx={{fontSize: 150}} />
              </Box>
              <Box
              sx={{
                p:3,
                display: 'flex',
                justifyContent: 'center',
                mt: -6,
              }}
              >
                <Box
                sx={{
                  mb:7
                }}
                >
                <Typography
                className='other-text'
                color='text.primary'
                
                sx={{textAlign: 'center'}}
                >
                No New Notifications Yet!
                </Typography>
                <Typography
                className='other-text'
                color='primary.light'
                
                sx={{textAlign: 'center'}}
                >
                All notifications will show up here.
                </Typography>
                </Box>
              </Box>
            </>
          }
        </MenuList>
      </Paper>
    </Menu>
  );
};

export default NotificationMenu;
