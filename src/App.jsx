import React, { useState } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    // const values = localStorage.setItem('', ) for local storage

    return (
        <div style={styles.container}>
            <h1>To-Do App</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={styles.input}
                />
                <button onClick={addTask} style={styles.addButton}>
                    Add Task
                </button>
            </div>
            <ul style={styles.taskList}>
                {tasks.map((t, index) => (
                    <li key={index} style={styles.taskItem}>
                        {t}
                        <button
                            onClick={() => deleteTask(index)}
                            style={styles.deleteButton}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    inputContainer: {
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
        width: '70%',
        marginRight: '10px',
    },
    addButton: {
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
    taskList: {
        listStyle: 'none',
        padding: 0,
    },
    taskItem: {
        margin: '10px 0',
        fontSize: '18px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: '10px',
        borderRadius: '5px',
    },
    deleteButton: {
        padding: '5px 10px',
        fontSize: '14px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    },
};

export default TodoApp;
