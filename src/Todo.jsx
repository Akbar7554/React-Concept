// export default function Todo({hello, isDone}) {
//     if(isDone === true){
//         return <li>{hello} You are right</li>
//     }
//     else{
//         return <li>{hello} Wrong Answer</li>
//     }
// }

export default function Todo({hello, isDone}) {
    return (
        <li>{hello} : {isDone ? "Right" : "False"}</li>
    )
}


