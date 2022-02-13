import { checkPropTypes } from 'prop-types'
import React from 'react'

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

  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}



export default App