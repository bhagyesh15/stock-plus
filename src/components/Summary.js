import React from 'react';

function Summary({Data}) {
    return (
        <div className="row">
            <div className="col-6">
                <h5 className="text-left p-1">Latest Available Details:</h5>
                <table className="text-left table table-sm">
                    <tbody >
                        <tr >
                            <td >Previous Close:</td>
                            <td >{Data['PREV CLOSE']}</td>
                        </tr>
                        <tr>
                            <td>Open:</td>
                            <td>{Data['OPEN']}</td>
                        </tr>
                        <tr>
                            <td>High:</td>
                            <td>{Data['HIGH']}</td>
                        </tr>
                        <tr>
                            <td>Low:</td>
                            <td>{Data['LOW']}</td>
                        </tr>
                        <tr>
                            <td>Last:</td>
                            <td>{Data['LAST']}</td>
                        </tr>
                        <tr>
                            <td>Close</td>
                            <td>{Data['CLOSE']}</td>
                        </tr>
                        <tr>
                            <td>VWAP:</td>
                            <td>{Data['VWAP']}</td>
                        </tr>
                        <tr>
                            <td>Volume:</td>
                            <td>{Data['VOLUME'].toLocaleString("en-IN")}</td>
                        </tr>
                        <tr>
                            <td>Turnover:</td>
                            <td>{Data['TURNOVER'].toLocaleString("en-IN")}</td>
                        </tr>
                        <tr>
                            <td>Trades:</td>
                            <td>{Data['TRADES'].toLocaleString("en-IN")}</td>
                        </tr>
                        <tr>
                            <td>Deliverable Volume:</td>
                            <td>{Data['DELIVERABLE VOLUME'].toLocaleString("en-IN")}</td>
                        </tr>
                        <tr>
                            <td>Deliverable (%):</td>
                            <td>{Data['DELIVERABLE%'] ? ((Data['DELIVERABLE%']*100).toFixed(2)) :('')}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className="col-6">
            <h5 className="text-left p-1">Company Details:</h5>
                <table className="table text-left table-sm">
                    <tbody >
                        <tr >
                            <td >Name of the Company:</td>
                            <td >{Data['NAME OF COMPANY']}</td>
                        </tr>
                        <tr >
                            <td >Series:</td>
                            <td >{Data['SERIES']}</td>
                        </tr>
                        <tr>
                            <td>Date of Listing:</td>
                            <td>{Data['DATE OF LISTING']}</td>
                        </tr>
                        <tr>
                            <td>Paid Up Value:</td>
                            <td>{Data['PAID UP VALUE']}</td>
                        </tr>
                        <tr>
                            <td>Market Lot:</td>
                            <td>{Data['MARKET LOT']}</td>
                        </tr>
                        <tr>
                            <td>Face Value:</td>
                            <td>{Data['FACE VALUE']}</td>
                        </tr>
                        <tr>
                            <td>ISIN Number:</td>
                            <td>{Data['ISIN NUMBER']}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Summary;