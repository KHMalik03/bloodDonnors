import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './DonnorForm.css';

function DonnorUpdate() {
    const [name, setName] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const getDonnorData = async () => {

            const res = await axios.get(`http://localhost:3000/donnors/${id}`);
            const { name, bloodGroup, date, notes } = res.data;
            setName(name);
            setBloodGroup(bloodGroup);
            setDate(date);
            setNotes(notes);

        };

        getDonnorData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name,
            bloodGroup,
            date,
            notes,
        };


        await axios.put(`http://localhost:3000/donnors/${id}/update`, formData);
        alert("Donor information updated successfully!");


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
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default DonnorUpdate;
