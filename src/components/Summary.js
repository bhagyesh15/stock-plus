import React from 'react';

function Summary({Data}) {
    return (
        <div className="row">
            <div className="col-6">
                <table class="table table-sm">
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
                            <td>{Data['VOLUME']}</td>
                        </tr>
                        <tr>
                            <td>Turnover:</td>
                            <td>{Data['TURNOVER']}</td>
                        </tr>
                        <tr>
                            <td>Trades:</td>
                            <td>{Data['TRADES']}</td>
                        </tr>
                        <tr>
                            <td>Deliverable Volume:</td>
                            <td>{Data['DELIVERABLE VOLUME']}</td>
                        </tr>
                        <tr>
                            <td>Deliverable (%):</td>
                            <td>{Data['DELIVERABLE%']}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Summary;