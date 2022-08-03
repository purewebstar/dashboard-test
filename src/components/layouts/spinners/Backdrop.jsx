import React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import getDesignTokens from "../../../constants/theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getLocalStorage } from "../../../utils/Storage";

const MainBackdrop = ({ title, subtitle, open }) => {
  const [mode, setMode] = React.useState(
    getLocalStorage("theme") ? getLocalStorage("theme") : "light"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  React.useEffect(() => {
    let themeMode = getLocalStorage("theme");
    let t = themeMode ? themeMode : "light";
    setMode(t);
  }, [mode]);
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Backdrop
          sx={{
            color: "#218C6F",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            display: "block",
            backgroundColor: `background.paper`,
          }}
          open={true}
        >
          <Box
            sx={{ p: { md: 2, sm: 0 }, height: `100%` }}
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  ml: 1,
                  cursor: "pointer",
                  mt: 2,
                }}
              ></Box>
              <Box sx={{ flexGrow: 1 }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                mt: 15,
              }}
            >
              <CircularProgress
                sx={{  position: "absolute", top: `35%` }}
                size={110}
                thickness={10}
                color='secondary'
              />
            </Box>
          </Box>
        </Backdrop>
      </ThemeProvider>
    </>
  );
};
MainBackdrop.propTypes = {
  color: PropTypes.string,
  open: PropTypes.bool,
  appLayer: PropTypes.bool,
};

export default MainBackdrop;