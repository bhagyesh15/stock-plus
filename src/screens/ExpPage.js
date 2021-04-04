import React,{useState,useEffect} from 'react';
import axios from 'axios';
import StockHome from '../components/StockHome';

const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/';

function ExpPage(props) {
    const [gainerData, setGainerData] = useState([]);
    const [loserData, setLoserData] = useState([]);

    useEffect(()=>{
        axios.get(URL+'stockf/topgainers')
            .then((response)=>{
                if(response.status===200){   
                    console.log("Status OK! - Stocks")
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
                    console.log("Status OK! - Stocks")
                    setLoserData(response.data)
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err);

        
    },[])

    return (
        <div className="bg-light">
            <div className="container bg-white">
                <hr/>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Top Gainers</h5>
                                <div className="row">
                                    { !gainerData.length ? (
                                        <div className="text-center container">
                                            <div className="spinner-grow text-success" role="status">
                                                <span className="sr-only">Loading...</span>
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
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Top Losers</h5>
                                <div className="row">
                                    { !loserData.length ? (
                                        <div className="text-center container">
                                            <div className="spinner-grow text-danger" role="status">
                                                <span className="sr-only">Loading...</span>
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
                </div>
            </div>
        </div>
    );
}

export default ExpPage;