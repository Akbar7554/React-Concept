import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Counter from '../Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
function App() {
  function handleClick (){
    alert("Button Clicked");
  }
  const Add = (num) =>{
    alert (num + 5);
  }
  return (
    <>
      {/* <h1>Vite + React</h1> */}
      {/* <Todo hello="Today is RainyDay" isDone={true}></Todo>
      <Todo hello="Tomorrow is Wednesday" isDone={false}></Todo>
      <Todo hello="Yesterday is Saturday" isDone={true}></Todo> */}
      {/* <Device name="Acer" Price="50,000" color="Black"></Device>
      <Device name="Lenovo" Price="40,000" color="White"></Device>
      <Device name="HP" Price="60,000" color="Blue"></Device>
      <Device name="Mac" Price="100,000" color="Golden"></Device>
      <Person></Person>
      <Student></Student>
      <Developer></Developer> */}
      {/* <h3>React Core Concept 02</h3>
      <button onClick={handleClick}>CLick Me</button>
      <button onClick={() => Add(5)}>CLick Me</button> */}
      {/* <Counter></Counter>
      <Team></Team>
      <Users></Users> */}
      <Friends></Friends>
    </>
  )
}
function Person(){
  const age = 30;
  const live = "Chittagong";
  const person = {name: "Akbar"};
  return <h3>I am {person.name} : {age} Lives in : {live}</h3>
}
function Student (){
  return (
    <div className='student'>
      <h3>Today is the day. </h3>
      <p>Today is not a day or tomorrow</p>
      <p>That is the day</p>
    </div>
  )
}
function Developer (){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px dotted pink',
    borderRadius: '20px',
  }
  return (
    <div style={developerStyle}>
      <h2>আমার নাম আকবর হোসেন</h2>
      <h3>আমি বাংলাই কথা কই</h3>
      <h4>বাংলা আমার মাতৃভাষা</h4>
    </div>
  )
}
function Device (properties){
  return <h2>
    Device Name : {properties.name}
    Device Price : {properties.Price}
    Device Color : {properties.color}
  
  </h2>
}



export default App
