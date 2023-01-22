import React from 'react';
import './App.css';
import {TodoList} from "./TodoList";

function App() {
    let task = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "REACT", isDone: false},
        {id: 4, title: "NODE.JS", isDone: false}
    ]

    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={task}/>

        </div>
    );
}

export default App;
