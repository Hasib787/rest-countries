import React from 'react';
import './Country.style.css';

const Country = (props) => {
    const {name, capital, flags, languages} = props.country;
    console.log(props.country);
    return (
        <div className='country'>
            <h4>Name: {name.common}</h4>
            <h5>Capital: {capital}</h5>
            <p>
                {
                   languages && Object.values(languages).map((language) => <p>Language: {language}</p> )
                }
            </p>
            <img src={flags.png} alt="" />  
        </div>
    );
};

export default Country;