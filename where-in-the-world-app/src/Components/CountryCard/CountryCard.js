import React, { Component } from 'react';
import { Card, Infos, Title16 } from '../../theme/CountryCardStyles';

export default class CountryCard extends Component {
  render() {
    const {country} = this.props
    return (
      <Card>
        <img src={country.flag} alt={country.name} />
        <Infos>
          <Title16>{country.name}</Title16>
          <p><span>Population:</span> {country.population}</p>
          <p><span>Region:</span> {country.region}</p>
          <p><span>Capital:</span> {country.capital}</p>
        </Infos>
      </Card>
    );
  }
}