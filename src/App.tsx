import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";

function App() {
    let task1 = [
        {id: 1, title:"CSS", isDone: true},
        {id: 2, title:"JS", isDone: true},
        {id: 3, title:"REACT", isDone: true}
    ]
    let task2 = [
        {id: 1, title:"Terminator", isDone: true},
        {id: 2, title:"XXX", isDone: false},
        {id: 3, title:"Jentelmens of fortune", isDone: true}
    ]
    return (
        <div className="App">
            <TodoList title={"What to learn"}tasks={task1}/>
            <TodoList title={"Movies"} tasks={task2}/>

        </div>
    );
}

export default App;
