import React from 'react'
const Header = ({course}) => <h1>{course.name}</h1>
const Total = ({ sum }) => <p>Number of exercises {sum}</p>
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({parts}) => {
    return (
        <>
            {parts.map(part => 
                <Part key={part.id} part={part}/>
            )}
        </>
    )  
}


const Course = ({course}) => {
    return (
    <div>
        <Header course={course} />
        <Content parts={course.parts} />
    </div>
    )
}

export default Course