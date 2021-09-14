import { checkPropTypes } from 'prop-types'
import React from 'react'

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part partName={props.part1} partExercises={props.exercises1}/>
      <Part partName={props.part2} partExercises={props.exercises2}/>
      <Part partName={props.part3} partExercises={props.exercises3}/>
    </div>
  )
}
const Part = (props) =>
(
  <p>{props.partName} {props.partExercises}</p>
)
const Total = (props) => {
  return(
  <p><p>Number of exercises {props.totalNumber}</p></p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises1={exercises2} exercises1={exercises3}/>
      <Total totalNumber={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
