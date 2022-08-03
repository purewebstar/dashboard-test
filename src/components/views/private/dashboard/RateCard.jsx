import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import { blue, teal, red, purple, amber } from "@mui/material/colors";
import PieChart from './PieChart'
import Divider from '@mui/material/Divider';

const RateCard = ({title, icon, count, bgcolor, primaryColor, secondaryColor, link, sent, delivered, opens}) =>{
  let navigate = useNavigate();

  return (
      <>
      <Box onClick={() => navigate(link?link: `/user`)} sx={{position: 'relative',bgcolor: bgcolor?bgcolor:'background.paper', display: 'flex',width:`100%`,p:0, mr:2, mb:2, justifyContent: 'space-between', borderRadius:0, border: `1px solid #ddd`,}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', mt:2 }}>
          <Typography variant="h6" component="div" className='other-text' sx={{fontWeight:700}}>
          Email marketing funnel
          </Typography>
          <Box sx={{mt:2}}>
          <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
          >
          <Typography component="div" sx={{fontSize:11, color: amber[800]}} className='other-text'>
          Sent
           </Typography>
          <Typography component="div" sx={{fontSize:11, color: amber[800]}} className='other-text'>
          {sent}
           </Typography>
          </Box>

          <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
          >
          <Typography component="div" sx={{fontSize:11, color: amber[800]}} className='other-text'>
            Delivered
           </Typography>
          <Typography component="div" sx={{fontSize:11, color: amber[800]}} className='other-text'>
          {delivered}
           </Typography>
          </Box>
          <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
          >
          <Typography component="div" sx={{fontSize:11, color: amber[800]}} className='other-text'>
            Opens
           </Typography>
          <Typography component="div" sx={{fontSize:11, color: amber[800]}} className='other-text'>
          {opens}
           </Typography>
          </Box>
          <Divider sx={{mt:1,mb:1}} />
          <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
          >
          <Typography component="div" sx={{fontSize:11, fontWeight: 700}} className='other-text'>
            Total
           </Typography>
          <Typography component="div" sx={{fontSize:11, fontWeight: 700}} className='other-text'>
            45%
           </Typography>
          </Box>
          </Box>
          
        </CardContent>

      </Box>
        <Box sx={{display: 'flex',p:3, justifyContent: 'flex-start'}}>
          <PieChart  title={title} percentage={15}  />
        </Box>
      </Box>
      </>
  );
}


export default RateCard;