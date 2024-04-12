import {useContext} from 'react';
import iconCheck from '../../assets/icon-check.svg';
import iconCross from '../../assets/icon-cross.svg'
import './todo-items.styles.css';
import {AppContext} from '../../contexts/app/app.context';


const TodoItemsComponent = () => {
	let {todoItems, toggleCompleteItem, filter, setFilter, setTodoItems, removeTodoItem} = useContext(AppContext);
	todoItems = Object.values(todoItems);
	return (
		<div className='todo-items-component'>
			{
				todoItems.length ?
				Object.values(todoItems).map(({key, item, completed}) => (
					<div key={key} className='todo-item'>
						<p className={`todo-item__text ${completed ? 'completed' : ''}`}>{item}</p>
						<img onClick={() => removeTodoItem(key)} src={iconCross} alt='icon-cross' className='todo-item__icon-cross' />
						<div className={`todo-item__circle input-component__circle ${completed ? 'completed' : ''}`} onClick={() => {toggleCompleteItem(key)}}>
							{completed ? <img src={iconCheck} alt='icon-check' className='todo-item__icon-check' /> : null}
						</div>
					</div>
				)) :
				<div className='todo-item-empty'>Add Items To List </div>
			}
			<div className='todo-items-nav'>
				<span className='todo-items-nav__item'>{todoItems.length} items left</span>
				<span
					className={`todo-items-nav__item mid ${filter === 'ALL' ? 'active' : ''}`}
					onClick={() => {setFilter('ALL')}}>
					All
				</span>
				<span
					className={`todo-items-nav__item mid ${filter === 'ACTIVE' ? 'active' : ''}`}
					onClick={() => {setFilter('ACTIVE')}}>
					Active
				</span>
				<span
					className={`todo-items-nav__item mid ${filter === 'COMPLETED' ? 'active' : ''}`}
					onClick={() => {setFilter('COMPLETED')}}>
					Completed
				</span>
				<span
					className='todo-items-nav__item'
					onClick={() => {setTodoItems({})}}>
					Clear Completed
				</span>
			</div>
		</div>
	);
}

export default TodoItemsComponent;