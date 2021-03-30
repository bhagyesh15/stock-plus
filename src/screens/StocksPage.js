import React,{useState,useEffect} from 'react';
import NavigationBar from '../components/Navigationbar';
import {Table} from 'react-bootstrap';

import axios from 'axios';

function StocksPage(props) {
    const [symbolData,setSymbolData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/symbols')
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
            <tr key="index">
                <td>{stock.SYMBOL}</td>
                <td>{stock["NAME OF COMPANY"]}</td>
                <td>{stock["DATE OF LISTING"]}</td>
                <td>{stock["ISIN NUMBER"]}</td>
                <td>{stock["FACE VALUE"]}</td>
            </tr>
        )
    }

    const errData = () => {
        console.log(symbolData.length)
        if(!symbolData.length){
            return(
                <p>Error Loading Data</p>
            )
        }
    }

    return (
        <div>
            <NavigationBar/>

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
            {errData()}
        </div>
    );
}

export default StocksPage;