import { useState } from "react"

export default function Team () {
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove = () => {
        setTeam(team - 1);
    }
    const teamStyle = {
        border: "2px dashed pink",
        borderRadius: "20px",
        backgroundColor: "tomato",
        textColor: "White",
        marginTop: "20px"
    }
    return(
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={handleAdd}>++</button>
            <button onClick={handleRemove}>--</button>
        </div>
    )
}