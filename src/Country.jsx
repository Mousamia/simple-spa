/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Country = ({ country , handleClickVisited}) => {
    // console.log(country);
    // console.log(handleClickVisited);
    const [visited, setVisited] = useState(false);
    
    const checkVisited = () => {
        setVisited(!visited);

    }
    return (
        <div className={`   ${visited ? 'border-4 border-sky-400 m-3' : 'border-4 border-yellow-400 m-3'}`}>
            <h3 className="text 2xl">{country.name} </h3>
            <h3 className="text 2xl">Area: {country.area} </h3>
            <img src={country.flag} className='w-40 h-20' alt="" />
            <button onClick={checkVisited} className="p-4 m-3 font-bold bg-blue-700">Mark as visited</button>
            <button onClick={() => handleClickVisited(country)}  className="p-4 m-3 font-bold bg-green-700">Visited</button>
            {
                visited ? "Im Visited" : "Not visited"
            }
        </div>
    );
};

export default Country;