import {ThemeContext} from './theme.context';
import {useState, useEffect} from 'react';


const ThemeContextProvider = ({children}) => {
	let fetchedTheme = localStorage.getItem('theme') || '';
	const [theme, setTheme] = useState(fetchedTheme);
	useEffect(() => {
	  document.body.setAttribute('data-theme', theme);
	}, [theme]);
	const toggleTheme = () => {
	  setTheme(theme ? '' : 'dark');
	  localStorage.setItem('theme', theme ? '' : 'dark');
	}
	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;