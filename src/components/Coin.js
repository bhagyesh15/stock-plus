import React from 'react';

function Coin({Name, Image, Symbol, Price, Volume, priceChange}) {
    return (
            <tr >
                <td> <img src={Image} alt='crypto' width="30px" height="30px"/></td>
                <td><h4>{ Name }</h4></td>
                <td><h5> {Symbol.toUpperCase()} </h5></td>
                <td><p>₹ {Price}</p></td>
                <td>{Volume.toLocaleString()}</td>
                <td>
                    { priceChange > 0 ? (
                        <p className="text-success">{priceChange}</p>
                    ) : (
                        <p className="text-danger">{priceChange}</p>
                    )}
                </td>
            </tr>
    );
}

export default Coin;