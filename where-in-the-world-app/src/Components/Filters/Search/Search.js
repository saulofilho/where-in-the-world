import React, { Component } from 'react';
import { Form } from '../../../theme/SearchStyles';

export default class Search extends Component {
    render() {
      return (
        <Form>
            <input type="text" name="countries" placeholder="Search for a country..."></input>
        </Form>
      );
    }
  }