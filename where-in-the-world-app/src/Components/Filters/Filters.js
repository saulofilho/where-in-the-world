import React, { Component } from 'react';
import Search from './Search/Search';
import Select from './Select/Select';
import { FiltersGrid } from '../../theme/FiltersStyles';

export default class Filters extends Component {
    render() {
      return (
        <FiltersGrid>
          <Search />
          <Select />
        </FiltersGrid>
      );
    };
  };