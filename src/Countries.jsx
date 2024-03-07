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

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleClickVisited = (country) => {
        console.log(country);
        const updatedCountries = [ ...visitedCountries, country ];
        console.log(updatedCountries);
        setVisitedCountries(updatedCountries);
        console.log(updatedCountries);
    }
    return (
        <div>
            <h2 className="text-3xl"> Countries will appear here</h2>
            <p>Your Visited countries will appear here</p>
            <h3>{countries.length}</h3>
            {
                visitedCountries.map (visitedCountry => <li>{visitedCountry.name}</li> )
            }
            
            <div className="grid grid-cols-3">
            {
                countries.map(country =>
                    <Country
                    handleClickVisited = {handleClickVisited}   country={country}>
                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;