import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import "../CSS/landingPage.css";

const LandingPage = () => {
    const[guest, setGuest] = useState([]);
    useEffect(()=>{
        axios
            .get('/api/inventory/')
            .then(res => {
                console.log(res)
                setGuest(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const shop = () => { 
        // import {withRouter} from 'react-router-dom';
        // ...

        // class App extends React.Component {
        //   ...

        //   nextPath(path) {
        //     this.props.history.push(path);
        //   }

        //   render() {
        //     return (
        //       <button onClick={() => this.nextPath('/the/path') }>
        //         change path 
        //       </button>
        //     );
        //   }
        // }
    }
    
    return(
        <div className="home">
            <p>Welcome to my Ecommerce</p>
            <Button variant="primary" onClick={shop}>Continue as Guest</Button>    
        </div>

    )
}

export default LandingPage;