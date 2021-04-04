import React from 'react';

function StockChartPage(props) {
    console.log('Here'+props.match.params)
    return (
        <div>
            <h1>Symbol: {props.match.params.symbol} </h1>
        </div>
    );
}

export default StockChartPage;