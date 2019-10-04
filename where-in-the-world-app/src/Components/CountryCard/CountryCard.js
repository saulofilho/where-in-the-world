import React, { Component } from 'react';

export default class CountryCard extends Component {
  render() {
    const {country} = this.props
    return (
      <div className="card-div">
        <img src={country.flag} alt={country.name} width="200" height="auto"/>
        <div className="infos-div">
          <p className="country-name-div">{country.name}</p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital}</p>
        </div>
      </div>
    );
  }
}