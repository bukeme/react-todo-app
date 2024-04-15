import {useState} from 'react';
import {AppContext} from './app.context';


const AppContextProvider = ({children}) => {
	let fetchedTodoItems = JSON.parse(localStorage.getItem('todoItems'));
	const [todoItems, setTodoItems] = useState(fetchedTodoItems || {});
	const [filter, setFilter] = useState('ALL');

	const completedTasks = (completed=false) => {
		const newTodoItems = {};
		for (const key in todoItems) {
			if (todoItems[key].completed === completed) {
				newTodoItems[key] = todoItems[key];
			}
		}
		return newTodoItems;
	}

	const filteredTodoItems = () => {
		if (filter === 'ALL') {
			return todoItems;
		} else if (filter === 'ACTIVE') {
			return completedTasks();
		} else {
			return completedTasks(true);
		}
	}

	const addTodoItems = (item) => {
		if (!item) return;
	    const key = Object.keys(todoItems).length + 1;
	    let newItem = {...todoItems};
	    newItem[key] = {
	        key: key,
	        item: item,
	        completed: false
	    };
	    setTodoItems(newItem);
	    localStorage.setItem('todoItems', JSON.stringify(newItem));
	}

	const removeTodoItem = (key) => {
		let newItem = {...todoItems};
		delete newItem[key];
		setTodoItems(newItem);
		localStorage.setItem('todoItems', JSON.stringify(newItem));
	}

	const toggleCompleteItem = (key) => {
		let newItem = {...todoItems};
		newItem[key].completed = !newItem[key].completed;
		setTodoItems(newItem);
		localStorage.setItem('todoItems', JSON.stringify(newItem));
	}

	return (
		<AppContext.Provider value={{todoItems: filteredTodoItems(todoItems), addTodoItems, toggleCompleteItem, filter, setFilter, setTodoItems, removeTodoItem}}>
			{children}
		</AppContext.Provider>
	)
}

export default AppContextProvider;