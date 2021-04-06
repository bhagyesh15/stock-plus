import React,{useEffect, useState,useRef} from 'react';
import {Link} from 'react-router-dom';
import {FormControl} from 'react-bootstrap'; 
import axios from 'axios';

const URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/';

function Search(props) {
    const [stockData,setStockData] = useState([]);
    const [indexData, setIndexData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [display,setDisplay] = useState(false); 
    const [searchFilter,setSearchFilter] = useState([]); //Changes in seachBar
    const node = useRef();  //to autoclose the search when clicked outside

    useEffect(()=>{
        axios.get(URL+'stocks')
            .then((response)=>{
                if(response.status===200){   
                    console.log("Status OK! - Stocks")
                    setStockData(response.data)
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err)
    },[])

    useEffect(()=>{
        axios.get(URL+'indexes')
            .then((response)=>{
                if(response.status===200){   
                    console.log("Status OK! - Indexes")
                    setIndexData(response.data)
                }
                else{
                    console.log("ERROR: "+response.status+" , "+response.statusText)
                }
            })
            .catch((err) => console.log.err)
    },[]);

    const concatData = () => {
        setAllData(stockData.concat(indexData));
    }

    useEffect(() => {
        concatData();
    },[indexData, stockData]);
    
    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        setDisplay(false);
    };
    
    const handleChange = event => {
        let data = event.target.value
        if(data.length > 1){
            setDisplay(true)
            console.log("Display: " + display + " Data: "+event.target.value)
            setSearchFilter(event.target.value)
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
    
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const renderData = (data,index) => {
        if(data.SYMBOL){

            return(
                    <div key={index} className="dropdown-item striped">
                        <Link to={'/stock/'+data.SYMBOL} className="mb-0 dropdown-item">{data.SYMBOL} - {data["NAME OF COMPANY"]}</Link>
                    </div>
            )
        }
        else{
            return(
                    <div key={index} className="dropdown-item striped">
                        <Link to="/" className="mb-0 dropdown-item">{data.Name}</Link>
                    </div>
            )

        }
    }

    return (
        <div>

            <div ref={node} className="form-group">
                <FormControl 
                    type="text" 
                    placeholder="Search for stocks and indexes" 
                    className="mr-sm-2" 
                    style={{
                        width:`250px`,
                        display:`inline-box`
                    }}
                    onChange= {handleChange}
                />
                <div 
                    className="match-list card"
                    style={{
                        position: `absolute`,
                        top: `50px`,
                        zIndex: `2000`,
                    }}
                >
                    {display && (
                        allData
                            .filter( (data) =>{ 
                                // console.log(data)
                                if(!data.Name){
                                    return (
                                        data['NAME OF COMPANY'].toLowerCase().includes( searchFilter.toLowerCase()) || 
                                        data.SYMBOL.includes( searchFilter.toUpperCase())
                                    )
                                }
                                else{
                                    return (
                                        data.Name.toLowerCase().includes( searchFilter.toLowerCase())
                                    )
                                }
                             })
                            .map(renderData)
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;

//.filter(({ Stock }) => Stock == searchFilter.toUpperCase())