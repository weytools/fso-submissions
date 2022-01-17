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

  const StatsLine = (props) => <p>{props.label}: {props.data}</p>

  const Statistics = (props) => {

    const [good, neutral, bad] = props.data

    if (good + neutral + bad == 0){
      return (
        <div>
          <h2>Statistics</h2>
          <h4>No feedback given</h4>
        </div>
      )
    }


    return (
      <div>
        <h2>Statistics</h2>
          <StatsLine label={"Good"} data={good} />
          <StatsLine label={"Neutral"} data={neutral} />
          <StatsLine label={"Bad"} data={bad} />
          <StatsLine label={"All"} data={good + neutral + bad} />
          <StatsLine label={"Average"} data={(good - bad)/(good+bad)} />
          <StatsLine label={"Positive"} data={(good/(good + neutral + bad))*100 + '%'} />
      </div>
    )
  }
  return (
    <div>
      <h2>Give Feedback</h2>
      <FeedbackButton handleClick={()=>newFeedback('good')} label={'Good'} />
      <FeedbackButton handleClick={()=>newFeedback('neutral')} label={'Neutral'} />
      <FeedbackButton handleClick={()=>newFeedback('bad')} label={'Bad'} />
      <hr/>
      <Statistics data={[good, neutral, bad]}/>
    </div>
  )
}

export default App