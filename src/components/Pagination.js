import React from 'react';

function Pagination({rowsPerPage, totalRows, paginate}) {
    let pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalRows/rowsPerPage) ; i++){
        pageNumbers.push(i)
    }
    return (
        <nav className="pt-5" >
            <ul className='pagination overflow-auto'>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item"> 
                        <span onClick={()=>{paginate(number)}} className="page-link">
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;