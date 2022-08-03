import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';


export const MessageSkeleton = () =>{
    return (
     
     [...new Array(3)].map(c =>(
        <>
        <Box
        sx={{
            mb:2,
        }}
        >
        <Skeleton height={20} width='30%' />
        <Skeleton height={20} width='30%' />
        <Skeleton height={80}  />
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between'
        }}
        >
        <Skeleton width="10%" />
        <Skeleton width="10%" />
       </Box>
       <Divider sx={{mt:2}} />
        </Box>
        </>
     ))
    
    );
}

export const DashboardSkeleton = () =>{
    return (
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="rectangular" width={210} height={118} />
      </Stack>
    );
}

