import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Coin from '../components/Coin';
import { FormControl } from 'react-bootstrap';

const URL = process.env.REACT_APP_CRYPTO_URL;
console.log(URL)

function CryptoPage(props){
    const [coins, setCoins] = useState([]);
    const [search,setSearch] = useState('');

    useEffect(() => {
        axios.get(URL)
            .then(response => {
                if(response.status===200){   
                    console.log("Status OK! - Crypto")
                    setCoins(response.data)
                    console.log(response.data)
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err);
    },[]);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
        )

    return (
        <div className="bg-light">
            <div className="container bg-white">
                <div >
                    {/* <h1>Search a Crypto-Currency:</h1> */}
                    <FormControl
                        type="text" className="mr-sm-2 d-flex" placeholder="Search" onChange={handleChange} style={{width:`300px`, margin:`10px auto`}}
                        />
                </div>

                <table class="table table-hover" style={{overflowY:`overlay`}}>
                    <thead>
                        <th></th>
                        <th>Cryptocurrency Name</th>
                        <th>Symbol</th>
                        <th>Current Price</th>
                        <th>Market Cap</th>
                        <th>Change</th>
                    </thead>
                    <tbody>
                        {filteredCoins.map(coin => {
                            return (
                                <Coin 
                                key={coin.id} 
                                Name={coin.name} 
                                Symbol={coin.symbol} 
                                Image={coin.image} 
                                Volume={coin.market_cap}
                                Price={coin.current_price}
                                priceChange={coin.price_change_percentage_24h}
                                />
                                )
                            })}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default CryptoPage;