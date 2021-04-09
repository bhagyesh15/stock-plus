import React,{useState,useEffect} from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import axios from 'axios';

import IndexHistoricalDataTab from '../components/IndexHistoricalDataTab';
import ChartPageIndex from '../components/ChartPageIndex';

const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/';

function IndexProfilePage(props) {
    const [indexData,setIndexData] = useState([]);
    const [diff,setDiff] = useState([{value: 0},{ perc: 0}]);
    const [historicalData,setHistoricalData] = useState([]);


    useEffect(()=>{
        axios.get(URL+'indexes/'+props.match.params.symbol)
            .then((response)=>{
                if(response.status===200){   
                    setIndexData(response.data[0]);
                    setDiff(indexData['Close'] - indexData['Open']);
                    console.log('Status OK! - indexData')
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err);
    },[props.match.params.symbol])

    useEffect(() => {
        let a = (parseFloat(indexData['Close']) - parseFloat(indexData['Open'])).toFixed(2);
        let pa = ((parseFloat(indexData['Close']) - parseFloat(indexData['Open'])) * 100 / (parseFloat(indexData['Open']))).toFixed(2)
        setDiff( [
            {value : a,
            perc: pa}]);
    },[indexData])

    useEffect(()=>{
        axios.get(URL+'index/'+props.match.params.symbol)
            .then((response)=>{
                if(response.status===200){   
                    console.log('Historical Data OK')
                    setHistoricalData(response.data)
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err);
    },[props.match.params.symbol])


    return (
        indexData.length !== 0 ? (
            <div className="bg-light">
                <div className="container bg-white">
                    <div className="row p-3">
                        <div className="col-md-6 text-left">
                            <h1 className="md-0 display-4">{indexData.Name}</h1>
                            
                            <h2 className="mb-0"> {Math.abs(diff[0].value)} <span className="md-3 ">
                                { diff[0].value >= 0 ? (
                                    <svg style={{position:`relative`, top:`-4px`}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi text-right text-success md-3" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                ) : (
                                    <svg style={{position:`relative`, top:`-3px`}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi text-danger" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                )}
                            </span> ({Math.abs(diff[0].perc)})%</h2>
                            <h5>{indexData['Close']} </h5>
                            <h6>Vol: {indexData.Volume ? ((indexData.Volume).toLocaleString("en-IN")):('')}</h6>
                            <h6>As of Date: {indexData.Date}</h6>
                        </div>

                    </div>
                    <Tabs className="container bg-white px-5" defaultActiveKey="summary" id="uncontrolled-tab-example">
                        <Tab eventKey="summary" title="Summary">
                            Summary Page
                            <div className="row">
                                <div className="col-6">
                                    <table className="text-left table">
                                        <tbody >
                                            <tr>
                                                <td>Open:</td>
                                                <td>{indexData['Open']}</td>
                                            </tr>
                                            <tr>
                                                <td>High:</td>
                                                <td>{indexData['High']}</td>
                                            </tr>
                                            <tr>
                                                <td>Low:</td>
                                                <td>{indexData['Low']}</td>
                                            </tr>
                                            <tr>
                                                <td>Close</td>
                                                <td>{indexData['Close']}</td>
                                            </tr>
                                            <tr>
                                                <td>Volume:</td>
                                                <td>{indexData.Volume ? ((indexData.Volume).toLocaleString("en-IN")):('')}</td>
                                            </tr>
                                            <tr>
                                                <td>Turnover:</td>
                                                <td>{indexData.Volume ? ((indexData.Volume).toLocaleString("en-IN")):('')}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-6">
                                    <table className="text-left table">
                                        <tbody >
                                            <tr>
                                                <td>Symbol:</td>
                                                <td>{indexData['Symbol']}</td>
                                            </tr>
                                            <tr>
                                                <td>Stock Exchange:</td>
                                                <td>NSE</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="charts" title="Charts">
                             <ChartPageIndex historicalData={historicalData}/>
                        </Tab>
                        <Tab eventKey="historical" title="Historical Data">
                            <IndexHistoricalDataTab Data={historicalData}/>
                        </Tab>
                    </Tabs>
                    <h1>{props.match.params.symbol} </h1>
                </div>
            </div>
        ):(
            <div className="text-center container p-5">
                <div className="spinner-grow text-secondary " role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <p>Loading Data</p>
            </div>
        )
        
    );
}

export default IndexProfilePage;