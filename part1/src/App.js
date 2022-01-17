import { checkPropTypes } from 'prop-types'
import React, {Component, useState} from 'react'

const Header = (props) => {
  return(
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  console.log(props.parts)
  return(
    <div>
      {props.parts.map( p => <Part partName={p.name} partExercises={p.exercises}/>)}
    </div>
  )
}
const Part = (props) =>
(
  <p>{props.partName} {props.partExercises}</p>
)
const Total = (props) => {
  const totalNumber = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return(
  <p>Number of exercises {totalNumber}</p>
  )
}

const App = () => {
  const course = 
  {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const [counter, setCounter] = useState(0)

  const clickCounter = () => setCounter(counter+20)
  const resetCounter = () => setCounter(0)

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      <hr/>
      <Learning counter={counter} letters='wow'/>
      <CounterButton clicker={clickCounter} text={"Add 20"}/>
      <CounterButton clicker={resetCounter} text={"Reset"}/>
    </div>
  )
}



const Learning = (props) => {

  return (
    <div>
      <p>{props.counter}</p>
      <p>{props.letters}</p>
    </div>
  )
}

const CounterButton = (props) => {
  const {clicker, text} = props
  return (
    <button onClick={clicker}>{text}</button>
  )

}




export default App
