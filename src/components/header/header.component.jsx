import {useContext} from 'react';
import iconMoon from '../../assets/icon-moon.svg';
import iconSun from '../../assets/icon-sun.svg';
import {ThemeContext} from '../../contexts/theme/theme.context';
import './header.styles.css';

const HeaderComponent = () => {
	const {theme, toggleTheme} = useContext(ThemeContext);
	return (
		<div className='header-component'>
			<h1 className='header-component__title'>TODO</h1>
			{
				theme ?
				<img src={iconSun} alt='icon-moon' onClick={() => {toggleTheme()}} /> :
				<img src={iconMoon} alt='icon-sun' onClick={() => {toggleTheme()}} />
			}
		</div>
	)
}

export default HeaderComponent;