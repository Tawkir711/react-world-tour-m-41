import React from 'react';

const CountryData = ({ country }) => {
    console.log(CountryData);
    return (
        <div>
            <p><small>Country Data: {country?.name.common} </small></p>
        </div>
    );
};

export default CountryData;
