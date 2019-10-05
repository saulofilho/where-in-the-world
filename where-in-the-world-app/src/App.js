import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { Main, UlGrid, DivGrid } from '../src/theme/AppStyles';
import api from './services/api';
import Header from './Components/Header/Header';
import CountryCard from './Components/CountryCard/CountryCard';
import Filter from './Components/Filters/Filters';
import CountryPage from './CountryPage';
import Select from 'react-select';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countriesData: [],
      search: ""
    };
  };

  componentDidMount() {
    api
      .get()
      .then((res) => {
      console.log("Payload:", res);
      this.setState({ countriesData: res.data });
    });
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { countriesData } = this.state;
    const { search } = this.state;
    const filteredCountries = countriesData.filter( country =>{
      return country.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
    });
    const selectItem = this.state.countriesData.map(region =>
      <option key={ region.name }>{region.name}</option>
    );

    return (
      <Main>
        <Header />
        <Filter />
        <div>
          { countriesData.map(teste => {
              const { region } = teste;
              return (
                <div key={region}>
                  <p>{region}</p>
                </div>
              );
          }) }
        </div>
        <DivGrid>
          <Select
            onChange={country => console.log(country.label, country.value)}
            options={ selectItem }
            placeholder="Filter by Region"
          />
          <UlGrid>
          <input type="text" name="countries" placeholder="Search for a country..." onChange={this.onchange}></input>
            { filteredCountries.map(country => (
              <li key={ country.alpha3Code }>
                <Link to="/CountryPage/:alpha3Code">
                  <CountryCard country={ country } />
                </Link>
              </li>
            ))};
          </UlGrid>
        </DivGrid>
      </Main>
    );
  };

  function() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/CountryPage/:alpha3Code" component={CountryPage} />
      </Switch>
    );
  };
};

export default App;