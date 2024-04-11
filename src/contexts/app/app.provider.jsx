import {useState} from 'react';
import {AppContext} from './app.context';


const AppContextProvider = ({children}) => {
	const [todoItems, setTodoItems] = useState({});
	const [filter, setFilter] = useState('ALL');
	const addTodoItems = (item) => {
	    const key = Object.keys(todoItems).length + 1;
	    let newItem = {...todoItems};
	    newItem[key] = {
	        key: key,
	        item: item,
	        completed: false
	    };
	    setTodoItems(newItem);
	    console.log(todoItems)
	}
	const toggleCompleteItem = (key) => {
		let newItem = {...todoItems};
		newItem[key].completed = !newItem[key].completed;
		setTodoItems(newItem);
	}

	return (
		<AppContext.Provider value={{todoItems, addTodoItems, toggleCompleteItem}}>
			{children}
		</AppContext.Provider>
	)
}

export default AppContextProvider;