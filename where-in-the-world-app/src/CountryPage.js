import React, { Component } from 'react';
import Header from './Components/Header/Header';

class CountryPage extends Component {
  render() {
    const {country} = this.props.match.params.country.name
      return (
        <div className="main-page-div">
          <Header />
            <div className="page-div">
              <div className="all-div">
                <button>back</button>
                <img src={country.flag} alt={country.name} width="250" />
                <div className="infos-div">
                  <p className="country-name-div">{country.name}</p>
                  <p>Native Name: {country.nativeName}</p>
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Sub Region: {country.subRegion}</p>
                  <p>Capital: {country.capital}</p>

                  <p>Top Level Domain: {country.topLevelDomain}</p>
                  <p>Currencies: {country.currencies}</p>
                  <p>Languages: {country.languages}</p>

                  <p>Border Countries: {country.borderCountries}</p>
                </div>
              </div>
            </div>
        </div>
      );
  }
}

export default CountryPage;