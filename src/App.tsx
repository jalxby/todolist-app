import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

export type FilterValuesType = 'all' | 'completed' | 'active';
function App() {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "REACT", isDone: false},
        {id: 4, title: "NODE.JS", isDone: false}
    ]);
    const [filter, setFilter] = useState<FilterValuesType>('all')

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }

    function changeFilter(value: FilterValuesType){
        setFilter(value);
    }

    let taskForTodoList = tasks;

    if (filter === 'completed') {
        taskForTodoList = tasks.filter(t => t.isDone);
    }

    if (filter === 'active') {
        taskForTodoList = tasks.filter(t => !t.isDone);
    }

    return (
        <div className="App">
            <TodoList title={"What to learn"}
                      tasks={taskForTodoList}
                      removeTask={removeTask}/>
        </div>
    );
}

export default App;
