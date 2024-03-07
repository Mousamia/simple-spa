/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Country from './Country';


const Countries = () => {


    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2 className="text-3xl"> Countries will appear here</h2>
            <h3>{countries.length}</h3>
            <div className="grid grid-cols-3">
            {
                countries.map(country =>
                    <Country
                        country={country}>
                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;