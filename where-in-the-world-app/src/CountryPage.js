import React, { Component } from 'react';
import Header from './Components/Header/Header';
import api from './services/api';

class CountryPage extends Component {
  state = {
    countryData: []
  };
  componentDidMount() {
    const id = this.props.match.params;
      api
        .get('', + id)
        .then((res) => {
        console.log("Payload CountryPage:", res);
        this.setState({ 
          countryData: res.data 
      });
    });
  };
  render() {
    const { countryData } = this.state;
    const filteredCountry = countryData.filter( country =>{
      return country.alpha3Code.indexOf(countryData);
    });
    return (
      <div>
        <Header />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <button>
            <a href="/">
              Back
            </a>
          </button>
        </div>
            { filteredCountry.map(singleCountry => {
                return (
                  <div key={singleCountry.alpha3Code}>
                    <div>
                    <p>{singleCountry.name}</p>
                    <p>Native Name: {singleCountry.nativeName}</p>
                    </div>
                  </div>
                );
            }) }
          </div>


    );
  };
};

export default CountryPage;

/*
  render() {
    const {country} = this.props.match.params

return (
        <div>
          <Header />
            <div>
              <br/>
              <br/>
              <br/>
              <a href="/">
              Home
              </a>
            </div>
        </div>
      );
  }




class CountryPage extends Component {
  render() {
    const {country} = this.props.match.params
      return (
        <div>
          <Header />
            <div>
              <div>
                <button>back</button>
                <img src={country.flag} alt={country.name}/>
                <div>
                  <p>{country.name}</p>
                  <p>Native Name: {country.nativeName}</p>
                  <p>Population: {country.population}</p>
                  <p>name: {country.name}</p>
                  <p>Sub name: {country.subname}</p>
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




      <div>
        { countryData.map(country => (
              <span key={ country.alpha3Code }>
                <p country={ country }>{countryData.name}</p>
              </span>
            ))};
        <p>{countryData.name}</p>
        <p>Olá</p>
        <p>Capital: {countryData.capital}</p>
      </div>
*/