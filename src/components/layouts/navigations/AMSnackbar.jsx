
import React from 'react';
import PropTypes from 'prop-types';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AMSnackbar = ({override,alertText, alertTextColor, duration, anchorOrigin, open, handleClose}) => {

    const handleCloseSnackbar = () => {
      handleClose();
    };

    return (
    <>
    {
        override?(
            <>
            <Snackbar open={open} 
    autoHideDuration={duration?duration:1500} 
    onClose={handleCloseSnackbar} 
    anchorOrigin={
        anchorOrigin?
        {vertical: anchorOrigin.vertical, horizontal: anchorOrigin.horizontal}
        : { vertical: 'bottom', horizontal: 'right' }
    }>
        <Alert onClose={handleCloseSnackbar} severity={alertTextColor?alertTextColor: `success`} sx={{bgcolor:`background.paper`, width: '100%' }}>
            <Typography variant='h6' className='other-text'>
            {alertText?alertText: ` Something Went Wrong!`}
            </Typography>
        </Alert>
    </Snackbar>
            </>
        ):
        <>
<Snackbar open={open} 
    autoHideDuration={duration?duration:1500} 
    onClose={handleCloseSnackbar} 
    anchorOrigin={
        anchorOrigin?
        {vertical: anchorOrigin.vertical, horizontal: anchorOrigin.horizontal}
        : { vertical: 'top', horizontal: 'right' }
    }>
        <Alert onClose={handleCloseSnackbar} severity={alertTextColor?alertTextColor: `success`} sx={{bgcolor:`background.paper`, width: '100%' }}>
            <Typography variant='h6' className='other-text'>
            {alertText?alertText: ` Something Went Wrong!`}
            </Typography>
        </Alert>
    </Snackbar>
        </>
    }
    </>
    );
};

AMSnackbar.propTypes = {
 alertText: PropTypes.string,
 alertTextColor: PropTypes.string,
 duration: PropTypes.number,
 anchorOrigin: PropTypes.object,
 open: PropTypes.bool
}

export default AMSnackbar;