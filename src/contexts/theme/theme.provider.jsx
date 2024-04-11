import {ThemeContext} from './theme.context';
import {useState, useEffect} from 'react';


const ThemeContextProvider = ({children}) => {
	const [theme, setTheme] = useState('');
	useEffect(() => {
	  document.body.setAttribute('data-theme', theme);
	}, [theme]);
	const toggleTheme = () => {
	  setTheme(theme ? '' : 'dark');
	}
	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;