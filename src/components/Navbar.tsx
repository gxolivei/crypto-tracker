import React, { useContext } from 'react';
import { ThemeContext, themes } from '../ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ background: theme.background, color: theme.foreground }}>
      <h1>Crypto Tracker</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === themes.dark ? 'Light' : 'Dark'} Mode
      </button>
    </nav>
  );
};

export default Navbar;