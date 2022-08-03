import React from "react";
import { blue, teal, red, purple, amber } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DashCard from "./DashCard";
import RecipentCard from "./RecipentCard";
import Graph from "./Graph";
import $ from "jquery";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Divider from '@mui/material/Divider';
import {emailData} from '../../../../constants/data';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import RoundaboutRightIcon from '@mui/icons-material/RoundaboutRight';
import TurnSlightRightRoundedIcon from '@mui/icons-material/TurnSlightRightRounded';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EmailCard from './EmailCard'
import EmailTable from './EmailTable';

const View = () => {

  const Recipents = emailData&&emailData.recipients;

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
              mt: 2,
            }}
          >
          
          Email Marketing Dashboard
          </Typography>
          <Typography
            variant="h5"
            color="primary.light"
            className="other-text"
            sx={{
              mb: 0,
            }}
          >
           Created 20 days ago
          </Typography>
          </Box>
          <Divider sx={{mb:4,mt:1}} />
        </Grid>
        <Grid xs={12} md={6}>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
            <RecipentCard data={Recipents} />
          </Box>
        </Grid>

        <Grid xs={12} md={6}>

          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              justifyContent: "flex-start",
            }}
          >
            <DashCard
            title={`Successful Deliveries`}
            primaryColor="#fff"
            secondaryColor="#fff"
            bgcolor={blue[400]}
            link={`/user`}
            icon={<MarkEmailReadIcon sx={{ fontSize: 40, color: `#fff`}} />}
            count={2380}
          />
            <DashCard
            title={`Total Bounces`}
            link={`/user`}
            bottom={true}
            bottomPercentage={`10%`}
            sign={`+`}
            bottomText={`SINCE LAST WEEK`}
            bottomIcon={
              <ArrowUpwardIcon sx={{ fontSize: 10, color: teal[600]}}/>
            }
            icon={<RoundaboutRightIcon sx={{ fontSize: 40, color: blue[400]}} />}
            count={340}
              
            />
          </Box>

          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              justifyContent: "flex-start",
            }}
          >

          <DashCard
          title={`Total Unsubs`}
          link={`/user`}
          bottom={true}
          bottomPercentage={`10%`}
          bottomText={`SINCE LAST WEEK`}
          sign={`-`}
          bottomIcon={
            <ArrowDownwardIcon sx={{ fontSize: 10, color: red[600]}}/>
          }
          icon={<UnsubscribeIcon sx={{ fontSize: 40, color: blue[400]}} />}
          count={90}
            
          />
          <DashCard
            title={`Total Recipients`}
            primaryColor="#fff"
            secondaryColor="#fff"
            bgcolor={teal[400]}
            link={`/user`}
            
            icon={<AttachEmailIcon sx={{ fontSize: 40, color: `#fff`}} />}
            count={98}
           />
          </Box>

        </Grid>
      </Grid>

   {/**
       *  Email performance table & subscribers card
       */}
       <Grid
       container
       direction="row"
       justifyContent="center"
       sx={{
         p: 2,
         mt: 10,
         mb: 15,
       }}
       spacing={3}
     >
     <Grid xs={12} md={4}></Grid>
       <Grid xs={12} md={8}>
         <Box
           sx={{
             justifyContent: "flex-start",
             p: {xs:1, md:0}
           }}
         >
          <EmailTable data={Recipents}/>
         </Box>
       </Grid>
     </Grid>
    </>
  );
};

export default View;
