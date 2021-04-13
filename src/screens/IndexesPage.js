import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';

import axios from 'axios';
import { Link } from 'react-router-dom';

const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/';


function IndexesPage(props) {
    const [indexData,setIndexData] = useState([]);

    useEffect(()=>{
        axios.get(URL+'indexf/top')
            .then((response)=>{
                if(response.status===200){   
                    console.log("Status OK!")
                    setIndexData(response.data)
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err)
    },[])

    const renderData = (Ind,index) => {

        return(
            <tr key={index}>
                <td>{index+1}</td>
                <td className="lead text-left">
                    <Link to={"/index/"+Ind.Name} className="text-reset" style={{textDecoration: `none`}}>
                        <p className={"m-0 p-0 " + (parseFloat(Ind.DIFF) >= 0 ? "text-success" : "text-danger")}>{Ind.Name}</p>
                    </Link>
                </td>
                <td >
                    <p>{parseFloat(Ind.DIFF).toFixed(2)}</p>
                </td>
                <td >
                    <p>{parseFloat(Ind.Open).toFixed(2)}</p>
                </td>
                <td >
                    <p>{parseFloat(Ind.Close).toFixed(2)}</p>
                </td>
                <td >
                    <p>{parseFloat(Ind.High).toFixed(2)}</p>
                </td>
                <td >
                    <p>{parseFloat(Ind.Low).toFixed(2)}</p>
                </td>
            </tr>
        )
    }

    const loadData = () => {
        console.log(indexData.length)
        if(!indexData.length){
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
            <div className="container bg-white py-5">
                <h4 className="text-left">List of Indexes(NSE)</h4>
                {/* {JSON.stringify(symbolData)} */}
                <Table striped bordered hover className="container table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Change</th>
                            <th>Open</th>
                            <th>Close</th>
                            <th>High</th>
                            <th>Low</th>
                        </tr>
                    </thead>
                    <tbody>
                        {indexData.map(renderData)}
                    </tbody>
                </Table>
                {loadData()}
            </div>
        </div>
    );
}

export default IndexesPage;