import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Select from 'react-select';
import { Main, Grid, DivGrid } from '../src/theme/AppStyles';
import api from './services/api';
import Header from './Components/Header/Header';
import CountryCard from './Components/CountryCard/CountryCard';
import FiltersGrid from './Components/Filters/Filters';
import CountryPage from './CountryPage';
import Search from './Components/Filters/Search/Search';

class App extends Component {
  constructor(props) {
    super(props);
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
      this.setState({ 
        countriesData: res.data 
      });
    });
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

handleToUpdate = (e) => {
    this.onchange(e);
  };

  render() {
    var	handleToUpdate	=	this.handleToUpdate;
    const { countriesData } = this.state;
    const { search } = this.state;
    const filteredCountries = countriesData.filter( country =>{
      return country.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
    });
    
    const selectItem = this.state.countriesData.map(region =>
      <option key={ region.name }>{ region.name }</option>
    );

    return (
    <BrowserRouter>
      <Route path="/" exact strict>
        <Main>
        <Header />
        <FiltersGrid>
        
        </FiltersGrid>

        <Search handleToUpdate = {handleToUpdate.bind(this)} />

        

        <DivGrid>
          
          <Select
            options = {filteredCountries}
            placeholder="Filter by Region"
          />
          
          <input type="text" name="countries" placeholder="Search for a country..." onChange={this.onchange}></input>
          <Grid>
            
            { filteredCountries.map(country => (
              <li key={ country.alpha3Code }>
                
                <Link to={"/" + country.alpha3Code } >
                  <CountryCard country={ country } />
                </Link>
              </li>
            ))};
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


// <Route component={() => <div>Page not found!</div>} />


/* 
  <div>
  { countriesData.map(teste => {
      const { region } = teste;
      return (
        <div key={region}>
          <p>{region}</p>
        </div>
      );
  }) }
</div> */