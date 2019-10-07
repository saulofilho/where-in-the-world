import React, { Component } from 'react';
import { Form } from '../../themes/SearchStyles';

export default class Search extends Component {
  render() {
    const	handleToUpdate	=	this.props.handleToUpdate;
    return (
      <Form>
        <input 
          type="text" 
          name="countries" 
          placeholder="Search for a country..." 
          onChange={(e) => handleToUpdate(e)}
        />
      </Form>
    );
  };
};