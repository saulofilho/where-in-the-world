import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "./services/api";
import { Main, MainHeader } from "../src/themes/AppStyles";
import {
  MainDiv,
  CountryInfos,
  Forms,
  GridText,
  LeftText,
  RightText,
  Bottom,
  BorderStyle
} from "../src/themes/CountryPageStyles";
import TitleHeader from "./Components/Header/TitleHeader";
import { Title16 } from "./themes/CountryCardStyles";

class CountryPage extends Component {
  state = {
    countryData: [],
    checked: localStorage.getItem("theme") === "dark" ? true : false,
    theme: localStorage.getItem("theme"),
    id: null
  };

  //API
  componentDidMount() {
    let id = this.props.match.params.countryPage;
    this.setState({
      id: id
    });
    api.get("/name/" + id).then(res => {
      console.log("Payload Country Page:", res);
      this.setState({
        countryData: res.data
      });
    });
  }

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
          <Link to={"/"}>
            <TitleHeader />
          </Link>
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
        <Forms>
          <Link to={"/"}>
            <button>Back</button>
          </Link>
        </Forms>
        <MainDiv>
          <CountryInfos>
<<<<<<< HEAD
<<<<<<< HEAD
            <ul>
              <li>
              {countryData.map(singleCountry => {
              return (
                <div key={singleCountry.alpha3Code}>
                  <img src={singleCountry.flag} alt={singleCountry.name} />
                </div>
                );
              })}
              </li>
              <li>
              {countryData.map(singleCountry => {
              return (
                <GridText key={singleCountry.alpha3Code}>
                  <Title16>{singleCountry.name}</Title16>
                  <LeftText>
                    <p><span>Native Name:</span> {singleCountry.nativeName}</p>
                    <p><span>Population:</span> {singleCountry.population}</p>
                    <p><span>Region:</span> {singleCountry.region}</p>
                    <p><span>Sub Region:</span> {singleCountry.subregion}</p>
                    <p><span>Capital:</span> {singleCountry.capital}</p>
                  </LeftText>
                  <RightText>
                    <p><span>Top Level Domain:</span> {singleCountry.topLevelDomain}</p>
                    <p><span>Currencies: </span> {singleCountry.currencies.name}</p>
                    <p><span>Languages: </span> {singleCountry.filter}</p>
                  </RightText>
                  <Bottom>
                    <p><span>Border Countries:</span> {singleCountry.borders}</p>
                  </Bottom>
                </GridText>
                );
              })}
              </li>
            </ul>
=======
            {countryData.map(singleCountry => {
              return (
=======
            {countryData.map(singleCountry => {
              return (
>>>>>>> 8772d133c36404a7169be2d2e2e8951bb2e17c76
                <ul>
                  <li key={singleCountry.nameLista}>
                    <div >
                      <img
                        src={singleCountry.flag}
                        alt={singleCountry.name}
                      />
                    </div>
                  </li>
                  <li key={singleCountry.nameListaDois}>
                    <GridText>
                      <Title16>
                        {singleCountry.name}
                      </Title16>
                      <LeftText>
                        <p>
                          <span>Native Name:</span> {singleCountry.nativeName}
                        </p>
                        <p>
                          <span>Population:</span> {singleCountry.population}
                        </p>
                        <p>
                          <span>Region:</span> {singleCountry.region}
                        </p>
                        <p>
                          <span>Sub Region:</span> {singleCountry.subregion}
                        </p>
                        <p>
                          <span>Capital:</span> {singleCountry.capital}
                        </p>
                      </LeftText>
                      <RightText>
                        <p>
                          <span>Top Level Domain:</span>{" "}
                          {singleCountry.topLevelDomain}
                        </p>
                        {singleCountry.currencies.map(curenciesName => {
                          return (
                            <p>
                              <span>Currencies: </span> {curenciesName.name}
                            </p>
                          );
                        })}
                        {singleCountry.languages.map(languagesName => {
                          return (
                            <p>
                              <span>Languages: </span> {languagesName.name}
                            </p>
                          );
                        })}
                      </RightText>
                      <Bottom>
                        <div>
                          <p>
                            <span>Border Countries: </span>
                            {singleCountry.borders.map(bordersCountries => {
                              return (
                                <BorderStyle
                                  href={"/" + bordersCountries}
                                >
                                  {bordersCountries}{" "}
                                </BorderStyle>
                              );
                            })}
                          </p>
                        </div>
                      </Bottom>
                    </GridText>
                  </li>
                </ul>
              );
            })}
<<<<<<< HEAD
>>>>>>> 8772d133c36404a7169be2d2e2e8951bb2e17c76
=======
>>>>>>> 8772d133c36404a7169be2d2e2e8951bb2e17c76
          </CountryInfos>
        </MainDiv>
      </Main>
    );
  }
}

export default CountryPage;