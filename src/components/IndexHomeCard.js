import React from 'react';
import { Link } from 'react-router-dom';

function IndexHomeCard(props) {
    return (
        <div className="col-sm-6 p-0">
            <div className="card m-2">
                <Link to={'/index/'+props.symbol} className="dropdown-item p-0">
                    <div className="card-body">
                        <div className="row">
                                <div className="col-8">
                                    
                                    <h5 className="card-title font-weight-light text-left">{props.symbol}</h5>
                                    
                                </div>
                                <div className="col-4 text-right m-d-3">
                                    {props.diff >= 0 ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi text-right text-success" viewBox="0 0 16 16">
                                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                        </svg>
                                    ):(
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi text-danger" viewBox="0 0 16 16">
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>
                                    )

                                    }
                                </div>
                        </div>
                        <div className="row">
                            <div className="col-6 text-left font-weight-bold">
                                {props.close}
                            </div>
                            <div className="col-6 text-right">
                                {Math.abs(parseFloat(props.diff).toFixed(2))}%
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default IndexHomeCard;