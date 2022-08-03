import React from 'react';
import {Outlet} from 'react-router-dom';

const PublicLayout = () =>{

    return(
        <>
            <h1 style={{marginTop: '100px'}}> Public Layout</h1>
            <Outlet/>
        </>
    )
};

export default PublicLayout;