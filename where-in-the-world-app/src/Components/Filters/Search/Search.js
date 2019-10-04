import React, { Component } from 'react';
import { Form } from '../../../theme/SearchStyles';

export default class Search extends Component {
    render() {
      return (
        <Form>
            <button><ion-icon name="search"></ion-icon></button>
            <input type="text" name="countrys" placeholder="Search for a country..."></input>
        </Form>
      );
    }
  }