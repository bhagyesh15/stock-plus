import React, { useState } from 'react';
import Pagination from './Pagination';

function HistoricalDataPage({Data}) {
    const [currentPage,setCurrentPage] = useState(1);
    const [rowsPerPage,setRowsPerPage] = useState(100);

    //Pagination
    const indexOfLastRow = currentPage*rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = Data.slice(indexOfFirstRow,indexOfLastRow)

    //ChangePage
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <Pagination rowsPerPage={rowsPerPage} totalRows={Data.length} paginate={paginate} />
            <table className="text-left table table-sm table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date:</th>
                        <th scope="col">Previous Close:</th>
                        <th scope="col">Open:</th>
                        <th scope="col">High:</th>
                        <th scope="col">Low:</th>
                        <th scope="col">Last:</th>
                        <th scope="col">Close:</th>
                        <th scope="col">VWAP:</th>
                        <th scope="col">Volume:</th>
                        <th scope="col">Turnover:</th>
                        <th scope="col">Trades:</th>
                        <th scope="col">Deliverable Vol:</th>
                        <th scope="col">Deliverable (%):</th>
                    </tr>
                </thead>
                <tbody >
                    {currentRows.map((value,index) => {
                        return(
                            <tr key={index}>
                                <td> {index+1+indexOfFirstRow}</td>
                                <td>{value['Date']}</td>
                                <td>{value['Prev Close']}</td>
                                <td>{value['Open']}</td>
                                <td>{value['High']}</td>
                                <td>{value['Low']}</td>
                                <td>{value['Last']}</td>
                                <td>{value['Close']}</td>
                                <td>{value['VWAP']}</td>
                                <td>
                                    {value['Volume'] ? parseFloat(value['Volume']).toLocaleString("en-IN"):''}
                                </td>
                                <td>
                                {value['Turnover'] ? parseFloat(value['Turnover']).toLocaleString("en-IN"):''}
                                </td>
                                <td>{value['Trades']}</td>
                                <td>
                                    {value['Deliverable Volume'] ? (parseFloat(value['Deliverable Volume']).toFixed(2)): ('')}
                                </td>
                                <td>
                                {value['%Deliverble'] ? (parseFloat(value['%Deliverble']*100).toFixed(2)): ('')}
                                </td>
                                
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
        </div>
    );
}

export default HistoricalDataPage;