import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';


const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/';

function ExpPage(props) {
    const [symbolData,setSymbolData] = useState([]);


    const data = [
        {"id":"1","SYMBOL":"20MICRONS","NAME OF COMPANY":"20 Microns Limited","SERIES":"EQ","DATE OF LISTING":"06-Oct-08","PAID UP VALUE":5,"MARKET LOT":1,"ISIN NUMBER":"INE144J01027","FACE VALUE":5,"DATE":"30-10-2020","PREV CLOSE":27.35,"OPEN":28.4,"HIGH":28.55,"LOW":27,"LAST":28.2,"CLOSE":28.4,"VWAP":28.13,"VOLUME":55022,"TURNOVER":155000000000,"TRADES":278,"DELIVERABLE VOLUME":40405,"DELIVERABLE%":0.7343},
        {"id":"2","SYMBOL":"21STCENMGM","NAME OF COMPANY":"21st Century Management Services Limited","SERIES":"EQ","DATE OF LISTING":"03-May-95","PAID UP VALUE":10,"MARKET LOT":1,"ISIN NUMBER":"INE253B01015","FACE VALUE":10,"DATE":"30-10-2020","PREV CLOSE":9.8,"OPEN":9.8,"HIGH":9.9,"LOW":9.8,"LAST":9.9,"CLOSE":9.85,"VWAP":9.87,"VOLUME":407,"TURNOVER":401720000,"TRADES":9,"DELIVERABLE VOLUME":407,"DELIVERABLE%":1},
        {"id":"6","SYMBOL":"3IINFOTECH","NAME OF COMPANY":"3i Infotech Limited","SERIES":"EQ","DATE OF LISTING":"22-Apr-05","PAID UP VALUE":10,"MARKET LOT":1,"ISIN NUMBER":"INE748C01020","FACE VALUE":10,"DATE":"30-10-2020","PREV CLOSE":2.95,"OPEN":2.95,"HIGH":3.05,"LOW":2.95,"LAST":2.95,"CLOSE":3,"VWAP":2.99,"VOLUME":1212482,"TURNOVER":363000000000,"TRADES":1225,"DELIVERABLE VOLUME":677679,"DELIVERABLE%":0.5589},
        {"id":"3","SYMBOL":"3PLAND","NAME OF COMPANY":"3P Land Holdings Limited","SERIES":"EQ","DATE OF LISTING":"19-Jul-95","PAID UP VALUE":2,"MARKET LOT":1,"ISIN NUMBER":"INE105C01023","FACE VALUE":2,"DATE":"30-10-2020","PREV CLOSE":6.5,"OPEN":6.8,"HIGH":6.8,"LOW":6.8,"LAST":6.8,"CLOSE":6.8,"VWAP":6.8,"VOLUME":1204,"TURNOVER":818720000,"TRADES":8,"DELIVERABLE VOLUME":1204,"DELIVERABLE%":1},
        {"id":"0","SYMBOL":"3MINDIA","NAME OF COMPANY":"3M India Limited","SERIES":"EQ","DATE OF LISTING":"13-Aug-04","PAID UP VALUE":10,"MARKET LOT":1,"ISIN NUMBER":"INE470A01017","FACE VALUE":10,"DATE":"30-10-2020","PREV CLOSE":18717.75,"OPEN":18699.95,"HIGH":18998,"LOW":18480,"LAST":18480,"CLOSE":18675.35,"VWAP":18650.04,"VOLUME":2367,"TURNOVER":4410000000000,"TRADES":1397,"DELIVERABLE VOLUME":1584,"DELIVERABLE%":0.6692},
        {"id":"4","SYMBOL":"5PAISA","NAME OF COMPANY":"5Paisa Capital Limited","SERIES":"EQ","DATE OF LISTING":"16-Nov-17","PAID UP VALUE":10,"MARKET LOT":1,"ISIN NUMBER":"INE618L01018","FACE VALUE":10,"DATE":"17-08-2020","PREV CLOSE":355.35,"OPEN":355,"HIGH":355,"LOW":337.6,"LAST":337.6,"CLOSE":337.6,"VWAP":339.16,"VOLUME":29017,"TURNOVER":984000000000,"TRADES":1632,"DELIVERABLE VOLUME":24978,"DELIVERABLE%":0.8608}
        ]

    const columns = [
        // { field : 'id', headerName: '_id'},
        { field : 'SYMBOL', headerName: 'Symbol'},
        { field : 'NAME OF COMPANY', headerName: 'Name Of Company'},
        { field : 'DATE OF LISTING',type : 'date' ,headerName: 'Date of Listing'},
        { field : 'PREV CLOSE', headerName: 'Previous Close'},
        { field : 'CLOSE', headerName: 'Close'}
    ];

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


    if(symbolData.length===0){
        return(
            <p>Loading</p>
        )
    }

    return (
        <div className="bg-light">
      <div
        className="container bg-white"
      >
        {/* <DataGrid autoHeight disableColumnMenu rows={symbolData} columns={columns} pageSize={100} getRowId={(row) => row._id}/> */}
      </div>
    </div>

    );
}

export default ExpPage;