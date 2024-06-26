import axios from "axios";
import { useEffect, useState } from "react";
import './DonnorsDisplay.css';
import { Link } from "react-router-dom";

function DonnorDisplay() {
    const [donnors, setDonnors] = useState([]);
   

    const getDonnors = async () => {
        const res = await axios.get('http://localhost:3000/donnors');
        setDonnors(res.data);
    };

    const deleteDonnor = async (id)=>{
        const res = await axios.delete(`http://localhost:3000/donnors/${id}/delete`);

        const data = await axios.get('http://localhost:3000/donnors');
        setDonnors(data.data);
       
    }

    useEffect(() => {
        getDonnors();
    }, []);

   

    return (
        <>
            <div>
                {donnors.map((donnor, index) => (
                    <div key={index} className="dataItem">
                        <h3>{donnor.name}</h3>
                        <h3>{donnor.bloodGroup}</h3>
                        <h3>{donnor.date}</h3>
                        <h3>{donnor.notes}</h3>
                        <button onClick={() => deleteDonnor(donnor._id)}>Delete</button>
                        <button><Link to={`/${donnor._id}/update`}>Update</Link></button>

                    </div>
                ))}
            </div>
        </>
    )
};

export default DonnorDisplay;