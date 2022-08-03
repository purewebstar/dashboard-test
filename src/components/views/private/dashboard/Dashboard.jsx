import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import $ from "jquery";
import Divider from '@mui/material/Divider';

const View = () => {

  React.useEffect(() => {
    $("title").html("Dashboard | Admin");
    //
    $(window).scrollTop(0, 0);
  }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        sx={{
          p: 2,
        }}
      >
        <Grid xs={12}>
          <Box>
          <Typography
            variant="h4"
            color="text.primary"
            className="other-text"
            sx={{
              fontWeight: 600,
              mt: 1,
            }}
          >
          Email Marketing Dashboard
          </Typography>
          <Typography
            variant="h6"
            color="primary.light"
            className="other-text"
            sx={{
              mb: 0,
            }}
          >
           Created 20 days ago
          </Typography>
          </Box>
          <Divider sx={{mb:3,mt:1}} />
        </Grid>

      </Grid>

    </>
  );
};

export default View;
