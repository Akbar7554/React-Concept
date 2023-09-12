export default function Friend ({friend}) {
    const {name, email} = friend;
    return (
        <div style={{ border: "2px solid green", padding: "10px" }}>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
        </div>
    )
}