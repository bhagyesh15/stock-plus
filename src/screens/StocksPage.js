import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';

import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/';

function StocksPage(props) {
    const [symbolData,setSymbolData] = useState([]);

    useEffect(()=>{
        axios.get(URL+'stocks')
            .then((response)=>{
                if(response.status===200){   
                    console.log("Status OK!")
                    setSymbolData(response.data)
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err)
    },[])

    const renderData = (stock,index) => {

        return(
            <tr key={index}>
                    <td className="lead">
                        <Link to={"/stock/"+stock.SYMBOL} className="text-reset" style={{textDecoration: `none`}}>
                            {stock.SYMBOL}
                        </Link>
                    </td>
                    <td className="lead">
                        <Link to={"/stock/"+stock.SYMBOL} className="text-reset" style={{textDecoration: `none`}} stockData={stock}>
                            {stock["NAME OF COMPANY"]}
                        </Link>
                    </td>
                    <td>{stock["DATE OF LISTING"]}</td>
                    <td>{stock["ISIN NUMBER"]}</td>
                    <td>{stock["FACE VALUE"]}</td>
            </tr>
        )
    }

    const loadData = () => {
        console.log(symbolData.length)
        if(!symbolData.length){
            return(
                <div>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <p>Loading Data</p>
                </div>
            )
        }
    }

    return (
        <div>
            {/* {JSON.stringify(symbolData)} */}
            <Table striped bordered hover className="container">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Company Name</th>
                        <th>Date of Listing</th>
                        <th>ISIN Number</th>
                        <th>Face Value</th>
                    </tr>
                </thead>
                <tbody>
                    {symbolData.map(renderData)}
                </tbody>
            </Table>
            {loadData()}
        </div>
    );
}

export default StocksPage;