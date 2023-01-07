import React from 'react';
import { Button } from './styles';
import {FiMoon, FiSun} from 'react-icons/fi'
import { IToggleThemeButtonProps } from './types';

export const ToggleThemeComponent = ({isDarkTheme, isLightTheme, toggleTheme}: IToggleThemeButtonProps) => {
  return (
    <Button>
      {isDarkTheme && <FiMoon color='#4C2C69' onClick={toggleTheme} />}
      {isLightTheme && <FiSun color='#FFC857' onClick={toggleTheme} />}
    </Button>
  )
};