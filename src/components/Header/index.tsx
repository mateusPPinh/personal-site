import React from 'react';
import { ToggleThemeComponent } from '../ToggleTheme';
import {
  Header,
  LeftCenterContainer,
  RightCenterContainer,
  Tile,
  Button,
} from './styles'
import {FiMoon, FiSun} from 'react-icons/fi'

interface IHeaderProps {
  isDarkTheme?: boolean;
  isLightTheme?: boolean;
  toggleTheme?: () => void;
}

export const HeaderComponent = ({isDarkTheme, isLightTheme, toggleTheme}: IHeaderProps) => {
  return (
    <Header>
    <LeftCenterContainer>
      <Tile><b>.m</b>ateus.dev</Tile>
      <RightCenterContainer>
        <Button onClick={toggleTheme}>
        {isDarkTheme && <FiMoon size={20} color='#4C2C69' onClick={toggleTheme} />}
        {isLightTheme && <FiSun size={24} color='#FFC857' onClick={toggleTheme} />}
      </Button>
      </RightCenterContainer>
    </LeftCenterContainer>
    </Header>
  );
};