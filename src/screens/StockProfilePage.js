import React,{useState,useEffect} from 'react';
import {Tabs,Tab} from 'react-bootstrap';
import axios from 'axios';
import Summary from '../components/Summary';
import ChartPage from '../components/ChartPage';
import HistoricalDataPage from '../components/HistoricalDataTab';

const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/';

function StockProfilePage(props) {
    const [symbolData,setSymbolData] = useState([]);
    const [diff,setDiff] = useState([{value: 0},{ perc: 0}]);
    const [historicalData,setHistoricalData] = useState([]);

    useEffect(()=>{
        axios.get(URL+'stock/'+props.match.params.symbol)
            .then((response)=>{
                if(response.status===200){   
                    console.log(response.data)
                    setHistoricalData(response.data)
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err);
        
        axios.get(URL+'stocks/'+props.match.params.symbol)
            .then((response)=>{
                if(response.status===200){   
                    setSymbolData(response.data[0]);
                    setDiff(symbolData['PREV CLOSE'] - symbolData['CLOSE']);
                    console.log('Status OK! - symbolData')
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err);
    },[props.match.params.symbol])

    useEffect(() => {
        let a = (parseFloat(symbolData['CLOSE']) - parseFloat(symbolData['PREV CLOSE'])).toFixed(2);
        let pa = ((parseFloat(symbolData['CLOSE']) - parseFloat(symbolData['PREV CLOSE'])) * 100 / (parseFloat(symbolData['PREV CLOSE']))).toFixed(2)
        setDiff( [
            {value : a,
            perc: pa}]);
    },[symbolData])


    return (
          historicalData.length > 0 ? (
            <div className="bg-light">
                <div className="container bg-white">
                    <div className="row p-3">
                        <div className="col-md-6 text-left">
                            <h1 className="md-0 display-4">{props.match.params.symbol}</h1>
                            
                            <h2 className="mb-0">{symbolData['CLOSE']} <span className="md-3 ">
                                { diff[0].value >= 0 ? (
                                    <svg style={{position:`relative`, top:`-4px`}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi text-right text-success md-3" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                ) : (
                                    <svg style={{position:`relative`, top:`-3px`}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi text-danger" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg>
                                )}
                            </span></h2>
                            <h5>{Math.abs(diff[0].value)} <span>({Math.abs(diff[0].perc)}%)</span> </h5>
                            <h6>Vol: {symbolData.VOLUME ? (symbolData.VOLUME).toLocaleString("en-IN") : ('')}</h6>
                            <h6>As of Date: {symbolData.DATE}</h6>
                        </div>
                        <div className="col-md-6 text-right">
                            <h1>{symbolData['NAME OF COMPANY']}</h1>
                            <h3>NSE</h3>
                            <h3>Series: {symbolData['SERIES']}</h3>
                            <h3>ISIN: {symbolData['ISIN NUMBER']}</h3>
                            
                        </div>

                    </div>
                    <Tabs className="container bg-white px-5" defaultActiveKey="summary" id="uncontrolled-tab-example">
                        <Tab eventKey="summary" title="Summary">
                            <Summary Data={symbolData}/>
                        </Tab>
                        <Tab eventKey="charts" title="Charts">
                            <ChartPage historicalData={historicalData} />
                        </Tab>
                        <Tab eventKey="historical" title="Historical Data">
                            <HistoricalDataPage Data={historicalData} />
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

export default StockProfilePage;