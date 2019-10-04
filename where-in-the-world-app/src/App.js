import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Main, UlGrid, DivGrid } from '../src/theme/AppStyles';
import api from './services/api';
import Header from './Components/Header/Header';
import CountryCard from './Components/CountryCard/CountryCard';
import Filter from './Components/Filters/Filters';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countriesData: []
    };
  }

  componentDidMount() {
    api
      .get()
      .then((res) => {
      console.log("Infos:", res.data);
      this.setState({ countriesData: res.data });
    });
  }

  render() {
    const { countriesData } = this.state;
      return (
        <Main>
          <Header />
          <Filter />
          <DivGrid>
            <UlGrid>
              { countriesData.map(country => (
                <li key={ country.alpha3Code }>
                  <Link to="/CountryPage">
                  <CountryCard country={ country } />
                  </Link>
                </li>
              ))};
            </UlGrid>
          </DivGrid>
        </Main>
      );
  }
}

export default App;