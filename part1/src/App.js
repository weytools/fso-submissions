import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const newFeedback = (feedback) =>
  {
    switch (feedback) {
      case 'good':
        setGood(good+1)        
        break;
      case 'neutral':
        setNeutral(neutral+1)        
        break;
      case 'bad':
        setBad(bad+1)        
        break;
      default:
        break;
    }
  }
  const FeedbackButton = (props) =>{
    return(
      <button onClick={props.handleClick}>{props.label}</button>
    )
  }
  return (
    <div>
      <h2>Give Feedback</h2>
      <FeedbackButton handleClick={()=>newFeedback('good')} label={'Good'} />
      <FeedbackButton handleClick={()=>newFeedback('neutral')} label={'Neutral'} />
      <FeedbackButton handleClick={()=>newFeedback('bad')} label={'Bad'} />
      <hr/>
      <h2>Statistics</h2>
      <h4>Good: {good} | Neutral: {neutral} | Bad: {bad}</h4>
      <h5>All: {good + neutral + bad} | Average: {(good - bad)/(good+bad)} | Positive: {(good/(good + neutral + bad))*100}%</h5>
    </div>
  )
}

export default App