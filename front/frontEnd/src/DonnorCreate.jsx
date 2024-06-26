import axios from "axios";
import { useState } from "react";
import './DonnorForm.css';

function DonnorCreate() {
    const [name, setName] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            bloodGroup,
            date,
            notes,
        };
        
        const res = await axios.post('http://localhost:3000/donnors/create', formData);

        setName('');
        setBloodGroup('');
        setDate('');
        setNotes('');
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="bloodGroup"
                    placeholder="Blood Group"
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                />
                <input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="text"
                    name="notes"
                    placeholder="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default DonnorCreate;
