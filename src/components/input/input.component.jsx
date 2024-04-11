import {useContext} from 'react';
import {AppContext} from '../../contexts/app/app.context';
import './input.styles.css';


const InputComponent = () => {
	const {addTodoItems} = useContext(AppContext);
	const handleSubmit = event => {
		event.preventDefault();
		addTodoItems(event.target.elements[0].value);
		event.target.elements[0].value = '';
	}
	return (
		<form onSubmit={handleSubmit} className='input-component'>
			<input type='text' placeholder='Create a new todo...' />
			<div className='input-component__circle' />
		</form>
	);
}

export default InputComponent;