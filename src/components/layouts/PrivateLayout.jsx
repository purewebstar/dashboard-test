import React from 'react';
import {Outlet} from 'react-router-dom';

const PrivateLayout = () =>{

    return(
        <>
            <h1 style={{marginTop: '100px'}}> Private Layout</h1>
            <Outlet/>
        </>
    )
};

export default PrivateLayout; 