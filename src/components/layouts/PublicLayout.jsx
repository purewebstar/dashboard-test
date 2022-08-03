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
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import getDesignTokens from "../../constants/theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useNavigate } from "react-router-dom";
import siteLogo from "../../assets/images/logo.png";
import { setLocalStorage, getLocalStorage } from "../../utils/Storage";

const drawerWidth = 240;

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


const PublicLayout = (props) => {
  let navigate = useNavigate();

  const [mode, setMode] = React.useState(
    getLocalStorage("theme") ? getLocalStorage("theme") : "dark"
  );

  const colorMode = () => {
    setMode((prevMode) =>
      prevMode === "light"
        ? setLocalStorage("theme", "dark")
        : setLocalStorage("theme", "light")
    );
    // setLocalStorage("theme", mode);
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  React.useEffect(() => {
    let themeMode = getLocalStorage("theme");
    let t = themeMode ? themeMode : "light";
    setMode(t);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", bgcolor: "background.default" }}>
        <CssBaseline />
        <AppBar>
          <Toolbar sx={{ bgcolor: "background.paper" }}>
          <Box
              sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              ml:4,
              mt: {xs:1, md: 0},
              cursor: 'pointer'
              }}
              onClick={() => navigate(`/`)}
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
            </Box>
          </Toolbar>
        </AppBar>
        
          {
          /**
              VIEW PAGES WILL RENDER IN OUTLET
            */
          }
          <Outlet />

      </Box>
    </ThemeProvider>
  );
};

export default PublicLayout;
