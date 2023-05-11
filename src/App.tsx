import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext, themes } from './ThemeContext';

import Navbar from './components/Navbar';
import CryptocurrencyList from './components/CryptocurrencyList';
import CryptocurrencyDetails from './components/CryptocurrencyDetails';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className="App" style={{ background: theme.background, color: theme.foreground }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<CryptocurrencyList />} />
            <Route path="/:id" element={<CryptocurrencyDetails />} />
            {/* Other routes go here */}
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
