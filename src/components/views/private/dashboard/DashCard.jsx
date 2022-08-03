import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import { blue, teal, red, purple, amber } from "@mui/material/colors";

const DashCard = ({title, icon, count, bgcolor, primaryColor, secondaryColor, link, bottomPercentage, sign, bottomIcon, bottomText, bottom}) =>{
  let navigate = useNavigate();

  return (
      <>
      <Box onClick={() => navigate(link?link: `/user`)} sx={{position: 'relative',bgcolor: bgcolor?bgcolor:'background.paper', display: 'flex',width:`100%`,p:0, mr:2, mb:2, justifyContent: 'space-between', borderRadius:0, border: `1px solid #ddd`,}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', mt:2 }}>
          <Typography component="div" variant="h4" color={primaryColor?primaryColor:'secondary.light'} className='other-text'>
            {count?count:0}
          </Typography>
          <Typography variant="h6" color={secondaryColor?secondaryColor:"primary.light"} component="div" className='other-text' sx={{fontWeight:400}}>
           {title}
          </Typography>
          {
            bottom?
            <>
             <Box
             sx={{
              display: 'inline-flex',
              justifyContent: 'flex-end',
              mt:0,
              bottom:1,
              position: 'absolute',
             }}
             >
              {
                bottomIcon
              }
              <Typography component="div" className='other-text' sx={{fontWeight:400, fontSize: 10, color: (sign==='-'?red[400]:teal[400])}}>
              {sign} {bottomPercentage}
              </Typography>

             </Box>
            </>
            :
            <>
            
            </>
          }
        </CardContent>

      </Box>
        <Box sx={{display: 'flex',p:3, justifyContent: 'flex-start'}}>
          {
          icon
          }
        </Box>
      </Box>
      </>
  );
}


export default DashCard;