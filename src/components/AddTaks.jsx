import React, { useState } from 'react';
import "./AddTasks.css";
import Button from './Button';


const AddTak = ( {handleTaskAddition} ) => {

    const [inputData, setInputData] = useState("");
    
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }

    return ( 
        <div className="add-tasks-container">
            <input 
                onChange={handleInputChange} 
                value={inputData}
                className="add-tasks-input" 
                type="text" 
            />
            <div className="add-tasks-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>

            </div>
        
        </div>
        
     );
}
 
export default AddTak;