import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const initVotes = new Array(7).fill(0)
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initVotes)

  const getRandomAnecdote = (currentIndex) => {
    // generate random index
    // do again if same as current
    let newIndex = currentIndex;
    while (newIndex == currentIndex) {
      newIndex = Math.floor(Math.random() * anecdotes.length)
    }
    // set state to new number
    setSelected(newIndex)
  }
  const voteForAnecdote = (currentIndex) => {
    const newVotes = [...votes]
    newVotes[currentIndex] += 1
    setVotes(newVotes)
  }

  const AnecdoteButton = (props) => <button onClick={props.handleClick}>{props.label}</button>

  return (
    <div>
      <h3>{anecdotes[selected]}</h3>
      <p>Has {votes[selected]} votes</p>
      <p>
        <AnecdoteButton handleClick={()=>getRandomAnecdote(selected)} label='Get another anecdote'/>
        <AnecdoteButton handleClick={()=>voteForAnecdote(selected)} label='Vote for this anecdote'/>
        </p>
    </div>
  )
}

export default App