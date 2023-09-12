import { useEffect, useState } from "react"

export default function Users () {
    const [users, usersSet] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => usersSet(data))
    }, [])
    return (
        <div>
            <h3>Users : {users[1].name}</h3>
        </div>
    )
}