import React, { Component } from 'react';
import api from './services/api';
import { Main, MainHeader } from '../src/themes/AppStyles';
import TitleHeader from './Components/Header/TitleHeader';

class CountryPage extends Component {
  state = {
    countryData: [],
    checked: localStorage.getItem("theme") === "dark" ? true : false,
    theme: localStorage.getItem("theme"),
    id: null
  };

  //API
  componentDidMount() {
    console.log("teste", this.props);
    let id = this.props.match.params.countryPage;
    this.setState({
      id: id
    })
    api
      .get("/name/"+id)
      .then((res) => {
      console.log("Payload CountryPage:", res);
      this.setState({ 
        countryData: res.data 
    });
  });
  };

  //DarkMode
    //DarkMode
    toggleThemeChange = () => {
      const { checked } = this.state;
      if (checked === false) {
        localStorage.setItem("theme", "dark");
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));
        this.setState({
          checked: true
        });
      } else {
        localStorage.setItem("theme", "light");
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));
        this.setState({
          checked: false
        });
      }
    };


  //Render
  render() {
    const { countryData } = this.state;

    return (
    <Main>
      <MainHeader>
        <TitleHeader />
        <div className="div-switch">
          <label className="switch">
            <input
              type="checkbox"
              defaultChecked={this.state.checked}
              onChange={() => this.toggleThemeChange()}
            />
          <span className="slider round" />
          </label>
        </div>
      </MainHeader>
      <div>
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
            { countryData.map(singleCountry => {
                return (
                  <div key={singleCountry.alpha3Code}>
                    <div>
                    <img src={singleCountry.flag} alt={singleCountry.name}/>
                    <p>{singleCountry.name}</p>
                    <p>Native Name: {singleCountry.nativeName}</p>
                    </div>
                  </div>
                );
            }) }
          </div>
    </Main>
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