import {useContext} from 'react';
import iconCheck from '../../assets/icon-check.svg';
import './todo-items.styles.css';
import {AppContext} from '../../contexts/app/app.context';


const TodoItemsComponent = () => {
	let {todoItems, toggleCompleteItem} = useContext(AppContext);
	todoItems = Object.values(todoItems);
	return (
		<div className='todo-items-component'>
			{
				todoItems.length ?
				Object.values(todoItems).map(({key, item, completed}) => (
					<div key={key} className='todo-item'>
						<p className='todo-item__text'>{item}</p>
						<div className={`todo-item__circle input-component__circle ${completed ? 'completed' : ''}`} onClick={() => {toggleCompleteItem(key)}}>
							{completed ? <img src={iconCheck} alt='icon-check' className='todo-item__icon-check' /> : null}
						</div>
					</div>
				)) :
				<div className='todo-item-empty'>Add Items To List </div>
			}
			<div className='todo-items-nav'>
				<span className='todo-items-nav__item'>{todoItems.length} items left</span>
				<span className='todo-items-nav__item mid'>All</span>
				<span className='todo-items-nav__item mid'>Active</span>
				<span className='todo-items-nav__item mid'>Completed</span>
				<span className='todo-items-nav__item'>Clear Completed</span>
			</div>
		</div>
	);
}

export default TodoItemsComponent;