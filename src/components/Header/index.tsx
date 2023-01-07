import React from 'react';
import { ToggleThemeComponent } from '../ToggleTheme';
import {
  Header,
  LeftCenterContainer,
  RightCenterContainer,
  Tile,
  MediumButton,
} from './styles'
// import { IHeaderProps } from './types';

export const HeaderComponent = () => {
  return (
    <Header>
    <LeftCenterContainer>
      <Tile><b>.m</b>ateus</Tile>
      <ul>
        <li>Home</li>
        <li>Contact</li>
      </ul>
      <RightCenterContainer>
        <ToggleThemeComponent isLightTheme={true} />
        <MediumButton>Medium</MediumButton>
      </RightCenterContainer>
    </LeftCenterContainer>
    </Header>
  );
};