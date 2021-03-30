import React from 'react';

function StockPlus(props) {
    return (
        <p className= {props.size + " mb-0"} >
            Stock
            <span className=" ml-1" style={{
            color: `#28a745`,
            borderRadius: `0.5rem`}}>
                Plus
            </span>
        </p>
    );
}

export default StockPlus;