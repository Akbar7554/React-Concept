import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends () {
    const [friends, setFriends] =useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])
    return (
        <div style={{ border: "2px solid red" }}>
            <h2>Friends: {friends.length}</h2>
            {
                // eslint-disable-next-line react/jsx-key
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}