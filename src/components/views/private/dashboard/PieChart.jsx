import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex',justifyContent: 'center'}}>
      <CircularProgress 
       variant="determinate" 
      size={90}
      thickness={10}
      color='secondary'{...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h6' className='other-text' sx={{fontWeight:700}} component="div" color="text.primary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

const CircleChart = ({percentage, title}) =>{

  return(
    <>
     <Box
     sx={{
      width: `100%`,
      display: 'flex',
      justifyContent: 'center',
     }}
     >
     <Box

     >
     <CircularProgressWithLabel value={percentage} />

      <Typography variant="h6" color='secondary.dark' component="div" className='other-text' sx={{fontWeight:400}}>
        {title}
      </Typography>
     </Box>
     </Box>
    </>
  )
}

export default CircleChart;