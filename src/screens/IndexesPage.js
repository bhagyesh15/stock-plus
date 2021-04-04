import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';

import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/';


function IndexesPage(props) {
    const [indexData,setIndexData] = useState([]);

    useEffect(()=>{
        axios.get(URL+'indexes')
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
                <td className="card">{Ind.Symbol}</td>
                <td>{Ind.Name}</td>
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
        <div>
            {/* {JSON.stringify(symbolData)} */}
            <Table striped bordered hover className="container">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {indexData.map(renderData)}
                </tbody>
            </Table>
            {loadData()}
        </div>
    );
}

export default IndexesPage;