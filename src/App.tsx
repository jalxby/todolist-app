import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";


function App() {
    let initTasks = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "REACT", isDone: false},
        {id: 4, title: "NODE.JS", isDone: false}
    ]

    const [tasks, setTasks] = useState(initTasks);



    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)

        setTasks(filteredTasks)
        console.log(filteredTasks)
        debugger
    }

    return (
        <div className="App">
            <TodoList title={"What to learn"}
                      tasks={initTasks}
                      removeTask={removeTask}/>

        </div>
    );
}

export default App;
