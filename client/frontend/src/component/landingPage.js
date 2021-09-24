import React from 'react';
// import { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import "../CSS/landingPage.css";

const LandingPage = () => {
    return(
        <div className="home"> 
            <h4>Welcome to my Ecommerce</h4>
            <Button variant="primary">Continue as Guest</Button>
        </div>

    )
}

export default LandingPage;