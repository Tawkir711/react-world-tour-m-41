import React, { useEffect, useState } from 'react';
import County from '../County/County';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries]= useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        // console.log('flag adding');
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    // remove item from an array in a state
    // use filter to select all the elements except the one you want to remove

    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            {/*visited country  */}
            <div>
                <h5>Visited Countries: {visitedCountries.length} </h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className='flag-container'>
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            {/* display countries */}
            <div className='country-container'>
              {
                countries.map(country => <County 
                    key={country.cca3}
                    handleVisitedCountry={handleVisitedCountry} 
                    handleVisitedFlags= {handleVisitedFlags}
                    country={country} >
                    </County>)
              }
            </div>
        </div>
    );
};

export default Countries;