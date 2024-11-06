import React, { useState } from 'react';

function EditModal({ task, onSave, onClose }) {
    const [newTitle, setNewTitle] = useState(task.title);
    const [newAbout, setNewAbout] = useState(task.about);

    return (
        <div className="editContainer">
            <div className="editContainer-content yellowOutline">
                <div className="editContainer-content-action">
                    <textarea className="editTitle yellowOutline" rows="2" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                    <textarea className="editAbout yellowOutline" rows="4" value={newAbout} onChange={(e) => setNewAbout(e.target.value)}/>
                    <div className="editButtons">
                        <button className="cancelEdit yellowOutline" onClick={onClose}>Cancel</button>
                        <button className="saveEdit yellowOutline" onClick={() => onSave(newTitle, newAbout)}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditModal;


