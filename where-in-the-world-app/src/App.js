import React, { Component } from 'react';
import './index.css';
import { Main, MainHeader, Forms, Grid, DivGrid } from '../src/themes/AppStyles';
import { SelectRegion } from './themes/SelectStyles';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import api from './services/api';
import TitleHeader from './Components/Header/TitleHeader';
import Search from './Components/Search/Search';
import Select from 'react-select';
import CountryCard from './Components/CountryCard/CountryCard';
import CountryPage from './CountryPage';
import { uniqBy } from 'lodash';

//App
class App extends Component {
  constructor(props) {
    super(props);
    this.handleToUpdate = this.handleToUpdate.bind(this);
    this.state = {
      countriesData: [],
      search: "",
      region: "",
      checked: localStorage.getItem("theme") === "dark" ? true : false,
      theme: localStorage.getItem("theme")
    };
  };

  //API
  componentDidMount() {
    api
      .get("all")
      .then((res) => {
      console.log("Payload:", res);
      this.setState({ 
        countriesData: res.data 
      });
    });
    document
    .getElementsByTagName("HTML")[0]
    .setAttribute("data-theme", localStorage.getItem("theme"));
  };

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

  //Search
  onchange = e => {
    this.setState({ search: e.target.value });
  };

  //Select
  handleToUpdate = e => {
    this.onchange(e);
  };

//Render
  render() {
    const	handleToUpdate	=	this.handleToUpdate;
    const { countriesData } = this.state;
    const { search, region } = this.state;
    let filteredCountries = countriesData.filter(country => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    if (region) {
      let regionMap = countriesData.filter(country => {
        return country.region.toLowerCase().indexOf(region.toLowerCase()) !== -1;
      });
    };
  
    return (
      <BrowserRouter>
          <Route path="/" exact strict>
            <Main className="teste">
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
            <Forms>
              <Search handleToUpdate={handleToUpdate.bind(this)} />
              <SelectRegion>
              <Select
                  options={uniqBy(                  
                    filteredCountries.map(country => {
                    console.log("log:", filteredCountries);
                    return {
                      'value': country.region,
                      'label': country.region
                    }
                  }), 'region')}
                  
                  placeholder="Filter by Region"
                  styles={Select}
                />
              </SelectRegion>
            </Forms>
            <DivGrid>
              <Grid>
                { filteredCountries.map(country => (
                  <li key={ country.alpha3Code }>
                    
                    <Link to={"/" + country.name } >
                      <CountryCard country={ country } />
                    </Link>
                  </li>
                ))}
              </Grid>
            </DivGrid>
          </Main>
          </Route>
          <Route path="/:countryPage" exact strict component={CountryPage} />
        </BrowserRouter>
    );
  };
};

export default App;