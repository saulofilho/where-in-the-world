import React, { Component } from 'react';
import { SelectRegion } from '../../../theme/SelectStyles';

export default class Select extends Component {
    render() {
      return (
        <SelectRegion>
          <select>
            <option>Teste</option>
            <option>Teste 2</option>
          </select>
        </SelectRegion>
      );
    }
  }