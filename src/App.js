import {createContext, useState, useEffect} from 'react';
import HeaderComponent from './components/header/header.component';
import InputComponent from './components/input/input.component';
import TodoItemsComponent from './components/todo-items/todo-items.component';
import AppContextProvider from './contexts/app/app.provider';
import './App.css';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <HeaderComponent />
        <InputComponent />
        <TodoItemsComponent />
      </div>
    </AppContextProvider>
  );
}

export default App;
