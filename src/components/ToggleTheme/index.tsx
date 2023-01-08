import React from 'react';
import { Button } from './styles';
import {FiMoon, FiSun} from 'react-icons/fi'
import { IToggleThemeButtonProps } from './types';

export const ToggleThemeComponent = ({isDarkTheme, isLightTheme, toggleTheme}: IToggleThemeButtonProps) => {
  const [themeDefault, setThemeDefault] = React.useState(true);

  const toggleThemeDefault = () => {
    setThemeDefault(!themeDefault);
  }
  return (
    <Button onClick={toggleThemeDefault}>
      {isDarkTheme && <FiMoon size={20} color='#4C2C69' onClick={toggleTheme} />}
      {isLightTheme && <FiSun size={24} color='#FFC857' onClick={toggleTheme} />}
    </Button>
  )
};