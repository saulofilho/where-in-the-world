import React, { Component } from 'react';
import { Form } from '../../../theme/SearchStyles';

export default class Search extends Component {
  render() {
    var	handleToUpdate	=	this.props.handleToUpdate;
    return (
      <Form>
          <input 
            type="text" 
            name="countries" 
            placeholder="Search for a country..." 
            onChange={() => handleToUpdate()} 
          />
      </Form>
    );
  };
};