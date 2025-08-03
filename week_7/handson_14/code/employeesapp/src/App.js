import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import EmployeesList from './EmployeesList';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    // Wrap entire JSX with ThemeContext.Provider
    <ThemeContext.Provider value={theme}>
     <div className={`App ${theme}`}> 
        <header className="App-header">
          <h1>Employee Management System</h1>
          <button onClick={toggleTheme} className={theme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </header>
        {/* Remove theme prop - no longer needed */}
        <EmployeesList />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;