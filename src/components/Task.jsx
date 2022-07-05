import React from 'react';
import './Task.css'
import { CgClose, CgInfo } from  'react-icons/cg'


const Task = ({task, handleTaskClick, handleTaskDeletion}) => {

        return(
            <div className="task-container" style={task.completed ? {borderLeft:'10px solid chartreuse', paddingLeft:'10px'} : {}} >
                <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                    { task.title}
                </div>
                <div className="buttons-container">
                    <button  className="see-task-details-button">
                        <CgInfo />
                    </button>
                    <button onClick={() => handleTaskDeletion(task.id)} className="remove-task-button">
                        <CgClose />
                    </button>
                    
                </div>
            </div>
        )


    //return <div className="task-container">{task.title}</div>
}
 
export default Task;