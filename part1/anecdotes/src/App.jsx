import { useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  const handleNext = () => {
    const updatedSelected = Math.floor(Math.random() * anecdotes.length);
    setSelected(updatedSelected);
  }

  const getTopVotedIndex = () => {
    return votes.indexOf(Math.max(...votes));
  }

  const mostVoted = getTopVotedIndex();
  
  return (
    <div>
      {anecdotes[selected]}
      <p><button onClick={handleNext}> Next Anecdote </button></p>
      <p><button onClick={handleVotes}> Vote</button></p>
      <p> Votes: {votes[selected]} </p>

      <div>
        <h3> Top Voted Anecdote </h3>
        <p> {anecdotes[mostVoted]} </p>
      </div>
    </div>
  )
}

export default App