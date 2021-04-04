import React,{useState,useEffect} from 'react';
import axios from 'axios';
import StockHome from '../components/StockHome';
import SP from '../components/StockPlus';
import IndexHomeCard from '../components/IndexHomeCard';

const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/';


function HomePage(props) {
    const [gainerData, setGainerData] = useState([]);
    const [loserData, setLoserData] = useState([]);
    const [volumeData, setVolumeData] = useState([]);
    const [indexData, setIndexData] = useState([]);

    useEffect(()=>{
        axios.get(URL+'stockf/topgainers')
            .then((response)=>{
                if(response.status===200){   
                    console.log("Status OK! - Gainers")
                    setGainerData(response.data)
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err);

        
        axios.get(URL+'stockf/toplosers')
            .then((response)=>{
                if(response.status===200){   
                    console.log("Status OK! - Losers")
                    setLoserData(response.data)
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err);

            
        axios.get(URL+'stockf/activevolume')
            .then((response)=>{
                if(response.status===200){   
                    console.log("Status OK! - Volumes")
                    setVolumeData(response.data)
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err);


        axios.get(URL+'indexf/top')
            .then((response)=>{
                if(response.status===200){   
                    console.log("Status OK! - Indexes")
                    setIndexData(response.data)
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err);

        
    },[])


    return (
        <div className="bg-light">
            <div className="container bg-white" style={{
                // backgroundColor : `gray`
            }}>
                {/* JUMBOTRON daalna hai idhar */}
                
                <h2>Build up your financial game with</h2>
                <h1 className="h1"><SP size="h1" /></h1>
                <p className="lead">
                    1. Learn about the stocks listed on National Stock Exchange of India (NSE)
                    <br/>
                    2. View the impact of the pandemic.
                    <br/>
                    3. Get the data of 1600+ stocks for over past 2 years.
                    <br/>
                    4. Get all the historical data fro the indexes.
                    <br/>
                    5. Detailed charts for research purposes
                    <br/>
                    6. Also learn the live prices of cryptocurrencies
                </p>

                <hr/>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Top Gainers</h5>
                                <div class="row">
                                    { !gainerData.length ? (
                                        <div className="text-center container">
                                            <div class="spinner-grow text-success" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <p>Loading Data</p>
                                        </div>
                                    ): gainerData.map((value,index) => {
                                            return(
                                                    <StockHome symbol={value.SYMBOL} key={index} close={value.CLOSE} diff={value['DIFF%']}/>
                                            )

                                        }
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Top Losers</h5>
                                <div class="row">
                                    { !loserData.length ? (
                                        <div className="text-center container">
                                            <div class="spinner-grow text-danger" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <p>Loading Data</p>
                                        </div>
                                    ): loserData.map((value,index) => {
                                            return(
                                                    <StockHome symbol={value.SYMBOL} key={index} close={value.CLOSE} diff={value['DIFF%']}/>
                                            )

                                        }
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                    <hr/>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Active By Volume</h5>
                                <div class="row">
                                    { !volumeData.length ? (
                                        <div className="text-center container">
                                            <div class="spinner-grow text-secondary " role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <p>Loading Data</p>
                                        </div>
                                    ): volumeData.map((value,index) => {
                                            return(
                                                    <StockHome symbol={value.SYMBOL} key={index} close={value.CLOSE} diff={value['DIFF%']}/>
                                            )

                                        }
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                    <hr/>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Active Indexes</h5>
                                <div class="row">
                                    { !volumeData.length ? (
                                        <div className="text-center container">
                                            <div class="spinner-grow text-secondary " role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <p>Loading Data</p>
                                        </div>
                                    ): indexData.map((value,index) => {
                                        if(value.Symbol === "NIFTY_100" || 
                                            value.Symbol === "NIFTY_50" || 
                                            value.Symbol === "NIFTY_500" || 
                                            value.Symbol === "NIFTY_BANK" || 
                                            value.Symbol === "NIFTY_ENERGY" || 
                                            value.Symbol === "NIFTY_IT" || 
                                            value.Symbol === "NIFTY_INFRA" ||
                                            value.Symbol === "NIFTY_MIDCAP_100" ||
                                            value.Symbol === "NIFTY_MIDCAP_50" ||
                                            value.Symbol === "NIFTY_NEXT_50" ||
                                            value.Symbol === "NIFTY_REALITY_50")
                                            return(
                                                    <IndexHomeCard symbol={value.Name} key={index} close={value.Close} diff={value['DIFF%']}/>
                                            )

                                        }
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Grid */}
                <br/>
            </div>
        </div>
    );
}

export default HomePage;