import React, { useState } from "react";
import './app.css'
import AddTaks from "./components/AddTaks";
import Tasks from './components/tasks'
import {v4 as uuidv4 } from 'uuid'
import Header from "./components/header";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
    title: 'Estudar Programação',
    completed: false
    },
    {
      id: '2',
    title: 'Estudar Java',
    completed: true
    },
    {
      id: '3',
    title: 'Exercitar',
    completed: false
    },
    {
      id: '4',
    title: 'Estudar React',
    completed: true
    }
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) return {...task, completed: !task.completed }
      return task;      
    })

    setTasks(newTasks)
  }


  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTask);

  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }
 

  return (
    <>
      <div className="container">
        <Header />
        <AddTaks handleTaskAddition = { handleTaskAddition } />
              <Tasks tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletion={handleTaskDeletion} 
              />
      </div>
    </>
  );
};


/* return (
  <Router>
    <div className="container">
      <Header />
      <AddTaks handleTaskAddition = { handleTaskAddition } />
            <Tasks tasks={tasks} 
              handleTaskClick={handleTaskClick} 
              handleTaskDeletion={handleTaskDeletion} 
            />
    </div>
  </Router>
); */
  

export default App;