import React, { Component } from 'react';
import DarkMode from './DarkMode/DarkMode';
import { Title } from '../../theme/HeaderStyles';
import { MainHeader } from '../../theme/HeaderStyles';

export default class Header extends Component {
  render() {
    return (
        <MainHeader>
          <Title>Where in the world?</Title>
          <DarkMode />
        </MainHeader>
    );
  }
}