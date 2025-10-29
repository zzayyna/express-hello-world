// import styles from '../design/orderpage.module.css'
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';
// import styles from '../design/home.module.css'

function Home() {
    const [message, setMessage] = useState('')

    async function fetchData() {
        try {
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/getPokedex`);
        setMessage(JSON.stringify(res.data, null, 2));
        } catch (error) {
        console.error('API error:', error);
        setMessage('API error: ' + error.message);
        }
    }

    function handleButtonClick() {
        fetchData();
        console.log(message);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div>
                <button onClick={async () => {await handleButtonClick()}}>Test the backend API (should print the pokedex in your console)</button>
                <Link to="/kiosk"> 
                    <button>Kiosk Order</button>
                </Link>
                <Link to="/cashier"> 
                    <button>Cashier Order</button>
                </Link>
                <Link to="/manager"> 
                    <button>Manager Page</button>
                </Link>
                <Link to="/kitchen"> 
                    <button>Kitchen View</button>
                </Link>
                <Link to="/menu"> 
                    <button>Menu View</button>
                </Link>
            </div>
        </div>
    )
}
  
export default Home