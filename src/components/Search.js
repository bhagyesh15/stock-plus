import React,{useEffect, useState,useRef} from 'react';
import {Link} from 'react-router-dom';
import {FormControl} from 'react-bootstrap'; 
import axios from 'axios';


function Search(props) {
    const [symbolData,setSymbolData] = useState([]);
    const [display,setDisplay] = useState(false);
    const [searchFilter,setSearchFilter] = useState([]);
    const node = useRef();

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

    const renderData = (stock,index) => {

        return(
                <div key={index} className="dropdown-item">
                    <Link to="/" className="mb-0 dropdown-item">{stock.SYMBOL} {stock["NAME OF COMPANY"]}</Link>
                </div>
        )
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
                        symbolData
                            .filter( data =>{ return (data.SYMBOL.includes( searchFilter.toUpperCase()))})
                            .map(renderData)
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;

//.filter(({ SYMBOL }) => SYMBOL == searchFilter.toUpperCase())