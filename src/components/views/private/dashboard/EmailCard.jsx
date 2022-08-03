import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {
  deepOrange,
} from "@mui/material/colors";

const EmailCard = ({data}) =>{

  return (
      <>
      <Box
      sx={{
   
        bgcolor: `background.paper`,
        border: `1px solid #ddd`,
        borderRadius: 2,
        mb:2,
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 7,
          }}
        >
          <Typography
            variant="h2"
            color="text.primary"
            className='other-text'
            sx={{
              fontWeight: 600,
              mt: 2,
            }}
          >
            
            {
              3456
            }
          </Typography>
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="other-text"
            sx={{ fontWeight: 600, mt: 6, color: deepOrange[400] }}
          >
            TOTAL RECIPENTS
          </Typography>
          <Typography
            variant="body2"
            color="primary.light"
            className="other-text"
          >
            Total recipents collected through this platform.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Box>
      </>
  );
}


export default EmailCard;