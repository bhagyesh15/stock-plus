import React, { useState } from 'react';
import Pagination from '../components/Pagination';

function IndexHistoricalDataTab({Data}) {
    const [currentPage,setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(200);
    
    //Pagination
    const indexOfLastRow = currentPage*rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = Data.slice(indexOfFirstRow,indexOfLastRow)

    //ChangePage
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <Pagination rowsPerPage={rowsPerPage} totalRows={Data.length} paginate={paginate} />
            <table className="text-left table table-sm">
                <thead>
                    <th scope="col">#</th>
                    <th scope="col">Date:</th>
                    <th scope="col">Open:</th>
                    <th scope="col">High:</th>
                    <th scope="col">Low:</th>
                    <th scope="col">Close:</th>
                    <th scope="col">Volume</th>
                    <th scope="col">Turnover:</th>
                </thead>
                <tbody >
                    {currentRows.map((value,index)=>{
                        return(
                        <tr key={index}>
                            <td> {index+1+indexOfFirstRow}</td>
                            <td >{value['Date']}</td>
                            <td>{value['Open']}</td>
                            <td>{value['High']}</td>
                            <td>{value['Low']}</td>
                            <td>{value['Close']}</td>
                            <td>{value['Volume'] ? value['Volume'].toLocaleString("en-IN") : ''   }</td>
                            <td>{value['Turnover']? value['Turnover'].toLocaleString("en-IN") : ''   }</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default IndexHistoricalDataTab;