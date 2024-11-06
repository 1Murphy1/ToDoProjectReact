import React from 'react';

function TaskForm({ title, setTitle, about, setAbout, onAddTask }) {
    return (
        <div className="createTaskContainer-common">
            <div className="createTaskContainer-common-input">
                <input className="yellowOutline" placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input className="yellowOutline" placeholder="About..." value={about} onChange={(e) => setAbout(e.target.value)}/>
            </div>
            <button className="yellowOutline" onClick={onAddTask}>+</button>
        </div>
    );
}

export default TaskForm;
