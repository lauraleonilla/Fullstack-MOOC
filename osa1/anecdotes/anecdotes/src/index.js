import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))
  const [best, setBest] = useState(0)

  const showAnecdote = () => {
   const selected = Math.floor(Math.random() * anecdotes.length)
   setSelected(selected)
  }
  
  const voteHandler = () => {
    const votesCopy = [...votes]
    const mostVotes = Math.max(...votesCopy)
    const best = votesCopy.indexOf(mostVotes)
    votesCopy[selected] += 1
    setVote(votesCopy)
    setBest(best)
}

if(votes.every(e => e === 0)) {
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <Button onClick={showAnecdote} text='Next'/>
      <Button onClick={voteHandler} text='Vote' />
    </div>
  )
}
  return (
    <div>
        <h2>Anecdote of the day</h2>
        <p>{props.anecdotes[selected]}</p>
        <p>Has {votes[selected]} votes</p>
        <Button onClick={showAnecdote} text='Next'/>
        <Button onClick={voteHandler} text='Vote' />
        <h2>Anecdote with most votes</h2>
        <p>{props.anecdotes[best]}</p>
        <p>Has {Math.max(...votes)} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)