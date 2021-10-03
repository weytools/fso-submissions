import { checkPropTypes } from 'prop-types'
import React from 'react'

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
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
  return(
  <p>Number of exercises {props.totalNumber}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts={[part1, part2, part3]}/>
      <Total totalNumber={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}



export default App
