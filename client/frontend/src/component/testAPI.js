import React from 'react';
import { useEffect, useState } from 'react';

const TestAPI = () => {
    const[initialState, setInitialState] = useState([]);

    useEffect(()=>{
        fetch('/api/inventory/', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
        }})
        .then(res=>{
            if(res.ok){
                return res.json()
            }})
        .then(jsonResponse => setInitialState(jsonResponse))
    },[])

    console.log(initialState)
    return(
        <div>Hey API</div>
    )
}

export default TestAPI;