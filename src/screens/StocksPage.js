import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';

import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/';

function StocksPage(props) {
    const [symbolData,setSymbolData] = useState([]);
    // const [sortConfig,setSortConfig] = useState({'SYMBOL' : 0})
    const [currentPage,setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(100)

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


    //Pagination
    const indexOfLastRow = currentPage*rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = symbolData.slice(indexOfFirstRow,indexOfLastRow)

    //ChangePage
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    // const sortBy = key =>{
    //     let localData = symbolData
    //     console.log(sortConfig[key])
    //     localData.sort( (a,b) =>{
            
    //             return b[key] > a[key]
            
    //     })
    //     setSortConfig(prevState => ({
    //         ...prevState, 
    //         [key]: !sortConfig[key]
    //     }));
    //     setSymbolData(localData)
    //     console.log(localData)
    //     console.log('after func',sortConfig)
    // }


    const renderData = (stock,index) => {

        return(
            <tr key={index}>
                    <td>{index+1+indexOfFirstRow}</td>
                    <td className="lead">
                        <Link to={"/stock/"+stock.SYMBOL} className="text-reset" style={{textDecoration: `none`}}>
                            {
                                parseFloat(stock['PREV CLOSE']) > parseFloat(stock['CLOSE']) ? (
                                    <span className="text-danger">{stock.SYMBOL}</span>
                                ):(
                                    <span className="text-success">{stock.SYMBOL}</span>
                                )
                            }
                        </Link>
                    </td>
                    <td className="lead">
                        <Link to={"/stock/"+stock.SYMBOL} className="text-reset" style={{textDecoration: `none`}}>
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
        <div className="bg-light">
            <div className="container bg-white">
                <h5 className="text-left pt-5">A list of Stocks and its Details are available here</h5>
                <Pagination rowsPerPage={rowsPerPage} totalRows={symbolData.length} paginate={paginate} />
                <Table striped bordered hover className="container">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Symbol</th>
                            <th>Company Name</th>
                            <th>Date of Listing</th>
                            <th>ISIN Number</th>
                            <th>Face Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map(renderData)}
                    </tbody>
                </Table>
                {loadData()}
            </div>
        </div>
    );
}

export default StocksPage;